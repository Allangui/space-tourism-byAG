import{n as d}from"./navTech.c61951df.js";import{_ as h}from"./index.ff75798f.js";import{r as l,o,c as n,e,a,b as p,t as i,p as m,d as v,f as u}from"./vendor.433bd6b6.js";const f={inject:["mq"],components:{navTech:d},data(){return{tech:this.propTech[0]}},props:{propTech:{type:Object}}},r=t=>(m("data-v-1a3001b2"),t=t(),v(),t),g=["id"],y={class:"leftside"},T=r(()=>e("h2",null,[e("span",null,"03"),u("space launch 101")],-1)),x=["src","alt"],b={class:"flexcontent"},j={class:"description"},k=r(()=>e("div",{class:"terminology"},"the terminology ...",-1)),q={class:"name"},I={key:0,class:"rightside"},N=["src","alt"];function S(t,V,B,C,s,c){const _=l("navTech");return o(),n("div",{id:c.mq.s?"main-s":"main"},[e("div",y,[T,c.mq.s?(o(),n("img",{key:0,src:s.tech.images.landscape,alt:s.tech.name},null,8,x)):a("",!0),e("div",b,[p(_),e("div",j,[k,e("div",q,i(s.tech.name),1),e("p",null,i(s.tech.description),1)])])]),c.mq.s?a("",!0):(o(),n("div",I,[e("img",{src:s.tech.images.portrait,alt:s.tech.name},null,8,N)]))],8,g)}var E=h(f,[["render",S],["__scopeId","data-v-1a3001b2"]]);export{E as default};