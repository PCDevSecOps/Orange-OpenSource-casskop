(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),o=(n(0),n(199)),s={id:"3_multi_casskop",title:"Multi-CassKop",sidebar_label:"Multi-CassKop"},i={id:"5_operations/3_multi_casskop",title:"Multi-CassKop",description:"Here is describes how perform some operations based on the MultiCasskop Operator.",source:"@site/docs/5_operations/3_multi_casskop.md",permalink:"/casskop/docs/5_operations/3_multi_casskop",editUrl:"https://github.com/Orange-OpenSource/casskop/edit/master/website/docs/5_operations/3_multi_casskop.md",sidebar_label:"Multi-CassKop",sidebar:"docs",previous:{title:"Pods Operations",permalink:"/casskop/docs/5_operations/2_pods_operations"},next:{title:"Upgrade Operator",permalink:"/casskop/docs/5_operations/4_upgrade_operator"}},c=[{value:"Remove a Kubernetes site used in a Cassandra Ring",id:"remove-a-kubernetes-site-used-in-a-cassandra-ring",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Here is describes how perform some operations based on the MultiCasskop Operator."),Object(o.b)("p",null,"The MultiCasskop operator manage nothing else than CassandraCluster ressources. Today, this is not through it that you will manage cassandra operations (this is the duty of Cassskop operator).\nSo the only things we will be able to work with are the CassandraCluster's informations and Kubernetes Cluster's client used."),Object(o.b)("h2",{id:"remove-a-kubernetes-site-used-in-a-cassandra-ring"},"Remove a Kubernetes site used in a Cassandra Ring"),Object(o.b)("p",null,"Performing a scale down at the MultiCasskop operator level, is by designed scaledown the number of CassandraCluster resource deployed, and so the number of Kubernetes Cluster clients used in the cassandra Ring."),Object(o.b)("p",null,"To achieve this scaledown the following steps are required :"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"First of all you need to remove all cassandra DC associated to the Kubernetes Cluster client that you want to remove of the ",Object(o.b)("inlineCode",{parentName:"p"},"MultiCasskop")," resource : "),Object(o.b)("p",{parentName:"li"},"i - Ensure that there is no more data replicated on it. For example you can check and perform it in following this instructions : "),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"cqlsh> DESCRIBE keyspace <keyspace name>\n\nCREATE KEYSPACE system_distributed WITH replication = {'class': 'NetworkTopologyStrategy', 'dc1': '1', 'dc2': '1', dc3': '1'}  AND durable_writes = true;\ncqls> ALTER KEYSPACE system_distributed WITH replication = {'class': 'NetworkTopologyStrategy', 'dc1': '1', 'dc3': '1'}  AND durable_writes = true;\n")),Object(o.b)("p",{parentName:"li"},"ii - Change decrease the number of node per rack for the DC to 0 : "),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"...\nsite_a:\n  spec:\n    topology:\n      dc:\n        - name: dc1\n          nodesPerRacks: 1\n          numTokens: 256\n          labels:\n            failure-domain.beta.kubernetes.io/region: europe-west1\n          rack:\n            - name: rack1\n              rollingPartition: 0\n              labels:\n                failure-domain.beta.kubernetes.io/zone: europe-west1-b\nsite_b:\n  spec:\n    topology:\n      dc:\n        - name: dc2\n          nodesPerRacks: 0       <---- Downsize to 0\n          numTokens: 256\n          labels:\n            failure-domain.beta.kubernetes.io/region: europe-west1\n          rack:\n            - name: rack1\n              rollingPartition: 0\n              labels:\n                failure-domain.beta.kubernetes.io/zone: europe-west1-c\nsite_c:\n  spec:\n    topology:\n      dc:\n        - name: dc3\n          nodesPerRacks: 1\n          numTokens: 256\n          labels:\n            failure-domain.beta.kubernetes.io/region: europe-west1\n          rack:\n            - name: rack1\n              rollingPartition: 0\n              labels:\n                failure-domain.beta.kubernetes.io/zone: europe-west1-c\n...\n")),Object(o.b)("p",{parentName:"li"},"iii -  This will perform the downscale of the nodes into the DC."))),Object(o.b)("p",null,"2 - Remove all DC from site list :"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"...\nsite_b:\n  spec:\n    topology:\n      dc:\n...\n")),Object(o.b)("p",null,"3 - Remove the site of ",Object(o.b)("inlineCode",{parentName:"p"},"MultiCasskop")," resource.\n4 - Remove manually the ",Object(o.b)("inlineCode",{parentName:"p"},"CassandraCluster")," resource on the remote site."))}p.isMDXComponent=!0},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);