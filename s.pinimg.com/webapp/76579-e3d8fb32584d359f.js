"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[76579],{604955:function(e){var n,r,t,a,o={fragment:{argumentDefinitions:n=[{defaultValue:null,kind:"LocalArgument",name:"boardId"}],kind:"Fragment",metadata:null,name:"boards_AcceptInvite_Mutation",selections:[{alias:null,args:r=[{fields:[{kind:"Variable",name:"board",variableName:"boardId"}],kind:"ObjectValue",name:"input"}],concreteType:null,kind:"LinkedField",name:"v3AcceptBoardCollaboratorInviteMutation",plural:!1,selections:[{kind:"InlineFragment",selections:[t={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},a={alias:null,args:null,concreteType:"ErrorInfo",kind:"LinkedField",name:"error",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"paramPath",storageKey:null}],storageKey:null}],type:"Error",abstractKey:"__isError"}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"boards_AcceptInvite_Mutation",selections:[{alias:null,args:r,concreteType:null,kind:"LinkedField",name:"v3AcceptBoardCollaboratorInviteMutation",plural:!1,selections:[t,{kind:"InlineFragment",selections:[a],type:"Error",abstractKey:"__isError"}],storageKey:null}]},params:{id:"684be4cb6a79ca32f82ddfa38f308039fdcaff0720a6118743e1e198085f1237",metadata:{},name:"boards_AcceptInvite_Mutation",operationKind:"mutation",text:null}};o.hash="c73ed7e5b29f046197e7dfcf7d7a7cd0",e.exports=o},518190:function(e){var n,r,t,a,o={fragment:{argumentDefinitions:n=[{defaultValue:null,kind:"LocalArgument",name:"boardId"},{defaultValue:null,kind:"LocalArgument",name:"userId"}],kind:"Fragment",metadata:null,name:"boards_ApproveInvite_Mutation",selections:[{alias:null,args:r=[{fields:[{kind:"Variable",name:"board",variableName:"boardId"},{kind:"Variable",name:"user",variableName:"userId"}],kind:"ObjectValue",name:"input"}],concreteType:null,kind:"LinkedField",name:"v3ApproveBoardCollaboratorInviteMutation",plural:!1,selections:[{kind:"InlineFragment",selections:[t={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},a={alias:null,args:null,concreteType:"ErrorInfo",kind:"LinkedField",name:"error",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"paramPath",storageKey:null}],storageKey:null}],type:"Error",abstractKey:"__isError"}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"boards_ApproveInvite_Mutation",selections:[{alias:null,args:r,concreteType:null,kind:"LinkedField",name:"v3ApproveBoardCollaboratorInviteMutation",plural:!1,selections:[t,{kind:"InlineFragment",selections:[a],type:"Error",abstractKey:"__isError"}],storageKey:null}]},params:{id:"1380a15fe95dc7713c5d72fd6104da573f3db5b8b0ab66f883bec351df4c8a71",metadata:{},name:"boards_ApproveInvite_Mutation",operationKind:"mutation",text:null}};o.hash="216cdb449b148a3d36e9d0621dcfcac5",e.exports=o},90105:function(e){var n,r,t,a,o,i,l={fragment:{argumentDefinitions:[n={defaultValue:null,kind:"LocalArgument",name:"ban"},r={defaultValue:null,kind:"LocalArgument",name:"boardId"},t={defaultValue:null,kind:"LocalArgument",name:"userId"}],kind:"Fragment",metadata:null,name:"boards_DeclineOrDeleteBoardCollaboratorInvite_Mutation",selections:[{alias:null,args:a=[{fields:[{kind:"Variable",name:"ban",variableName:"ban"},{kind:"Variable",name:"board",variableName:"boardId"},{kind:"Variable",name:"user",variableName:"userId"}],kind:"ObjectValue",name:"input"}],concreteType:null,kind:"LinkedField",name:"v3DeclineOrDeleteBoardCollaboratorInviteMutation",plural:!1,selections:[{kind:"InlineFragment",selections:[o={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},i={alias:null,args:null,concreteType:"ErrorInfo",kind:"LinkedField",name:"error",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"paramPath",storageKey:null}],storageKey:null}],type:"Error",abstractKey:"__isError"}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[r,t,n],kind:"Operation",name:"boards_DeclineOrDeleteBoardCollaboratorInvite_Mutation",selections:[{alias:null,args:a,concreteType:null,kind:"LinkedField",name:"v3DeclineOrDeleteBoardCollaboratorInviteMutation",plural:!1,selections:[o,{kind:"InlineFragment",selections:[i],type:"Error",abstractKey:"__isError"}],storageKey:null}]},params:{id:"533aad425ad868e5a9d811bf76dccd56e54e0cc48c4c8b526ccbcd7c68efb981",metadata:{},name:"boards_DeclineOrDeleteBoardCollaboratorInvite_Mutation",operationKind:"mutation",text:null}};l.hash="b03dba13d39482d785778ba0feadca06",e.exports=l},472297:function(e){var n,r,t,a,o,i,l,u,c={fragment:{argumentDefinitions:n=[{defaultValue:null,kind:"LocalArgument",name:"board"},{defaultValue:null,kind:"LocalArgument",name:"collaboratorIds"}],kind:"Fragment",metadata:null,name:"boards_RemoveBoardCollaborators_Mutation",selections:[{alias:null,args:r=[{fields:[{kind:"Variable",name:"board",variableName:"board"},{kind:"Variable",name:"collaboratorIds",variableName:"collaboratorIds"}],kind:"ObjectValue",name:"input"}],concreteType:null,kind:"LinkedField",name:"v3RemoveBoardCollaboratorsMutation",plural:!1,selections:[{kind:"InlineFragment",selections:[t={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"Board",kind:"LinkedField",name:"data",plural:!1,selections:[a={alias:null,args:null,kind:"ScalarField",name:"collaboratorCount",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"collaboratingUsers",plural:!1,selections:[{kind:"InlineFragment",selections:[t,{alias:null,args:null,concreteType:"UserCollaboratingUsersConnection",kind:"LinkedField",name:"connection",plural:!1,selections:[{alias:null,args:null,concreteType:"UserCollaboratingUsersEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[o={alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"UserCollaboratingUsersConnectionContainer",abstractKey:null}],storageKey:null}],storageKey:null}],type:"V3RemoveBoardCollaborators",abstractKey:null},{kind:"InlineFragment",selections:[t,l={alias:null,args:null,concreteType:"ErrorInfo",kind:"LinkedField",name:"error",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"paramPath",storageKey:null}],storageKey:null}],type:"Error",abstractKey:"__isError"}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"boards_RemoveBoardCollaborators_Mutation",selections:[{alias:null,args:r,concreteType:null,kind:"LinkedField",name:"v3RemoveBoardCollaboratorsMutation",plural:!1,selections:[t,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Board",kind:"LinkedField",name:"data",plural:!1,selections:[a,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"collaboratingUsers",plural:!1,selections:[t,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"UserCollaboratingUsersConnection",kind:"LinkedField",name:"connection",plural:!1,selections:[{alias:null,args:null,concreteType:"UserCollaboratingUsersEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[o,i,u={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"UserCollaboratingUsersConnectionContainer",abstractKey:null}],storageKey:null},u],storageKey:null}],type:"V3RemoveBoardCollaborators",abstractKey:null},{kind:"InlineFragment",selections:[l],type:"Error",abstractKey:"__isError"}],storageKey:null}]},params:{id:"e100ea491b53ee042f6d9a7f42b583afafd9b8a730b43e06b81b9132821866ea",metadata:{},name:"boards_RemoveBoardCollaborators_Mutation",operationKind:"mutation",text:null}};c.hash="ecec88eadc69c1153ca5e0c4bfe03fd9",e.exports=c},787525:function(e){var n,r,t,a,o={fragment:{argumentDefinitions:n=[{defaultValue:null,kind:"LocalArgument",name:"board"},{defaultValue:null,kind:"LocalArgument",name:"emails"},{defaultValue:null,kind:"LocalArgument",name:"message"}],kind:"Fragment",metadata:null,name:"boards_emails_Mutation",selections:[{alias:null,args:r=[{fields:[{kind:"Variable",name:"board",variableName:"board"},{kind:"Variable",name:"emails",variableName:"emails"},{kind:"Variable",name:"message",variableName:"message"}],kind:"ObjectValue",name:"input"}],concreteType:null,kind:"LinkedField",name:"v3InviteBoardCollaboratorEmailMutation",plural:!1,selections:[{kind:"InlineFragment",selections:[t={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],type:"V3InviteBoardCollaboratorEmail",abstractKey:null},{kind:"InlineFragment",selections:[t,a={alias:null,args:null,concreteType:"ErrorInfo",kind:"LinkedField",name:"error",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"paramPath",storageKey:null}],storageKey:null}],type:"Error",abstractKey:"__isError"}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"boards_emails_Mutation",selections:[{alias:null,args:r,concreteType:null,kind:"LinkedField",name:"v3InviteBoardCollaboratorEmailMutation",plural:!1,selections:[t,{kind:"InlineFragment",selections:[a],type:"Error",abstractKey:"__isError"}],storageKey:null}]},params:{id:"4d372bf76e6f77707e9106c02f73ec23773c4bd7e457dc684ea7dd1b87985c7c",metadata:{},name:"boards_emails_Mutation",operationKind:"mutation",text:null}};o.hash="0659a1edf1c7935aff1deef3f51f2add",e.exports=o},16945:function(e){var n,r,t,a,o,i,l={fragment:{argumentDefinitions:[n={defaultValue:null,kind:"LocalArgument",name:"boardId"},r={defaultValue:null,kind:"LocalArgument",name:"collaboratorIds"},t={defaultValue:null,kind:"LocalArgument",name:"message"}],kind:"Fragment",metadata:null,name:"boards_users_Mutation",selections:[{alias:null,args:a=[{fields:[{kind:"Variable",name:"board",variableName:"boardId"},{kind:"Variable",name:"collaboratorIds",variableName:"collaboratorIds"},{kind:"Variable",name:"message",variableName:"message"}],kind:"ObjectValue",name:"input"}],concreteType:null,kind:"LinkedField",name:"v3InviteBoardCollaboratorsMutation",plural:!1,selections:[{kind:"InlineFragment",selections:[o={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},i={alias:null,args:null,concreteType:"ErrorInfo",kind:"LinkedField",name:"error",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"paramPath",storageKey:null}],storageKey:null}],type:"Error",abstractKey:"__isError"}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[r,n,t],kind:"Operation",name:"boards_users_Mutation",selections:[{alias:null,args:a,concreteType:null,kind:"LinkedField",name:"v3InviteBoardCollaboratorsMutation",plural:!1,selections:[o,{kind:"InlineFragment",selections:[i],type:"Error",abstractKey:"__isError"}],storageKey:null}]},params:{id:"9495c71001fb315e3dc5e63ec17a8d8d5a4fb53ebc7f791b44093a4a92665835",metadata:{},name:"boards_users_Mutation",operationKind:"mutation",text:null}};l.hash="743ce0da1ac8191550520ebe045b4fb0",e.exports=l},941646:function(e,n,r){r.d(n,{Z:function(){return o}});var t=r(908390),a=r(515198);function o(e){var n=e.children,r=e.display,o=e.id;return(0,a.jsx)(t.xu,{"data-test-id":o,display:r,children:n})}},134879:function(e,n,r){r.d(n,{C:function(){return o},V:function(){return i}});var t=r(76911),a=(0,t.createContext)(!1),o=a.Provider,i=function(){return(0,t.useContext)(a)}},223019:function(e,n,r){r.d(n,{Z:function(){return v}});var t=r(506979),a=r(80811),o=r(340494),i=r(52022),l=r(19121),u=r(867820),c=r(130460),s=r(780280),d=r(908390),f=r(712055),m=r(853492),p=r(515198);function b(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return y(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var g=["thumbnail","imageOnly"];function v(e){var n,r,y,v=e.boardId,_=e.containerBackgroundColor,k=e.forwardedRef,I=e.fullSize,E=e.showFollowButton,h=void 0===E||E,O=e.showPinCount,D=void 0===O||O,A=e.type,C=e.viewParameter,F=e.viewType,K=(0,l.Z)(),B=K&&K.isAuth,R=(0,t.useDispatch)(),w=(0,s.B)().locale,S=(0,i.Z)(),L=(0,c.gC)()(v),M=(0,o.Z)(),P=K.isAuth?K.id:"";if(!L)return null;var T=L.owner,j=[T].concat(b(L.collaborating_users||[])).filter(Boolean).map((function(e){return{id:e.id,image_medium_url:e.image_medium_url,username:e.username}})),V=(null==T?void 0:T.id)===P,x=j.filter((function(e){return e.id===P})).length>0;if("secret"===L.privacy&&!x)return null;var U="grid"===A||"thumbnail"===A?2:4,N=M(L,U),Z={isCustom:L.has_custom_cover,url:N,position:(0,m.Bw)(L.cover_pin)},z=(0,m.Jx)(L,N).map((function(e){var n=e.url;return{name:(0,m.po)(n),url:n}})),H=(0,p.jsx)(a.Z,{archivedDate:null!==(n=L.archived_by_me_at)&&void 0!==n?n:void 0,canEdit:!!L.access&&L.access.includes("write"),collaborators:j,collaboratorsCount:L.collaborator_count,containerBackgroundColor:_,coverPhoto:N?Z:null,followedByMe:L.followed_by_me,fullSizeDrawer:I,hideMeta:g.includes(A),id:L.id,imagesLego:z,isAuthenticated:B,isCollaborative:L.is_collaborative,isCollaborator:x,isOwner:V,isProtected:"protected"===L.privacy,isSecret:"secret"===L.privacy,lastModifiedDate:"full"===A?L.board_order_modified_at:"",locale:w,name:null!==(r=L.name)&&void 0!==r?r:"",numCols:U,onFollow:function(e){return R((0,f.Z)(e))},onUnfollow:function(e){return R((0,f.f)(e))},owner:T,pinCount:D&&L.pin_count?L.pin_count:void 0,sectionCount:null!==(y=L.section_count)&&void 0!==y?y:0,sensitivityScreen:L.sensitivity_screen,showFollowButton:h,viewParameter:C,viewType:F,viewerId:P});return!g.includes(A)&&L.url?(0,p.jsx)(d.iP,{role:"link",href:L.url,rounding:2,tapStyle:"compress",onTap:function(){B||((0,u.NC)("click_go_to_board"),S({action:"click",item:"board-card"}))},children:(0,p.jsx)(d.xu,{ref:k,paddingY:3,children:H})}):H}},239682:function(e,n,r){function t(e,n,r){return{privacy_filter:n?"secret":"public",sort:r||"last_pinned_to",field_set_key:"profile_grid_item",username:e}}r.d(n,{Z:function(){return t}})},240265:function(e,n,r){r.d(n,{O:function(){return c},Q:function(){return s}});var t=r(59644),a=r(414327),o=r(956800);function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var u=["alphabetical","last_pinned_to","oldest","newest","group_boards_at_top","custom"],c={name:"BoardsResource",key:"boardsResource",options:function(e,n){var r=e.boardOrder,t=e.filterStories,a=e.mixPublicSecret;return function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}({privacy_filter:"all",sort:r||"last_pinned_to",field_set_key:"profile_grid_item",filter_stories:t,username:e.username,page_size:25,group_by:a?"mix_public_private":"visibility",include_archived:!0,redux_normalize_feed:!0},n?{orbac_subject_id:n}:Object.freeze({}))}},s=function(e){return u.reduce((function(n,r){var i=[(0,o.N8)("profileBoards",(0,t.Z)(e,r))];return[!0,!1].forEach((function(n){[!0,!1].forEach((function(t){i.push((0,a.jB)(c.name,c.options({username:e,boardOrder:r,mixPublicSecret:n,filterStories:t})))}))})),n.concat(i)}),[])}},254176:function(e,n,r){r.d(n,{$z:function(){return J},Br:function(){return F},Cr:function(){return U},K8:function(){return L},KQ:function(){return $},L1:function(){return ne},NH:function(){return se},OA:function(){return ee},RZ:function(){return ae},Tq:function(){return w},Xi:function(){return Y},YQ:function(){return W},YV:function(){return x},ZP:function(){return N},aX:function(){return Z},eo:function(){return B},fJ:function(){return te},h6:function(){return ie},k8:function(){return le},md:function(){return K},oG:function(){return R},oL:function(){return z},of:function(){return M},rS:function(){return de},xH:function(){return S},xQ:function(){return P},xR:function(){return X},xk:function(){return j},yT:function(){return C},yt:function(){return ue},zC:function(){return ce},zS:function(){return re}});var t,a,o,i,l,u,c=r(506979),s=r(27255),d=r(239682),f=r(172071),m=r(422946),p=r(248327),b=r(240265),y=r(414327),g=r(214494),v=r(956800),_=r(704217);function k(e,n,r,t,a,o,i){try{var l=e[o](i),u=l.value}catch(c){return void r(c)}l.done?n(u):Promise.resolve(u).then(t,a)}function I(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var o=e.apply(n,r);function i(e){k(o,t,a,i,l,"next",e)}function l(e){k(o,t,a,i,l,"throw",e)}i(void 0)}))}}function E(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);i=!0);}catch(u){l=!0,a=u}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return h(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function O(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function D(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?O(Object(r),!0).forEach((function(n){A(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function A(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function C(e){return{type:"BOARD_UPDATE_COMPLETE",payload:{board:e}}}function F(e){return{type:"BOARD_PIN_COUNT_CHANGED",payload:e}}function K(e,n){return{type:"BOARD_FOLLOW",payload:{boardId:e,value:n}}}function B(e){return{type:"BOARD_DELETE",payload:{viewingUserId:e.viewingUserId,viewingUsername:e.viewingUsername,boardId:e.boardId,boardPinCount:e.boardPinCount}}}var R=function(e,n){return function(r){return r((0,p.U)("BoardResource",{options:{board_id:e,field_set_key:n}}))}};function w(e,n,r){return(0,p.U)("BoardResource",{options:D({board_id:e,field_set_key:n},r?{orbac_subject_id:r}:{})})}function S(e,n,r){return function(t){return g.Z.create("BoardsMergeResource",D({source_board_id:e,target_board_id:n},r?{orbac_subject_id:r}:{})).callUpdate().then((function(){return Promise.all([t(B({boardId:e})),t(w(n,"pin_count")),t((0,v.N8)(m.DV.BOARD_SECTIONS,n))])}))}}function L(e){return function(n){e&&(0,b.Q)(e).forEach((function(e){n(e)}))}}var M=function(e){return{type:"BOARD_DISMISS_SENSITIVITY_SCREEN",payload:{boardId:e}}},P=function(e){return R(e,"pin_count")};function T(e,n){return{type:"BOARD_ARCHIVE",payload:{boardId:e,username:n}}}function j(e,n){return function(r){return r(T(e)),g.Z.create("BoardArchiveResource",{boardId:e,orbacSubjectId:n}).callUpdate()}}function V(e){return{type:"BOARD_UNARCHIVE",payload:{boardId:e}}}function x(e,n){return function(r){return r(V(e)),g.Z.create("BoardArchiveResource",{boardId:e,orbacSubjectId:n}).callDelete()}}var U=function(e,n){return{type:"BOARD_COVER_IMAGE_UPDATED",payload:{boardId:e,coverPin:n}}},N=function(e){return{type:"BOARD_DISABLE_MORE_IDEAS_BADGING",payload:{boardId:e}}};function Z(e,n,r){var t=D({name:e,privacy:s.Z.BoardPrivacy.PUBLIC,username:n},r?{orbac_subject_id:r}:Object.freeze({}));return function(e){return g.Z.create("BoardResource",t).callCreate().then((function(r){var t=r.resource_response.data;return e(n&&(0,y.jB)("BoardsResource",(0,d.Z)(n,!1))),t}))}}function z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;return{type:"BOARD_CREATE_COMPLETE",payload:{options:e,board:n},error:r}}var H=function(e,n,r){return{type:"BOARD_INVITE_APPROVED_BY_VIEWER",payload:{boardId:e,isRequestToJoin:n,collaboratingUser:r}}},q=function(e,n){return{type:"BOARD_INVITE_DENIED_BY_VIEWER",payload:{boardId:e,userId:n}}},Q=function(e,n,r){return{type:"BOARD_COLLABORATOR_DELETE",payload:{boardId:e,userId:n,viewingUser:r}}},G=function(e,n,r,t){return{type:"BOARD_COLLABORATOR_ADD",payload:{boardId:e,viewingUser:n,status:r,collaboratingUsers:t}}},Y=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:void 0;return function(t){return t(H(e,n,r)),g.Z.create("BoardInviteResource",{board_id:e,invited_user_id:null==r?void 0:r.id}).callUpdate()}},X=function(e,n){return function(r){return r(q(e,n)),g.Z.create("BoardInviteResource",{board_id:e,invited_user_id:n}).callDelete()}},J=function(e,n,r){return function(t){return t(G(e,n,"new",r)),g.Z.create("BoardInviteResource",{board_id:e,invited_user_ids:r.map((function(e){return e.id}))}).callCreate()}},W=function(e,n,r,t,a){return function(o){var i,l,u="accepted"===n?"BoardCollaboratorResource":"BoardInviteResource";return o(Q(e,null!==(i=null==t?void 0:t.id)&&void 0!==i?i:"",r)),g.Z.create(u,D({board_id:e,field_set_key:"boardEdit",invited_user_id:null!==(l=null==t?void 0:t.id)&&void 0!==l?l:""},a?{orbac_subject_id:a}:{})).callDelete().catch((function(){return o(G(e,r,n,[t]))}))}},$=function(e,n){return function(r){return g.Z.create("SocialSearchCampaignResource",{boardId:e}).callGet().then((function(t){if(!t||!t.resource_response)return{};var a=t.resource_response.data||{},o=((a.model||{}).custom_properties||{}).campaign_id,i=void 0===o?"unknown":o,l=a.display_data||{},u=!!a.display_data,c=l.header_image_mobile,s=l.header_background_color,d=l.text_icon_color,m={boardId:e,isSocialSeasonalBoard:u,socialHeaderBgImage:c,socialHeaderBgColor:s,textIconColor:d};return f.Z.increment("mweb.seasonal_board.".concat(i,".").concat(n,".land")),r(function(e){return{type:"SET_SOCIAL_SEASONAL_BOARD",payload:e}}(m))}))}},ee=function(e,n){return function(){return g.Z.create("BoardEmailInviteResource",{board_id:e,emails:n}).callCreate()}},ne=function(e,n,r,t){return function(a){var o=g.Z.create("BoardResource",{board_id:r}).callDelete();return a(B({viewingUserId:e,viewingUsername:n,boardId:r,boardPinCount:t})),o}},re=function(e,n){return function(r){return g.Z.create("BoardArchiveResource",{boardId:e}).callUpdate().then((function(t){return r((0,v.Qv)("archived-boards",[{id:e,type:"board"}])),r(T(e,n)),t}))}},te=function(e,n){return function(r){return g.Z.create("BoardArchiveResource",{boardId:e}).callDelete().then((function(t){return r((0,v.Qv)("profile-boards:".concat(n),[{id:e,type:"board"}])),r(V(e)),t}))}},ae=function(){var e=void 0!==t?t:t=r(604955),n=E((0,_.useMutation)(e),1)[0];return function(){var e=I(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={boardId:r},e.next=3,new Promise((function(e,r){n({variables:D({},t),onCompleted:function(n,t){t&&r(t[0]),e(n)},onError:function(e){return r(e)}})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},oe=function(){var e=void 0!==a?a:a=r(90105),n=E((0,_.useMutation)(e),1)[0];return function(){var e=I(regeneratorRuntime.mark((function e(r,t,a){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={boardId:r,userId:t,ban:a||!1},e.next=3,new Promise((function(e,r){n({variables:D({},o),onCompleted:function(n,t){t&&r(t[0]),e(n)},onError:function(e){return r(e)}})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n,r,t){return e.apply(this,arguments)}}()},ie=function(){var e=void 0!==i?i:i=r(518190),n=E((0,_.useMutation)(e),1)[0],t=(0,c.useDispatch)();return function(){var e=I(regeneratorRuntime.mark((function e(r,a,o){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={boardId:r,userId:(null==o?void 0:o.id)||""},e.next=3,new Promise((function(e,l){n({variables:D({},i),onCompleted:function(n,i){i&&l(i[0]),t(H(r,a,o)),e(n)},onError:function(e){return l(e)}})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n,r,t){return e.apply(this,arguments)}}()},le=function(){var e=oe();return function(n,r){return function(t){return t(q(n,r)),e(n,r)}}},ue=function(){var e=void 0!==l?l:l=r(16945),n=E((0,_.useMutation)(e),1)[0];return function(){var e=I(regeneratorRuntime.mark((function e(r,t){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={boardId:r,collaboratorIds:t.map((function(e){return e.id})),message:""},e.next=3,new Promise((function(e,r){n({variables:D({},a),onCompleted:function(n,t){t&&r(t[0]),e(n)},onError:function(e){return r(e)}})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()},ce=function(){var e=void 0!==u?u:u=r(787525),n=E((0,_.useMutation)(e),1)[0];return function(){var e=I(regeneratorRuntime.mark((function e(r,t){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={board:r,emails:t,message:""},e.next=3,new Promise((function(e,r){n({variables:D({},a),onCompleted:function(n,t){t&&r(t[0]),e(n)},onError:function(e){return r(e)}})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()},se=function(){var e=ue();return function(n,r,t){return function(a){return a(G(n,r,"new",t)),e(n,t)}}},de=function(){var e,n,t=oe(),a=(e=void 0!==o?o:o=r(472297),n=E((0,_.useMutation)(e),1)[0],function(){var e=I(regeneratorRuntime.mark((function e(r,t){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={board:r,collaboratorIds:[t]},e.next=3,new Promise((function(e,r){n({variables:D({},a),onCompleted:function(n,t){t&&r(t[0]),e(n)},onError:function(e){return r(e)}})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}());return function(e,n,r,o){return function(i){var l,u,c="accepted"===n?a:t;return i(Q(e,null!==(l=null==o?void 0:o.id)&&void 0!==l?l:"",r)),c(e,null!==(u=null==o?void 0:o.id)&&void 0!==u?u:"").catch((function(){return i(G(e,r,n,[o]))}))}}}},712055:function(e,n,r){r.d(n,{Z:function(){return i},f:function(){return l}});var t=r(214494),a=r(254176);function o(e){return t.Z.create("BoardFollowResource",{board_id:e})}function i(e){return function(n){o(e).callCreate().catch((function(){n((0,a.md)(e,!1))})),n((0,a.md)(e,!0))}}function l(e){return function(n){o(e).callDelete().catch((function(){n((0,a.md)(e,!0))})),n((0,a.md)(e,!1))}}},956800:function(e,n,r){function t(e){return{type:"FEED_ITEM_REORDERED",payload:e}}function a(e,n){return{type:"FEED_INVALIDATE",payload:{feedType:e,feedId:n}}}r.d(n,{EX:function(){return i},N8:function(){return a},Qv:function(){return o},_f:function(){return t},vX:function(){return l}});var o=function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object.freeze({});return{type:"APPEND_FEED_ITEMS",payload:{id:e,options:r,items:n}}};function i(e){return{type:"FEED_ITEMS_REMOVED",payload:e}}function l(e){return{type:"FEED_ITEMS_ADDED",payload:e}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/76579-e3d8fb32584d359f.js.map