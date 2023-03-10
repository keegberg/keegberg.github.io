"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[52599],{780679:function(e,t,o){o.d(t,{g:function(){return l},t:function(){return r}});var i=o(76911),n=(0,i.createContext)(null),r=n.Provider,l=function(){return(0,i.useContext)(n)}},298361:function(e,t,o){o.d(t,{Z:function(){return l}});var i=o(898781),n=o(349700),r=o(202139);function l(){var e=(0,i.ZP)();return function(t,o){var i=new Date(t),l=new Date-i,a=Math.floor(l/r.FS),s=Math.floor(l/r.UK),c=Math.floor(l/r.F4),u=Math.floor(l/r.VL),d=Math.floor(l/r.N1),_=e.ngettext('{{ minutes }} minute ago', '{{ minutes }} minutes ago', a, ' - ', ' -- '),h=e.ngettext('{{ hours }} hour ago', '{{ hours }} hours ago', s, ' - ', ' -- '),f=e.ngettext('{{ days }} day ago', '{{ days }} days ago', c, ' - ', ' -- '),m=e.ngettext('{{ weeks }} week ago', '{{ weeks }} weeks ago', u, ' - ', ' -- '),v=e.ngettext('{{ years }} year ago', '{{ years }} years ago', d, ' - ', ' -- '),g=e.ngettext('{{ minutes }}m', '{{ minutes }}m', a, 'minutes ago abbreviated', 'minutes ago abbreviated'),p=e.ngettext('{{ hours }}h', '{{ hours }}h', s, 'hours ago abbreviated', 'hours ago abbreviated'),b=e.ngettext('{{ days }}d', '{{ days }}d', c, 'days ago abbreviated', 'days ago abbreviated'),x=e.ngettext('{{ weeks }}w', '{{ weeks }}w', u, 'weeks ago abbreviated', 'weeks ago abbreviated'),y=e.ngettext('{{ years }}y', '{{ years }}y', d, 'years ago abbreviated', 'years ago abbreviated');return d>0?(0,n.nk)(o?y:v,{years:d}).join(""):u>0?(0,n.nk)(o?x:m,{weeks:u}).join(""):c>0?(0,n.nk)(o?b:f,{days:c}).join(""):s>0?(0,n.nk)(o?p:h,{hours:s}).join(""):a>0?(0,n.nk)(o?g:_,{minutes:a}).join(""):e._('Just now', ' - ', ' -- ')}}},892819:function(e,t,o){o.d(t,{Z:function(){return u}});var i=o(66699),n=o(898781);function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var s=function(e,t){var o=t||0,i=Math.pow(10,o),n=+(o?e*i:e).toFixed(8),r=Math.floor(n),l=n-r,a=l>.5-1e-8&&l<.5+1e-8?r%2==0?r:r+1:Math.round(n);return o?a/i:a},c=function(e){try{(0).toLocaleString([e])}catch(t){return!1}return!0};function u(){var e=(0,n.ZP)();return function(t,o,n){var r=0,a=0,u=n&&n.style||void 0,d=n&&n.shortform||!1,_=n&&n.uplimit||void 0,h=n&&n.currency||void 0,f=!!_&&o>=_,m=_&&f?_:o;if("currency"===u){var v=function(e,t){if(t){var o=new Intl.NumberFormat(e,{style:"currency",currency:t}).resolvedOptions(),i=o.minimumFractionDigits,n=o.maximumFractionDigits;if(void 0!==i&&void 0!==n)return{minimumFractionDigits:i,maximumFractionDigits:n}}return{minimumFractionDigits:2,maximumFractionDigits:2}}(t,h),g=v.minimumFractionDigits,p=v.maximumFractionDigits;r=void 0===n||void 0===n.maximum_fraction_digits?p:n.maximum_fraction_digits,a=void 0===n||void 0===n.minimum_fraction_digits?g:n.minimum_fraction_digits}else r=void 0===n||void 0===n.maximum_fraction_digits?0:n.maximum_fraction_digits,a=void 0===n||void 0===n.minimum_fraction_digits?0:n.minimum_fraction_digits;if(d&&m>999&&(r=void 0===n||void 0===n.shortform_maximum_fraction_digits?2:n.shortform_maximum_fraction_digits,a=0),r<a)return String(m);var b=m,x="",y=[{"100M":{value:1e8,localeKey:e._('億', 'Abbreviation for one hundred millions. This abbreviation is only used in Chinese, Japanese and Korean.', 'Abbreviation for one hundred millions. This abbreviation is only used in Chinese, Japanese and Korean.')}},{"10k":{value:1e4,localeKey:e._('万', 'Abbreviation for ten thousand. This abbreviation is only used in Chinese, Japanese and Korean.', 'Abbreviation for ten thousand. This abbreviation is only used in Chinese, Japanese and Korean.')}}],w=[{b:{value:1e9,localeKey:e._('B', 'Abbreviation for one billion.', 'Abbreviation for one billion.')}},{m:{value:1e6,localeKey:e._('M', 'Abbreviation for one million.', 'Abbreviation for one million.')}},{k:{value:1e3,localeKey:e._('k', 'Abbreviation for one thousand.', 'Abbreviation for one thousand.')}}],P=/^zh|ja|ko/.test(t);if(d&&m>999)for(var A=P?y:w,j=0;j<A.length;j+=1){var z=Object.keys(A[j])[0],S=A[j][z].value;if(m>=S){b=s(m/S*Math.pow(10,r))/Math.pow(10,r),x=A[j][z].localeKey;break}}if(null==b)return"";var C=b.toLocaleString([c(t)&&"ar-SA"!==t?t:"en-US"],function(e){var t=e.maximumFractionDigits,o=e.minimumFractionDigits,i=e.style,n=e.currency,r={maximumFractionDigits:t,minimumFractionDigits:o};return i?l(l({},r),{},{style:i},"currency"===i?{currency:n,currencyDisplay:"symbol"}:{}):r}({maximumFractionDigits:r,minimumFractionDigits:a,currency:h,style:u}));return x&&x.length>0?(0,i.Z)(e._('{{formattedNumber}}{{numberSuffix}}', 'i18n.usePrettyNumberFormat.prettyNumberFormat', 'String used to concatenate formatted number and localized number suffix'),{formattedNumber:C,numberSuffix:x})+(f?"+":""):C+(f?"+":"")}}},458882:function(e,t,o){o.d(t,{l:function(){return r},r:function(){return l}});var i=o(76911),n=(0,i.createContext)(null),r=function(){return(0,i.useContext)(n)},l=n.Provider},667679:function(e,t,o){var i=o(458882),n=o(780679);function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}t.Z=function(){var e=(0,n.g)(),t=(0,i.l)();return function(o){var i=o.mobileOptions,n=o.desktopOptions,a=o.reason,s=o.attributionLabel;e?e.showDesktopSignupModal(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({signupFlow:"login"===(null==n?void 0:n.modalType)?{type:"login"}:{type:"signup"},reason:a,attributionLabel:s},null==n?void 0:n.modalOptions)):t&&t.showMobileSignupModal({reason:a,attributionLabel:s,headingType:null==i?void 0:i.headingType})}}},985913:function(e,t,o){var i=o(858142),n=/\{\{\s*(\w+)\s*\}\}/g;t.Z=function(e,t){return(0,i.Z)(n,e,t)}},858791:function(e,t){t.Z=function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/\'/g,"&#39;")}},858142:function(e,t){t.Z=function(e,t,o){return t?t.replace(e,(function(e,t){return o&&Object.prototype.hasOwnProperty.call(o,t)?o[t]:""})):""}},66699:function(e,t,o){var i=o(985913),n=o(858791);t.Z=function(e,t){var o={};return Object.keys(t).forEach((function(e){o[e]=t[e]?(0,n.Z)(t[e].toString()):""})),(0,i.Z)(e,o)}},758127:function(e,t,o){o.d(t,{U:function(){return r},Z:function(){return l}});var i=o(908390),n=o(515198),r=", ";function l(){return(0,n.jsx)(i.xu,{display:"visuallyHidden",children:r})}},948618:function(e,t,o){o.d(t,{Z:function(){return r}});var i=o(908390),n=o(515198);function r(e){var t=e.ariaHidden,o=void 0!==t&&t,r=e.color,l=void 0===r?"darkGray":r,a=e.size;return(0,n.jsx)("span",{"aria-hidden":o,style:{padding:"0 4px"},children:(0,n.jsx)(i.xv,{color:l,inline:!0,size:null!=a?a:"200",children:"·"})})}},815613:function(e,t,o){o.d(t,{Z:function(){return P}});var i=o(829407),n=o(898781),r=o(112690),l=o(927383),a=o(201155),s=o(667679),c=o(52022),u=o(19121),d=o(945698),_=o(62409),h=o(773285),f=o(350118),m=o(698330),v=o(50286),g=o(343341),p=o(640064),b=o(867820),x=o(908390),y=o(515198),w=function(e){var t=e.children,o=e.pulsar,i=e.testId;return o.show?(0,y.jsx)(x.xu,{position:"relative","data-test-id":i,children:(0,y.jsxs)(x.iP,{tapStyle:"none",onTap:o.onClick,children:[(0,y.jsx)(x.xu,{position:"absolute",marginTop:-5,dangerouslySetInlineStyle:{__style:{marginLeft:"-75px"}},children:t}),(0,y.jsx)(x.xu,{position:"absolute",marginTop:-12,dangerouslySetInlineStyle:{__style:{marginLeft:"-83px"}},children:(0,y.jsx)(x.o3,{})})]})}):(0,y.jsx)(x.xu,{"data-test-id":i,children:t})};function P(e){var t=e.auxData,o=e.disabled,P=e.disableLog,A=e.followEventType,j=e.id,z=e.inline,S=e.invertColors,C=e.isFollowed,k=e.isIdeaPin,F=e.isLegoEnabled,O=e.isSecondaryButton,I=e.isUserFollowButton,Z=e.isUserMe,T=e.onFollow,D=e.onUnfollow,E=e.pinId,M=e.shouldUseLegoColors,B=e.showPulsar,L=e.size,U=e.textType,R=void 0===U?"FollowFollowing":U,H=e.unfollowEventType,N=e.viewParameter,G=e.viewType,W=(0,n.ZP)(),K=(0,v.HG)(),X=(0,g.F9)().showToast,q=(0,c.Z)(),J=(0,r.Z)(),V=(0,s.Z)(),Y=(0,h.F)().checkExperiment,Q=(0,l.Z)(),$=(0,u.Z)(),ee=$&&$.isAuth,te=(0,p.f)(),oe=te.unauthFollowUserId,ie=te.setUnauthFollowUserId,ne=(0,m.mN)()(j),re=(0,f.S6)()(null!=E?E:"")||{},le=re.link_domain,ae=re.native_creator,se=re.origin_pinner,ce=re.pinner,ue=(0,_.wS)(le,ae,se,ce),de=null!=ne?ne:ue;(0,i.Z)((function(){!K&&ee&&oe&&j&&oe===j&&T(j)}));var _e=Q({fn:function(){ee?C?(D(j),P||J({event_type:H,view_type:G,view_parameter:N,object_id_str:j,aux_data:t})):(T(j),I&&X((function(e){var t=e.hideToast;if(!de)return null;var o=de.username?"/".concat(de.username,"/"):"";return(0,y.jsx)(a.Z,{handleHide:t,text:(0,y.jsx)(x.xv,{children:W._('Following! Their created Pins will show up in your home feed!', 'followButton.follow.informationalToastText', 'Text explaining that a creator\'s Pins will show up in home feed after follow')}),userId:j,href:o,imageUrl:de.image_medium_url})})),P||J({event_type:A,view_type:G,view_parameter:N,object_id_str:j,aux_data:t})):((0,b.My)("mweb_unauth_follow_button.tap.".concat(String(G))),5===G&&26===A&&(0,b.My)("mweb_unauth_board_page_follow_button.tap"),(0,b.NC)(C?"press_profile_unfollow":"press_profile_follow"),q({action:"click",item:"board-follow-button"}),V({reason:"ACTION_REQUIRES_LOGIN_OR_SIGNUP",attributionLabel:k?"tap.unauth_idea_pin.follow_button":"tap.unauth.follow_button",desktopOptions:{modalType:"signup",modalOptions:K&&Y("pcons_dweb_contextual_follow_modal").anyEnabled?{source:"followButton",container:"follow"}:void 0},mobileOptions:!K&&Y("pcons_mweb_contextual_follow_modal").anyEnabled?{headingType:"follow"}:void 0}),K||ie(null!=j?j:""),(0,b.NC)("clickthrough"))},modalHeader:(0,d.N4)({i18n:W,toFollow:!C})}),he=!C&&!!B,fe=function(){if(Z)return W._('That\'s you!', 'Follow button is disabled because this is you', 'Follow button is disabled because this is you');if("AddRemove"===R)return C?W._('Remove', 'unfollowButton.removeText', 'Follow button label - followed state, so user can click to "remove" the follow'):W._('Add', 'followButton.addText', 'Follow button label - unfollowed state, so user can click to "add" the follow');var e="FollowUnfollow"===R?W._('Unfollow', 'unfollowButton.unfollowText', 'Follow button label - followed state, so user can click to "unfollow" the follow'):W._('Following', 'Follow button label - followed state', 'Follow button label - followed state');return C?e:W._('Follow', 'Follow button label - unfollowed state', 'Follow button label - unfollowed state')};return(0,y.jsx)(w,{pulsar:he?{show:!0,onClick:_e}:{show:!1},testId:Z||C?"board-unfollow-button":"board-follow-button",children:(0,y.jsx)(x.zx,{color:M||"AddRemove"===R||!F&&O||C?"gray":"red",disabled:Z||o,fullWidth:z,onClick:he?void 0:function(e){var o=e.event;o.preventDefault(),o.stopPropagation(),P||J({event_type:101,component:13672,element:11951,object_id_str:j,view_type:G,view_parameter:N,aux_data:t}),_e()},selected:S?!C:M&&C||!!C&&O,size:L,text:fe(),accessibilityLabel:fe()})})}},80811:function(e,t,o){o.d(t,{Z:function(){return P}});var i=o(76911),n=o(948618),r=o(815613),l=o(298361),a=o(112690),s=o(892819),c=o(19121),u=o(349700),d=o(867820),_=o(50286),h=o(758127),f=o(722556),m=o(898781),v=o(908390),g=o(526760),p=o(515198);function b(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return x(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,i=new Array(t);o<t;o++)i[o]=e[o];return i}function y(e,t){var o=e.full_name,i=e.username,n=(0,p.jsx)(v.rU,{href:"/".concat(i),display:"inlineBlock",underline:"hover",children:o});return(0,u.nk)(t._('{{ linkToUser }} invited you to join this board', 'boardRep.invite.invitationText', 'Indicating that another user invited the viewer to this board'),{linkToUser:n})}var w=function(e){var t=e.children,o=(0,c.Z)(),i=(0,_.HG)(),n=o&&o.isAuth;return i&&n?(0,p.jsx)(v.X6,{accessibilityLevel:2,size:"400",lineClamp:1,children:t}):(0,p.jsx)(v.xv,{lineClamp:1,weight:"bold",children:t})};function P(e){var t=e.archivedDate,o=e.boardUrl,c=e.canEdit,x=e.collaborators,P=e.collaboratorsCount,A=void 0===P?0:P,j=e.containerBackgroundColor,z=e.coverPhoto,S=e.followedByMe,C=e.fullSizeDrawer,k=e.sensitivityScreen,F=e.handleInviteResponse,O=e.hideMeta,I=e.id,Z=e.invite,T=e.imagesLego,D=void 0===T?[]:T,E=e.isBoardInviteAccepted,M=e.isActive,B=e.isAuthenticated,L=e.isCollaborative,U=e.isCollaborator,R=e.isOwner,H=e.isProtected,N=e.isSecret,G=e.lastModifiedDate,W=e.layout,K=e.locale,X=e.name,q=e.numCols,J=e.onEditClick,V=e.onFollow,Y=e.onUnfollow,Q=e.owner,$=e.pinCount,ee=void 0===$?0:$,te=e.sectionCount,oe=e.showFollowButton,ie=e.viewParameter,ne=e.viewType,re=e.viewerId,le=(0,m.ZP)(),ae=(0,l.Z)(),se=(0,s.Z)(),ce=(0,a.Z)(),ue=(0,_.HG)(),de=ue&&B,_e="square"===W?g.M0:g.z9,he=D.map((function(e){return{url:e.url,name:X}})),fe=!!Q&&!c&&oe,me=!R&&!U&&!(null==k||!k.show_warning),ve={board_id:I,reason:null==k?void 0:k.reason};(0,i.useEffect)((function(){me&&ce({event_type:13,component:13861,view_type:215,aux_data:ve})}),[]);var ge=Q?Q.id:void 0,pe=[].concat(b(x.filter((function(e){return e.id===ge}))),b(x.filter((function(e){var t=e.id;return t===re&&t!==ge}))),b(x.filter((function(e){var t=e.id;return![ge,re].includes(t)})))).map((function(e){var t,o;return{name:null!==(t=de?e.full_name:e.username)&&void 0!==t?t:"",src:"https://s.pinimg.com/images/user/default_75.png"===e.image_medium_url?"":null!==(o=e.image_medium_url)&&void 0!==o?o:""}})),be=A>=pe.length?A-pe.length:0;be=be>99?100:be;var xe=[].concat(b(pe),b(Array(be).fill({name:"",src:""}))),ye=de?24:16,we=ye/3*(2*(pe.length>2?3:pe.length)+1);return(0,p.jsxs)(v.xu,{"data-test-id":"boardCard-".concat(X),position:"relative",height:fe?"max(calc(25vh + 10px), ".concat(220,"px)"):"100%",width:de?_e:"100%",children:[(0,p.jsx)(f.Z,{canEdit:c,containerBackgroundColor:j,coverPhoto:z,images:he,isProtected:H,isSecret:N,fullSize:C,showSensitivityScreen:me,isActive:M,onEditClick:J,layout:W}),!O&&(0,p.jsx)(i.Fragment,{children:Z?(0,p.jsxs)(i.Fragment,{children:[(0,p.jsxs)(v.xu,{padding:2,alignItems:"start","data-test-id":"board-card-title",display:"flex",flex:"grow",justifyContent:"between",children:[(0,p.jsxs)(v.xu,{width:"100%",children:[(0,p.jsx)(v.rU,{href:null!=o?o:"",children:(0,p.jsx)(v.xu,{marginTop:0,marginBottom:1,children:(0,p.jsx)(w,{children:X})})}),E?(0,p.jsx)(v.xv,{size:"200",lineClamp:1,children:le._('You\u2019ve joined', 'boardRep.invite.invitationAcceptedText', 'Text shown after accepting collaborator board invitations')}):(0,p.jsx)(v.xv,{size:"200",children:y(Z.invited_by_user,le)})]}),(0,p.jsx)(v.xu,{dangerouslySetInlineStyle:{__style:{marginTop:-1}},marginStart:2,width:we,minWidth:we,height:ye,children:(0,p.jsx)(v.HE,{accessibilityLabel:h.U+(le._('Board has collaborators', 'BoardCard.AvatarGroup.Collaborators', 'Board description: title, number of pins, date, and it has collaborators or not.')),collaborators:xe})})]}),E?(0,p.jsx)(v.xu,{direction:"row",display:"flex",paddingX:2,children:(0,p.jsx)(v.xu,{flex:"grow",marginBottom:3,paddingX:1,children:(0,p.jsx)(v.zx,{role:"link",href:null!=o?o:"",fullWidth:!0,size:"lg",text:le._('See board', 'boardRep.invite.seeBoardButton', 'Button text to see board after accepting collaborator invite')})})}):(0,p.jsxs)(v.kC,{direction:"row",flex:"grow",justifyContent:"start",wrap:!0,children:[(0,p.jsx)(v.xu,{marginBottom:3,paddingX:1,flex:"grow",children:(0,p.jsx)(v.zx,{fullWidth:!0,onClick:function(){null==F||F(!1)},size:"lg",text:le._('Decline', 'boardRep.invite.declineButton', 'Button text to decline board collaborator invite or request')})}),(0,p.jsx)(v.xu,{marginBottom:3,paddingX:1,flex:"grow",children:(0,p.jsx)(v.zx,{fullWidth:!0,color:"red",onClick:function(){null==F||F(!0)},size:"lg",text:le._('Accept', 'boardRep.invite.acceptButton', 'Button text to accept board collaborator invite or request')})})]})]}):(0,p.jsxs)(v.xu,{height:de?void 0:g.s0,marginTop:de?0:1,paddingX:2,paddingY:de?2:0,children:[(0,p.jsxs)(v.xu,{alignItems:"center","data-test-id":"board-card-title",display:"flex",flex:"grow",justifyContent:"between",children:[(0,p.jsx)(w,{children:X}),L&&(0,p.jsx)(v.xu,{dangerouslySetInlineStyle:{__style:{marginTop:-1}},marginStart:2,width:we,minWidth:we,height:ye,children:(0,p.jsx)(v.HE,{accessibilityLabel:h.U+(le._('Board has collaborators', 'BoardCard.AvatarGroup.Collaborators', 'Board description: title, number of pins, date, and it has collaborators or not.')),collaborators:xe})})]}),(0,p.jsxs)(v.xu,{alignItems:ue?"center":"start",direction:ue?"row":"column",display:"flex",marginTop:1,children:[(0,p.jsxs)(v.xv,{size:"100",lineClamp:1,children:[(0,p.jsx)(h.Z,{}),(0,u.nk)(le.ngettext('{{ count }} Pin', '{{ count }} Pins', ee, 'profile.ProfilePage.board.BoardCard.PinsCount', 'label for n amount of pins'),{count:se(K,ee,{})}),!!te&&(0,p.jsxs)(i.Fragment,{children:[(0,p.jsx)(n.Z,{ariaHidden:!0}),(0,p.jsx)(h.Z,{}),(0,u.nk)(le.ngettext('{{ count }} section', '{{ count }} sections', te, 'profile.ProfilePage.board.BoardCard.SectionsCount', 'label for n amount of sections'),{count:te})]})]}),!t&&(0,p.jsx)(v.xu,{dangerouslySetInlineStyle:{__style:{display:de?"inline-flex":"inline",paddingLeft:ue?7:0}},children:(0,p.jsxs)(v.xv,{color:"subtle",inline:!0,size:"100",lineClamp:1,children:[(0,p.jsx)(h.Z,{}),ae(G,!0)]})})]}),fe&&(0,p.jsx)(v.xu,{marginTop:2===q?3:void 0,column:2===q?12:void 0,flex:"none",children:(0,p.jsx)(r.Z,{disabled:null==Q?void 0:Q.blocked_by_me,followEventType:26,id:I,isFollowed:S,onFollow:function(e){B||(0,d.NC)("press_follow_board"),V&&V(e)},onUnfollow:function(e){B||(0,d.NC)("press_unfollow_board"),Y&&Y(e)},shouldUseLegoColors:!0,size:"md",unfollowEventType:27,viewParameter:ie,viewType:ne})})]})})]})}},686844:function(e,t,o){o.d(t,{Z:function(){return r}});var i=o(908390),n=o(515198);function r(e){var t=e.customCover,o=e.height,r=e.imgUrl,l=e.imgPos,a=e.width,s=o/a,c="center center";if(t&&l){var u=1;u=l.height/l.width>s?a/l.width:o/l.height;var d=l.x*u,_=l.y*u;c="-".concat(d,"px -").concat(_,"px")}var h={backgroundImage:"url(".concat(r,")"),backgroundPosition:c,backgroundRepeat:"no-repeat",backgroundSize:"cover",minHeight:"100%",backgroundColor:"#EFEFEF",position:"relative"};return(0,n.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:{height:o,width:a}},children:(0,n.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:h},children:(0,n.jsx)("div",{className:"imageWash",style:{position:"absolute"}})})})}},722556:function(e,t,o){o.d(t,{Z:function(){return _}});var i=o(686844),n=o(108211),r=o(898781),l=o(50286),a=o(780280),s=o(908390),c=o(526760),u=o(515198),d="100%";function _(e){var t,o,_=(0,r.ZP)(),h=e.containerBackgroundColor,f=void 0===h?"white":h,m=e.coverPhoto,v=e.fullSize,g=e.images,p=e.isProtected,b=e.isSecret,x=e.showSensitivityScreen,y=e.isActive,w=e.canEdit,P=e.onEditClick,A=e.layout,j=(0,l.HG)(),z=(0,a.B)(),S=z.isRTL,C=z.isAuthenticated,k=j&&C,F=g[0],O=!m&&(null===(t=g[0])||void 0===t?void 0:t.name)||_._('Cover image', 'DrawerImageGroup', 'Alt text for the main image of a board'),I=Array(2).fill(),Z=new s.Ry(1),T="square"===A?c.M0:c.z9,D="square"===A?c.FP:c.FC,E=null!=F&&F.url?(0,u.jsx)(s.Ee,{alt:O,color:"#efefef",fit:"cover",naturalHeight:133,naturalWidth:133,src:F.url}):(0,u.jsx)(s.xu,{color:"secondary",height:"100%",width:"100%"}),M=x?{filter:"blur(20px)"}:{};return(0,u.jsx)(s.zd,{height:v?"100%":void 0,rounding:4,width:"100%",wash:y,children:(0,u.jsxs)(s.xu,{"aria-hidden":!0,display:"flex",height:k?D:"100%",direction:"row",children:[(0,u.jsx)(s.sg,{span:8,children:(0,u.jsx)(s.xu,{dangerouslySetInlineStyle:{__style:M},position:"relative",height:v?"100%":void 0,children:(0,u.jsx)(s.xu,{color:"secondary",dangerouslySetInlineStyle:{__style:{paddingBottom:d}},overflow:"hidden",width:"100%",children:(0,u.jsxs)(s.xu,{"data-test-id":"drawer-image-group-first-image-container",dangerouslySetInlineStyle:{__style:{borderColor:f,borderStyle:"solid",borderWidth:"1px 0 1px 1px"}},overflow:"hidden",position:"absolute",top:!0,bottom:!0,right:!0,left:!0,children:[(p||b)&&(0,u.jsx)(s.xu,{left:!S,right:S,margin:2,position:"absolute",top:!0,zIndex:Z,children:(0,u.jsx)(n.Z,{backgroundColor:"default",iconColor:"default",privacy:b?"secret":"protected",size:k?32:24})}),k&&null!=m&&m.url?(0,u.jsx)(i.Z,{customCover:m.isCustom,imgPos:m.position||{width:0,height:0,x:0,y:0},imgUrl:null!==(o=m.url)&&void 0!==o?o:"",width:Math.floor(T/3*2),height:D}):E]})})})}),(0,u.jsx)(s.sg,{span:4,children:(0,u.jsxs)(s.xu,{dangerouslySetInlineStyle:{__style:M},height:"100%",children:[w&&y&&(0,u.jsx)(s.xu,{left:S,right:!S,margin:2,position:"absolute",bottom:!0,zIndex:Z,children:(0,u.jsx)(s.hU,{accessibilityLabel:_._('Edit', 'DrawerImageGroup.edit', 'Icon indicating that a board is editable'),bgColor:"white",icon:"edit",iconColor:"darkGray",onClick:function(e){var t=e.event;return null==P?void 0:P(t)},size:"sm"})}),I.map((function(e,t){var o=g[k?t:t+1];return(0,u.jsx)(s.xu,{position:"relative",height:v?"50%":void 0,children:(0,u.jsx)(s.xu,{color:"secondary",dangerouslySetInlineStyle:{__style:{paddingBottom:d}},overflow:"hidden",width:"100%",children:(0,u.jsx)(s.xu,{dangerouslySetInlineStyle:{__style:{borderColor:f,borderStyle:"solid",borderWidth:0===t?1:"0 1px 1px 1px"}},overflow:"hidden",position:"absolute",top:!0,bottom:!0,right:!0,left:!0,children:null!=o&&o.url?(0,u.jsx)(s.Ee,{alt:o&&o.name||"placeholder",color:"#efefef",fit:"cover",naturalHeight:133,naturalWidth:133,src:o.url}):(0,u.jsx)(s.xu,{color:"secondary",height:"100%",width:"100%"})})})},t)}))]})}),x&&(0,u.jsx)(s.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{background:"rgba(0,0,0,0.5)"}},display:"flex",height:"100%",justifyContent:"center",position:"absolute",top:!0,width:"100%",children:(0,u.jsx)(s.X6,{align:"center",color:"light",size:"400",children:_._('This board may contain sensitive content', 'drawerImageGroup.sensitivityScreen.heading', 'Warning text for a board that may have sensitive content')})})]})})}},526760:function(e,t,o){o.d(t,{FC:function(){return a},FP:function(){return r},M0:function(){return n},Xq:function(){return s},s0:function(){return i},z9:function(){return l}});var i=40,n=236,r=157,l=320,a=213,s=7},108211:function(e,t,o){o.d(t,{Z:function(){return l}});var i=o(898781),n=o(908390),r=o(515198);function l(e){var t=e.backgroundColor,o=void 0===t?"darkGray":t,l=e.iconColor,a=void 0===l?"inverse":l,s=e.iconSize,c=e.privacy,u=e.size,d=void 0===u?20:u,_=(0,i.ZP)();return(0,r.jsx)(n.xu,{display:"flex",direction:"column",alignItems:"center",color:o,width:d,height:d,rounding:"circle",justifyContent:"center",children:(0,r.jsx)(n.JO,{accessibilityLabel:_._('Secret board icon', 'Icon indicating that a board is secret', 'Icon indicating that a board is secret'),color:a,icon:"secret"===c?"lock":"security",size:null!=s?s:d/2})})}},340494:function(e,t,o){o.d(t,{Z:function(){return r}});var i=o(19121),n=o(50286);function r(){var e=(0,n.HG)(),t=(0,i.Z)(),o=t&&t.isAuth;if(e&&o){return function(e){var t,o,i=e.cover_images&&e.cover_images["222x"]?e.cover_images["222x"].url:void 0,n=null!==(t=null===(o=e.cover_pin)||void 0===o?void 0:o.image_url)&&void 0!==t?t:i,r=e.images&&e.images["170x"]&&e.images["170x"].length?e.images["170x"][0].url:"";return n||r}}return function(e,t){var o,i,n=e.has_custom_cover?e.image_cover_hd_url||e.image_cover_url:"";if(!n)return"";var r=e.cover_images&&e.cover_images["400x300"]?e.cover_images["400x300"].url:void 0,l=e.cover_images&&e.cover_images["222x"]?e.cover_images["222x"].url:void 0,a=e.cover_images&&e.cover_images["216x146"]?e.cover_images["216x146"].url:void 0,s=null!==(o=null!==(i=null!=r?r:l)&&void 0!==i?i:a)&&void 0!==o?o:"",c=e.image_cover_url||"";return n||(t&&t>2&&s?s:"")||c}}},853492:function(e,t,o){o.d(t,{Bw:function(){return a},Jx:function(){return l},po:function(){return i}});var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(null!=e?e:"").substring((null!=e?e:"").lastIndexOf("/")+1)},n=function(e){return{dominant_color:"#FFFFFF",height:1,url:e,width:1}},r=function(e){if(!e)return function(){return!0};var t=i(e);return function(e){var o;return"string"==typeof e?i(e)!==t:i(null!==(o=e.url)&&void 0!==o?o:"")!==t}},l=function(e,t){return e.images&&e.images["170x"]?e.images["170x"].filter(r(t)):e.pin_thumbnail_urls?e.pin_thumbnail_urls.filter(r(t)).map(n):[]},a=function(e){var t;return null!==(t=e&&e.crop&&e.size&&{x:e.crop[0],y:e.crop[1],width:e.size[0],height:e.size[1]})&&void 0!==t?t:{x:0,y:0,width:0,height:0}}},62409:function(e,t,o){o.d(t,{AH:function(){return s},Bk:function(){return r},CK:function(){return a},Xe:function(){return n},kb:function(){return l},wS:function(){return i}});var i=function(e,t,o,i){return t||(e?e.official_user:o||i)};function n(e){var t=e.hasLinkDomain,o=e.hasNativeCreator,i=e.hasOriginPinner,n=e.pinDomain,r=e.sourceUserUsername,l=e.sourceUserFullName,a=!o&&t?n:"";return!o&&(t||i)&&r?{pinCreditLink:"/".concat(r,"/"),pinCredit:l}:{pinCreditLink:void 0,pinCredit:a}}var r=function(e){var t,o=e.i18n,i=e.isLego,n=e.hasLinkDomain,r=e.hasRichMetadataArticle,l=e.hasRichMetadataTutorial,a=e.hasRichMetadataRecipeCategorizedIngredients,s=e.hasRichMetadataProductOfferSummary,c=e.hasRichSummaryProductOfferSummary,u=e.richMetadataRecipeFromAggregatedData,d=e.richMetadataProductName,_=e.richSummaryProductName,h=a;d&&s&&(t=!0);var f=r,m=l,v=i?o._('From ', 'Closeup pin annotation', 'Closeup pin annotation'):o._('Saved from ', 'Closeup pin annotation', 'Closeup pin annotation');return!n||u?v=o._('Saved by ', 'Closeup pin annotation', 'Closeup pin annotation'):t?v=o._('Product sold by ', 'pin annotation', 'pin annotation'):m?(i&&(v=o._('From ', 'pin annotation', 'pin annotation')),v=o._('Saved from ', 'pin annotation', 'pin annotation')):h?v=o._('Recipe from ', 'pin annotation', 'pin annotation'):f&&(v=o._('Article from ', 'pin annotation', 'pin annotation')),!s&&_&&c&&(v=o._('Product sold by ', 'pin annotation', 'pin annotation')),v},l=function(e){var t,o=e.hasLinkDomain,i=e.richMetadata,n=e.richSummary;return o&&(null==i||null===(t=i.recipe)||void 0===t||!t.fromAggregatedData)&&null!=i&&i.products&&i.products[0]&&i.products[0].name&&i.products[0].offerSummary?i.products[0].offerSummary:null!=n&&n.products&&n.products[0]&&n.products[0].name&&n.products[0].offerSummary?n.products[0].offerSummary:void 0},a=function(e){var t=e.hasRichMetadata,o=e.hasRichMetadataProducts,i=e.hasRichMetadataArticle,n=e.hasRichMetadataRecipe;return t?o?144:i?141:n?145:139:140},s=function(e){return!!e&&!e.startsWith("https://i.pinimg.com")}},927383:function(e,t,o){var i=o(898781),n=o(50286),r=o(987318),l=o(945698);t.Z=function(){var e=(0,i.ZP)(),t=(0,n.HG)(),o=(0,r.H)(),a=o.viewer,s=o.loginForMore,c=o.limitedLoginModalSubheader,u=o.limitedLoginModalNextLocation;return"LIMITED_LOGIN"===a.type?function(o){var i=o.modalHeader,n=o.nextLocation;return function(o){var r=null;o&&(o.nativeEvent&&o.nativeEvent instanceof Event?r=o:o.event&&(r=o.event)),r&&(r.preventDefault&&r.preventDefault(),r.stopPropagation&&r.stopPropagation()),null==s||s.setVisible(!0),null==c||c.setText(i||(t?(0,l.hr)(e):(0,l.Wh)(e))),n&&(null==u||u.setRoute(n))}}:function(e){return e.fn}}},201155:function(e,t,o){o.d(t,{Z:function(){return u}});var i=o(908390),n=o(515198);function r(e){var t=e.ideaPinImages,o={1:28,2:40,3:48},r=t.map((function(e,t){var o,r,l;return(0,n.jsx)(i.xu,{height:48,width:28,color:"default",borderStyle:"sm",overflow:"hidden",rounding:2,dangerouslySetInlineStyle:{__style:{borderColor:"white",marginInlineEnd:"-17px",WebkitMaskImage:"-webkit-radial-gradient(white, black)",zIndex:t}},children:(0,n.jsx)(i.Ee,{alt:"",src:null!==(o=null==e?void 0:e.url)&&void 0!==o?o:"",color:"#696969",fit:"cover",naturalHeight:null!==(r=null==e?void 0:e.height)&&void 0!==r?r:1,naturalWidth:null!==(l=null==e?void 0:e.width)&&void 0!==l?l:1})},t)}));return(0,n.jsx)(i.kC,{justifyContent:"center",children:(0,n.jsx)(i.kC,{justifyContent:"start",width:o[t.length],children:r})})}var l=o(499128),a=o(898781),s=o(784590),c=o(50286);function u(e){var t=e.handleHide,o=e.text,u=e.userId,d=e.href,_=e.imageUrl,h=(0,a.ZP)(),f=(0,c.HG)(),m=(0,s.Z)({name:"UserStoryPinsFeedResource",options:{data:{filter_version:2,public_only:!0},field_set_key:"partner_grid_item",user_id:u}}),v=Array.isArray(o)?o.join(" "):o;if(0===(m.data||[]).length){var g=_?(0,n.jsx)(i.xu,{height:48,overflow:"hidden",width:48,children:(0,n.jsx)(i.Ee,{alt:h._('Image of who you followed', 'userFollowingToast.thumbnail.userImage', 'Profile thumbnail of the user you followed'),fit:"cover",naturalHeight:1,naturalWidth:1,src:_})}):void 0;return(0,n.jsx)(l.ZP,{duration:5e3,onHide:t,text:v,href:d,iconThumbnail:g,thumbnailShape:"circle"})}var p=(m.data||[]).slice(0,3).map((function(e){var t;return null===(t=e.images)||void 0===t?void 0:t[f?"236x":"170x"]})),b=(0,n.jsx)(r,{ideaPinImages:p});return(0,n.jsx)(l.ZP,{href:d,duration:5e3,onHide:t,iconThumbnail:b,text:v,thumbnailShape:"square"})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/52599-e63d621b16dc8e51.js.map