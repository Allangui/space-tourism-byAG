import{n as d}from"./NavDestination.5d46ec0f.js";import{_}from"./index.d9bcf7e9.js";import{r as l,o as r,c as p,e as s,b as m,t as o,n as v,p as u,d as h,f as e}from"./vendor.433bd6b6.js";const f={inject:["mq"],components:{NavDest:d},data(){return{destination:this.propDestination[1]}},props:{propDestination:{type:Object}}},i=n=>(u("data-v-2891e4c9"),n=n(),h(),n),D=i(()=>s("h2",null,[s("span",null,"01"),e(" pick up your destination")],-1)),b={class:"content"},g=["src","alt"],x={class:"description"},j={class:"details"},y={class:"distance"},I=e("avg. distance "),N=i(()=>s("br",null,null,-1)),S=e(),k={class:"travelTime"},B=e("est. travel time "),V=i(()=>s("br",null,null,-1)),q=e();function C(n,M,T,w,t,a){const c=l("navDest");return r(),p("div",{class:v(a.mq.s?"main-s":"main")},[D,s("div",b,[s("img",{class:"leftImg",src:t.destination.images.png,alt:t.destination.name},null,8,g),s("div",x,[m(c),s("h3",null,o(t.destination.name),1),s("p",null,o(t.destination.description),1),s("div",j,[s("div",y,[I,N,S,s("span",null,o(t.destination.distance),1)]),s("div",k,[B,V,q,s("span",null,o(t.destination.travel),1)])])])])],2)}var A=_(f,[["render",C],["__scopeId","data-v-2891e4c9"]]);export{A as default};
