(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{139:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(m,c(c({ref:t},i),{},{components:n})):a.a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(139)),s=["components"],c={id:"5_uninstall_casskop",title:"Uninstall Casskop",sidebar_label:"Uninstall Casskop"},l={unversionedId:"5_operations/5_uninstall_casskop",id:"5_operations/5_uninstall_casskop",isDocsHomePage:!1,title:"Uninstall Casskop",description:"Uninstaling the Charts",source:"@site/docs/5_operations/6_uninstall_casskop.md",slug:"/5_operations/5_uninstall_casskop",permalink:"/casskop/docs/5_operations/5_uninstall_casskop",editUrl:"https://github.com/Orange-OpenSource/casskop/edit/master/website/docs/5_operations/6_uninstall_casskop.md",version:"current",sidebar_label:"Uninstall Casskop",sidebar:"docs",previous:{title:"Upgrade Operator",permalink:"/casskop/docs/5_operations/4_upgrade_operator"},next:{title:"Cassandra cluster",permalink:"/casskop/docs/6_references/1_cassandra_cluster"}},i=[{value:"Uninstaling the Charts",id:"uninstaling-the-charts",children:[]}],u={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,s);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"uninstaling-the-charts"},"Uninstaling the Charts"),Object(o.b)("p",null,"If you want to delete the operator from your Kubernetes cluster, the operator deployment\nshould be deleted."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ helm uninstall casskop\n")),Object(o.b)("p",null,"The command removes all the Kubernetes components associated with the chart and deletes the helm release."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The CRDs created by the chart are not removed by Helm and should be manually cleaned up (if required)")),Object(o.b)("p",null,"Manually delete the CRDs:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"kubectl delete crd cassandraclusters.db.orange.com\nkubectl delete crd cassandrabackups.db.orange.com\nkubectl delete crd cassandrarestores.db.orange.com\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83d\udea9 If you delete the CRDs then : It will delete ",Object(o.b)("strong",{parentName:"p"},"ALL")," Clusters that has been created using these CRDs!!!\nPlease never delete CRDs without very very good care")))}p.isMDXComponent=!0}}]);