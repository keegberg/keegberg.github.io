"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[90902],{200310:function(e,t,r){r.d(t,{Z:function(){return h}});var i=r(116303),n=r(898781),o=r(112690),a=r(719626),s=r(349700),l=r(591042),c=r(908390),u=r(515198);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){var t=e.color,r=void 0===t?"default":t,h=e.pinId,f=e.title,p=e.user,v=e.startsAt,y=e.isEpisodeUpcoming,m=e.isEpisodeReplay,g=e.viewParameterType,b=void 0===g?3582:g,x=e.viewType,w=void 0===x?1:x,j=(0,n.ZP)(),P=(0,o.Z)(),A=(0,l.iH)().referrer;if(!p)return null;var I=(0,a.p)(v),z=function(e){P(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){_(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({event_type:102,view_type:w,view_parameter:b,component:0},e))};return(0,u.jsxs)(c.xu,{dangerouslySetInlineStyle:{__style:{padding:"8px 6px 16px"}},children:[!!f&&(y||m)&&(0,u.jsx)(c.xu,{marginBottom:2,children:(0,u.jsxs)(c.iP,{href:"/tv/".concat(h,"/?referrer=").concat(A),onTap:function(){return z()},role:"link",children:[y&&(0,u.jsxs)(c.xu,{children:[(0,u.jsx)(c.xv,{size:"200",weight:"bold",lineClamp:2,children:f}),(0,u.jsx)(c.xv,{size:"100",color:"default",lineClamp:2,children:(0,s.nk)(j._('Live on {{ date }} {{ time }}', 'episodeAttribution.formattedDateTime.text', 'When the episode will go live'),{date:I.shortDate,time:I.time})})]}),m&&(0,u.jsxs)(c.xu,{children:[(0,u.jsx)(c.xv,{size:"200",weight:"bold",lineClamp:2,children:f}),(0,u.jsx)(c.xv,{size:"100",color:"default",lineClamp:2,children:(0,s.nk)(j._('Aired on {{ mmddyyy }}', 'episodeAttribution.formattedDateTime.text', 'When the episode was aired'),{mmddyyy:I.mmddyyy})})]})]})}),(0,u.jsx)(c.iP,{href:"/".concat(p.username),onTap:function(){return z({element:11619})},role:"link",children:(0,u.jsxs)(c.kC,{alignItems:"center",children:[(0,u.jsx)(c.xu,{marginStart:-2,paddingX:2,children:(0,u.jsx)(i.Z,{name:"",size:"sm",src:p.image_medium_url})}),(0,u.jsx)(c.xv,{color:r,size:"200",lineClamp:1,children:p.full_name||""})]})})]})}},447635:function(e,t,r){r.d(t,{Z:function(){return v}});var i=r(76911),n=r(200310),o=r(218672),a=r(898781),s=r(112690),l=r(349700),c=r(591042),u=r(908390),d=r(582637),_=r(515198);function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var i,n,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(i=r.next()).done)&&(o.push(i.value),!t||o.length!==t);a=!0);}catch(l){s=!0,n=l}finally{try{a||null==r.return||r.return()}finally{if(s)throw n}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}var p=16/9;function v(e){var t=e.feedItem,r=e.gridIndex,f=(0,a.ZP)(),v=(0,s.Z)(),y=(0,c.iH)(),m=y.gridItemWidth,g=y.referrer,b=t.creator_class,x=t.creator_class_instance,w=t.id,j=b.creator,P=b.hero_images,A=x.title,I=x.starts_at,z=x.hero_images,E=z?z["312x"]:P?P["312x"]:{},S=(0,d.Zz)(x),L=(0,d.oi)(x),O=function(e){var t=(e&&e.video_list&&e.video_list.V_HLSV4||{}).duration;if(!t)return"";var r=Math.trunc(t/6e4),i=Math.trunc(t/36e5),n=r-60*i;return i>0?"".concat(i,"h"):"".concat(n,"m")}(x.replay_video),M=O.length>0?O:f._('Processing video', 'EpisodeGridRep.pillText.fallback', 'A label indicating that the video is still processing.'),C=new u.Ry(1),Z=f._('Watch', 'EpisodeGridRep.button.text', 'A label indicating that button can be interacted with to watch the video.'),D=h((0,i.useState)(m?m*p:void 0),2),U=D[0],k=D[1];return(0,_.jsx)(u.xu,{children:E.url&&(0,_.jsxs)(i.Fragment,{children:[U?(0,_.jsxs)(u.xu,{alignItems:"center",direction:"column",display:"flex",height:U,justifyContent:"between",position:"relative",rounding:3,width:m,children:[(0,_.jsx)(u.xu,{position:"absolute",left:!0,top:!0,paddingX:3,paddingY:3,zIndex:C,children:(0,_.jsx)(o.Z,{text:M})}),(0,_.jsx)(u.iP,{fullHeight:!0,fullWidth:!0,href:"/tv/".concat(w,"/?referrer=").concat(g),onTap:function(){var e;return v({event_type:102,view_type:1,view_parameter:3582,component:0,aux_data:{content_ids:{pin:w},grid_index:r,referrer:g,story_id:null===(e=b.recap_pin)||void 0===e?void 0:e.id}})},role:"link",children:(0,_.jsx)(u.zd,{width:"100%",height:"100%",rounding:3,wash:!0,children:(0,_.jsx)(u.Ee,{alt:A,color:"gray",fit:"cover",naturalHeight:E.height,naturalWidth:E.width,src:E.url})})}),(0,_.jsx)(u.xu,{position:"absolute",bottom:!0,marginBottom:4,children:(0,_.jsx)(u.zx,{text:Z,role:"link",href:"/tv/".concat(w,"/?referrer=").concat(g),accessibilityLabel:(0,l.nk)(f._('Watch {{episodeTitle}}', 'webapp.app.pinTv.watchBtn.a11yText', 'episodeTitle: a11y text for watch button for the episode'),{episodeTitle:A}).join("")})})]}):(0,_.jsx)(u.xu,{ref:function(e){if(e){var t=e.offsetWidth;k(t*p)}},width:"100%",dangerouslySetInlineStyle:{__style:{paddingBottom:"calc(100% * 16 / 9)"}}}),(0,_.jsx)(n.Z,{isEpisodeReplay:L,isEpisodeUpcoming:S,pinId:w,startsAt:I,title:A,user:j})]})})}},218672:function(e,t,r){r.d(t,{Z:function(){return o}});var i=r(908390),n=r(515198);function o(e){var t=e.text,r=e.isLive,o=void 0!==r&&r,a=o?"#E60023":"black";return(0,n.jsxs)(i.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{backgroundColor:a}},display:"flex",paddingX:2,paddingY:1,rounding:"pill",children:[(0,n.jsx)(i.xu,{color:o?"light":"primary",dangerouslySetInlineStyle:{__style:{marginRight:5}},height:6,rounding:"circle",width:6}),(0,n.jsx)(i.xv,{color:o?"light":"inverse",size:"100",weight:"bold",children:t})]})}},424751:function(e,t,r){r.d(t,{Z:function(){return A}});var i=r(447635),n=r(76911),o=r(200310),a=r(585112),s=r(792182),l=r(591042),c=r(908390),u=r(582637),d=r(515198);function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var i,n,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(i=r.next()).done)&&(o.push(i.value),!t||o.length!==t);a=!0);}catch(l){s=!0,n=l}finally{try{a||null==r.return||r.return()}finally{if(s)throw n}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function f(e){var t=e.story,r=t.objects,h=(0,l.iH)(),f=h.gridItemWidth,p=h.gridGutterWidth,v=((0,s.Z)()||{width:0,height:0}).width,y=8===p?2:4,m=_((0,n.useState)(0),2),g=m[0],b=m[1];return(0,n.useEffect)((function(){b(v/(f+p))}),[v,f,p]),r.length>0&&(0,d.jsxs)(c.kC,{alignItems:"center",direction:"column",gap:{row:0,column:6},children:[(0,d.jsx)(c.X6,{align:"center",size:"400",accessibilityLevel:2,children:t.title.format}),(0,d.jsx)(c.xu,{"data-test-id":"episodes-carousel-container",overflow:"scrollX",paddingX:y,width:g<r.length?"100vw":void 0,children:(0,d.jsx)(c.kC,{gap:{row:y,column:0},children:r.map((function(e){var t=e.creator_class,r=e.creator_class_instance,s=e.id,l=t.creator,_=r.title,h=r.starts_at,p=(0,u.oi)(r),v=(0,u.Zz)(r);return(0,d.jsx)(c.xu,{width:f,children:p?(0,d.jsx)(i.Z,{feedItem:e},t.id):(0,d.jsxs)(n.Fragment,{children:[(0,d.jsx)(a.Z,{creatorClass:t,creatorClassInstance:r,pinId:s,width:f,variant:"grid"}),(0,d.jsx)(o.Z,{pinId:s,title:_,user:l,startsAt:h,isEpisodeUpcoming:v,isEpisodeReplay:p})]})},s)}))})})]})}var p=r(218672),v=r(463241),y=r(898781),m=r(112690),g=r(273712),b=r(666842);function x(e){var t=e.feedItem,r=(0,y.ZP)(),i=(0,m.Z)(),n=(0,l.iH)(),a=n.gridItemWidth,s=n.referrer,_=n.gridGutterWidth,h=t.creator_class,f=t.creator_class_instance,x=t.id,w=f.hero_images,j=f.title,P=w["624x"],A=P.url,I=P.width,z=P.height,E=function(){var e;return i({event_type:102,view_type:1,view_parameter:3582,component:200,aux_data:{content_ids:{pin:x},grid_index:0,referrer:s,story_id:null===(e=h.recap_pin)||void 0===e?void 0:e.id,story_type:"featured_creator_class"}})},S=(f.preview_video&&f.preview_video.video_list||{}).V_HLSV4,L=h.creator,O=f.title,M=(0,u.Zz)(f),C=(0,u.oi)(f),Z=a+24,D=g.vw*Z;return(0,d.jsx)(c.kC,{alignContent:"center",alignItems:"center",direction:"column",gap:{row:0,column:6},justifyContent:"between",children:(0,d.jsxs)(c.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:"#4A4A4A"}},display:"flex",maxWidth:D,padding:3,rounding:7,width:"calc(100vw - ".concat(_,"px)"),children:[(0,d.jsx)(c.iP,{fullWidth:!1,href:"/tv/".concat(x,"/?referrer=").concat(s),onTap:E,role:"link",children:(0,d.jsxs)(c.xu,{position:"relative",height:236,width:132,children:[S?(0,d.jsxs)(c.zd,{width:"100%",height:"100%",rounding:3,wash:!0,children:[(0,d.jsx)(b.Z,{autoplay:!0,format:b.k.HERO,height:236,video:S,width:132,bgImgUrl:A}),(0,d.jsx)(c.xu,{bottom:!0,margin:2,position:"absolute",right:!0,children:(0,d.jsx)(v.Z,{size:"sm"})})]}):(0,d.jsx)(c.zd,{width:"100%",height:"100%",rounding:3,wash:!0,children:(0,d.jsx)(c.Ee,{src:A,alt:j,naturalWidth:I,naturalHeight:z,color:"gray",fit:"cover"})}),(0,d.jsx)(c.xu,{margin:2,position:"absolute",top:!0,children:(0,d.jsx)(p.Z,{text:r._('Live', 'liveSession.badge.liveNow', 'A label indicating event is live now.'),isLive:!0})})]})}),(0,d.jsxs)(c.xu,{alignItems:"center",direction:"column",display:"flex",flex:"grow",justifyContent:"center",marginStart:3,children:[(0,d.jsx)(c.iP,{href:"/tv/".concat(x,"/?referrer=").concat(s),onTap:E,role:"link",children:(0,d.jsx)(c.X6,{align:"center",color:"light",size:"500",children:O})}),(0,d.jsx)(o.Z,{color:"inverse",title:O,pinId:x,user:L,isEpisodeUpcoming:M,isEpisodeReplay:C}),(0,d.jsx)(c.iP,{fullWidth:!1,href:"/tv/".concat(x,"/?referrer=").concat(s),onTap:E,role:"link",children:(0,d.jsx)(c.zx,{color:"red",text:r._('Watch now', 'liveSession.heading.watchNow', 'Link to watch a live episode')})})]})]})})}var w={column:4,row:0};function j(e){var t=e.feedItems;return(0,d.jsx)(c.kC,{justifyContent:"center",gap:w,wrap:!0,children:t.slice(0,3).map((function(e){var t=e.id;return(0,d.jsx)(c.xu,{paddingX:2,children:(0,d.jsx)(x,{feedItem:e})},t)}))})}var P=function(e){var t=e.data,r=e.itemIdx;return(0,d.jsx)(i.Z,{feedItem:t,gridIndex:r},t.creator_class.id)};function A(e){var t=e.feedData,r=e.loadItems,i=(0,y.ZP)(),n=(0,l.iH)(),o=n.gridItemWidth,a=n.gridGutterWidth;return t&&t.length>0?(0,d.jsxs)(c.kC,{direction:"column",gap:{row:0,column:g.ak},width:"100%",children:[t.filter((function(e){return"pin"!==e.type})).map((function(e){if("feed_section_title"===e.type&&"Previous episodes"===e.title)return(0,d.jsx)(c.X6,{align:"center",size:"400",accessibilityLevel:2,children:i._('Explore past episodes', 'liveSession.heading.explorePastEpisodes', 'Heading for previous episodes section')},e.id);switch(e.story_type){case"upcoming_creator_classes":return(0,d.jsx)(f,{story:e},e.id);case"live_creator_class_row":return(0,d.jsxs)(c.kC,{gap:g.ak,direction:"column",children:[(0,d.jsx)(c.X6,{align:"center",size:"400",accessibilityLevel:2,children:i._('Live now', 'liveSession.heading.liveNow', 'Heading for Pins that are Live now')}),(0,d.jsx)(j,{feedItems:e.objects})]},e.id);default:return null}})),(0,d.jsx)(c.xu,{"data-test-id":"tv-previous-episodes",children:(0,d.jsx)(c.Rk,{columnWidth:o,renderItem:function(e){var t=e.data,r=e.itemIdx;return(0,d.jsx)(P,{data:t,itemIdx:r})},gutterWidth:a,items:t.filter((function(e){return"pin"===e.type&&e.creator_class.creator})),loadItems:r,minCols:g.oo,scrollContainer:function(){return window},virtualize:!0})})]}):(0,d.jsx)(c.$j,{accessibilityLabel:i._('Loading Live sessions', 'liveSession.spinner', 'Accessibility label for spinner that displays while Live sessions feed is loading'),show:!0})}},591042:function(e,t,r){r.d(t,{J1:function(){return h},iH:function(){return f},xs:function(){return d}});var i=r(76911),n=(r(908390),r(425288)),o=r(273712);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var i,n,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(i=r.next()).done)&&(o.push(i.value),!t||o.length!==t);a=!0);}catch(l){s=!0,n=l}finally{try{a||null==r.return||r.return()}finally{if(s)throw n}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}var d=function(e){var t=e.pinId,r=c((0,i.useState)({}),2),n=r[0],a=r[1],u=c((0,i.useState)(t),2),d=u[0],_=u[1],h=c((0,i.useState)(0),2),f=h[0];return{activePinId:d,getSubscription:function(e){if(!n)return o.d0.UNKNOWN;switch(n[e]){case!0:return o.d0.TRUE;case!1:return o.d0.FALSE;default:return o.d0.UNKNOWN}},setSubscription:function(e,t){a((function(r){return r&&r[e]!==t?s(s({},r),{},l({},e,t)):r}))},setActivePinId:_,setVolume:h[1],volume:f}},_=(0,n.Z)("LiveSessionContext"),h=_.Provider,f=_.useHook},463241:function(e,t,r){r.d(t,{Z:function(){return a}});var i=r(908390),n=r(591042),o=r(515198);function a(e){var t=e.size,r=void 0===t?"sm":t,a=(0,n.iH)(),s=a.volume,l=a.setVolume;return(0,o.jsx)(i.hU,{accessibilityLabel:"mute",icon:s?"sound":"mute",iconColor:"white",onClick:function(e){var t=e.event;t.preventDefault(),t.stopPropagation(),l(1===s?0:1)},size:null!=r?r:"md"})}},38530:function(e,t,r){r.d(t,{Z:function(){return d}});var i=r(214494),n=r(898781),o=r(112690),a=r(19121),s=r(908390),l=r(273712),c=r(591042),u=r(515198);function d(e){var t=e.color,r=void 0===t?"white":t,d=e.componentType,_=e.creatorClassId,h=e.pinId,f=e.size,p=e.viewParameterType,v=e.viewType,y=(0,n.ZP)(),m=(0,o.Z)(),g=(0,a.Z)().isAuth,b=(0,c.iH)(),x=b.getSubscription,w=b.referrer,j=b.setSubscription,P=b.showSignup,A=x(h);if(A===l.d0.UNKNOWN)return null;var I=A?{text:y._('Attending', 'liveSession.button.attending', 'Button indicating user is subscribed to reminders; click to unsubscribe')}:{text:y._('Remind me', 'liveSession.button.remindMe', 'Button to subscribe to reminders')};return(0,u.jsx)(s.zx,{color:r,onClick:function(e){var t=e.event;if(t.preventDefault(),t.stopPropagation(),m({event_type:102,view_type:v,view_parameter:p,component:d,element:A?12384:12383,aux_data:{content_ids:{pin:h},referrer:w}}),g){var r=i.Z.create("ApiResource",{url:"/v3/classes/".concat(_,"/subscription/"),data:{id:h}});A?r.callDelete():r.callUpdate(),j(h,!A)}else P&&P()},selected:A,size:f,text:I.text})}},585112:function(e,t,r){r.d(t,{Z:function(){return y},t:function(){return p}});var i=r(76911),n=r(218672),o=r(38530),a=r(898781),s=r(112690),l=r(349700),c=r(591042),u=r(666842),d=r(908390),_=r(515198);function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var i,n,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(i=r.next()).done)&&(o.push(i.value),!t||o.length!==t);a=!0);}catch(l){s=!0,n=l}finally{try{a||null==r.return||r.return()}finally{if(s)throw n}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}var p={grid:2,closeup:6},v=16/9;function y(e){var t=e.creatorClass,r=e.creatorClassInstance,f=e.pinId,p=e.variant,y=void 0===p?"grid":p,m=e.width,g=e.height,b=(0,s.Z)(),x=(0,c.iH)().referrer,w=(0,a.ZP)(),j=t.id,P=r.starts_at,A=r.title,I=r.hero_images["624x"],z=I.url,E=I.width,S=I.height,L=(r.preview_video&&r.preview_video.video_list||{}).V_HLSV4,O="closeup"===y,M=function(){var e,t=(e=new Date(P)-new Date,Math.floor(e/864e5)),r=function(e){var t=new Date(e)-new Date;return Math.floor(t/36e5)}(P),i=function(e){var t=new Date(e)-new Date;return Math.floor(t/36e5)}(P);return t>=1?(0,l.nk)(w.ngettext('{{ numDaysUntilEvent }} day', '{{ numDaysUntilEvent }} days', t, 'upcomingEpisode.badge.daysUntil', 'Number of days remaining until the event'),{numDaysUntilEvent:t}):r>=1?(0,l.nk)(w.ngettext('{{ numHoursUntilEvent }} hour', '{{ numHoursUntilEvent }} hours', r, 'upcomingEpisode.badge.hoursUntil', 'Number of hours remaining until the event'),{numHoursUntilEvent:r}):i>1?(0,l.nk)(w.ngettext('{{ numMinutesUntilEvent }} minute', '{{ numMinutesUntilEvent }} minutes', i, 'upcomingEpisode.badge.minutesUntil', 'Number of minutes remaining until the event'),{numMinutesUntilEvent:i}):w._('Live soon', 'liveSession.badge.liveSoon', 'A label indicating event is happening soon.')},C=(0,c.iH)().gridItemWidth,Z=m||C,D=g||(Z?Z*v:void 0),U=new d.Ry(1),k=(0,_.jsx)(o.Z,{componentType:200,creatorClassId:j,pinId:f,size:O?"lg":"md",viewParameterType:3582,viewType:1}),V=h((0,i.useState)(g||(Z?Z*v:void 0)),2),H=V[0],T=V[1];return D?O?(0,_.jsxs)(d.xu,{rounding:3,position:"relative",alignItems:"center",direction:"column",display:"flex",justifyContent:"between",width:Z,height:D||H,children:[(0,_.jsx)(d.xu,{position:"absolute",left:!0,top:!0,paddingX:3,paddingY:3,zIndex:U,children:(0,_.jsx)(n.Z,{text:M()})}),L?(0,_.jsx)(d.xu,{width:"100%",height:"100%",rounding:3,children:(0,_.jsx)(u.Z,{autoplay:!0,format:u.k.CLOSEUP,height:D,video:L,width:Z,bgImgUrl:z})}):(0,_.jsx)(d.zd,{width:"100%",height:"100%",rounding:3,wash:!0,children:(0,_.jsx)(d.Ee,{src:z,alt:A,naturalWidth:E,naturalHeight:S,color:"gray",fit:"cover"})})]}):(0,_.jsxs)(d.xu,{rounding:3,position:"relative",alignItems:"center",direction:"column",display:"flex",justifyContent:"between",width:Z,height:D,"data-test-id":"upcoming-episode-".concat(f),children:[(0,_.jsx)(d.xu,{position:"absolute",left:!0,top:!0,paddingX:3,paddingY:3,zIndex:U,children:(0,_.jsx)(n.Z,{text:M()})}),(0,_.jsx)(d.iP,{href:"/tv/".concat(f,"/?referrer=").concat(x),onTap:function(){var e;return b({event_type:102,view_type:1,view_parameter:3582,component:200,aux_data:{content_ids:{pin:f},referrer:x,story_id:null===(e=t.recap_pin)||void 0===e?void 0:e.id,story_type:"upcoming_creator_classes"}})},role:"link",fullHeight:!0,fullWidth:!0,children:(0,_.jsx)(d.zd,{width:"100%",height:"100%",rounding:3,wash:!0,children:(0,_.jsx)(d.Ee,{src:z,alt:A,naturalWidth:E,naturalHeight:S,color:"gray",fit:"cover"})})}),(0,_.jsx)(d.xu,{position:"absolute",bottom:!0,marginBottom:4,children:k})]}):(0,_.jsx)(d.xu,{ref:function(e){if(e){var t=e.offsetWidth;T(t*v)}},width:"100%",dangerouslySetInlineStyle:{__style:{paddingBottom:"calc(100% * 16 / 9)"}}})}},666842:function(e,t,r){r.d(t,{Z:function(){return d},k:function(){return u}});var i=r(76911),n=r(898781),o=r(591042),a=r(908390),s=r(515198);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var i,n,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(i=r.next()).done)&&(o.push(i.value),!t||o.length!==t);a=!0);}catch(l){s=!0,n=l}finally{try{a||null==r.return||r.return()}finally{if(s)throw n}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}var u={GRID:"grid",HERO:"hero",HEAD:"head",CLOSEUP:"closeup"};function d(e){var t=e.autoplay,r=void 0!==t&&t,c=e.children,d=e.controls,_=e.height,h=e.format,f=e.video,p=e.width,v=e.bgImgUrl,y=(0,o.iH)(),m=y.volume,g=y.setVolume,b=y.renderTvVideo,x=l((0,i.useState)(r),2),w=x[0],j=x[1],P=(0,n.ZP)();if(!f)return null;var A=f.height,I=f.url,z=f.width,E=p/_;return(0,s.jsx)(a.zd,{height:_,rounding:h===u.HEAD?"circle":h===u.CLOSEUP?0:4,width:p,children:h===u.GRID?(0,s.jsx)(a.Ee,{alt:"",color:"",naturalHeight:A,naturalWidth:z,src:v,children:(0,s.jsx)(a.xu,{height:"100%",position:"relative",width:"100%",children:c})}):b&&b({autoplay:r,accessibilityMaximizeLabel:P._('Maximize', 'Video.accessibilityMaximizeLabel', 'Maximize accessibility Label'),accessibilityMinimizeLabel:P._('Minimize', 'Video.accessibilityMinimizeLabel', 'Minimize accessibility Label'),accessibilityMuteLabel:P._('Mute', 'Video.accessibilityMuteLabel', 'Mute accessibility Label'),accessibilityPauseLabel:P._('Pause', 'Video.accessibilityPauseLabel', 'Pause accessibility Label'),accessibilityPlayLabel:P._('Play', 'Video.accessibilityPlayLabel', 'Play accessibility Label'),accessibilityProgressBarLabel:P._('Progress bar', 'Video.accessibilityProgressBarLabel', 'Video progress bar accessibility label'),accessibilityUnmuteLabel:P._('Unmute', 'Video.accessibilityUnmuteLabel', 'Unmute accessibility Label'),aspectRatio:E,captions:"",controls:d,loop:!0,onPlay:function(){},onPlayError:function(){},playing:w,playsInline:!0,poster:v,src:I,volume:m,setPlaying:j,setVolume:g,children:(0,s.jsx)(a.xu,{height:"100%",position:"relative",width:"100%",children:c})})})}},273712:function(e,t,r){r.d(t,{$J:function(){return i},Ct:function(){return _},Ff:function(){return d},Md:function(){return l},My:function(){return a},Rp:function(){return s},ak:function(){return o},d0:function(){return h},jm:function(){return c},oo:function(){return n},vw:function(){return u}});var i={SMALL:"SMALL",MEDIUM:"MEDIUM",LARGE:"LARGE",MOBILE_SMALL:"MOBILE_SMALL",MOBILE_LARGE:"MOBILE_LARGE"},n=2,o=6,a=3,s=1.5,l=16,c=8,u=16/9,d=25,_={PRE_LIVE:1,OFFLINE:2,LIVE:3,POST_LIVE:4},h={TRUE:!0,FALSE:!1,UNKNOWN:void 0}},679107:function(e,t,r){r.d(t,{L:function(){return i}});var i=["pin.id","pin.dominant_color","pin.type","pin.creator_class()","pin.creator_class_instance()","video.video_list[V_720P, V_HLSV4,V_HLSV3_WEB,V_HLSV3_MOBILE]","creatorclass.livestream()","creatorclass.id","creatorclass.title","creatorclass.type","creatorclass.creator()","creatorclass.hero_images()","creatorclass.recap_pin()","creatorclass.soonest_upcoming_instance()","creatorclass.is_viewing_user_subscribed","creatorclass.subscriber_count","creatorclass.subscribers"].concat(["creatorclassinstance.starts_at","creatorclassinstance.id","creatorclassinstance.live_status","creatorclassinstance.preview_video()","creatorclassinstance.replay_video()","creatorclassinstance.title","creatorclassinstance.pinsub_topic()","creatorclassinstance.hero_images()","creatorclassinstance.hero_video()"])},582637:function(e,t,r){r.d(t,{Zz:function(){return a},fN:function(){return o},oi:function(){return n}});var i=r(273712),n=function(e){return e.live_status===i.Ct.POST_LIVE},o=function(e){return e.live_status===i.Ct.LIVE},a=function(e){return e.live_status===i.Ct.PRE_LIVE}},719626:function(e,t,r){r.d(t,{Z:function(){return a},p:function(){return o}});var i=r(785119),n=r(273712);function o(e){return{date:e?(0,i.Z)(new Date(e),"eeee, MMMM do,"):"",shortDate:e?(0,i.Z)(new Date(e),"eee, MMM do,"):"",formalDate:e?(0,i.Z)(new Date(e),"d MMM yyy"):"",dayOfWeek:e?(0,i.Z)(new Date(e),"EEEE"):"",time:e?(0,i.Z)(new Date(e),"h:mm aaa"):"",mmddyyy:e?(0,i.Z)(new Date(e),"MM/dd/yyyy"):"",Emmmdd:e?(0,i.Z)(new Date(e),"E, MMM dd"):""}}function a(e){var t,r,i=e.creator_class_instance.live_status===n.Ct.POST_LIVE;return{pinId:e.id,classId:e.creator_class.id,storyId:null===(t=e.creator_class.recap_pin)||void 0===t?void 0:t.id,creatorClassInstance:e.creator_class_instance,creatorClassInstanceId:e.creator_class_instance.id,title:e.creator_class_instance.title,isLive:e.creator_class_instance.live_status===n.Ct.LIVE,postLive:i,path:"/tv/".concat(e.id,"/?referrer=").concat(e.referrer||0),recapPath:"/pin/".concat((null===(r=e.creator_class.recap_pin)||void 0===r?void 0:r.id)||e.id,"/?referrer=").concat(e.referrer||0),creator:{avatar:e.creator_class.creator.image_medium_url,host:e.creator_class.creator.full_name||e.creator_class.creator.username,path:"/".concat(e.creator_class.creator.username)},video:i&&e.creator_class_instance.replay_video?e.creator_class_instance.replay_video.video_list.V_720P:e.creator_class_instance.preview_video?e.creator_class_instance.preview_video.video_list.V_720P:e.creator_class_instance.hero_video?e.creator_class_instance.hero_video.video_list.V_720P:null,subscriberCount:e.creator_class.subscriber_count,subscribers:e.creator_class.subscribers}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/90902-429eb90267aaab36.js.map