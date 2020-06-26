(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{341:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(1),p=(r(0),r(365));const o={title:"distcp"},i={id:"pipeline/workflow/workspace/job-processing/distcp",title:"distcp",description:"### Definition\r",source:"@site/docs/pipeline/workflow/workspace/job-processing/distcp.md",permalink:"/docs/pipeline/workflow/workspace/job-processing/distcp",sidebar:"pipeline",previous:{title:"fs",permalink:"/docs/pipeline/workflow/workspace/job-processing/fs"},next:{title:"java",permalink:"/docs/pipeline/workflow/workspace/job-processing/java"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],a={rightToc:c};function l({components:e,...t}){return Object(p.b)("wrapper",Object(n.a)({},a,t,{components:e,mdxType:"MDXLayout"}),Object(p.b)("h3",{id:"definition"},"Definition"),Object(p.b)("p",null,"HDFS\uc5d0 \uc800\uc7a5\ub41c \ud30c\uc77c\uc744 \ub2e4\ub978 HDFS\ub85c \ubcf5\uc0ac\ud558\ub294 \ub178\ub4dc\uc785\ub2c8\ub2e4.",Object(p.b)("br",{parentName:"p"}),"\n","\uc88c\uce21 ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[distcp]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud569\ub2c8\ub2e4.\nProperty \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(p.b)("h3",{id:"set"},"Set"),Object(p.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0]"," > ","[\uc0dd\uc131]"," > ","[\uae30\ubcf8\uad6c\uc131]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(p.b)("h4",{id:"property"},"property"),Object(p.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(p.b)("p",null,Object(p.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/distcp01_property.png",alt:"distcp01"}))),Object(p.b)("ol",null,Object(p.b)("li",{parentName:"ol"},"retry",Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"max : \uc7ac\uc218\ud589 \ud69f \uc218"),Object(p.b)("li",{parentName:"ul"},"period : \uc7ac\uc218\ud589 \uac04\uaca9"))),Object(p.b)("li",{parentName:"ol"},"argument : \uc778\uc218 \uc124\uc815"),Object(p.b)("li",{parentName:"ol"},"forceOK : \uc2e4\ud328 \uc2dc \uac15\uc81c OK \ucc98\ub9ac \uc5ec\ubd80")),Object(p.b)("h3",{id:"example"},"Example"),Object(p.b)("p",null,"kbtest \ud074\ub7ec\uc2a4\ud130\uc758 HR_Retention.csv\ud30c\uc77c\uc744 test1234 \ud074\ub7ec\uc2a4\ud130\uc5d0 ","[distcp]"," \ub178\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubcf5\uc0ac\ud569\ub2c8\ub2e4. "),Object(p.b)("ol",null,Object(p.b)("li",{parentName:"ol"},Object(p.b)("p",{parentName:"li"},"\uccab \ubc88\uc9f8 arg\uc5d0 HR_Retention.csv\ud30c\uc77c\uc774 \uc800\uc7a5\ub41c path\ub97c, \ub450 \ubc88\uc9f8 arg\uc5d0 target path\ub97c \uc785\ub825",Object(p.b)("br",{parentName:"p"}),"\n","- source : hdfs://kbtest-accu-hdfs-nn.suka:9000/tmp/test",Object(p.b)("br",{parentName:"p"}),"\n","- target : hdfs://test1234-accu-hdfs-nn.suka:9000/tmp",Object(p.b)("br",{parentName:"p"}),"\n",Object(p.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/distcp02_property.png",alt:"distcp02"})))),Object(p.b)("li",{parentName:"ol"},Object(p.b)("p",{parentName:"li"},"distcp \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc2e4\ud589 \ud6c4 test1234 \ud074\ub7ec\uc2a4\ud130\uc5d0 ./test/HR_retention.csv\ud30c\uc77c \uc0dd\uc131",Object(p.b)("br",{parentName:"p"}),"\n",Object(p.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/distcp03_result.png",alt:"distcp03"}))))))}l.isMDXComponent=!0},365:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),p=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=p.a.createContext({}),s=function(e){var t=p.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},b=function(e){var t=s(e.components);return p.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),b=s(r),f=n,d=b["".concat(i,".").concat(f)]||b[f]||u[f]||o;return r?p.a.createElement(d,c({ref:t},l,{components:r})):p.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return p.a.createElement.apply(null,i)}return p.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);