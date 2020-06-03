(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{239:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var o=r(1),n=r(6),c=(r(0),r(342)),i={title:"hdfsToIcos"},a={id:"batchpipeline/workflow/workspace/job-processing/hdfs-to-icos",title:"hdfsToIcos",description:"### Definition",source:"@site/docs/batchpipeline/workflow/workspace/job-processing/hdfs-to-icos.md",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/hdfs-to-icos",sidebar:"batchpipeline",previous:{title:"fs",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/fs"},next:{title:"hdfsToS3",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/hdfs-to-s3"}},l=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],p={rightToc:l};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"definition"},"Definition"),Object(c.b)("p",null,"HDFS \ud30c\uc77c/\ud3f4\ub354\ub97c ICOS\uc5d0 \ubcf5\uc0ac \ud558\ub294 \ub178\ub4dc\uc774\ub2e4. \uc88c\uce21 ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[hdfsToIcos]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(c.b)("h3",{id:"set"},"Set"),Object(c.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud55c\ub2e4."),Object(c.b)("h4",{id:"property"},"property"),Object(c.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(c.b)("p",null,Object(c.b)("img",Object(o.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow006_hdfstoicos_property.png",alt:"flow006"}))),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"hdfs\ud30c\uc77c\uacbd\ub85c(\ubd88\ub7ec\uc624\uae30) : \uc774\ub3d9 \ub300\uc0c1 \ud30c\uc77c\uc758 HDFS \uacbd\ub85c"),Object(c.b)("li",{parentName:"ol"},"ICOS \ud30c\uc77c\uacbd\ub85c (\uc800\uc7a5\uacbd\ub85c) : \uc800\uc7a5\ud560 ICOS \ud30c\uc77c\uacbd\ub85c \uc120\ud0dd "),Object(c.b)("li",{parentName:"ol"},"ETL \uacb0\uacfc\ud30c\uc77c \uc5ec\ubd80 : ETL \ub178\ub4dc\ub97c \ud1b5\ud574 \uc0dd\uc131\ub41c \ubaa8\ub4e0 \ud30c\uc77c\uc744 \ub300\uc0c1\uc73c\ub85c \ud560\uc9c0 \uc5ec\ubd80",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"HDFS \ud30c\uc77c\uc744 \uc544\ub798\uc640 \uac19\uc774 \uc785\ub825\ud55c\uacbd\uc6b0, \ud558\uc704 part*\ud574\ub2f9\ud30c\uc77c \ubaa8\ub450 \uc774\ub3d9"),Object(c.b)("li",{parentName:"ul"},"hdfs://OOO.OOO.OOO.OOO:8020/user/sample_user/source_data/"))),Object(c.b)("li",{parentName:"ol"},"Credential : ICOS \uc5d1\uc138\uc2a4 \uc815\ubcf4 (ICOS \ud30c\uc77c\uacbd\ub85c \uc120\ud0dd\uc2dc \uc790\ub3d9 \uc124\uc815\ub428) ")),Object(c.b)("h3",{id:"example"},"Example"),Object(c.b)("p",null,"hdfs\uc5d0 \uc800\uc7a5\ub41c csv\ud30c\uc77c\uc744 icos\ub85c \uc774\ub3d9\ud558\ub294 \uc608\uc81c\uc774\ub2e4. "),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"setting \ud328\ub110\uc5d0\uc11c \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc2e4\ud589 \ud074\ub7ec\uc2a4\ud130\ub97c \uc120\ud0dd\ud55c\ub2e4. "),Object(c.b)("li",{parentName:"ol"},"property \ud328\ub110\uc5d0\uc11c hdfs, icos \uacbd\ub85c\ub97c \uc9c0\uc815\ud55c\ub2e4. ETL \uacb0\uacfc\ud30c\uc77c\uc5ec\ubd80\ub294 FALSE\ub85c \uc120\ud0dd\ud55c\ub2e4. icos \uc800\uc7a5\uacbd\ub85c\ub97c \uc9c0\uc815\ud558\uba74 4.credential \ud56d\ubaa9\uc740 \uc790\ub3d9 \uc124\uc815\ub41c\ub2e4. ")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"1.HDFS \ud30c\uc77c \uacbd\ub85c(\ubd88\ub7ec\uc624\uae30)",Object(c.b)("br",{parentName:"p"}),"\n",Object(c.b)("img",Object(o.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow065_hdfstoicos_hdfs%EA%B2%BD%EB%A1%9C%EC%A7%80%EC%A0%95.png",alt:"flow065"})))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"2.ICOS \ud30c\uc77c \uacbd\ub85c(\uc800\uc7a5\uacbd\ub85c)",Object(c.b)("br",{parentName:"p"}),"\n",Object(c.b)("img",Object(o.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow066_hdfstoicos_icos%EA%B2%BD%EB%A1%9C%EC%A7%80%EC%A0%95.png",alt:"flow066"})))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"property \uc124\uc815\ub0b4\uc5ed",Object(c.b)("br",{parentName:"p"}),"\n",Object(c.b)("img",Object(o.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow067_hdfstoicos_property%EC%84%A4%EC%A0%95%EB%82%B4%EC%97%AD.png",alt:"flow067"}))))),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},"\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc800\uc7a5 \ubc0f \uc2e4\ud589 \ud6c4 ICOS \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 csv\ud30c\uc77c\uc774 \uc800\uc7a5\ub410\ub2e4.",Object(c.b)("br",{parentName:"li"}),Object(c.b)("img",Object(o.a)({parentName:"li"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow068_hdfstoicos_hdfstoicos%EC%8B%A4%ED%96%89%EA%B2%B0%EA%B3%BC.png",alt:"flow068"})))),Object(c.b)("h3",{id:"troubleshooting"},"Troubleshooting"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"ICOS \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc2a4\ud1a0\ub9ac\uc9c0 \ubaa9\ub85d\uc774 \uc870\ud68c\ub418\uc9c0 \uc54a\uc744 \uacbd\uc6b0 ")),Object(c.b)("p",null,Object(c.b)("img",Object(o.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow069_hdfstoicos_icosbrowser_error.png",alt:"flow069"}))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"dpcore > core-module-common config\uc5d0\uc11c ","[icos.config.use=false]"," \uc778\uc9c0 \ud655\uc778"),Object(c.b)("li",{parentName:"ul"},"[icos.config.use=true]","\ub85c \uc124\uc815\uc2dc ICOS \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc2a4\ud1a0\ub9ac\uc9c0 \ubaa9\ub85d \ud655\uc778 \uac00\ub2a5"),Object(c.b)("li",{parentName:"ul"},"false \uc124\uc815\uc2dc true\ub85c \ubcc0\uacbd \ud6c4 core-module-common \ubaa8\ub4c8 \uc7ac\ubc30\ud3ec \ud544\uc694 ")),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},"ICOS \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc2a4\ud1a0\ub9ac\uc9c0 \ubaa9\ub85d\uc774 \uc870\ud68c\ub418\uc9c0 \uc54a\uc744 \uacbd\uc6b0 ")),Object(c.b)("p",null,Object(c.b)("img",Object(o.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow070_hdfstoicos_icosbrowser_bucketerror.png",alt:"flow070"}))))}b.isMDXComponent=!0},342:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u}));var o=r(0),n=r.n(o);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),b=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a({},t,{},e)),r},s=function(e){var t=b(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=Object(o.forwardRef)((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(r),f=o,u=s["".concat(i,".").concat(f)]||s[f]||O[f]||c;return r?n.a.createElement(u,a({ref:t},p,{components:r})):n.a.createElement(u,a({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<c;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);