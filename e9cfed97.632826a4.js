(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{316:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(1),o=r(6),a=(r(0),r(342)),i={title:"pivot"},c={id:"pipeline/workflow/workspace/data-processing-basic/pivot",title:"pivot",description:"## pivot",source:"@site/docs/pipeline/workflow/workspace/data-processing-basic/pivot.md",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/pivot",sidebar:"pipeline",previous:{title:"limit",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/limit"},next:{title:"replace",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/replace"}},p=[{value:"pivot",id:"pivot",children:[]}],l={rightToc:p};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"pivot"},"pivot"),Object(a.b)("p",null,"\uc5f4\uc744 \ud53c\ubc97\ud558\uc5ec \uc9c0\uc815\ub41c \uc9d1\uacc4\ud568\uc218\ub97c \uc218\ud589\ud55c\ub2e4. \uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uae30\ubcf8)]","\ub178\ub4dc \uc911 ","[pivot]","\ub178\ub4dc\ub97c drag & drop \ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4 Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic032_pivot_workflow.png",alt:"prebasic032"}))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"groupBy : \uadf8\ub8f9\ud551 \uae30\uc900 \uceec\ub7fc\uc744 \uc120\ud0dd\ud55c\ub2e4. "),Object(a.b)("li",{parentName:"ol"},"pivot_col : \ud53c\ubc97\ud560 \uceec\ub7fc\uc744 \uc120\ud0dd\ud55c\ub2e4. "),Object(a.b)("li",{parentName:"ol"},"value : value \uac12\uc744 \uc785\ub825\ud55c\ub2e4. "),Object(a.b)("li",{parentName:"ol"},"func : \uc9d1\uacc4\uc5d0 \uc0ac\uc6a9\ud560 \ud568\uc218(max, min, avg, count, sum)\ub97c \uc120\ud0dd\ud55c\ub2e4."),Object(a.b)("li",{parentName:"ol"},"target_col : \uc9d1\uacc4 \uae30\uc900 \uceec\ub7fc\uc744 \uc120\ud0dd\ud55c\ub2e4. "),Object(a.b)("li",{parentName:"ol"},"overwriteSchema : \ub0b4\uc6a9\uc785\ub825 \ud544\uc694 "),Object(a.b)("li",{parentName:"ol"},"newSchema : \ub0b4\uc6a9\uc785\ub825 \ud544\uc694")),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic033_pivot_property.png",alt:"prebasic033"}))))}s.isMDXComponent=!0},342:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},b=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(r),f=n,m=b["".concat(i,".").concat(f)]||b[f]||u[f]||a;return r?o.a.createElement(m,c({ref:t},l,{components:r})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);