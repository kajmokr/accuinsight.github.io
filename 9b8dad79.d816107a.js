(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{270:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return p})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return a}));var n=t(1),o=(t(0),t(365));const c={title:"serverToHdfs"},p={id:"pipeline/workflow/workspace/job-processing/server-to-hdfs",title:"serverToHdfs",description:"### Definition\r",source:"@site/docs\\pipeline\\workflow\\workspace\\job-processing\\server-to-hdfs.md",permalink:"/docs/pipeline/workflow/workspace/job-processing/server-to-hdfs",sidebar:"pipeline",previous:{title:"rScript",permalink:"/docs/pipeline/workflow/workspace/job-processing/r-script"},next:{title:"shell",permalink:"/docs/pipeline/workflow/workspace/job-processing/shell"}},i=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:i};function a({components:e,...r}){return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"\uc11c\ubc84\uc5d0 \uc704\uce58\ud55c \ud30c\uc77c\uc744 HDFS\ub85c \ubcf5\uc0ac\ud558\ub294 \ub178\ub4dc\uc785\ub2c8\ub2e4.",Object(o.b)("br",{parentName:"p"}),"\n","\uc88c\uce21 ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[serverToHdfs]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud569\ub2c8\ub2e4."),Object(o.b)("h3",{id:"set"},"Set"),Object(o.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0]"," > ","[\uc0dd\uc131]"," > ","[\uae30\ubcf8\uad6c\uc131]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(o.b)("h4",{id:"property"},"property"),Object(o.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/servertohdfs01_property.png",alt:"flow060"}))),Object(o.b)("p",null,"property \uc911 1,4,5 \ud56d\ubaa9\uc740 ","[\uc5f0\uacb0\uad00\ub9ac]","\uc5d0 \ub4f1\ub85d\ub41c \uc6d0\uaca9\uc11c\ubc84 \uc815\ubcf4 \uc120\ud0dd \uc2dc \uc790\ub3d9\uc73c\ub85c \uc785\ub825\ub418\uba70, \uc6d0\ud558\ub294 \uc11c\ubc84\ubaa9\ub85d\uc774 \uc5c6\uc744 \uacbd\uc6b0 ","[\uc124\uc815]"," > ","[\uc6d0\uaca9 \uc11c\ubc84]","\uc5d0\uc11c \ud544\uc694\uc11c\ubc84\ub97c \uba3c\uc800 \ub4f1\ub85d\ud569\ub2c8\ub2e4."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\uc6d0\uaca9 \uc11c\ubc84 IP : ","[\uc124\uc815]"," > ","[\uc6d0\uaca9 \uc11c\ubc84]","\uc5d0 \uc800\uc7a5\ub41c \uc11c\ubc84 IP, PORT"),Object(o.b)("li",{parentName:"ol"},"sourceFolder : source \ud3f4\ub354 \uacbd\ub85c ex) /home/dpcore"),Object(o.b)("li",{parentName:"ol"},"sourceFile : source \ud30c\uc77c \uba85 ex) target.csv"),Object(o.b)("li",{parentName:"ol"},"user : ","[\uc124\uc815]"," > ","[\uc6d0\uaca9 \uc11c\ubc84]","\uc5d0 \uc800\uc7a5\ub41c \uc11c\ubc84 SSH User ID"),Object(o.b)("li",{parentName:"ol"},"password : ","[\uc124\uc815]"," > ","[\uc6d0\uaca9 \uc11c\ubc84]","\uc5d0 \uc800\uc7a5\ub41c \uc11c\ubc84 SSH User Password"),Object(o.b)("li",{parentName:"ol"},"hdfsFilePath : \uc800\uc7a5\ud560 HDFS \uacbd\ub85c ex) /tmp")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"\uc6d0\uaca9\uc11c\ubc84 /home/dpcore \uacbd\ub85c\uc5d0 \uc704\uce58\ud55c servertohdfs.csv\ud30c\uc77c\uc744 HDFS\uc5d0 \uc801\uc7ac\ud558\uace0\uc790 \ud569\ub2c8\ub2e4."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/servertohdfs02_remoteserver.png",alt:"flow026"}))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\ubaa9\ub85d\uc5f4\uae30 \ubc84\ud2bc\uc744 \ud65c\uc6a9\ud558\uc5ec \uc6d0\uaca9\uc11c\ubc84 \uc815\ubcf4\ub97c \uc120\ud0dd, \uc11c\ubc84\uc815\ubcf4\ub97c \uc120\ud0dd\ud558\uba74 ","[1.\uc6d0\uaca9 \uc11c\ubc84 IP]",", ","[4.user]",", ","[5.password]"," \ud56d\ubaa9\uc774 \uc790\ub3d9 \uc785\ub825 ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"/docs/pipeline/setting/remoteserver"}),"\uc6d0\uaca9\uc11c\ubc84 \ub4f1\ub85d\ubc29\ubc95\uc740 \uc6d0\uaca9\uc11c\ubc84\uad00\ub9ac \ub9e4\ub274\uc5bc \ucc38\uace0"))))),Object(o.b)("li",{parentName:"ol"},"[2.sourceFolder]",'\uc5d0 "/home/dpcore"\ub97c ',"[3.sourceFile]",'\uc5d0 "servertohdfs.csv"\ub97c \uc785\ub825'),Object(o.b)("li",{parentName:"ol"},"[6.hdfsFilePath]"," \uc815\ubcf4 \uc785\ub825")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/servertohdfs03_property.png",alt:"flow027"}))),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc2e4\ud589\uacb0\uacfc ")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/servertohdfs04_result.png",alt:"flow029"}))))}a.isMDXComponent=!0},365:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=o.a.createContext({}),s=function(e){var r=o.a.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):i({},r,{},e)),t},b=function(e){var r=s(e.components);return o.a.createElement(a.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,p=e.parentName,a=l(e,["components","mdxType","originalType","parentName"]),b=s(t),f=n,d=b["".concat(p,".").concat(f)]||b[f]||u[f]||c;return t?o.a.createElement(d,i({ref:r},a,{components:t})):o.a.createElement(d,i({ref:r},a))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,p=new Array(c);p[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var a=2;a<c;a++)p[a]=t[a];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);