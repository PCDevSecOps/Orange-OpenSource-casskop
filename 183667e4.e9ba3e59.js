(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),o=(n(0),n(193)),c={id:"6_uninstall_casskop",title:"Uninstall Casskop",sidebar_label:"Uninstall Casskop"},s={id:"5_operations/6_uninstall_casskop",title:"Uninstall Casskop",description:"## Uninstaling the Charts",source:"@site/docs/5_operations/6_uninstall_casskop.md",permalink:"/casskop/docs/5_operations/6_uninstall_casskop",editUrl:"https://github.com/Orange-OpenSource//casskop/edit/master/website/docs/5_operations/6_uninstall_casskop.md",sidebar_label:"Uninstall Casskop",sidebar:"docs",previous:{title:"Upgrade Bootstrap Image",permalink:"/casskop/docs/5_operations/5_upgrade_bootstrap_image"},next:{title:"Cassandra cluster",permalink:"/casskop/docs/6_references/1_cassandra_cluster/1_cassandra_cluster"}},l=[{value:"Uninstaling the Charts",id:"uninstaling-the-charts",children:[]}],i={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"uninstaling-the-charts"},"Uninstaling the Charts"),Object(o.b)("p",null,"If you want to delete the operator from your Kubernetes cluster, the operator deployment\nshould be deleted."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ helm delete casskop\n")),Object(o.b)("p",null,"The command removes all the Kubernetes components associated with the chart and deletes the helm release."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The CRD created by the chart are not removed by default and should be manually cleaned up (if required)")),Object(o.b)("p",null,"Manually delete the CRD:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl delete crd cassandraclusters.dfy.orange.com\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83d\udea9 If you delete the CRD then it will delete ",Object(o.b)("strong",{parentName:"p"},"ALL")," Clusters that has been created using this CRD!!!\nPlease never delete a CRD without very very good care")))}p.isMDXComponent=!0},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(f,s({ref:t},i,{components:n})):a.a.createElement(f,s({ref:t},i))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);