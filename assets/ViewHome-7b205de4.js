import{c as V,V as I,a as z,b as G,d as J}from"./VRow-75820bf2.js";import{g as p,m as C,p as K,u as h,c as n,a as f,I as y,b as S,V as k,d as Q,e as U,f as $,h as X,i as Y,j as Z,k as ee,l as ae,n as te,o as ne,q as le,R as se,r as de,s as ie,t as re,v as oe,w as ce,x as ue,y as ve,z as me,A as ye,B as pe,C as fe,D as P,E as ge,F as ke,G as Ve,L as Ce,H as he,J as be,K as De,M as A,N as Ie,O as o,P as Pe,Q as Ae,S as Se,T as _e,U as xe,W as Be}from"./index-3c209131.js";const Te=p()({name:"VCardActions",props:C(),setup(e,l){let{slots:a}=l;return K({VBtn:{variant:"text"}}),h(()=>{var t;return n("div",{class:["v-card-actions",e.class],style:e.style},[(t=a.default)==null?void 0:t.call(a)])}),{}}}),we=V("v-card-subtitle"),_=V("v-card-title"),Le=f({appendAvatar:String,appendIcon:y,prependAvatar:String,prependIcon:y,subtitle:String,title:String,...C(),...S()},"VCardItem"),He=p()({name:"VCardItem",props:Le(),setup(e,l){let{slots:a}=l;return h(()=>{var u;const t=!!(e.prependAvatar||e.prependIcon),s=!!(t||a.prepend),d=!!(e.appendAvatar||e.appendIcon),i=!!(d||a.append),c=!!(e.title||a.title),g=!!(e.subtitle||a.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[s&&n("div",{key:"prepend",class:"v-card-item__prepend"},[a.prepend?n(k,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},a.prepend):t&&n(I,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[c&&n(_,{key:"title"},{default:()=>{var r;return[((r=a.title)==null?void 0:r.call(a))??e.title]}}),g&&n(we,{key:"subtitle"},{default:()=>{var r;return[((r=a.subtitle)==null?void 0:r.call(a))??e.subtitle]}}),(u=a.default)==null?void 0:u.call(a)]),i&&n("div",{key:"append",class:"v-card-item__append"},[a.append?n(k,{key:"append-defaults",disabled:!d,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},a.append):d&&n(I,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Re=V("v-card-text"),Me=f({appendAvatar:String,appendIcon:y,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:y,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...Q(),...C(),...S(),...U(),...$(),...X(),...Y(),...Z(),...ee(),...ae(),...te(),...ne(),...le({variant:"elevated"})},"VCard"),Ne=p()({name:"VCard",directives:{Ripple:se},props:Me(),setup(e,l){let{attrs:a,slots:t}=l;const{themeClasses:s}=de(e),{borderClasses:d}=ie(e),{colorClasses:i,colorStyles:c,variantClasses:g}=re(e),{densityClasses:u}=oe(e),{dimensionStyles:r}=ce(e),{elevationClasses:x}=ue(e),{loaderClasses:B}=ve(e),{locationStyles:T}=me(e),{positionClasses:w}=ye(e),{roundedClasses:L}=pe(e),v=fe(e,a),H=P(()=>e.link!==!1&&v.isLink.value),m=P(()=>!e.disabled&&e.link!==!1&&(e.link||v.isClickable.value));return h(()=>{const R=H.value?"a":e.tag,M=!!(t.title||e.title),N=!!(t.subtitle||e.subtitle),E=M||N,F=!!(t.append||e.appendAvatar||e.appendIcon),O=!!(t.prepend||e.prependAvatar||e.prependIcon),W=!!(t.image||e.image),j=E||O||F,q=!!(t.text||e.text);return ge(n(R,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":m.value},s.value,d.value,i.value,u.value,x.value,B.value,w.value,L.value,g.value,e.class],style:[c.value,r.value,T.value,e.style],href:v.href.value,onClick:m.value&&v.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var b;return[W&&n("div",{key:"image",class:"v-card__image"},[t.image?n(k,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):n(Ve,{key:"image-img",cover:!0,src:e.image},null)]),n(Ce,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),j&&n(He,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),q&&n(Re,{key:"text"},{default:()=>{var D;return[((D=t.text)==null?void 0:D.call(t))??e.text]}}),(b=t.default)==null?void 0:b.call(t),t.actions&&n(Te,null,{default:t.actions}),he(m.value,"v-card")]}}),[[ke("ripple"),m.value&&e.ripple]])}),{}}}),Ee=f({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Fe(e,l){const a={},t=s=>()=>{if(!be)return Promise.resolve(!0);const d=s==="openDelay";return a.closeDelay&&window.clearTimeout(a.closeDelay),delete a.closeDelay,a.openDelay&&window.clearTimeout(a.openDelay),delete a.openDelay,new Promise(i=>{const c=parseInt(e[s]??0,10);a[s]=window.setTimeout(()=>{l==null||l(d),i(d)},c)})};return{runCloseDelay:t("closeDelay"),runOpenDelay:t("openDelay")}}const Oe=f({disabled:Boolean,modelValue:{type:Boolean,default:void 0},...Ee()},"VHover"),We=p()({name:"VHover",props:Oe(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:a}=l;const t=De(e,"modelValue"),{runOpenDelay:s,runCloseDelay:d}=Fe(e,i=>!e.disabled&&(t.value=i));return()=>{var i;return(i=a.default)==null?void 0:i.call(a,{isHovering:t.value,props:{onMouseenter:s,onMouseleave:d}})}}}),ze={__name:"ViewHome",setup(e){const l=[{name:"吉他社",path:"/guitar"},{name:"熱舞社",path:""},{name:"棒球社",path:""},{name:"羽球社",path:""},{name:"足球社",path:""},{name:"童軍社",path:""}];return(a,t)=>(A(),Ie(z,null,{default:o(()=>[n(G,null,{default:o(()=>[(A(),Pe(Se,null,Ae(l,s=>n(J,{key:s.path,cols:"12",md:"6",lg:"4"},{default:o(()=>[n(We,null,{default:o(({isHovering:d,props:i})=>[n(Ne,_e({color:d?"primary":void 0},i,{to:s.path}),{default:o(()=>[n(_,{class:"text-center"},{default:o(()=>[xe(Be(s.name),1)]),_:2},1024)]),_:2},1040,["color","to"])]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1}))}};export{ze as default};
