import{S as oe,i as te,s as ne,e as Q,a as z,t as B,b as h,c as X,l as Re,n as T,d as Y,f as S,o as Ae,g as x,h as U,j as ce,k as V,m as v,u as pe,p as $,q as P,r as F,v as Pe,w as Te,x as ee,y as je,z as He,A as Be,B as De,C as Le,D as Ee,E as we}from"./index-d02855c3.js";function Ge(o){let e,t=`${o[13]}px`,n=`${o[15]}px`,s=`${o[16]}px`,i=`rotate(${o[10]}deg)`,d=`${o[11].y-o[3]}px`,u=`${o[11].x-o[4]}px`,_,p;return{c(){e=Q("button"),z(e,"class","minimap-node svelte-1hs9omb"),B(e,"hidden",o[1]),B(e,"hideable",o[6]),h(e,"z-index",o[12]),h(e,"border-radius",t),h(e,"--prop-background-color",o[5]||o[14]||!o[8]&&o[7]||null),h(e,"width",n),h(e,"height",s),h(e,"transform",i),h(e,"top",d),h(e,"left",u)},m(f,b){X(f,e,b),_||(p=Re(e,"click",o[25]),_=!0)},p(f,[b]){b&2&&B(e,"hidden",f[1]),b&64&&B(e,"hideable",f[6]),b&4096&&h(e,"z-index",f[12]),b&8192&&t!==(t=`${f[13]}px`)&&h(e,"border-radius",t),b&16800&&h(e,"--prop-background-color",f[5]||f[14]||!f[8]&&f[7]||null),b&32768&&n!==(n=`${f[15]}px`)&&h(e,"width",n),b&65536&&s!==(s=`${f[16]}px`)&&h(e,"height",s),b&1024&&i!==(i=`rotate(${f[10]}deg)`)&&h(e,"transform",i),b&2056&&d!==(d=`${f[11].y-f[3]}px`)&&h(e,"top",d),b&2064&&u!==(u=`${f[11].x-f[4]}px`)&&h(e,"left",u)},i:T,o:T,d(f){f&&Y(e),_=!1,p()}}}function Oe(o,e,t){let n,s,i,d,u,_,p,f=T,b=()=>(f(),f=x(i,g=>t(12,p=g)),i),k,C,W,w;o.$$.on_destroy.push(()=>f());let{node:y}=e,{hidden:H=!1}=e,{toggleHidden:N}=e,{top:a}=e,{left:l}=e,{nodeColor:r=null}=e,{hideable:c}=e;const{position:j,dimensions:I,bgColor:q,borderRadius:E,rotation:M}=y;S(o,j,g=>t(24,_=g)),S(o,q,g=>t(14,C=g)),S(o,E,g=>t(13,k=g)),S(o,M,g=>t(23,u=g));const{width:D,height:R}=I;S(o,D,g=>t(15,W=g)),S(o,R,g=>t(16,w=g));let L=null;Ae(()=>{var g;try{const A=(g=document.querySelector(`#${y.id}`))==null?void 0:g.firstChild;A&&t(7,L=window.getComputedStyle(A).backgroundColor)}catch(A){console.error(A)}});const J=()=>{c&&N(y)};return o.$$set=g=>{"node"in g&&t(0,y=g.node),"hidden"in g&&t(1,H=g.hidden),"toggleHidden"in g&&t(2,N=g.toggleHidden),"top"in g&&t(3,a=g.top),"left"in g&&t(4,l=g.left),"nodeColor"in g&&t(5,r=g.nodeColor),"hideable"in g&&t(6,c=g.hideable)},o.$$.update=()=>{o.$$.dirty&16777216&&t(11,n=_),o.$$.dirty&8388608&&t(10,s=u),o.$$.dirty&1&&b(t(9,i=y.zIndex)),o.$$.dirty&128&&t(8,d=L==="rgba(0, 0, 0, 0)")},[y,H,N,a,l,r,c,L,d,i,s,n,p,k,C,W,w,j,q,E,M,D,R,u,_,J]}class Xe extends oe{constructor(e){super(),te(this,e,Oe,Ge,ne,{node:0,hidden:1,toggleHidden:2,top:3,left:4,nodeColor:5,hideable:6})}}function Ye(o){let e,t;return{c(){e=Q("div"),z(e,"class","mini-bounding-box svelte-aoq4g"),z(e,"id",t=`mini-${o[2]}-bounding-box`),h(e,"border","solid 4px "+o[8]),h(e,"top",`${o[5].y-o[3]}px`),h(e,"left",`${o[5].x-o[4]}px`),h(e,"width",`${o[6]}px`),h(e,"height",`${o[7]}px`),h(e,"background-color",o[8])},m(n,s){X(n,e,s)},p(n,[s]){s&4&&t!==(t=`mini-${n[2]}-bounding-box`)&&z(e,"id",t),s&256&&h(e,"border","solid 4px "+n[8]);const i=s&256;(s&296||i)&&h(e,"top",`${n[5].y-n[3]}px`),(s&304||i)&&h(e,"left",`${n[5].x-n[4]}px`),(s&320||i)&&h(e,"width",`${n[6]}px`),(s&384||i)&&h(e,"height",`${n[7]}px`),(s&256||i)&&h(e,"background-color",n[8])},i:T,o:T,d(n){n&&Y(e)}}}function Fe(o,e,t){let n,s=T,i=()=>(s(),s=x(k,a=>t(5,n=a)),k),d,u,_,p=T,f=()=>(p(),p=x(C,a=>t(8,_=a)),C);o.$$.on_destroy.push(()=>s()),o.$$.on_destroy.push(()=>p());let{dimensions:b}=e,{position:k}=e;i();let{color:C}=e;f();let{groupName:W}=e,{top:w}=e,{left:y}=e;const{width:H,height:N}=b;return S(o,H,a=>t(6,d=a)),S(o,N,a=>t(7,u=a)),o.$$set=a=>{"dimensions"in a&&t(11,b=a.dimensions),"position"in a&&i(t(0,k=a.position)),"color"in a&&f(t(1,C=a.color)),"groupName"in a&&t(2,W=a.groupName),"top"in a&&t(3,w=a.top),"left"in a&&t(4,y=a.left)},[k,C,W,w,y,n,d,u,_,H,N,b]}class Je extends oe{constructor(e){super(),te(this,e,Fe,Ye,ne,{dimensions:11,position:0,color:1,groupName:2,top:3,left:4})}}function ye(o,e,t){const n=o.slice();return n[52]=e[t][0],n[53]=e[t][1],n}function ke(o,e,t){const n=o.slice();return n[52]=e[t][0],n[56]=e[t][1],n}function Ce(o){let e,t;return e=new Xe({props:{node:o[56],top:o[11],left:o[10],nodeColor:o[3],hidden:o[13].has(o[56]),toggleHidden:o[24],hideable:o[6]}}),{c(){He(e.$$.fragment)},m(n,s){Be(e,n,s),t=!0},p(n,s){const i={};s[0]&16384&&(i.node=n[56]),s[0]&2048&&(i.top=n[11]),s[0]&1024&&(i.left=n[10]),s[0]&8&&(i.nodeColor=n[3]),s[0]&24576&&(i.hidden=n[13].has(n[56])),s[0]&64&&(i.hideable=n[6]),e.$set(i)},i(n){t||(P(e.$$.fragment,n),t=!0)},o(n){F(e.$$.fragment,n),t=!1},d(n){Ee(e,n)}}}function Ne(o,e){let t,n,s,i=e[56].id!=="N-editor"&&Ce(e);return{key:o,first:null,c(){t=ee(),i&&i.c(),n=ee(),this.first=t},m(d,u){X(d,t,u),i&&i.m(d,u),X(d,n,u),s=!0},p(d,u){e=d,e[56].id!=="N-editor"?i?(i.p(e,u),u[0]&16384&&P(i,1)):(i=Ce(e),i.c(),P(i,1),i.m(n.parentNode,n)):i&&(v(),F(i,1,1,()=>{i=null}),$())},i(d){s||(P(i),s=!0)},o(d){F(i),s=!1},d(d){d&&(Y(t),Y(n)),i&&i.d(d)}}}function Se(o,e){let t,n,s;const i=[e[53],{top:e[11]},{left:e[10]},{groupName:e[52]}];let d={};for(let u=0;u<i.length;u+=1)d=je(d,i[u]);return n=new Je({props:d}),{key:o,first:null,c(){t=ee(),He(n.$$.fragment),this.first=t},m(u,_){X(u,t,_),Be(n,u,_),s=!0},p(u,_){e=u;const p=_[0]&35840?De(i,[_[0]&32768&&Le(e[53]),_[0]&2048&&{top:e[11]},_[0]&1024&&{left:e[10]},_[0]&32768&&{groupName:e[52]}]):{};n.$set(p)},i(u){s||(P(n.$$.fragment,u),s=!0)},o(u){F(n.$$.fragment,u),s=!1},d(u){u&&Y(t),Ee(n,u)}}}function Ke(o){let e,t,n=[],s=new Map,i,d=[],u=new Map,_=`${o[9]}px`,p=`${o[8]}px`,f=`scale(${o[7]})`,b,k,C=`${o[0]}px`,W=`${o[1]?o[1]:o[0]}px`,w,y=U(Array.from(o[14].entries()));const H=l=>l[52];for(let l=0;l<y.length;l+=1){let r=ke(o,y,l),c=H(r);s.set(c,n[l]=Ne(c,r))}let N=U(Array.from(o[15].entries()));const a=l=>l[52];for(let l=0;l<N.length;l+=1){let r=ye(o,N,l),c=a(r);u.set(c,d[l]=Se(c,r))}return{c(){e=Q("div"),t=Q("div");for(let l=0;l<n.length;l+=1)n[l].c();i=ce();for(let l=0;l<d.length;l+=1)d[l].c();b=ce(),k=Q("div"),z(t,"class","node-wrapper svelte-1qxvbux"),h(t,"width",_),h(t,"height",p),h(t,"transform",f),z(k,"class","overlay svelte-1qxvbux"),z(k,"style",o[12]),z(e,"class","minimap-wrapper svelte-1qxvbux"),B(e,"SW",o[5]==="SW"),B(e,"NE",o[5]==="NE"),B(e,"SE",o[5]==="SE"),B(e,"NW",o[5]==="NW"),h(e,"width",C),h(e,"height",W),h(e,"--prop-minimap-border-color",o[4]),h(e,"--prop-minimap-background-color",o[2])},m(l,r){X(l,e,r),V(e,t);for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(t,null);V(t,i);for(let c=0;c<d.length;c+=1)d[c]&&d[c].m(t,null);V(e,b),V(e,k),w=!0},p(l,r){r[0]&16804936&&(y=U(Array.from(l[14].entries())),v(),n=pe(n,r,H,1,l,y,s,t,we,Ne,i,ke),$()),r[0]&35840&&(N=U(Array.from(l[15].entries())),v(),d=pe(d,r,a,1,l,N,u,t,we,Se,null,ye),$()),r[0]&512&&_!==(_=`${l[9]}px`)&&h(t,"width",_),r[0]&256&&p!==(p=`${l[8]}px`)&&h(t,"height",p),r[0]&128&&f!==(f=`scale(${l[7]})`)&&h(t,"transform",f),(!w||r[0]&4096)&&z(k,"style",l[12]),(!w||r[0]&32)&&B(e,"SW",l[5]==="SW"),(!w||r[0]&32)&&B(e,"NE",l[5]==="NE"),(!w||r[0]&32)&&B(e,"SE",l[5]==="SE"),(!w||r[0]&32)&&B(e,"NW",l[5]==="NW"),r[0]&1&&C!==(C=`${l[0]}px`)&&h(e,"width",C),r[0]&3&&W!==(W=`${l[1]?l[1]:l[0]}px`)&&h(e,"height",W),r[0]&16&&h(e,"--prop-minimap-border-color",l[4]),r[0]&4&&h(e,"--prop-minimap-background-color",l[2])},i(l){if(!w){for(let r=0;r<y.length;r+=1)P(n[r]);for(let r=0;r<N.length;r+=1)P(d[r]);w=!0}},o(l){for(let r=0;r<n.length;r+=1)F(n[r]);for(let r=0;r<d.length;r+=1)F(d[r]);w=!1},d(l){l&&Y(e);for(let r=0;r<n.length;r+=1)n[r].d();for(let r=0;r<d.length;r+=1)d[r].d()}}}const We=.9;function Qe(o,e,t){let n,s,i,d,u,_,p,f,b,k,C,W,w,y,H,N,a,l,r,c,j,I,q,E,M,D,R,L,J,g,A,G=Pe("graph"),{width:O=100}=e,{height:K=O}=e,{mapColor:ie=null}=e,{nodeColor:re=null}=e,{borderColor:le=null}=e,{corner:se="SE"}=e,{hideable:de=!1}=e;const ze=O*We,qe=K*We,he=G.bounds.graphBounds;S(o,he,m=>t(45,J=m));const ue=G.nodes;S(o,ue,m=>t(14,g=m));const fe=G.groups;S(o,fe,m=>t(46,L=m));const ge=G.transforms,me=G.dimensions;S(o,me,m=>t(44,R=m));const Z=L.hidden.nodes;S(o,Z,m=>t(13,E=m));const _e=ge.scale;S(o,_e,m=>t(42,M=m));const be=ge.translation;S(o,be,m=>t(43,D=m));const ae=G.groupBoxes;S(o,ae,m=>t(15,A=m));const Me={clientX:0,clientY:0};function Ie(m){E.has(m)?E.delete(m):E.add(m),Z.set(E)}return o.$$set=m=>{"width"in m&&t(0,O=m.width),"height"in m&&t(1,K=m.height),"mapColor"in m&&t(2,ie=m.mapColor),"nodeColor"in m&&t(3,re=m.nodeColor),"borderColor"in m&&t(4,le=m.borderColor),"corner"in m&&t(5,se=m.corner),"hideable"in m&&t(6,de=m.hideable)},o.$$.update=()=>{o.$$.dirty[1]&16384&&t(41,n=J),o.$$.dirty[1]&1024&&t(11,s=n.top),o.$$.dirty[1]&1024&&t(10,i=n.left),o.$$.dirty[1]&1024&&t(40,d=n.right),o.$$.dirty[1]&1024&&t(39,u=n.bottom),o.$$.dirty[1]&8192&&t(38,_=R.width),o.$$.dirty[1]&8192&&t(37,p=R.height),o.$$.dirty[0]&1024|o.$$.dirty[1]&512&&t(9,f=d-i),o.$$.dirty[0]&2048|o.$$.dirty[1]&256&&t(8,b=u-s),o.$$.dirty[0]&768&&t(31,k=f/b),o.$$.dirty[0]&3&&t(30,C=O/K),o.$$.dirty[1]&6336&&t(36,W=Te(Me,0,0,_,p,M,D)),o.$$.dirty[0]&512|o.$$.dirty[1]&2176&&t(33,w=_/f/M),o.$$.dirty[0]&256|o.$$.dirty[1]&2112&&t(32,y=p/b/M),o.$$.dirty[0]&2304|o.$$.dirty[1]&32&&t(35,H=(W.y-s)/b),o.$$.dirty[0]&1536|o.$$.dirty[1]&32&&t(34,N=(W.x-i)/f),o.$$.dirty[0]&1073741824|o.$$.dirty[1]&1&&t(29,l=k>=C),o.$$.dirty[0]&536871680&&t(7,r=l?ze/f:qe/b),o.$$.dirty[0]&384&&t(25,q=b*r),o.$$.dirty[0]&33554434&&t(27,j=(K-q)/2),o.$$.dirty[0]&640&&t(26,I=f*r),o.$$.dirty[0]&67108865&&t(28,c=(O-I)/2),o.$$.dirty[0]&503316480|o.$$.dirty[1]&30&&t(12,a=`
		top: ${j+H*q}px;
		left: ${c+N*I}px;
		width: ${w*I}px;
		height: ${y*q}px;`)},[O,K,ie,re,le,se,de,r,b,f,i,s,a,E,g,A,he,ue,fe,me,Z,_e,be,ae,Ie,q,I,j,c,l,C,k,y,w,N,H,W,p,_,u,d,n,M,D,R,J]}class Ve extends oe{constructor(e){super(),te(this,e,Qe,Ke,ne,{width:0,height:1,mapColor:2,nodeColor:3,borderColor:4,corner:5,hideable:6},null,[-1,-1])}}export{Ve as default};
