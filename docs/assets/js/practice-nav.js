'use strict';

// Freeze the entry list, rather than recomputing it after a rating or a filter change.
// The URL carries the scope; session storage preserves the exact order across reloads.
const PRACTICE_NAV_KEY='cmc-practice-navigation-v2';
let practiceQueues=[];
try{const saved=JSON.parse(sessionStorage.getItem(PRACTICE_NAV_KEY)||'[]');if(Array.isArray(saved))practiceQueues=saved.slice(-24)}catch(e){}
function practiceDefaults(source){return source==='corpus'?{paper:'all',text:'',edition:'all',group:'all',stage:'all',kind:'all',method:'all',topic:'all',tagStatus:'all',quality:'all',tab:'all',page:0}:{text:'',year:'all',type:'all',topic:'all',difficulty:'all',status:'all'}}
function practiceFilters(source,raw={}){const clean=practiceDefaults(source);for(const key of Object.keys(clean)){if(key==='page')clean[key]=Math.max(0,Math.floor(Number(raw[key])||0));else if(typeof raw[key]==='string')clean[key]=raw[key].slice(0,300)}return clean}
function practiceReadFilters(source,params=route().params){const raw={};for(const key of Object.keys(practiceDefaults(source))){const v=params.get(key==='text'?'q':key);if(v!==null)raw[key]=v}return practiceFilters(source,raw)}
function practiceParams(source,filters){const p=new URLSearchParams(),defaults=practiceDefaults(source);for(const [key,v] of Object.entries(practiceFilters(source,filters))){if(v!==defaults[key])p.set(key==='text'?'q':key,String(v))}return p}
function practiceListRoute(source,filters){const p=practiceParams(source,filters).toString();return (source==='corpus'?'corpus':'bank')+(p?'?'+p:'')}
function practiceAll(source){return source==='corpus'?cmcCorpusData.questions:Q}
function practiceMatches(source,filters){return source==='corpus'?cmcFiltered(filters):bankMatches(filters)}
function practiceLabel(source,filters){if(filters.topic!=='all')return source==='corpus'?cmcTopicName(filters.topic):(getK(filters.topic)?.name||'知识点练习');return practiceParams(source,{...filters,page:0}).toString()?'当前筛选':'全部题目'}
function practiceSaveQueues(){try{sessionStorage.setItem(PRACTICE_NAV_KEY,JSON.stringify(practiceQueues))}catch(e){/* URL scope still works when session storage is unavailable. */}}
function practiceCreateQueue(source,filters){
 const f=practiceFilters(source,filters),queue={key:Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,10),source,filters:f,ids:practiceMatches(source,f).map(q=>q.id)};
 practiceQueues.push(queue);practiceQueues=practiceQueues.slice(-24);practiceSaveQueues();return queue;
}
function practiceValidQueue(queue,source,filters){
 if(!queue||queue.source!==source||!Array.isArray(queue.ids)||JSON.stringify(practiceFilters(source,queue.filters))!==JSON.stringify(filters))return null;
 const valid=new Set(practiceAll(source).map(q=>q.id));return {...queue,filters,ids:[...new Set(queue.ids.filter(id=>valid.has(id)))]};
}
function practiceQuestionHref(source,id,queue){
 const base='#'+(source==='corpus'?'corpus/':'question/')+encodeURIComponent(id);if(!queue)return base;
 const p=practiceParams(source,queue.filters);p.set('queue',queue.key);if(queue.origin?.from)p.set('from',queue.origin.from);if(queue.origin?.library)p.set('library',queue.origin.library);return base+'?'+p.toString();
}
function practiceContext(source,id){
 const params=route().params;
 if(params.get('from')==='learning')return {source,ids:[id],index:0,label:'学习状态记录',returnTo:'learning'};
 const trainingId=source==='text'?params.get('training'):null;
 if(trainingId){
  const t=X.session?.id===trainingId?X.session:X.history.find(t=>t.id===trainingId);
  return {source,ids:t?.ids||[id],index:t?t.ids.indexOf(id):0,label:t?.name||'本组练习',returnTo:'training',trainingId};
 }
 const filters=practiceReadFilters(source,params),key=params.get('queue');
 let queue=practiceValidQueue(practiceQueues.find(q=>q?.key===key),source,filters);
 if(!queue){
  queue=practiceCreateQueue(source,filters);
  // A copied link may refer to a question that was just rated or unstarred.
  // Retain it at its natural position, but never relax its topic/type scope.
  if(!queue.ids.includes(id)){
   const statusKey=source==='corpus'?'tab':'status',domain=practiceMatches(source,{...filters,[statusKey]:'all'});
   if(domain.some(q=>q.id===id)){const selected=new Set([...queue.ids,id]);queue.ids=domain.filter(q=>selected.has(q.id)).map(q=>q.id);practiceSaveQueues()}
  }
  queue.origin={from:params.get('from'),library:params.get('library')};
  if(typeof history!=='undefined'&&history.replaceState)history.replaceState(null,'',practiceQuestionHref(source,id,queue));
 }
 const paper=source==='corpus'&&filters.paper!=='all'?cmcPaperMap[filters.paper]:null;
 const origin={from:params.get('from'),library:params.get('library')};
 return {...queue,origin,index:queue.ids.indexOf(id),label:paper?paper.title:practiceLabel(source,filters),returnTo:paper?'papers'+(origin.library?'?'+origin.library:''):practiceListRoute(source,filters)};
}
function practiceContextHTML(nav){const last=nav.index===nav.ids.length-1;return `<div class="cmc-browse-context" aria-label="当前练习范围"><strong>${escapeHTML(nav.label)}</strong><span>${nav.index<0?'本题已不在此范围':`${nav.index+1} / ${nav.ids.length} 题`}</span>${last?'<span>已到本组最后一题</span>':''}</div>`}
function practiceMove(source,id,delta){
 const nav=practiceContext(source,id),next=nav.index+delta;if(nav.index<0||next<0||next>=nav.ids.length)return;
 if(nav.trainingId){if(X.session?.id===nav.trainingId)return jumpTraining(next);navigate('question/'+nav.ids[next]+'?training='+encodeURIComponent(nav.trainingId));return}
 navigate(practiceQuestionHref(source,nav.ids[next],nav).slice(1));
}
