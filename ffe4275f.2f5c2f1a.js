(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{362:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(1),a=(r(0),r(365));const o={title:"convertDate"},c={id:"pipeline/workflow/workspace/data-processing-advanced/convert-date",title:"convertDate",description:"### Definition\r",source:"@site/docs\\pipeline\\workflow\\workspace\\data-processing-advanced\\convert-date.md",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/convert-date",sidebar:"pipeline",previous:{title:"codeToMatrix",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/code-to-matrix"},next:{title:"customCode",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/custom-code"}},i=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:i};function l({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"definition"},"Definition"),Object(a.b)("p",null,"timestamp\uc758 \ub0a0\uc9dc\ud3ec\ub9f7\uc744 \ubcc0\uacbd\ud55c\ub2e4. \uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uace0\uae09)]","\ub178\ub4dc \uc911 ","[convertDate]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud569\ub2c8\ub2e4."),Object(a.b)("h3",{id:"set"},"Set"),Object(a.b)("p",null,"[setting]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(a.b)("h4",{id:"property"},"property"),Object(a.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/data-processing-advanced/convertDate_property.png",alt:"convertDate"}))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"col : \ubcc0\uacbd\ud560 \uceec\ub7fc\uba85 \uc785\ub825"),Object(a.b)("li",{parentName:"ol"},"newColumn : \ucd94\uac00 \uceec\ub7fc\uba85 \uc785\ub825"),Object(a.b)("li",{parentName:"ol"},"oldFormat : \uc774\uc804 \uceec\ub7fc\uc758 \ub0a0\uc9dc \ud3ec\ub9f7"),Object(a.b)("li",{parentName:"ol"},"newFormat : \uc2e0\uaddc \uceec\ub7fc\uc758 \ub0a0\uc9dc \ud3ec\ub9f7")),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("p",null,'timestamp \ud3ec\ub9f7\uc744 "yyyy-MM-dd HH:mm:ss" \uc5d0\uc11c "yyyy-MM-dd"\ub85c \ubcc0\ud658\ud55c \uc2e0\uaddc \uceec\ub7fc\uc744 \ucd94\uac00\ud558\ub294 \uc6cc\ud06c\ud50c\ub85c\uc6b0\ub97c \uad6c\uc131\ud569\ub2c8\ub2e4.  '),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"[HDFS\ubd88\ub7ec\uc624\uae30]",", ","[convertDate]"," \ub178\ub4dc\ub97c Designer\uc5d0 Drag & Drop\ud558\uc5ec \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131",Object(a.b)("br",{parentName:"li"}),Object(a.b)("img",Object(n.a)({parentName:"li"},{src:"/img/pipeline/workflow/workspace/data-processing-advanced/convertDate.png",alt:"convertDate"}))),Object(a.b)("li",{parentName:"ol"},"[convertDate]","\ub178\ub4dc\uc5d0 \uc544\ub798\uc640 \uac19\uc774 \uc785\ub825 \ud6c4 snapshot \ud074\ub9ad",Object(a.b)("br",{parentName:"li"}),Object(a.b)("img",Object(n.a)({parentName:"li"},{src:"/img/pipeline/workflow/workspace/data-processing-advanced/convertDate_example.png",alt:"convertDate"})))))}l.isMDXComponent=!0},365:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},s=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=d(r),u=n,m=s["".concat(c,".").concat(u)]||s[u]||b[u]||o;return r?a.a.createElement(m,i({ref:t},l,{components:r})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);