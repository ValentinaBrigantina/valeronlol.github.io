import{S as e,i as s,s as t,B as a,C as n,D as l,t as o,b as r,E as c,m as d,c as i,q as p,d as m,F as x,r as g,v as f,j as u,f as $,G as h,w as v,x as k,h as b,A as E,y as j,I as w,u as y,g as A,a as F,z as I}from"../../../../svelte.internal.v3.43.1-e44e41c9.js";import{l as S}from"../../../../index-72f1874e.js";import{m as z}from"../../../../languages-221bcc59.js";import{b as C}from"../../../../constants-6e0105a9.js";import{W as D}from"../../../../WithTranslations.svelte-4f247c79.js";if("undefined"!=typeof document){const e=".lang-toggle.svelte-edx0kd{margin-right:52px;position:relative}.lang-btn.svelte-edx0kd{font-weight:600;font-size:16px;line-height:20px;color:#828282;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#app.dark .lang-btn.selected{transition:color .25s ease;color:#4F4F4F}.lang-btn.selected.svelte-edx0kd{color:#2A2833;cursor:auto;pointer-events:none}#app.dark .lang-btn.selected{transition:color .25s ease;color:#E0E0E0}.lang-animate.svelte-edx0kd{width:36px;height:26px;position:absolute;top:50%;transform:translateY(-50%);border:2px solid #2A2833;pointer-events:none;transition:left .15s ease;left:-24px}#app.dark .lang-animate{border-color:#E0E0E0}.lang-animate.ru.svelte-edx0kd{border-right-color:transparent !important;border-radius:15px 10px 10px 15px}.lang-animate.en.svelte-edx0kd{border-left-color:transparent !important;border-radius:10px 15px 15px 10px;left:26px}@media screen and (max-width: 650px){.lang-toggle.svelte-edx0kd{margin-left:10px}}",s=document.createElement("style"),t=document.createTextNode(e);s.type="text/css",s.appendChild(t),document.head.appendChild(s)}function N(e){let s,t,a,n,l,c,d,S,z,C,D,N,P,T=e[8](e[2])+"",V=e[8](e[1])+"";const W=e[4].default,_=i(W,e,e[7],null);return{c(){s=p("div"),t=p("div"),n=m(),l=p("span"),c=x(T),d=m(),S=p("span"),z=x(V),C=m(),_&&_.c(),this.h()},l(e){s=g(e,"DIV",{class:!0});var a=f(s);t=g(a,"DIV",{class:!0}),f(t).forEach(u),n=$(a),l=g(a,"SPAN",{class:!0});var o=f(l);c=h(o,T),o.forEach(u),d=$(a),S=g(a,"SPAN",{class:!0});var r=f(S);z=h(r,V),r.forEach(u),a.forEach(u),C=$(e),_&&_.l(e),this.h()},h(){v(t,"class",a="lang-animate "+e[0]+" svelte-edx0kd"),v(l,"class","lang-btn svelte-edx0kd"),k(l,"selected",e[0]===e[2]),v(S,"class","lang-btn svelte-edx0kd"),k(S,"selected",e[0]===e[1]),v(s,"class","lang-toggle svelte-edx0kd")},m(a,o){b(a,s,o),E(s,t),E(s,n),E(s,l),E(l,c),E(s,d),E(s,S),E(S,z),b(a,C,o),_&&_.m(a,o),D=!0,N||(P=[j(l,"click",e[5]),j(S,"click",e[6])],N=!0)},p(e,s){(!D||1&s&&a!==(a="lang-animate "+e[0]+" svelte-edx0kd"))&&v(t,"class",a),(!D||256&s)&&T!==(T=e[8](e[2])+"")&&w(c,T),5&s&&k(l,"selected",e[0]===e[2]),(!D||256&s)&&V!==(V=e[8](e[1])+"")&&w(z,V),3&s&&k(S,"selected",e[0]===e[1]),_&&_.p&&(!D||128&s)&&y(_,W,e,e[7],D?F(W,e[7],s,null):A(e[7]),null)},i(e){D||(o(_,e),D=!0)},o(e){r(_,e),D=!1},d(e){e&&u(s),e&&u(C),_&&_.d(e),N=!1,I(P)}}}function P(e){let s,t;return s=new D({props:{$$slots:{default:[N,({_:e})=>({8:e}),({_:e})=>e?256:0]},$$scope:{ctx:e}}}),{c(){a(s.$$.fragment)},l(e){n(s.$$.fragment,e)},m(e,a){l(s,e,a),t=!0},p(e,[t]){const a={};385&t&&(a.$$scope={dirty:t,ctx:e}),s.$set(a)},i(e){t||(o(s.$$.fragment,e),t=!0)},o(e){r(s.$$.fragment,e),t=!1},d(e){c(s,e)}}}function T(e,s,t){let a;d(e,S,(e=>t(0,a=e)));let{$$slots:n={},$$scope:l}=s;const{en:o,ru:r}=z,c=e=>{S.set(e),localStorage.setItem(C,e)};return e.$$set=e=>{"$$scope"in e&&t(7,l=e.$$scope)},[a,o,r,c,n,()=>c(r),()=>c(o),l]}class V extends e{constructor(e){super(),s(this,e,T,P,t,{})}}export{V as default};
