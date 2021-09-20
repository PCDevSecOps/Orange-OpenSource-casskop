(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{107:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),s=(a(0),a(142)),r={id:"dynamics_sidecars_storage",title:"Casskop 0.5.1 - Dynamic sidecars and storage configuration feature",author:"Alexandre Guitton",author_title:"Alexandre Guitton",author_url:"https://github.com/erdrix",author_image_url:"https://avatars0.githubusercontent.com/u/10503351?s=460&u=ea08d802388c79c17655c314296be58814391572&v=4",tags:["casskop","cassandra","0.5.2","sidecars","storage"]},i={permalink:"/casskop/blog/2020/03/26/dynamics_sidecars_storage",editUrl:"https://github.com/Orange-OpenSource/casskop/edit/master/website/blog/blog/2020-03-26-dynamics_sidecars_storage.md",source:"@site/blog/2020-03-26-dynamics_sidecars_storage.md",description:"In a previous post, I was talking about how Setting up Cassandra Multi-Site on Google Kubernetes Engine with Casskop.",date:"2020-03-26T00:00:00.000Z",tags:[{label:"casskop",permalink:"/casskop/blog/tags/casskop"},{label:"cassandra",permalink:"/casskop/blog/tags/cassandra"},{label:"0.5.2",permalink:"/casskop/blog/tags/0-5-2"},{label:"sidecars",permalink:"/casskop/blog/tags/sidecars"},{label:"storage",permalink:"/casskop/blog/tags/storage"}],title:"Casskop 0.5.1 - Dynamic sidecars and storage configuration feature",readingTime:3.99,truncated:!1,nextItem:{title:"Multi-Casskop on Google Kubernetes Engine",permalink:"/casskop/blog/2020/01/15/multicasskop_gke"}},c=[{value:"Purposes",id:"purposes",children:[]},{value:"Dynamics sidecars configurations",id:"dynamics-sidecars-configurations",children:[]},{value:"Sidecars : environment variables",id:"sidecars--environment-variables",children:[]},{value:"Storage configuration",id:"storage-configuration",children:[]},{value:"Volume Claim Template and statefulset",id:"volume-claim-template-and-statefulset",children:[]}],l={rightToc:c};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"In a previous post, I was talking about how ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/casskop/blog/2020/01/15/multicasskop_gke"}),"Setting up Cassandra Multi-Site on Google Kubernetes Engine with Casskop"),".\nSince then, two new versions ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Orange-OpenSource/casskop/releases/tag/v0.5.1-release"}),"0.5.1")," and ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Orange-OpenSource/casskop/releases/tag/v0.5.2-release"}),"0.5.2")," had been released.\nIn another post, Cyril Scetbon focused on the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://medium.com/@cscetbon/new-probes-in-casskop-0-5-1-bfd1d6547967"}),"New Probes feature")," which was added with the [PR #184\xd8(",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Orange-OpenSource/casskop/pull/184"}),"https://github.com/Orange-OpenSource/casskop/pull/184"),"), in this post I will focus on the dynamic sidecars and storage configurations added to the operator, which give more flexibility to users to configure their Cassandra cluster deployments."),Object(s.b)("h2",{id:"purposes"},"Purposes"),Object(s.b)("p",null,"During our production migration from bare metal Cassandra Cluster to Kubernetes, the main challenge was to perform the smoothest transition for our OPS teams, allowing them to reuse their homemade tools, to facilitate the cluster operationalization.\nHowever, the operator in this previous form did not leave much room for tuning statefulset and therefore the Cassandra Cluster deployed.\nYou could use the bootstrap image to customize your cassandra node configuration, but not for the tools revolving around.\nThat is why we added to the ",Object(s.b)("strong",{parentName:"p"},"CassandraCluster")," the possibility to define containers into the pod in addition to the cassandra ones, these are the ",Object(s.b)("strong",{parentName:"p"},"sidecars"),", and to configure extract storage for the pods (ie ",Object(s.b)("strong",{parentName:"p"},"VolumeClaimTemplates")," to the Statefulset configuration)."),Object(s.b)("h2",{id:"dynamics-sidecars-configurations"},"Dynamics sidecars configurations"),Object(s.b)("p",null,"To keep the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/blog/products/gcp/7-best-practices-for-building-containers"}),"container\u2019s best practices")," and address our OPS needs, we added the ability to define a dynamic list of containers into a ",Object(s.b)("strong",{parentName:"p"},"CassandraCluster.Spec")," resource definition: ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Orange-OpenSource/casskop/blob/master/pkg/apis/db/v2/cassandracluster_types.go#L803"}),"cassandracluster_types.go#L803"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'spec:\n  ...\n  sidecarConfigs:\n    - args: ["tail", "-F", "/var/log/cassandra/system.log"]\n      image: ez123/alpine-tini\n      imagePullPolicy: Always\n      name: cassandra-log\n      resources:\n        limits:\n          cpu: 50m\n          memory: 50Mi\n        requests:\n          cpu: 10m\n          memory: 10Mi\n      volumeMounts:\n        - mountPath: /var/log/cassandra\n          name: cassandra-logs\n    - args: ["tail", "-F", "/var/log/cassandra/gc.log.0.current"]\n      image: ez123/alpine-tini\n      imagePullPolicy: Always\n      name: gc-log\n      resources:\n        limits:\n          cpu: 50m\n          memory: 50Mi\n        requests:\n          cpu: 10m\n          memory: 10Mi\n      volumeMounts:\n        - mountPath: /var/log/cassandra\n          name: gc-logs\n  ...\n')),Object(s.b)("p",null,"These sidecars are classic ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://godoc.org/k8s.io/api/core/v1#Container"}),"kubernetes container resources"),", leaving you the full power on what you want to do.\nWith this example, we add two simple sidecars allowing to distinguish cassandra and GC logs in two different stdout."),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"with this feature you can do everything you want, and obviously some bad things. This feature is not here to make a Cassandra Cluster works, the operator has everything for this, but to allow you to simplify some add-ons usage around Cassandra."))),Object(s.b)("h2",{id:"sidecars--environment-variables"},"Sidecars : environment variables"),Object(s.b)("p",null,"All sidecars added with this configuration will have, at the container init, some of the environment variables from ",Object(s.b)("strong",{parentName:"p"},"cassandra container")," merged with those defined into the sidecar container"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"CASSANDRA_CLUSTER_NAME"),Object(s.b)("li",{parentName:"ul"},"CASSANDRA_SEEDS"),Object(s.b)("li",{parentName:"ul"},"CASSANDRA_DC"),Object(s.b)("li",{parentName:"ul"},"CASSANDRA_RACK")),Object(s.b)("h2",{id:"storage-configuration"},"Storage configuration"),Object(s.b)("p",null,"In the previous version, the only option about storage was the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/casskop/docs/3_configuration_deployment/3_storage"}),"data volume configuration")," allowing you to define :"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"dataCapacity"),': Defines the size of the persistent volume claim, for example, "1000Gi".'),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"dataStorageClass"),": Defines the type of storage to use (or use default one). We recommend to use local-storage for better performances but it can be any storage with high ssd throughput.")),Object(s.b)("p",null,"The dynamic sidecar doesn\u2019t really suit, unless you put everything in one folder."),Object(s.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Spoiler alert")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"It\u2019s not a good idea"))),Object(s.b)("p",null,"That is why we add the ",Object(s.b)("inlineCode",{parentName:"p"},"CassandraCluster.Spec.StorageConfig")," field, to the ",Object(s.b)("inlineCode",{parentName:"p"},"CassandraCluster")," resource definition :"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'spec:\n ...\n storageConfigs:\n   - mountPath: "/var/lib/cassandra/log"\n     name: "gc-logs"\n     pvcSpec:\n       accessModes:\n         - ReadWriteOnce\n       storageClassName: local-storage\n       resources:\n         requests:\n           storage: 5Gi\n   - mountPath: "/var/log/cassandra"\n     name: "cassandra-logs"\n     pvcSpec:\n       accessModes:\n         - ReadWriteOnce\n       storageClassName: local-storage\n         resources:\n           requests:\n             storage: 10Gi\n ...\n')),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"storageConfigs")," : Defines the list of storage config object, which will instantiate ",Object(s.b)("inlineCode",{parentName:"p"},"Persitence Volume Claim")," and associate volume to pod of cassandra node."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"mountPath"),": Defines the path into cassandra container where the volume will be mounted."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"name"),": Used to define the PVC and VolumeMount names."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"pvcSpec"),": pvcSpec describes the PVC used for the mountPath described above, it requires a kubernetes PVC spec.")),Object(s.b)("p",null,"In this example, we add the two volumes required by our sidecars previously configured, to be able via the sidecars to access to the logs that we want to expose on the stdout."),Object(s.b)("h2",{id:"volume-claim-template-and-statefulset"},"Volume Claim Template and statefulset"),Object(s.b)("p",null,"Keep in mind that Casskop operator works on Statefulset, but have some constraints such as :"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-log"}),"updates to statefulset spec for fields other than 'replicas', 'template', and 'updateStrategy' are forbidden.\n")),Object(s.b)("p",null,"So if you want to add or remove some storages configurations, today you have to perform manually it, by removing the Statefulset, which will be recreated by the operator."),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"It\u2019s not a sake operation, and should be performed carefully, because you will loose a rack. Maybe in some releases we will manage it, but today we assume that this operation is an exceptional one."))),Object(s.b)("p",null,Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Orange-OpenSource/casskop"}),"CassKop")," is open source so don\u2019t hesitate to try it out, contribute by first trying to fix a discovered issue and let\u2019s enhance it together!"),Object(s.b)("p",null,"In a next post, I will speak about the IP management into Casskop, and the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Orange-OpenSource/casskop/issues/170"}),"cross IPs issue"),", so stay connected !"))}p.isMDXComponent=!0},142:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(r,".").concat(d)]||b[d]||u[d]||s;return a?o.a.createElement(m,i(i({ref:t},l),{},{components:a})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,r=new Array(s);r[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var l=2;l<s;l++)r[l]=a[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);