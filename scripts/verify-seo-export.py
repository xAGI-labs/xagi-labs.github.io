from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse,urljoin
import xml.etree.ElementTree as ET,json,sys,re
import argparse
parser=argparse.ArgumentParser(description="Validate canonical sitemap targets and preserve legacy exported content.")
parser.add_argument("--baseline", type=Path, help="Previous exported out directory for route/content regression checks")
args=parser.parse_args()
root=Path(__file__).resolve().parents[1];out=root/'out';baseline=args.baseline
class Page(HTMLParser):
 def __init__(self,s):
  super().__init__();self.canon=[];self.noindex=False;self.refresh=False;self.body=False;self.skip=0;self.text=[];self.links=[];self.ld=[];self.inld=False;self.feed(s)
 def handle_starttag(self,t,a):
  a=dict(a)
  if t=='body':self.body=True
  if t in ('script','style'):self.skip+=1
  if t=='script' and a.get('type')=='application/ld+json':self.inld=True
  if t=='link' and a.get('rel')=='canonical':self.canon.append(a.get('href'))
  if t=='meta' and a.get('name')=='robots' and 'noindex' in a.get('content',''):self.noindex=True
  if t=='meta' and a.get('http-equiv','').lower()=='refresh':self.refresh=True
  if t=='a' and a.get('href'):self.links.append(a['href'])
 def handle_endtag(self,t):
  if t=='body':self.body=False
  if t in ('script','style'):self.skip=max(0,self.skip-1)
  if t=='script':self.inld=False
 def handle_data(self,d):
  if self.inld:self.ld.append(d)
  if self.body and not self.skip:self.text.append(d)
 def visible(self):return re.sub(r'\s+',' ',' '.join(self.text)).replace('https://xagi-labs.github.io','https://xagi.in').strip()
assert (out/'sitemap.xml').exists(),'Build output unavailable'
urls=[e.text for e in ET.parse(out/'sitemap.xml').iter() if e.tag.endswith('}loc')]
errors=[];parsed={};canonical_mismatches=[]
for f in out.rglob('*.html'):
 key=f.relative_to(out).as_posix();parsed[key]=Page(f.read_text())
for u in urls:
 path=urlparse(u).path
 if urlparse(u).netloc!='xagi.in' or not path.endswith('/'):errors.append(('noncanonical sitemap URL',u))
 file=out/path.lstrip('/')/'index.html'
 if not file.exists():errors.append(('missing sitemap target',u));continue
 page=parsed[file.relative_to(out).as_posix()]
 if page.noindex or page.refresh:errors.append(('nonindexable sitemap target',u))
 if page.canon!=[u]:canonical_mismatches.append({'url':u,'canonical':page.canon})
for key,page in parsed.items():
 for c in page.canon:
  if 'github.io' in c:errors.append(('GitHub canonical',key))
 for ld in page.ld:
  try:json.loads(ld)
  except Exception as e:errors.append(('invalid JSON-LD',key,str(e)))
legacy_missing=[];legacy_changed=[];checked=0
for f in (baseline.rglob('*.html') if baseline else []):
 key=f.relative_to(baseline).as_posix()
 if not (out/key).exists():legacy_missing.append(key);continue
 if key in ['index.html','404.html','404/index.html']:continue
 before=Page(f.read_text());after=parsed[key];checked+=1
 before_text,after_text=before.visible(),after.visible()
 # The unchanged snake game randomizes food position during prerendering.
 if key=="chain-claw-game/index.html":
  for marker in ["🐟", "🦀"]:
   before_text=before_text.replace(marker, "");after_text=after_text.replace(marker, "")
  before_text=" ".join(before_text.split());after_text=" ".join(after_text.split())
 if before_text!=after_text:legacy_changed.append(key)
# Keep explicit search/retrieval permissions and the no-training policy consistent.
from urllib.robotparser import RobotFileParser
rp=RobotFileParser();rp.parse((out/'robots.txt').read_text().splitlines())
for bot in ['Googlebot','Bingbot','OAI-SearchBot','ChatGPT-User','Claude-SearchBot','Claude-User','PerplexityBot']:
 if not rp.can_fetch(bot,'https://xagi.in/speech-training-data/') or not rp.can_fetch(bot,'https://xagi.in/_next/static/example.js'):errors.append(('public crawl access',bot))
for bot in ['GPTBot','ClaudeBot','CCBot']:
 if rp.can_fetch(bot,'https://xagi.in/'):errors.append(('training policy',bot))
for key in parsed:
 html=(out/key).read_text()
 if '<!--email_off-->' not in html or '<!--/email_off-->' not in html:errors.append(('missing Cloudflare React protection',key))
for file in ['data/speech-datasheet-example.md','data/evaluation-rubric-example.md','data/haryanvi-research-methodology.md']:
 if not (out/file).is_file():errors.append(('missing evidence download',file))
result={'sitemap_count':len(urls),'sitemap_unique':len(set(urls)),'canonical_mismatches':canonical_mismatches,'errors':errors,'legacy_routes_checked':checked,'legacy_missing':legacy_missing,'legacy_visible_content_changed':legacy_changed}
print(json.dumps(result,indent=2));Path('/tmp/xagi-export-verification.json').write_text(json.dumps(result,indent=2))
if errors or canonical_mismatches or legacy_missing or legacy_changed:sys.exit(1)
