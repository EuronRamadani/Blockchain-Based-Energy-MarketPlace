(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8247],{10227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},19749:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(6495).Z,n=o(92648).Z,l=o(91598).Z,i=o(17273).Z,a=l(o(67294)),u=n(o(83121)),s=o(2675),c=o(10139),f=o(28730);o(57238);var d=n(o(89824));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,o,n,l,i,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let u="decode"in e?e.decode():Promise.resolve();u.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===o&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,u=!1;n.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>u,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{u=!0,t.stopPropagation()}}))}(null==l?void 0:l.current)&&l.current(e)}})}let v=a.forwardRef((e,t)=>{var{imgAttributes:o,heightInt:n,widthInt:l,qualityInt:u,className:s,imgStyle:c,blurStyle:f,isLazy:d,fill:p,placeholder:g,loading:h,srcString:v,config:y,unoptimized:b,loader:w,onLoadRef:_,onLoadingCompleteRef:C,setBlurComplete:E,setShowAltText:j,onLoad:S,onError:x}=e,M=i(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=d?"lazy":h,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},M,o,{width:l,height:n,decoding:"async","data-nimg":p?"fill":"1",className:s,loading:h,style:r({},c,f),ref:a.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&m(e,v,g,_,C,E,b))},[v,g,_,C,E,x,b,t]),onLoad:e=>{let t=e.currentTarget;m(t,v,g,_,C,E,b)},onError:e=>{j(!0),"blur"===g&&E(!0),x&&x(e)}})))}),y=a.forwardRef((e,t)=>{let o,n;var l,{src:m,sizes:y,unoptimized:b=!1,priority:w=!1,loading:_,className:C,quality:E,width:j,height:S,fill:x,style:M,onLoad:O,onLoadingComplete:k,placeholder:P="empty",blurDataURL:R,layout:z,objectFit:I,objectPosition:L,lazyBoundary:T,lazyRoot:A}=e,N=i(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let D=a.useContext(f.ImageConfigContext),B=a.useMemo(()=>{let e=p||D||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),o=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:o})},[D]),U=N,W=U.loader||d.default;delete U.loader;let Z="__next_img_default"in W;if(Z){if("custom"===B.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let q=W;W=e=>{let{config:t}=e,o=i(e,["config"]);return q(o)}}if(z){"fill"===z&&(x=!0);let F={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];F&&(M=r({},M,F));let G={responsive:"100vw",fill:"100vw"}[z];G&&!y&&(y=G)}let H="",K=h(j),V=h(S);if("object"==typeof(l=m)&&(g(l)||void 0!==l.src)){let J=g(m)?m.default:m;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(!J.height||!J.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)));if(o=J.blurWidth,n=J.blurHeight,R=R||J.blurDataURL,H=J.src,!x){if(K||V){if(K&&!V){let $=K/J.width;V=Math.round(J.height*$)}else if(!K&&V){let Q=V/J.height;K=Math.round(J.width*Q)}}else K=J.width,V=J.height}}let X=!w&&("lazy"===_||void 0===_);((m="string"==typeof m?m:H).startsWith("data:")||m.startsWith("blob:"))&&(b=!0,X=!1),B.unoptimized&&(b=!0),Z&&m.endsWith(".svg")&&!B.dangerouslyAllowSVG&&(b=!0);let[Y,ee]=a.useState(!1),[et,eo]=a.useState(!1),er=h(E),en=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:L}:{},et?{}:{color:"transparent"},M),el="blur"===P&&R&&!Y?{backgroundSize:en.objectFit||"cover",backgroundPosition:en.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(s.getImageBlurSvg({widthInt:K,heightInt:V,blurWidth:o,blurHeight:n,blurDataURL:R}),'")')}:{},ei=function(e){let{config:t,src:o,unoptimized:r,width:n,quality:l,sizes:i,loader:a}=e;if(r)return{src:o,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,o){let{deviceSizes:r,allSizes:n}=e;if(o){let l=/(^|\s)(1?\d?\d)vw/g,i=[];for(let a;a=l.exec(o);a)i.push(parseInt(a[2]));if(i.length){let u=.01*Math.min(...i);return{widths:n.filter(e=>e>=r[0]*u),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let s=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:s,kind:"x"}}(t,n,i),c=u.length-1;return{sizes:i||"w"!==s?i:"100vw",srcSet:u.map((e,r)=>"".concat(a({config:t,src:o,quality:l,width:e})," ").concat("w"===s?e:r+1).concat(s)).join(", "),src:a({config:t,src:o,quality:l,width:u[c]})}}({config:B,src:m,unoptimized:b,width:K,quality:er,sizes:y,loader:W}),ea=m,eu={imageSrcSet:ei.srcSet,imageSizes:ei.sizes,crossOrigin:U.crossOrigin},es=a.useRef(O);a.useEffect(()=>{es.current=O},[O]);let ec=a.useRef(k);a.useEffect(()=>{ec.current=k},[k]);let ef=r({isLazy:X,imgAttributes:ei,heightInt:V,widthInt:K,qualityInt:er,className:C,imgStyle:en,blurStyle:el,loading:_,config:B,fill:x,unoptimized:b,placeholder:P,loader:W,srcString:ea,onLoadRef:es,onLoadingCompleteRef:ec,setBlurComplete:ee,setShowAltText:eo},U);return a.default.createElement(a.default.Fragment,null,a.default.createElement(v,Object.assign({},ef,{ref:t})),w?a.default.createElement(u.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+ei.src+ei.srcSet+ei.sizes,rel:"preload",as:"image",href:ei.srcSet?void 0:ei.src},eu))):null)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},31551:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(92648).Z,n=o(17273).Z,l=r(o(67294)),i=o(41003),a=o(67795),u=o(54465),s=o(72692),c=o(48245),f=o(69246),d=o(10227),p=o(33468);let g=new Set;function h(e,t,o,r){if(i.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let n=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+o+"%"+n;if(g.has(l))return;g.add(l)}Promise.resolve(e.prefetch(t,o,r)).catch(e=>{})}}function m(e){return"string"==typeof e?e:a.formatUrl(e)}let v=l.default.forwardRef(function(e,t){let o,r;let{href:a,as:g,children:v,prefetch:y,passHref:b,replace:w,shallow:_,scroll:C,locale:E,onClick:j,onMouseEnter:S,onTouchStart:x,legacyBehavior:M=!1}=e,O=n(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=v,M&&("string"==typeof o||"number"==typeof o)&&(o=l.default.createElement("a",null,o));let k=!1!==y,P=l.default.useContext(s.RouterContext),R=l.default.useContext(c.AppRouterContext),z=null!=P?P:R,I=!P,{href:L,as:T}=l.default.useMemo(()=>{if(!P){let e=m(a);return{href:e,as:g?m(g):e}}let[t,o]=i.resolveHref(P,a,!0);return{href:t,as:g?i.resolveHref(P,g):o||t}},[P,a,g]),A=l.default.useRef(L),N=l.default.useRef(T);M&&(r=l.default.Children.only(o));let D=M?r&&"object"==typeof r&&r.ref:t,[B,U,W]=f.useIntersection({rootMargin:"200px"}),Z=l.default.useCallback(e=>{(N.current!==T||A.current!==L)&&(W(),N.current=T,A.current=L),B(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[T,D,L,W,B]);l.default.useEffect(()=>{z&&U&&k&&h(z,L,T,{locale:E})},[T,L,U,E,k,null==P?void 0:P.locale,z]);let q={ref:Z,onClick(e){M||"function"!=typeof j||j(e),M&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),z&&!e.defaultPrevented&&function(e,t,o,r,n,a,u,s,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i.isLocalURL(o)))return;e.preventDefault();let g=()=>{"beforePopState"in t?t[n?"replace":"push"](o,r,{shallow:a,locale:s,scroll:u}):t[n?"replace":"push"](r||o,{forceOptimisticNavigation:!f})};c?l.default.startTransition(g):g()}(e,z,L,T,w,_,C,E,I,k)},onMouseEnter(e){M||"function"!=typeof S||S(e),M&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),z&&(k||!I)&&h(z,L,T,{locale:E,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){M||"function"!=typeof x||x(e),M&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),z&&(k||!I)&&h(z,L,T,{locale:E,priority:!0,bypassPrefetchedCheck:!0})}};if(!M||b||"a"===r.type&&!("href"in r.props)){let F=void 0!==E?E:null==P?void 0:P.locale,G=(null==P?void 0:P.isLocaleDomain)&&d.getDomainLocale(T,F,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);q.href=G||p.addBasePath(u.addLocale(T,F,null==P?void 0:P.defaultLocale))}return M?l.default.cloneElement(r,q):l.default.createElement("a",Object.assign({},O,q),o)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},69246:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:o,disabled:u}=e,s=u||!l,[c,f]=r.useState(!1),[d,p]=r.useState(null);r.useEffect(()=>{if(l){if(!s&&!c&&d&&d.tagName){let e=function(e,t,o){let{id:r,observer:n,elements:l}=function(e){let t;let o={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===o.root&&e.margin===o.margin);if(r&&(t=i.get(r)))return t;let n=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e);return t={id:o,observer:l,elements:n},a.push(o),i.set(o,t),t}(o);return l.set(e,t),n.observe(e),function(){if(l.delete(e),n.unobserve(e),0===l.size){n.disconnect(),i.delete(r);let t=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);t>-1&&a.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:o});return e}}else if(!c){let r=n.requestIdleCallback(()=>f(!0));return()=>n.cancelIdleCallback(r)}},[d,s,o,t,c]);let g=r.useCallback(()=>{f(!1)},[]);return[p,c,g]};var r=o(67294),n=o(44686);let l="function"==typeof IntersectionObserver,i=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:o,blurWidth:r,blurHeight:n,blurDataURL:l}=e,i=r||t,a=n||o,u=l.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return i&&a?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(i," ").concat(a,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&n?"1":"20","'/%3E").concat(u,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(l,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(l,"'/%3E%3C/svg%3E")}},89824:function(e,t){"use strict";function o(e){let{config:t,src:o,width:r,quality:n}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(o),"&w=").concat(r,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o.__next_img_default=!0,t.default=o},9008:function(e,t,o){e.exports=o(83121)},25675:function(e,t,o){e.exports=o(19749)},41664:function(e,t,o){e.exports=o(31551)}}]);