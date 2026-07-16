// Render test for the site-major dashboard refactor.
import { readFileSync } from "node:fs";
import { JSDOM, VirtualConsole } from "jsdom";
const dir = "./site/";
const dataJS = readFileSync(dir+"battman_data.js","utf8");
const sharedJS = readFileSync(dir+"battman_shared.js","utf8");
const html = readFileSync(dir+"index.html","utf8");

const errors=[]; const vc=new VirtualConsole();
vc.on("jsdomError",e=>errors.push("jsdomError: "+(e.detail?.message||e.message||e)));
vc.on("error",(...a)=>errors.push("console.error: "+a.join(" ")));
const htmlNoSrc = html.replace(/<script src="battman_data\.js"><\/script>/,"").replace(/<script src="battman_shared\.js"><\/script>/,"");
const dom=new JSDOM(htmlNoSrc,{runScripts:"outside-only",virtualConsole:vc,pretendToBeVisual:true});
const {window}=dom;
window.HTMLElement.prototype.scrollIntoView = window.HTMLElement.prototype.scrollIntoView || function(){};
try{ window.eval(dataJS); window.eval(sharedJS); window.document.dispatchEvent(new window.Event("DOMContentLoaded"));
  const inline=html.match(/<script>([\s\S]*?)<\/script>\s*<\/body>/)[1]; window.eval(inline);
}catch(e){ errors.push("eval threw: "+e.stack); }
const doc=window.document, BM=window.BM;
let fails=0;
const check=(name,cond,extra="")=>{ if(!cond)fails++; console.log(`${cond?"PASS":"FAIL"}  ${name}${extra?"  ("+extra+")":""}`); };
const body=()=>doc.body.textContent;

check("version stamp filled",(doc.getElementById("bmver").textContent||"").startsWith("v"),doc.getElementById("bmver").textContent);
const tabs=[...doc.querySelectorAll("#topTabs .tab")];
check("5 top tabs (4 sites + compare)",tabs.length===5,tabs.map(t=>t.dataset.tab).join(","));
check("tab order = catl,pena,wro,mi,compare",tabs.map(t=>t.dataset.tab).join(",")==="site-catl,site-pena,site-wro,site-mi,tab-compare");
const panels=[...doc.querySelectorAll(".tabpanel")];
const vis=panels.filter(p=>!p.hidden);
check("exactly one top panel visible on load",vis.length===1&&vis[0].id==="site-catl",vis.map(p=>p.id).join(","));

["catl","pena","wro","mi"].forEach(id=>{
  const panel=doc.getElementById("site-"+id);
  const subtabs=[...panel.querySelectorAll(".subtabs .subtab")];
  check(`${id}: 3 sub-tabs`,subtabs.map(b=>b.dataset.sub).join(",")==="headcount,output,intensity");
  const subs=[...panel.querySelectorAll(".subpanel")];
  const svis=subs.filter(p=>!p.hidden);
  check(`${id}: only headcount sub-panel visible on load`,svis.length===1&&svis[0].dataset.sub==="headcount",svis.map(p=>p.dataset.sub).join(","));
  const hc=panel.querySelector('.subpanel[data-sub="headcount"]'), out=panel.querySelector('.subpanel[data-sub="output"]'), it=panel.querySelector('.subpanel[data-sub="intensity"]');
  check(`${id}: headcount chart rendered`,hc.querySelectorAll("svg").length>=1);
  check(`${id}: headcount raw table has rows`,hc.querySelectorAll("tr[data-rowkey]").length>0,hc.querySelectorAll("tr[data-rowkey]").length+"");
  check(`${id}: headcount caveat box`,/Headcount caveats/.test(hc.textContent));
  check(`${id}: output = 2 charts`,out.querySelectorAll("svg").length===2,out.querySelectorAll("svg").length+"");
  check(`${id}: output caveat box`,/Output caveats/.test(out.textContent));
  check(`${id}: intensity chart rendered`,!!it.querySelector("#int_"+id+" svg"));
  check(`${id}: combined series table present`,doc.getElementById("seriesTbl_"+id).querySelectorAll("tr").length>1);
  check(`${id}: combined table shows long-run level + numerator/denominator`,/Long-run level/.test(doc.getElementById("seriesTbl_"+id).textContent)&&/Numerator:/.test(doc.getElementById("seriesTbl_"+id).textContent)&&/Denominator:/.test(doc.getElementById("seriesTbl_"+id).textContent));
  check(`${id}: labor-intensity caveat box`,/Labor-intensity caveats/.test(it.textContent));
});
check("CATL layer table has 7 year cols",doc.querySelectorAll("#catlLayers thead th.num").length===7,doc.querySelectorAll("#catlLayers thead th.num").length+"");
["catl","pena","wro"].forEach(id=>{
  check(`${id}: normalization ladder present (nested in series table)`,!!doc.getElementById("lsub_"+id)&&doc.getElementById("lsub_"+id).querySelectorAll("tr").length>1);
  check(`${id}: no standalone ladder table`,doc.getElementById("ladder_"+id)===null);
  check(`${id}: normalized series drawn in the single intensity chart (square markers)`,doc.getElementById("int_"+id).querySelectorAll("rect.pt").length>0,doc.getElementById("int_"+id).querySelectorAll("rect.pt").length+"");
  check(`${id}: no separate normalized chart (merged)`,doc.getElementById("norm_"+id)===null);
});
check("CATL sensitivity table present",!!doc.getElementById("sens_catl")&&doc.getElementById("sens_catl").querySelectorAll("tr").length>1);
check("Michigan shows 'not normalized' note",/can't be placed on the normalized basis/.test(doc.getElementById("site-mi").textContent));
check("Michigan has NO ladder",doc.getElementById("lsub_mi")===null);

const cmp=doc.getElementById("tab-compare");
check("cross-site chart rendered",!!cmp.querySelector("#cmpChart svg"));
check("cross-site summary table",doc.getElementById("cmpSummary").querySelectorAll("tr").length>1);
check("cross-site has 3 view buttons",cmp.querySelectorAll("[data-cmp]").length===3);
check("cross-site conclusion present",/Bottom line:/.test(cmp.textContent)&&/long-run ordering/.test(cmp.textContent));

// combined table now lists every raw series PLUS the normalized one, each with a data-rowkey
let tblOk=true, tblInfo=[];
["catl","pena","wro","mi"].forEach(id=>{
  const rawN=BM.INTENSITY.filter(s=>s.siteKey===id).length;
  const expected=rawN+(BM.RECON.viz.after.find(a=>a.siteKey===id)?1:0);
  const rows=doc.getElementById("seriesTbl_"+id).querySelectorAll("tbody tr[data-rowkey]").length;
  if(rows!==expected){tblOk=false;tblInfo.push(id+":"+rows+"/"+expected);}
});
check("combined table: one rowkeyed row per series (raw + normalized)",tblOk,tblInfo.join(","));
let normOk=BM.RECON.viz.after.every(s=>{const el=doc.getElementById("int_"+s.siteKey);return el&&el.querySelectorAll("rect.pt").length>0;});
check("every normalized series plots data in the merged intensity chart",normOk);
const ipt=doc.querySelector("#int_catl .pt"); if(ipt) ipt.dispatchEvent(new window.Event("click"));
check("clicking an intensity point highlights exactly one table row",doc.getElementById("seriesTbl_catl").querySelectorAll("tr.rowhi").length===1,doc.getElementById("seriesTbl_catl").querySelectorAll("tr.rowhi").length+"");
check("intensity detail box removed",doc.getElementById("intdet_catl")===null);
let cavMiss=[]; BM.SITES.forEach(s=>{const c=s.caveats||{};["headcount","output","intensity"].forEach(k=>{if(c[k]&&!body().includes(c[k]))cavMiss.push(s.id+"."+k);});});
check("every per-metric caveat rendered",cavMiss.length===0,cavMiss.join(","));
let ladMiss=BM.RECON.ladders.filter(L=>!body().includes(L.site.split(" (")[0]));
check("every ladder rendered",ladMiss.length===0);
check("conclusion text migrated",body().includes(BM.RECON.conclusion.slice(0,40)));
check("capnote migrated",body().includes(BM.RECON.capnote.slice(0,40)));

check("no 'HARMONIZED' in output",!body().includes("HARMONIZED"));
check("no normalization 'H1 result' in output",!body().includes("H1 result"));
check("'normalized' language present",body().toLowerCase().includes("normalized"));

doc.querySelector('#topTabs .tab[data-tab="tab-compare"]').dispatchEvent(new window.Event("click"));
const nv=[...doc.querySelectorAll(".tabpanel")].filter(p=>!p.hidden);
check("clicking Cross-site shows only that panel",nv.length===1&&nv[0].id==="tab-compare",nv.map(p=>p.id).join(","));
doc.querySelector('#topTabs .tab[data-tab="site-catl"]').dispatchEvent(new window.Event("click"));
const catlPanel=doc.getElementById("site-catl");
catlPanel.querySelector('.subtab[data-sub="intensity"]').dispatchEvent(new window.Event("click"));
const iv=[...catlPanel.querySelectorAll(".subpanel")].filter(p=>!p.hidden);
check("clicking CATL intensity sub-tab shows only intensity",iv.length===1&&iv[0].dataset.sub==="intensity",iv.map(p=>p.dataset.sub).join(","));

console.log("\nCONSOLE ERRORS: "+errors.length);
errors.forEach(e=>console.log("  - "+e.slice(0,300)));
console.log(fails?`\n${fails} CHECK(S) FAILED`:"\nALL CHECKS PASS");
process.exit((fails||errors.length)?1:0);
