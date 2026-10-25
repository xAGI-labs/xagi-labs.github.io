import fs from 'node:fs/promises';
import { Workbook, SpreadsheetFile } from '@oai/artifact-tool';
const root='/Users/saurav/Desktop/github/xagi-labs.github.io';
const out=root+'/outputs/xagi-30-day-20261025';
const docs=root+'/docs/xagi-execution-20261025';
await fs.mkdir(out,{recursive:true}); await fs.mkdir(docs,{recursive:true});
const days=[
['Choose the offer','Review existing xAGI inventory notes and buyer replies; list 3 candidate offers with evidence and gaps.','Compare buyer use case, reachable owners, sample access and delivery effort; recommend one offer.','Approve one primary offer and the minimum viable paid pilot.','One offer brief; no unverified inventory claims.'],
['Recover the existing pipeline','Search connected email and accessible LinkedIn lists for prior xAGI buyer and supplier conversations.','Deduplicate by company/contact and requirement; import only evidenced stages with source links.','Identify relationships needing a personal introduction.','Existing contacts recovered with dated next actions.'],
['Qualify initial suppliers','Research 5 relevant rights holders using official sites and existing introductions.','Prepare 3 supplier messages asking about sample access, volume, rights, cost and lead time.','Authorize selected messages; Codex sends only within that scope and verifies Sent.','5 supplier candidates; 3 reviewable drafts.'],
['Create the inventory card','Inspect any authorized sample and supplied metadata; record actual versus reported volume and formats.','Build one inventory card and list missing rights, provenance, quality and price evidence.','Resolve ownership questions with the supplier.','One evidence-linked inventory card, even if readiness is pending.'],
['Build the first buyer batch','Research 10 companies whose products or research fit the selected dataset use case.','Identify one data acquisition, licensing, evaluation or research contact per company; cite fit evidence.','Select the first 5 recipients.','10 researched buyer records; 5 prioritized.'],
['Prepare the first outreach','Draft 5 individualized inventory-led buyer emails and 3 supplier follow-ups.','Check every volume/rights claim against the inventory card; send only authorized drafts and verify.','Authorize recipient/message batch and any attachment scope.','5 buyer drafts; actual sends recorded separately.'],
['Review week 1','Filter replies, overdue actions and missing inventory evidence; summarize the main bottleneck.','Check enquiry notifications using a labeled test only if needed; exclude tests from leads.','Continue, narrow or replace the offer based on evidence.','Week 1 review; next 7 days focused on one offer.'],
['Launch the second buyer batch','Research 5 additional buyers using the strongest fit pattern from week 1.','Prepare 5 buyer drafts; follow up on due threads with a useful detail or requirements question.','Authorize sends; handle relationship-sensitive replies.','5 new drafts and all due follow-ups prepared.'],
['Prepare discovery calls','Extract buyer context from replies and official company pages; prepare call briefs.','Draft a 6-field requirements form and proposed meeting times; use calendar availability before booking.','Lead calls; confirm use case, spec, volume, acceptance, budget and buying owner/timeline.','Requirements captured or explicit gaps and next dates.'],
['Close supplier evidence gaps','Review supplier responses against the inventory card; prepare precise missing-evidence questions.','Check sample-sharing permission, licensing authority, price validity and delivery capacity.','Resolve commercial and rights questions.','At least one supplier advances toward verified readiness.'],
['Prepare an evaluation sample','Match the strongest buyer requirement to supplier inventory using linked IDs.','Prepare an authorized sample manifest and evaluation checklist; keep raw data in restricted storage.','Approve sample scope, recipient and acceptance criteria.','One sample package ready, or a specific unresolved prerequisite.'],
['Deliver the authorized sample','Prepare delivery email with scope, formats, acceptance questions and review date.','After authorization, share via restricted access; verify access and log delivery evidence.','Confirm evaluation date and reviewer.','Verified sample delivery, or a ready-to-send package.'],
['Build the next buyer batch','Research 5 buyers with the same use case; draft messages using confirmed inventory specifics.','Prepare up to 5 due follow-ups; pause bounced, declined or opted-out contacts.','Authorize sends and handle live conversations.','5 new drafts; pipeline has no undated active next steps.'],
['Review week 2','Count sent messages, relevant replies, requirements and samples from actual records.','Inspect where prospects stall; recommend one change to targeting, inventory or sample scope.','Approve one change; avoid changing every variable.','Week 2 conversion review with one experiment.'],
['Collect sample feedback','Review evaluation threads; draft specific questions about quality, coverage and acceptance.','Update buyer criteria and supplier remediation tasks from actual feedback.','Discuss objections and confirm a decision date.','Written feedback or a dated request for it.'],
['Prepare the first proposal','Draft scope, volume, delivery schedule, acceptance process, permitted uses and exclusions.','List supplier, processing, QA and delivery costs in one currency; show unknowns explicitly.','Choose price, margin requirement and payment milestones.','One reviewable proposal; no invented pricing inputs.'],
['Progress the proposal','Prepare a concise proposal email and answers to documented objections.','After authorization, send and verify; record decision owner, procurement steps and next date.','Discuss price and terms with the buyer.','Proposal delivered or held with a named blocker.'],
['Verify fallback supply','Research 3 alternative suppliers against the same buyer specification.','Prepare 3 supplier drafts and compare verified availability, quality, rights and costs.','Choose whether fallback qualification is worth pursuing.','3 fallback candidates; no assumed substitutions.'],
['Expand the proven buyer segment','Research 5 more buyers resembling the best qualified opportunity.','Prepare 5 individualized drafts and all due follow-ups; log exact status evidence.','Authorize messages and hold discovery calls.','5 new drafts tied to proven requirements.'],
['Assemble delivery operations','Prepare a delivery manifest, file checksums, QA checklist and access instructions.','Draft acceptance sign-off, issue reporting and invoice checklist using agreed scope only.','Approve operational commitments and payment terms.','Delivery checklist ready for a real order.'],
['Review week 3','Review sample outcomes, proposal age, supplier dependencies and missing decision dates.','Prepare a close plan for each serious opportunity and archive explicit poor fits.','Select the opportunity most likely to reach a paid pilot.','Week 3 review; one primary closing opportunity.'],
['Resolve the closing blocker','Read the priority opportunity thread and identify its exact blocker.','Prepare the required clarification, revised sample or scoped proposal revision.','Negotiate or resolve the decision directly.','One blocker removed or a dated resolution plan.'],
['Complete procurement preparation','Collect requested business/vendor documents already available in approved storage.','Prepare draft order and invoice details; check they match agreed scope and entity information.','Approve contract, bank details and commitments before external use.','Procurement package prepared; missing items listed.'],
['Run a delivery rehearsal','Check manifest completeness and a small authorized sample against agreed acceptance tests.','Run bulk QA or processing on existing AWS capacity only after preflight; summarize results.','Resolve exceptions with supplier and buyer.','Rehearsal report with remaining issues.'],
['Ask for a buying decision','Prepare a concise decision follow-up with agreed scope, open items and proposed start date.','After authorization, send and log evidence; update Won only when agreement evidence exists.','Confirm order, decision delay or reason for loss.','Explicit decision or next decision date.'],
['Deliver if ordered','For an agreed order, prepare restricted delivery and verify recipient access and manifest.','If no order, work the highest-value sample/proposal blocker instead; record the actual branch.','Authorize delivery and confirm buyer receipt.','Verified delivery for orders; otherwise an advanced opportunity.'],
['Reconcile acceptance and payment','Inspect buyer acceptance and invoice/payment evidence available in approved systems.','Record amount, currency and receipt link only when verified; reconcile delivery issues.','Resolve acceptance disputes and payment follow-up.','Agreement, delivery, acceptance and cash tracked separately.'],
['Request repeat demand','Prepare a follow-up asking about next volume, languages, domains and evaluation needs.','Draft a factual internal case summary; prepare public wording only if buyer permission exists.','Authorize follow-up and request any testimonial/case-study permission.','Next purchase requirement or a clear follow-up date.'],
['Review unit economics','Reconcile collected revenue against actual supplier, processing, QA and delivery costs.','Separate estimates from actuals; compare source quality and buyer conversion without mixing currencies.','Choose which offer and supplier relationships to deepen.','One economics review and next-month priorities.'],
['Decide the next 30 days','Summarize actual funnel stages, verified inventory, accepted deliveries and collected cash.','Prepare next-month plan from the measured bottleneck; retain all open next actions.','Continue, narrow or change the offer; approve next-month capacity.','30-day review and a specific next cycle.']
];
const intro=`# xAGI 30-day execution plan

Assumed start: Monday, 26 October 2026. End: Tuesday, 24 November 2026. All scheduling uses Asia/Kolkata. Change workbook Plan!B3 to move the calendar. This is a plan, not a scheduled automation or a record of completed outreach.

## Goal and operating rules

Aim for one paid dataset pilot or transaction with buyer acceptance and a next purchase opportunity. This is a goal, not a forecast. Run one primary offer for the cycle. Select it from verifiable supply and buyer demand on Day 1; speech/evaluation data is a candidate, not confirmed inventory.

Codex can research official company pages and accessible LinkedIn/Sales Navigator profiles, read connected xAGI email threads, prepare drafts, inspect authorized samples, maintain records and prepare proposals. Use available connectors first and browser UI when needed. If an account is disconnected, record the blocker and continue independent work. Use existing Sales Navigator access and avoid unnecessary paid credits.

Preparing this plan does not authorize external sends. Before a message batch, Saurav authorizes recipients, channel, message scope and any attachment. Reuse that authorization within its scope. Codex then sends, verifies Sent/delivery evidence and logs the result. Calendar invitations, public posts, payments and contractual commitments require the corresponding authorization. Saurav owns discovery calls, relationship decisions, price and commercial commitments. Codex prepares and records them.

Keep real buyer/supplier contacts, emails, private samples, contracts and payment evidence in approved restricted storage. The GitHub backup contains only this generic plan, blank templates and builder. Do not put populated trackers or datasets in the website repository or public assets.

## Daily checklist

Normal execution days: approximately 4–5 hours of founder time; calls can replace research blocks. Days 7, 14, 21 and 28 are lighter review days. Shift external sends to recipient business days and working hours.

- [ ] Codex: read new xAGI buyer/supplier replies and inbox enquiries; classify real leads versus tests/spam.
- [ ] Codex: filter tracker for due/overdue actions; prepare replies and flag decisions needed from Saurav.
- [ ] Codex: complete today's focused tasks below; attach evidence links to updated records.
- [ ] Codex: on prospecting days, research and draft 5 relevant buyer messages and up to 3 supplier messages when supply is the bottleneck. Prioritize existing opportunities over these caps.
- [ ] Saurav: lead scheduled calls and decide price, offer scope, rights questions and message authorization.
- [ ] Codex: execute authorized messages/shares, verify results, record last touch and set next date. Drafted is not Sent; Sent is not Replied.
- [ ] Codex: update daily actual counts, statuses, blocker and next action. Leave unknown actuals blank; enter 0 only after checking.
- [ ] Codex: report the day's commercial progress, unresolved blockers and tomorrow's first action.

Suggested follow-up cadence: first useful follow-up 3–5 business days after outreach, second 5–7 business days later, then pause unless there is a specific reason to continue. Stop on opt-out or explicit refusal. Follow agreed buyer dates instead when available.

## Weekly checkpoints

- Day 7: one primary offer, one evidence-linked inventory card, first targeted buyer batch prepared. If supply is unverified, keep it marked pending and use honest requirements discovery.
- Day 14: aim for 3 qualified buyer requirements cumulatively and one authorized sample evaluation. If buyers reply but supply fails, prioritize sourcing to their specs.
- Day 21: aim for a concrete paid-pilot proposal with costs, acceptance criteria and decision date. If samples fail, resolve quality before expanding outreach.
- Day 30: assess paid orders, accepted delivery, collected cash and repeat requirements separately. If no sale, report the exact stage and next experiment rather than calling interest revenue.

Activity starting targets once inventory is credible: 25–40 researched buyer drafts and 15–25 useful follow-ups per full execution week; sends depend on authorization. Aim for 3–5 buyer and 3–5 supplier conversations, subject to replies. These are adjustable operating goals, not projected outcomes.

## Daily focus

`;
let md=intro;
days.forEach((d,i)=>{ const dt=new Date(Date.UTC(2026,9,26+i)); md+=`### Day ${i+1}: ${dt.toISOString().slice(0,10)} — ${d[0]}\n\n- [ ] Codex: ${d[1]}\n- [ ] Codex: ${d[2]}\n- [ ] Saurav: ${d[3]}\n- [ ] Completion evidence: ${d[4]}\n\n`; });
md+=`## Tracker instructions

Use the workbook as the working tracker. It starts empty because live contacts and pipeline stages have not been verified. Buyers: one row per company and distinct requirement, with IDs B001 onward. Suppliers: one row per licensable inventory, IDs S001 onward. Put supplier IDs in a buyer's Matched supplier IDs field; separate multiple IDs with commas. Keep evidence in restricted storage and link it. Do not duplicate the same opportunity to track each email.

Buyer stages: Prospect (fit evidence) → Drafted (reviewable message) → Contacted (verified send) → Replied (actual response) → Qualified (use case/spec, volume, acceptance, budget and decision owner/timeline captured) → Sample evaluation (authorized sample delivered) → Proposal (actual proposal sent) → Won (agreement/order evidence). Lost requires a reason. Paused requires a revisit date. Won does not mean delivered, accepted or paid: use those separate fields.

Supplier stages: Identified → Contacted → Evidence pending → Verified → Sample ready → Terms agreed → Delivering → Completed. Rejected requires a reason. Verified requires evidence of ownership/licensing authority, provenance/consent appropriate to the data, commercial permission, representative sample/quality, volume, cost and availability. Do not treat self-report as verification. Track gaps in Readiness/blocker and link evidence in Evidence URL.

Buyers are filtered by Stage and Action flag. Suppliers are filtered by Stage, Readiness/blocker and Action flag. Every active row needs a next action and next date. Due/overdue uses TODAY() in the spreadsheet application's date context; dates themselves are planned in IST. Blank last-touch/due dates are not zero. Terminal buyer stages Won/Lost suppress ordinary follow-up flags; track delivery/payment follow-up explicitly by reopening an action or in the next-action fields and checking them during daily review. Supplier Completed/Rejected likewise ends ordinary sourcing follow-up.

All cash and cost inputs require a currency. Do not add different currencies together. The plan logs counts only; buyer cash and estimated deal value remain in their individual rows. Keep quoted value, agreement, delivery, acceptance and collected cash distinct.

The workbook reserves 150 buyer and 75 supplier rows. Extend the Excel table and copy formulas/validations when capacity is reached. Daily Plan columns H–N are actuals and notes; A–G define the schedule. Dropdowns control stages/statuses. Amber cells are editable inputs.

## Reusable daily Codex prompt

“Run Day [N] of the xAGI 30-day plan. Read the current private tracker and new xAGI buyer/supplier replies through available connected accounts. Handle due actions first, then complete today's Codex checklist. Research and prepare concrete drafts/packages with source evidence. Execute only external actions already authorized within their scope; present any remaining recipient/message batch for my authorization. Verify sends/shares before changing stages. Update the tracker, actual counts, blockers and next dates. End with commercial progress and tomorrow's first action. Do not buy credits, publish, promise inventory, share unapproved samples or make commercial commitments.”

## Data basis

Derived from Saurav's requested dataset-first outreach workflow and the preceding daily operating proposal. No live buyer, supplier, inventory, market pricing or revenue data has been imported. Targets are proposed operating assumptions.
`;
await fs.writeFile(docs+'/30-day-plan.md',md);
await fs.writeFile(docs+'/schedule.json',JSON.stringify(days,null,2)+'\n');
const wb=Workbook.create();
const plan=wb.worksheets.add('Plan'), buyers=wb.worksheets.add('Buyers'), suppliers=wb.worksheets.add('Suppliers');
function base(s,title,last,rows){ s.showGridLines=false;s.getRange(`A1:${last}${rows}`).format.font={name:'Arial',size:10,color:'#172033'};s.getRange(`A1:${last}${rows}`).format.verticalAlignment='center';s.getRange('A2').values=[[title]];s.getRange('A2').format.font={size:15,bold:true};s.getRange(`A2:${last}2`).format.rowHeight=26; }
function header(s,r,last){s.getRange(`A${r}:${last}${r}`).format={fill:'#243B53',font:{name:'Arial',size:10,bold:true,color:'#FFFFFF'},rowHeight:34,wrapText:true,horizontalAlignment:'center',verticalAlignment:'center'};s.freezePanes.freezeRows(r);s.freezePanes.freezeColumns(2);}
function list(s,col,a,b,values){s.getRange(`${col}${a}:${col}${b}`).dataValidation={rule:{type:'list',values}};}
base(plan,'xAGI 30-day execution', 'N',40);plan.tabColor='#243B53';
plan.getRange('A3').values=[['Start date']];plan.getRange('B3').values=[[new Date('2026-10-26T00:00:00Z')]];plan.getRange('B3').setNumberFormat('dd mmm yyyy');plan.getRange('B3').format.fill='#FFF2CC';
plan.getRange('D3').values=[['Goal: one paid pilot, accepted delivery and next demand. Targets are assumptions.']];
plan.getRange('A4').values=[['Run daily routine from the companion plan. Checklists use line breaks; status and actuals are editable.']];
const ph=['Day','Date (IST)','Focus','Codex checklist','Saurav action','Completion evidence','Status','Buyer drafts','Verified sends','Buyer replies','Buyer calls','Supplier calls','Proposals sent','Outcome / blocker'];
plan.getRange('A6:N6').values=[ph];
const pr=days.map((d,i)=>[i+1,null,d[0],'1. '+d[1]+'\n2. '+d[2],d[3],d[4],'Not started',null,null,null,null,null,null,null]);
plan.getRange('A7:N36').values=pr;
for(let r=7;r<=36;r++)plan.getRange(`B${r}`).formulas=[[`=$B$3+A${r}-1`]];
plan.getRange('B7:B36').setNumberFormat('dd mmm yyyy');plan.getRange('D7:F36').format.wrapText=true;plan.getRange('A7:N36').format.rowHeight=110;plan.getRange('G7:N36').format.fill='#FFF9E8';
list(plan,'G',7,36,['Not started','In progress','Blocked','Done']);plan.tables.add('A6:N36',true,'DailyPlan');header(plan,6,'N');
const pw=[6,16,30,76,46,44,16,14,14,14,14,14,14,42];pw.forEach((v,i)=>plan.getRangeByIndexes(0,i,40,1).format.columnWidth=v);
const bh=['Buyer ID','Company / requirement','Contact / channel','Fit / source URL','Stage','Requirement / acceptance','Budget / timeline / owner','Matched supplier IDs','Last touch','Next action','Next date','Action flag','Est. deal value','Currency','Agreement evidence','Delivery status','Acceptance status','Cash collected','Cash evidence','Owner','Notes / loss reason'];
const sh=['Supplier ID','Company / inventory','Contact / channel','Source URL','Stage','Languages / domain','Volume / unit / format','Rights / consent evidence','Sample / quality evidence','Cost / currency / availability','Readiness / blocker','Last touch','Next action','Next date','Action flag','Evidence URL','Owner','Notes / rejection reason'];
function tracker(s,title,headers,last,end,name){base(s,title,last,end);s.getRange('A3').values=[['Empty template. Enter verified records only; keep the populated copy in restricted storage.']];s.getRange('A4').values=[['Amber = editable. Filter Action flag for due work. Evidence links support each stage change.']];s.getRange(`A6:${last}6`).values=[headers];s.getRange(`A7:${last}${end}`).format.fill='#FFF9E8';s.getRange(`A7:${last}${end}`).format.rowHeight=30;s.tables.add(`A6:${last}${end}`,true,name);header(s,6,last);s.getRange(`A1:${last}${end}`).format.columnWidth=24;s.getRange(`A1:B${end}`).format.columnWidth=25;}
tracker(buyers,'Buyer pipeline',bh,'U',156,'BuyerPipeline');tracker(suppliers,'Supplier pipeline',sh,'R',81,'SupplierPipeline');
list(buyers,'E',7,156,['Prospect','Drafted','Contacted','Replied','Qualified','Sample evaluation','Proposal','Won','Lost','Paused']);
list(buyers,'P',7,156,['Not started','Preparing','Delivered']);list(buyers,'Q',7,156,['Pending','Accepted','Issues']);
list(suppliers,'E',7,81,['Identified','Contacted','Evidence pending','Verified','Sample ready','Terms agreed','Delivering','Completed','Rejected','Paused']);
buyers.getRange('I7:I156').setNumberFormat('dd mmm yyyy');buyers.getRange('K7:K156').setNumberFormat('dd mmm yyyy');buyers.getRange('M7:M156').setNumberFormat('#,##0.00');buyers.getRange('R7:R156').setNumberFormat('#,##0.00');
suppliers.getRange('L7:L81').setNumberFormat('dd mmm yyyy');suppliers.getRange('N7:N81').setNumberFormat('dd mmm yyyy');
// Keep post-sale actions visible: only Lost and completed/rejected sourcing rows are terminal.
for(let r=7;r<=156;r++)buyers.getRange(`L${r}`).formulas=[[`=IF(A${r}="","",IF(E${r}="Lost","Closed",IF(J${r}="","Set action",IF(K${r}="","Set date",IF(K${r}<TODAY(),"Overdue",IF(K${r}=TODAY(),"Due today","Scheduled"))))))`]];
for(let r=7;r<=81;r++)suppliers.getRange(`O${r}`).formulas=[[`=IF(A${r}="","",IF(OR(E${r}="Completed",E${r}="Rejected"),"Closed",IF(M${r}="","Set action",IF(N${r}="","Set date",IF(N${r}<TODAY(),"Overdue",IF(N${r}=TODAY(),"Due today","Scheduled"))))))`]];
for(const [s,col,end] of [[buyers,'L',156],[suppliers,'O',81]]){s.getRange(`${col}7:${col}${end}`).format.fill='#F0F4F8';s.getRange(`${col}7:${col}${end}`).conditionalFormats.add('containsText',{text:'Overdue',format:{fill:'#FDE8E7',font:{color:'#9B1C1C',bold:true}}});}
// Disposable checks verify missing prerequisites and post-sale follow-up before restoring the template.
buyers.getRange('A7').values=[['TEST']];buyers.getRange('E7').values=[['Won']];
if(buyers.getRange('L7').values[0][0]!=='Set action')throw Error('missing action check');
buyers.getRange('J7').values=[['Collect acceptance']];if(buyers.getRange('L7').values[0][0]!=='Set date')throw Error('missing date check');
buyers.getRange('K7').values=[[new Date('2020-01-01T00:00:00Z')]];if(buyers.getRange('L7').values[0][0]!=='Overdue')throw Error('overdue check');
buyers.getRange('E7').values=[['Lost']];if(buyers.getRange('L7').values[0][0]!=='Closed')throw Error('closed check');
for(const col of ['A','E','J','K'])buyers.getRange(`${col}7`).clear({applyTo:'contents'});
wb.recalculate();
console.log((await wb.inspect({kind:'table',range:'Plan!A7:C9',tableMaxRows:3,tableMaxCols:3,maxChars:1500})).ndjson);
console.log((await wb.inspect({kind:'match',searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#NUM!|#SPILL!',options:{useRegex:true,maxResults:10},maxChars:1000})).ndjson);
for(const [s,range,file] of [['Plan','A6:F9','plan'],['Buyers','A6:L10','buyers'],['Suppliers','A6:I10','suppliers']]){const p=await wb.render({sheetName:s,range,scale:1,format:'png'});await fs.writeFile('/tmp/xagi-plan-20261025/'+file+'.png',new Uint8Array(await p.arrayBuffer()));}
await (await SpreadsheetFile.exportXlsx(wb)).save(out+'/xagi-execution-tracker.xlsx');
for(const [file,h] of [['buyers-template.csv',bh],['suppliers-template.csv',sh]])await fs.writeFile(docs+'/'+file,h.map(v=>'"'+v.replaceAll('"','""')+'"').join(',')+'\n');
// Keep documentation in sync with the tested post-sale follow-up rule.
md=md.replace('Terminal buyer stages Won/Lost suppress ordinary follow-up flags; track delivery/payment follow-up explicitly by reopening an action or in the next-action fields and checking them during daily review.','Only Lost suppresses buyer action flags. Won remains actionable for delivery, acceptance, payment and repeat-order follow-up.');
await fs.writeFile(docs+'/30-day-plan.md',md);
console.log('Exported '+out+'/xagi-execution-tracker.xlsx');
