(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8794)}])},1210:function(e,t){"use strict";function n(e,t,n,o){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;n(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,a=n(7273).Z,l=r(n(7294)),u=n(6273),i=n(2725),c=n(3462),f=n(1018),s=n(7190),d=n(1210),p=n(8684),v={};function h(e,t,n,o){if(e&&u.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,o)).catch(function(e){});var r=o&&void 0!==o.locale?o.locale:e&&e.locale;v[t+"%"+n+(r?"%"+r:"")]=!0}}var y=l.default.forwardRef(function(e,t){var n,r,y=e.href,b=e.as,x=e.children,g=e.prefetch,_=e.passHref,m=e.replace,j=e.shallow,C=e.scroll,M=e.locale,L=e.onClick,E=e.onMouseEnter,O=e.onTouchStart,R=e.legacyBehavior,k=void 0===R?!0!==Boolean(!1):R,w=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=x,k&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));var P=!1!==g,T=l.default.useContext(c.RouterContext),I=l.default.useContext(f.AppRouterContext);I&&(T=I);var N=l.default.useMemo(function(){var e=o(u.resolveHref(T,y,!0),2),t=e[0],n=e[1];return{href:t,as:b?u.resolveHref(T,b):n||t}},[T,y,b]),S=N.href,U=N.as,A=l.default.useRef(S),B=l.default.useRef(U);k&&(r=l.default.Children.only(n));var H=k?r&&"object"==typeof r&&r.ref:t,Z=o(s.useIntersection({rootMargin:"200px"}),3),z=Z[0],D=Z[1],K=Z[2],G=l.default.useCallback(function(e){(B.current!==U||A.current!==S)&&(K(),B.current=U,A.current=S),z(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[U,H,S,K,z]);l.default.useEffect(function(){var e=D&&P&&u.isLocalURL(S),t=void 0!==M?M:T&&T.locale,n=v[S+"%"+U+(t?"%"+t:"")];e&&!n&&h(T,S,U,{locale:t})},[U,S,D,M,P,T]);var X={ref:G,onClick:function(e){k||"function"!=typeof L||L(e),k&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,i,c,f,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(d=e).currentTarget.target)||"_self"===p)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&u.isLocalURL(n)){e.preventDefault();var d,p,v=function(){"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:a,locale:c,scroll:i}):t[r?"replace":"push"](n,{forceOptimisticNavigation:!s})};f?l.default.startTransition(v):v()}}(e,T,S,U,m,j,C,M,Boolean(I),P)},onMouseEnter:function(e){k||"function"!=typeof E||E(e),k&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),!(!P&&I)&&u.isLocalURL(S)&&h(T,S,U,{priority:!0})},onTouchStart:function(e){k||"function"!=typeof O||O(e),k&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),!(!P&&I)&&u.isLocalURL(S)&&h(T,S,U,{priority:!0})}};if(!k||_||"a"===r.type&&!("href"in r.props)){var q=void 0!==M?M:T&&T.locale,F=T&&T.isLocaleDomain&&d.getDomainLocale(U,q,T.locales,T.domainLocales);X.href=F||p.addBasePath(i.addLocale(U,q,T&&T.defaultLocale))}return k?l.default.cloneElement(r,X):l.default.createElement("a",Object.assign({},w,X),n)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!l,f=o(r.useState(!1),2),s=f[0],d=f[1],p=o(r.useState(null),2),v=p[0],h=p[1];return r.useEffect(function(){if(l){if(!c&&!s&&v&&v.tagName){var e,o,r,f,p,h,y;return o=function(e){return e&&d(e)},p=(f=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=i.find(function(e){return e.root===n.root&&e.margin===n.margin});if(o&&(t=u.get(o)))return t;var r=new Map;return t={id:n,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:r},i.push(n),u.set(n,t),t}(r={root:null==t?void 0:t.current,rootMargin:n})).id,h=f.observer,(y=f.elements).set(v,o),h.observe(v),function(){if(y.delete(v),h.unobserve(v),0===y.size){h.disconnect(),u.delete(p);var e=i.findIndex(function(e){return e.root===p.root&&e.margin===p.margin});e>-1&&i.splice(e,1)}}}}else if(!s){var b=a.requestIdleCallback(function(){return d(!0)});return function(){return a.cancelIdleCallback(b)}}},[v,c,n,t,s]),[h,s,r.useCallback(function(){d(!1)},[])]};var r=n(7294),a=n(9311),l="function"==typeof IntersectionObserver,u=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var o=(0,n(2648).Z)(n(7294)),r=o.default.createContext(null);t.AppRouterContext=r;var a=o.default.createContext(null);t.LayoutRouterContext=a;var l=o.default.createContext(null);t.GlobalLayoutRouterContext=l;var u=o.default.createContext(null);t.TemplateContext=u},8794:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var o=n(5893);n(1664);var r=n(9008),a=n.n(r);function l(e){var t=e.children,n=e.title,r=e.meta;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a(),{children:[(0,o.jsx)("title",{children:void 0===n?"My awesome website":n}),(0,o.jsx)("meta",{name:"description",content:void 0===r?"A site about programming":r}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,o.jsx)("link",{rel:"manifest",href:"/site.webmanifest"})]}),(0,o.jsx)("main",{children:t})]})}function u(){return(0,o.jsx)(l,{children:(0,o.jsx)("h1",{children:"Hello World!"})})}},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){n(8418)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);