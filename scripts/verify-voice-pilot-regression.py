from pathlib import Path
from html.parser import HTMLParser
import argparse,json,re,xml.etree.ElementTree as ET
parser=argparse.ArgumentParser();parser.add_argument("--baseline",required=True,type=Path);args=parser.parse_args()
out=Path("out")
class Text(HTMLParser):
 def __init__(self,s):
  super().__init__();self.body=False;self.skip=0;self.parts=[];self.feed(s)
 def handle_starttag(self,t,a):
  if t=="body":self.body=True
  if t in ("script","style"):self.skip+=1
 def handle_endtag(self,t):
  if t=="body":self.body=False
  if t in ("script","style"):self.skip=max(0,self.skip-1)
 def handle_data(self,d):
  if self.body and not self.skip:self.parts.append(d)
 def text(self):return " ".join(" ".join(self.parts).split())
def normalized(path):
 s=path.read_text()
 # Explicit date formatting changes only presentation; datetime/schema remain verified separately.
 s=re.sub(r"<time\b[^>]*>.*?</time>","<time></time>",s,flags=re.S)
 text=Text(s).text()
 # The existing Opportunities prebuild refresh changes only its source-check timestamp.
 # Node 22 (deployed CI) and Node 24 ICU differ only in redundant compact-currency zero decimals.
 if path.parent.name=="siliconhalli":text=re.sub(r"(₹[\d,]+)\.0(?=(?:L|Cr)?(?:\s|$))", r"\1", text)
 if path.parent.name=="opportunities":text=re.sub(r"Source checked \d{1,2} [A-Za-z]{3} \d{4}, \d{2}:\d{2} IST", "Source checked <timestamp> IST", text)
 if path.parent.name=="chain-claw-game":text=" ".join(text.replace("🐟", "").replace("🦀", "").split())
 return text
# Only the homepage and existing data-program pages receive the intended CTA/tool/footer changes.
allowed={'expert-evaluation-data/index.html', 'data-partnerships/index.html', 'data-resources/index.html', 'speech-training-data/index.html', 'dataset-readiness-checklist/index.html', 'about/index.html', 'dataset-brief/index.html', 'experts/index.html', 'multimodal-training-data/index.html', 'index.html'}
missing=[];unexpected=[];intended=[];checked=0
for old in args.baseline.rglob("*.html"):
 key=old.relative_to(args.baseline).as_posix();new=out/key;checked+=1
 if not new.exists():missing.append(key);continue
 if normalized(old)!=normalized(new):
  (intended if key in allowed else unexpected).append(key)
def urls(root):return {e.text for e in ET.parse(root/"sitemap.xml").iter() if e.tag.endswith("}loc")}
removed_sitemap=sorted(urls(args.baseline)-urls(out));new_sitemap=sorted(urls(out)-urls(args.baseline))
result={"baseline_html_checked":checked,"missing_routes":missing,"unexpected_visible_changes":unexpected,"intended_visible_changes":sorted(intended),"removed_sitemap_urls":removed_sitemap,"added_sitemap_urls":new_sitemap}
print(json.dumps(result,indent=2))
assert not missing and not unexpected and not removed_sitemap,result
