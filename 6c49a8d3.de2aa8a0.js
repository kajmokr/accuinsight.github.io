(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{147:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return i}));var n=r(1),o=(r(0),r(218));const c={title:"hdfsToS3"},a={id:"batchpipeline/workflow/workspace/job-processing/hdfs-to-s3",title:"hdfsToS3",description:"## hdfsToS3\r",source:"@site/docs\\batchpipeline\\workflow\\workspace\\job-processing\\hdfs-to-s3.md",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/hdfs-to-s3",sidebar:"batchpipeline",previous:{title:"hdfsToIcos",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/hdfs-to-icos"},next:{title:"hdfsToServer",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/hdfs-to-server"}},p=[{value:"hdfsToS3",id:"hdfstos3",children:[{value:"Example",id:"example",children:[]}]}],l={rightToc:p};function i({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hdfstos3"},"hdfsToS3"),Object(o.b)("p",null,"HDFS \ud30c\uc77c/\ud3f4\ub354\ub97c S3\uc5d0 \ubcf5\uc0ac \ud558\ub294 \ub178\ub4dc\uc774\ub2e4. \uc88c\uce21 ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[hdfsToS3]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4. "),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow007_hdfstos3_property.png",alt:"flow007"}))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"hdfs\ud30c\uc77c\uacbd\ub85c(\ubd88\ub7ec\uc624\uae30) : \ubcf5\uc0ac\ud560 \ud30c\uc77c \uacbd\ub85c \uc120\ud0dd"),Object(o.b)("li",{parentName:"ol"},"S3 \ud30c\uc77c\uacbd\ub85c (\uc800\uc7a5\uacbd\ub85c) : \uc800\uc7a5\ud560 S3 \ud30c\uc77c\uacbd\ub85c \uc120\ud0dd     "),Object(o.b)("li",{parentName:"ol"},"ETL \uacb0\uacfc\ud30c\uc77c \uc5ec\ubd80 : ETL \uacb0\uacfc\ud30c\uc77c\uc744 \ub85c\ub4dc\ud558\ub824\ub294 \uacbd\uc6b0\uc5d0 True \uc120\ud0dd"),Object(o.b)("li",{parentName:"ol"},"Credential : S3 \uc5d1\uc138\uc2a4 \uc815\ubcf4 ( S3 \ud30c\uc77c\uacbd\ub85c \uc120\ud0dd\uc2dc \uc790\ub3d9\uc14b\ud305\ub428 )")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"HDFS \ud30c\uc77c\uc5d0 \uc801\uc7ac\ub41c \ub370\uc774\ud130\ub97c S3\uc5d0 \ubcf5\uc0ac\ud55c\ub2e4. "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"hdfs\ud30c\uc77c\uacbd\ub85c(\ubd88\ub7ec\uc624\uae30)\uc5d0\uc11c ","[\ud31d\uc5c5\uc5f4\uae30]"," \ubc84\ud2bc\uc744 \ub20c\ub7ec \ud074\ub7ec\uc2a4\ud130\uc640 \ub370\uc774\ud130\ub97c \uc120\ud0dd\ud55c\ub2e4.")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow056_hdfstois3_hdfs%EC%A0%80%EC%9E%A5%EA%B2%BD%EB%A1%9C%EC%84%A0%ED%83%9D.png",alt:"flow056"}))),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"S3 \ud30c\uc77c\uacbd\ub85c(\uc800\uc7a5\uacbd\ub85c)\uc5d0\uc11c ","[\ud31d\uc5c5\uc5f4\uae30]"," \ubc84\ud2bc\uc744 \ub20c\ub7ec Bucket \ubc0f \uc800\uc7a5\uacbd\ub85c\ub97c \uc120\ud0dd\ud55c\ub2e4. \uc6b0\uce21 ","[Bucket\uad00\ub9ac]"," \ubc84\ud2bc\uc744 \ub20c\ub7ec \ubc84\ud0b7\uc744 \ucd94\uac00\ud560 \uc218 \uc788\ub2e4. S3 \ud30c\uc77c\uacbd\ub85c\ub97c \uc120\ud0dd\ud558\uba74 4. Credential\uc740 \uc790\ub3d9 \uc14b\ud305\ub41c\ub2e4. ")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow057_hdfstois3_s3%EC%A0%80%EC%9E%A5%EA%B2%BD%EB%A1%9C%EC%84%A0%ED%83%9D.png",alt:"flow058"}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"[Bucket\uad00\ub9ac]"," \ubc84\ud2bc\uc744 \ub20c\ub7ec \uc2e0\uaddc\ubc84\ud0b7 \uc0dd\uc131\ud560 \uc218 \uc788\uc74c")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow058_hdfstois3_s3%EB%B2%84%ED%82%B7%EC%83%9D%EC%84%B1.png",alt:"flow058"}))),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"ETL \uacb0\uacfc\ud30c\uc77c \uc5ec\ubd80\ub294 True\ub97c \uc120\ud0dd\ud55c\ub2e4. ")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow059_hdfstois3_property.png",alt:"flow059"}))))}i.isMDXComponent=!0},218:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),s=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},b=function(e){var t=s(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=s(r),u=n,d=b["".concat(a,".").concat(u)]||b[u]||f[u]||c;return r?o.a.createElement(d,p({ref:t},i,{components:r})):o.a.createElement(d,p({ref:t},i))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var i=2;i<c;i++)a[i]=r[i];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);