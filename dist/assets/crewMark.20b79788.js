import{N as i}from"./navCrew.99c1a54f.js";import{_ as u}from"./index.d9bcf7e9.js";import{r as m,o as c,c as p,b as w,w as d,j as o,a,e as s,t as n,p as v,d as f,f as h}from"./vendor.433bd6b6.js";const C={inject:["mq"],components:{NavCrew:i},data(){return{crew:this.propCrew[1]}},props:{propCrew:{type:Object}}},g=t=>(v("data-v-554be748"),t=t(),f(),t),k=["id"],y=g(()=>s("h2",null,[s("span",null,"02"),h(" meet your crew")],-1)),b=["src","alt"],x={class:"role"},N={class:"name"},j=["src","alt"];function q(t,B,I,S,e,r){const _=m("navCrew"),l=m("class");return c(),p("div",{id:r.mq.s?"main-s":"main"},[w(l,{class:"leftside"},{default:d(()=>[y,r.mq.s?(c(),p("img",{key:0,src:e.crew.images.png,alt:e.crew.name},null,8,b)):a("",!0),r.mq.s?(c(),o(_,{key:1})):a("",!0),s("div",x,n(e.crew.role),1),s("div",N,n(e.crew.name),1),s("p",null,n(e.crew.bio),1),r.mq.s?a("",!0):(c(),o(_,{key:2}))]),_:1}),r.mq.s?a("",!0):(c(),o(l,{key:0,class:"rightside"},{default:d(()=>[s("img",{src:e.crew.images.png,alt:e.crew.name},null,8,j)]),_:1}))],8,k)}var E=u(C,[["render",q],["__scopeId","data-v-554be748"]]);export{E as default};