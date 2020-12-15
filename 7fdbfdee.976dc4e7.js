(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{104:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),s=(r(0),r(141)),i={id:"2_cassandra_cluster",title:"Cassandra Cluster",sidebar_label:"Cassandra Cluster"},o={unversionedId:"3_configuration_deployment/2_cassandra_cluster",id:"3_configuration_deployment/2_cassandra_cluster",isDocsHomePage:!1,title:"Cassandra Cluster",description:"The full schema of the CassandraCluster resource is described in the Cassandra Cluster CRD Definition.",source:"@site/docs/3_configuration_deployment/2_cassandra_cluster.md",slug:"/3_configuration_deployment/2_cassandra_cluster",permalink:"/casskop/docs/3_configuration_deployment/2_cassandra_cluster",editUrl:"https://github.com/Orange-OpenSource/casskop/edit/master/website/docs/3_configuration_deployment/2_cassandra_cluster.md",version:"current",sidebar_label:"Cassandra Cluster",sidebar:"docs",previous:{title:"Customizable install with Helm",permalink:"/casskop/docs/3_configuration_deployment/1_customizable_install_with_helm"},next:{title:"Storage",permalink:"/casskop/docs/3_configuration_deployment/3_storage"}},c=[{value:"Resource limits and requests",id:"resource-limits-and-requests",children:[{value:"Resource requests",id:"resource-requests",children:[]},{value:"Resource limits",id:"resource-limits",children:[]},{value:"Supported CPU formats",id:"supported-cpu-formats",children:[]},{value:"Supported memory formats",id:"supported-memory-formats",children:[]}]},{value:"Configuring resource requests and limits",id:"configuring-resource-requests-and-limits",children:[]}],l={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The full schema of the ",Object(s.b)("inlineCode",{parentName:"p"},"CassandraCluster")," resource is described in the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"#cassandra-cluster-crd-definition-version-020"}),"Cassandra Cluster CRD Definition"),"."),Object(s.b)("p",null,"All labels that are applied to the desired ",Object(s.b)("inlineCode",{parentName:"p"},"CassandraCluster")," resource will also be applied to the Kubernetes resources\nmaking up the Cassandra cluster. This provides a convenient mechanism for those resources to be labelled in whatever way\nthe user requires."),Object(s.b)("p",null,"For every deployed container, CassKop allows you to specify the resources which should be reserved for it\nand the maximum resources that can be consumed by it. We support two types of resources:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Memory"),Object(s.b)("li",{parentName:"ul"},"CPU")),Object(s.b)("p",null,"CassKop is using the Kubernetes syntax for specifying CPU and memory resources."),Object(s.b)("h2",{id:"resource-limits-and-requests"},"Resource limits and requests"),Object(s.b)("p",null,"Resource limits and requests can be configured using the ",Object(s.b)("inlineCode",{parentName:"p"},"resources")," property in ",Object(s.b)("inlineCode",{parentName:"p"},"CassandraCluster.spec.resources"),"."),Object(s.b)("h3",{id:"resource-requests"},"Resource requests"),Object(s.b)("p",null,"Requests specify the resources"),Object(s.b)("div",{className:"admonition admonition-important alert alert--info"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},'If the resource request is for more than the available free resources on the scheduled kubernetes node,\nthe pod will remain stuck in "pending" state until the required resources become available.'))),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# ...\nresources:\n  requests:\n    cpu: 12\n    memory: 64Gi\n# ...\n")),Object(s.b)("h3",{id:"resource-limits"},"Resource limits"),Object(s.b)("p",null,"Limits specify the maximum resources that can be consumed by a given container. The limit is not reserved and might not\nbe always available. The container can use the resources up to the limit only when they are available. The resource\nlimits should be always higher than the resource requests.  "),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# ...\nresources:\n  limits:\n    cpu: 12\n    memory: 64Gi\n# ...\n")),Object(s.b)("h3",{id:"supported-cpu-formats"},"Supported CPU formats"),Object(s.b)("p",null,"CPU requests and limits are supported in the following formats:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Number of CPU cores as integer (",Object(s.b)("inlineCode",{parentName:"li"},"5")," CPU core) or decimal (",Object(s.b)("inlineCode",{parentName:"li"},"2.5"),"CPU core)."),Object(s.b)("li",{parentName:"ul"},"Number of millicpus / millicores (",Object(s.b)("inlineCode",{parentName:"li"},"100m"),") where 1000 millicores is the same as ",Object(s.b)("inlineCode",{parentName:"li"},"1")," CPU core.")),Object(s.b)("p",null,"For more details about CPU specification, refer to\n",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/#meaning-of-cpu"}),"kubernetes documentation")),Object(s.b)("h3",{id:"supported-memory-formats"},"Supported memory formats"),Object(s.b)("p",null,"Memory requests and limits are specified in megabytes, gigabytes, mebibytes, gibibytes."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"to specify memory in megabytes, use the ",Object(s.b)("inlineCode",{parentName:"li"},"M")," suffix. For example ",Object(s.b)("inlineCode",{parentName:"li"},"1000M"),"."),Object(s.b)("li",{parentName:"ul"},"to specify memory in gigabytes, use the ",Object(s.b)("inlineCode",{parentName:"li"},"G")," suffix. For example ",Object(s.b)("inlineCode",{parentName:"li"},"1G"),"."),Object(s.b)("li",{parentName:"ul"},"to specify memory in mebibytes, use the ",Object(s.b)("inlineCode",{parentName:"li"},"Mi")," suffix. For example ",Object(s.b)("inlineCode",{parentName:"li"},"1000Mi"),"."),Object(s.b)("li",{parentName:"ul"},"to specify memory in gibibytes, use the ",Object(s.b)("inlineCode",{parentName:"li"},"Gi")," suffix. For example ",Object(s.b)("inlineCode",{parentName:"li"},"1Gi"),".")),Object(s.b)("p",null,"For more details about CPU specification, refer to\n",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/#meaning-of-memory"}),"kubernetes documentation")),Object(s.b)("h2",{id:"configuring-resource-requests-and-limits"},"Configuring resource requests and limits"),Object(s.b)("p",null,"the resources requests and limits for CPU and memory will be applied to all Cassandra Pods deployed in the Cluster."),Object(s.b)("p",null,"It is configured directly in the ",Object(s.b)("inlineCode",{parentName:"p"},"CassandraCluster.spec.resources"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"  resources:\n    requests:\n      cpu: '2'\n      memory: 2Gi\n    limits:\n      cpu: '2'\n      memory: 2Gi\n")),Object(s.b)("p",null,"Depending on the values specified, Kubernetes will define 3 levels for QoS : (BestEffort < Burstable < Guaranteed)."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"BestEffort: if no resources are specified"),Object(s.b)("li",{parentName:"ul"},"Burstable: if limits > requests. if a system needs more resources, thoses pods can be terminated if they use more than\nrequested and if there is no more BestEffort Pods to terminated"),Object(s.b)("li",{parentName:"ul"},"Guaranteed: request=limits. It is the recommended configuration for cassandra pods.")),Object(s.b)("p",null,"When updating the crd resources, this will trigger an ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/casskop/docs/5_operations/1_cluster_operations#updateresources"}),"UpdateResources")," action."))}u.isMDXComponent=!0},141:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(r),m=n,d=b["".concat(i,".").concat(m)]||b[m]||p[m]||s;return r?a.a.createElement(d,o(o({ref:t},l),{},{components:r})):a.a.createElement(d,o({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<s;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);