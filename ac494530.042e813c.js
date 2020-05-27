(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{183:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(2),o=a(9),r=(a(0),a(199)),c={id:"1_operations_issues",title:"Operations Issues",sidebar_label:"Operations Issues"},s={id:"7_troubleshooting/1_operations_issues",title:"Operations Issues",description:"Operator can't perform the Action",source:"@site/docs/7_troubleshooting/1_operations_issues.md",permalink:"/casskop/docs/7_troubleshooting/1_operations_issues",editUrl:"https://github.com/Orange-OpenSource/casskop/edit/master/website/docs/7_troubleshooting/1_operations_issues.md",sidebar_label:"Operations Issues",sidebar:"docs",previous:{title:"MultiCasskop",permalink:"/casskop/docs/6_references/4_multicasskop"},next:{title:"GKE Issues",permalink:"/casskop/docs/7_troubleshooting/2_gke_issues"}},l=[{value:"Operator can&#39;t perform the Action",id:"operator-cant-perform-the-action",children:[{value:"Can&#39;t ScaleUp",id:"cant-scaleup",children:[]},{value:"Can&#39;t add new rack in new DC",id:"cant-add-new-rack-in-new-dc",children:[]}]}],i={rightToc:l};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"operator-cant-perform-the-action"},"Operator can't perform the Action"),Object(r.b)("p",null,"If you ask to scale up or add a new DC, or ask for more resources, CassKop will ask Kubernetes to schedule as you\nrequested.\nBut sometimes it is not possible to achieve the change because of a lack of resources (memory/cpus) or because\nconstraints can't be satisfied (Kubernetes nodes with specific labels available...)"),Object(r.b)("p",null,"CassKop make uses of the PodDisruptionBudget to prevent CassKop to make some change on the CassandraCluster that could\nmake more than 1 Cassandra node at a time. "),Object(r.b)("p",null,"If you have a Pod stuck in ",Object(r.b)("strong",{parentName:"p"},"pending")," state, then you have at least 1 Pod in Disruption, and the PDB object will\nprevent you to make changes on statefulset because that mean that you will have more than 1 Cassandra down at a time."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"$ k get poddisruptionbudgets\nNAME             MIN AVAILABLE   MAX UNAVAILABLE   ALLOWED DISRUPTIONS   AGE\ncassandra-demo   N/A             1                 0                     12m\n")),Object(r.b)("p",null,"The Operator logs this line when there is disruption on the Cassandra cluster:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-logs"}),"INFO[3037] Cluster has Disruption on Pods, we wait before applying any change to statefulset  cluster=cassandra-demo dc-rack=dc1-rack1\n")),Object(r.b)("h3",{id:"cant-scaleup"},"Can't ScaleUp"),Object(r.b)("p",null,"In this example I ask a ScaleUp but it can't perform :"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"$ k get pods\nNAME                                                              READY   STATUS    RESTARTS   AGE\ncassandra-demo-dc1-rack1-0                                        1/1     Running   0          16h\ncassandra-demo-dc1-rack1-1                                        0/1     Pending   0          12m\ncassandra-demo-dc1-rack2-0                                        1/1     Running   0          16h\ncassandra-demo-dc1-rack3-0                                        1/1     Running   0          16h\n")),Object(r.b)("p",null,"the cassandra-demo-dc1-rack1-1 pod is Pending and can't be scheduled."),Object(r.b)("p",null,"If we looked at the pod status we will see this message :"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"Warning  FailedScheduling   51s (x17 over 14m)    default-scheduler   0/6 nodes are available: 4 Insufficient cpu, 4 node(s) didn't match node selector.\n")),Object(r.b)("p",null,"Kubernetes can't find any Pod with sufficient cpu and matching kubernetes nodes labels we asked in the topology section."),Object(r.b)("p",null,"To fix this, we can either:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"reduce memory/cpu limits"),Object(r.b)("li",{parentName:"ul"},"add more kubernetes nodes that will satisfied our requirements."),Object(r.b)("li",{parentName:"ul"},"rollback the scaleUp Operation")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"At this point, CassKop will wait indefinitely to the case to be Fix")),Object(r.b)("h4",{id:"rollback-scaleup-operation"},"Rollback ScaleUp operation"),Object(r.b)("p",null,"In order to rollback the operation, we need to revert the change on the ",Object(r.b)("inlineCode",{parentName:"p"},"nodesPerRacks")," parameter."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This is not sufficient")),Object(r.b)("p",null,"Because CassKop is actually performing another action on the cluster (ScaleUp) we can't scheduled a new operation to\nrollback since it has not finished.\nWe introduced a new parameter in the CRD to allow such changes when all the pods can't be scheduled:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Spec.unlockNextOperation: true"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("em",{parentName:"p"},Object(r.b)("strong",{parentName:"em"},"\ud83d\udea9 Warning")," This is not a regular parameter and it must be used with very good care!!."))),Object(r.b)("p",null,"By adding this parameter in our cluster definition, CassKop will allow to trigger a new operation."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Once CassKop has scheduled the new operation, it will reset this parameter to the default ",Object(r.b)("inlineCode",{parentName:"p"},"false")," value.\nvalue. If you need more operation, you will need to reset the parameter to force another Operation.\nKeep in mind that CassKop is mean to do only 1 operation at a time.")),Object(r.b)("p",null,"If this is not already done, you can now rollback the scaleUp updating ",Object(r.b)("inlineCode",{parentName:"p"},"nodesPerRacks: 1")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'WARN[3348] ScaleDown detected on a pending Pod. we don\'t launch decommission  cluster=cassandra-demo pod=cassandra-demo-dc1-rack1-1 rack=dc1-rack1\nINFO[3350] Cluster has 1 Pod Disrupted but that may be normal as we are decommissioning  cluster=cassandra-demo\ndc-rack=dc1-rack1\n...\nINFO[3354] [cassandra-demo][dc1-rack1]: StatefulSet(ScaleDown): Replicas Number OK: ready[1] \nINFO[3354] ScaleDown not yet Completed: Waiting for Pod operation to be Done  cluster=cassandra-demo rack=dc1-rack1\nINFO[3354] Decommission done -> we delete PVC            cluster=cassandra-demo pvc=data-cassandra-demo-dc1-rack1-1 rack=dc1-rack1\nINFO[3354] PVC deleted                                   cluster=cassandra-demo pvc=data-cassandra-demo-dc1-rack1-1 rack=dc1-rack1\nDEBU[3354] Waiting Rack to be running before continuing, we break ReconcileRack Without Updating Statefulset  cluster=cassandra-demo dc-rack=dc1-rack1 err="<nil>"\nINFO[3354] ScaleDown is Done                             cluster=cassandra-demo rack=dc1-rack1\n')),Object(r.b)("h3",{id:"cant-add-new-rack-in-new-dc"},"Can't add new rack in new DC"),Object(r.b)("p",null,"In this example, I ask to add dc called dc2"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"k get pods\nNAME                                                              READY   STATUS    RESTARTS   AGE\ncassandra-demo-dc1-rack1-0                                        1/1     Running   0          17h\ncassandra-demo-dc1-rack2-0                                        1/1     Running   0          17h\ncassandra-demo-dc1-rack3-0                                        1/1     Running   0          17h\ncassandra-demo-dc2-rack1-0                                        1/1     Running   0          5m46s\ncassandra-demo-dc2-rack2-0                                        1/1     Running   0          4m20s\ncassandra-demo-dc2-rack3-0                                        0/1     Pending   0          2m37s\n")),Object(r.b)("p",null,"But the last one can't be scheduled because of insufficient cpu on k8s nodes."),Object(r.b)("p",null,"We can either add the wanted resources in the k8s cluster or make a rollback."),Object(r.b)("h4",{id:"solution1-rollback-adding-the-dc"},"Solution1: rollback adding the DC"),Object(r.b)("p",null,"To rollback the add of the new DC, we first need to scale down to 0 for the nodes that already have join the ring.\nWe need to allow disruption as we do in previous section."),Object(r.b)("p",null,"then We first need to ask the dc2 to scaleDown to 0 because it has already add 2 racks, and we add the\nspec.unlockNextOperation to true."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"...\n  unlockNextOperation: true\n  ...\n    name: dc2\n    nodesPerRacks: 0\n")),Object(r.b)("p",null,"This will allow CassKop to make the scale down. because it will start with the first rack, it will free some space and\nthe last pod which was pending will be joining. then it will be decommissioned by CassKop."),Object(r.b)("p",null,"we can see in CassKop logs when it deal with the rack with unscheduled pods:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"WARN[0667] Aborting Initializing..., start ScaleDown                      cluster=cassandra-demo rack=dc2-rack3\nINFO[0667] The Operator Waits 20 seconds for the action to start correctly  cluster=cassandra-demo rack=dc2-rack3\nWARN[0667] ScaleDown detected on a pending Pod. we don't launch decommission  cluster=cassandra-demo pod=cassandra-demo-dc2-rack3-0 rack=dc2-rack3\nINFO[0667] Cluster has 1 Pod Disrupted but that may be normal as we are decommissioning\ncluster=cassandra-demodc-rack=dc2-rack3\nINFO[0667] Template is different:  {...}\n")),Object(r.b)("p",null,"It will also ScaleDown any pods that was part of the new DC."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Once ScaleDown is done, you can delete the DC from the Spec.")),Object(r.b)("h4",{id:"solution2-change-the-topology-for-dc2-remove-the-3rd-unschedulable-rack"},"Solution2: change the topology for dc2 (remove the 3rd unschedulable rack)"),Object(r.b)("p",null,"we get back in the previous section before making the rolling back of adding the dc2."),Object(r.b)("p",null,"If only one of the Racks can't schedule any pods, we can change the topology to remove the Rack ONLY if there was not already\npods deployed in the Rack. If this is not the case, then you will need to process ScaleDown instead of removing rack."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"    - labels:\n        failure-domain.beta.kubernetes.io/region: europe-west1\n      name: dc2\n      nodesPerRacks: 1\n      numTokens: 256\n      rack:\n      - labels:\n          failure-domain.beta.kubernetes.io/zone: europe-west1-d\n        name: rack1\n      - labels:\n          failure-domain.beta.kubernetes.io/zone: europe-west1-c\n        name: rack2\n      - labels:\n          failure-domain.beta.kubernetes.io/zone: europe-west1-d\n        name: rack3\n")),Object(r.b)("p",null,"let's remove the rack3 from dc2."),Object(r.b)("p",null,"the operator will log :"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"WARN[0347] We asked to remove Rack dc2-rack3 with unschedulable pod  cluster=cassandra-demo\nINFO[0347] [cassandra-demo]: Delete PVC[data-cassandra-demo-dc2-rack3-0] OK \n")),Object(r.b)("p",null,"The rack3 (and its statefulset) has been removed, and the associated (empty) pvc deleted"))}d.isMDXComponent=!0},199:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=o.a.createContext({}),d=function(e){var t=o.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=d(a),b=n,m=u["".concat(c,".").concat(b)]||u[b]||p[b]||r;return a?o.a.createElement(m,s(s({ref:t},i),{},{components:a})):o.a.createElement(m,s({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var i=2;i<r;i++)c[i]=a[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);