"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[55582],{155582:function(e,t,o){o.d(t,{Z:function(){return F}});var n=o(76911),r=o(214494);var l=o(512465),i=o(898781),s=o(19121),a=o(349700),c=o(129274),u=o(966113),_=o(908390),f=o(515198),d=u.K_+"?source=block_dialogue";function h(e){return e.map((function(e){return e.full_name}))}var p=function(e){var t=e.users,o=e.onClose,n=e.onSubmit,r=(0,i.ZP)(),s=(0,f.jsx)("strong",{children:(0,l.Z)(h(t),r)},"userlist");return(0,f.jsxs)("form",{method:"post",children:[(0,f.jsxs)(_.xu,{padding:8,children:[(0,f.jsx)(_.xv,{children:(0,a.nk)(r._('If you block {{ users }}, you won\u2019t be able to follow  each other or interact with each other\u2019s Pins.', 'description of blocking users', 'description of blocking users'),{users:s})}),(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),(0,f.jsx)(_.xv,{children:(0,f.jsx)(_.rU,{display:"inlineBlock",href:d,underline:"hover",children:r._('Learn more', 'link to learn more about blocking', 'link to learn more about blocking')})})]}),(0,f.jsx)(_.xu,{padding:2,children:(0,f.jsxs)(_.kC,{alignItems:"stretch",justifyContent:"end",gap:{row:1,column:0},children:[(0,f.jsx)(_.zx,{fullWidth:!0,onClick:o,text:r._('Cancel', 'UserBlock.Cancel', 'cancel form')}),(0,f.jsx)(_.zx,{fullWidth:!0,color:"red",onClick:function(){n()},text:r._('Block', 'UserBlock.Submit', 'submit form to block users'),type:"submit"})]})})]})},m=o(174798);function b(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function g(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?b(Object(o),!0).forEach((function(t){y(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):b(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function y(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==o)return;var n,r,l=[],i=!0,s=!1;try{for(o=o.call(e);!(i=(n=o.next()).done)&&(l.push(n.value),!t||l.length!==t);i=!0);}catch(a){s=!0,r=a}finally{try{i||null==o.return||o.return()}finally{if(s)throw r}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return k(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var x=function(e){var t=e.flagReason,o=e.flagType,d=e.onClose,b=e.selectedReason,k=e.status,x=e.users,v=e.blockContext,A=(0,i.ZP)(),j=P((0,n.useState)({}),2),w=j[0],O=j[1],z=(0,c.d)(),T=z.setModalTitle,S=z.setStatus,C=(0,s.Z)(),E=(C.isAuth?C:{}).id,R=x.filter((function(e){var t=e.id;return w[t]})),B=R.length>0;(0,n.useEffect)((function(){var e;[m.qb.SUBMITTED,m.qb.PROCESSING].includes(k)?e=A.ngettext('Block this person?', 'Block these people?', R.length, 'BlockAndUnfollow', 'Confirmation text when blocking users (plural)'):o===m.Vm.CONVERSATION&&(e=k===m.qb.COMPLETED?(0,a.nk)(A._('You\u2019ve blocked {{usernames}}', 'BlockAndUnfollow', 'title of modal after user has been blocked'),{usernames:(0,l.Z)(h(R),A).join("")}).join(""):A._('Thanks for your report', 'BlockAndUnfollow', 'title at end of report flow')),T(e)}),[k]),(0,n.useEffect)((function(){S(B?m.qb.SELECTED:m.qb.STARTED)}),[w]);var D=x.filter((function(e){return e.id!==E})),L=[m.qb.STARTED,m.qb.COMPLETED].includes(k);return(0,f.jsx)("form",{method:"post",children:[m.qb.SUBMITTED,m.qb.PROCESSING].includes(k)?(0,f.jsx)(p,{onClose:function(){S(m.qb.SELECTED)},onSubmit:function(){return S(m.qb.PROCESSING),Promise.all(Object.keys(w).filter((function(e){return w[e]})).map((function(e){return function(e){var t=e.userId,o=e.blockSource,n=e.blockContext;return r.Z.create("UserBlockResource",{blocked_user_id:t,block_source:o,block_context:n}).callCreate().then((function(){}),(function(){}))}({userId:e,blockSource:"message",blockContext:v})}))).finally((function(){S(m.qb.COMPLETED)}))},users:R}):(0,f.jsxs)(_.xu,{padding:8,children:[(0,f.jsx)(_.xu,{children:k!==m.qb.COMPLETED?function(){var e;"harassingOther"===b?e=(0,a.nk)(A._('We remove content that identifies and attacks private people because we consider it to be bullying. We also don\u2019t allow content that reveal someone\u2019s personally identifiable information.  Learn more about our  {{ communityGuidelines }}.', 'confirmation message after reporting harassment', 'confirmation message after reporting harassment'),{communityGuidelines:(0,f.jsx)(_.rU,{display:"inlineBlock",href:u.Ms,underline:"hover",children:A._('Community Guidelines', 'link to community guidelines for harassment', 'link to community guidelines for harassment')},"policyLink")}):"harassingPublicFigure"===b?e=A._('Please note that we won\u2019t necessarily take down stuff that attacks public figures.', 'message shown after reporting harrassment', 'message shown after reporting harrassment'):"harassingFriend"===b?e=A._('Before we can review this Pin, we need to hear from the person who\u2019s being harassed. Please have your friend report this Pin to us.', 'message shown after reporting harrassment', 'message shown after reporting harrassment'):["spam","policies","hurtfulContent"].includes(t)&&(e=A._('We\u2019ll take a look at this Pin and delete it if it goes against our policies.', 'confirmation message after reporting a pin', 'confirmation message after reporting a pin'));var o=A.ngettext('You can also block this person.', 'You can also block these people.', D.length, 'description to block people', 'description to block people');return(0,f.jsxs)(n.Fragment,{children:[e&&(0,f.jsx)(_.xu,{marginBottom:8,children:(0,f.jsx)(_.xv,{children:e})}),(0,f.jsx)(_.xu,{marginBottom:8,children:(0,f.jsx)(_.xv,{children:o})}),(0,f.jsx)(_.xu,{marginBottom:8,children:D.map((function(e){var t=e.id,o=e.full_name;return(0,f.jsx)(_.XZ,{id:"blockPinner"+t,checked:Boolean(w[t]),label:(0,a.nk)(A._('Block {{ pinnerName }}', 'BlockAndUnfollow', 'form option to block a pinner'),{pinnerName:o}).join(""),onChange:function(e){var o=e.checked;O(g(g({},w),{},y({},t,o)))},helperText:A._('You won\u2019t be able to send each other messages or interact with each other\u2019s Pins.', 'BlockAndUnfollow', 'explanation of blocking a user')},t)}))})]})}():B&&(0,f.jsx)(_.xu,{marginBottom:8,children:(0,f.jsx)(_.xv,{children:A._('You won\u2019t be able to follow each other or interact with each other\u2019s pins.', 'BlockAndUnfollow', 'message describing what blocking means')},"blockingConfirmation")})}),(0,f.jsxs)(_.xu,{children:[k!==m.qb.COMPLETED&&(0,f.jsx)(_.xu,{marginBottom:8,children:(0,f.jsx)(_.xv,{size:"100",children:(0,a.nk)(A._('Learn more about {{ linkToTopic }}', 'BlockAndUnfollow', 'footer link to learn more about a topic'),{linkToTopic:(0,f.jsx)(_.rU,{display:"inlineBlock",href:u.K_,underline:"hover",children:A._('blocking', 'BlockAndUnfollow', 'footer link to learn more about blocking')},"policyLink")})})}),(0,f.jsx)(_.xu,{children:(0,f.jsx)(_.zx,{fullWidth:!0,color:"red",onClick:L?d:function(){O(w),S(m.qb.SUBMITTED)},text:L?A._('Done', 'Block.Complete', 'confirm reporting flow is done & close modal'):A._('Block', 'BlockAndUnfollow', 'submit users to block')})})]})]})})};function v(e){var t=e.flagOptions,o=e.flow,n=e.handleClose,r=e.handleNext,l=e.selectedReason,s=e.showPrimaryAction,a=e.submitButton,c=(0,i.ZP)();if(o===m.Zw.REPORT){var u;if(m.qb.PROCESSING===status||null!==(u=t.getFlagOption(l))&&void 0!==u&&u.isTerminalReason)return a;if(s)return(0,f.jsx)(_.zx,{fullWidth:!0,color:"red",disabled:void 0===l,onClick:r,text:c._('Next', 'go to the next view in the report flow', 'go to the next view in the report flow')})}else if(o===m.Zw.END)return(0,f.jsx)(_.zx,{fullWidth:!0,color:"red",onClick:n,text:c._('Got it', 'confirm reporting flow is done & close modal', 'confirm reporting flow is done & close modal')});return null}var A=o(121151);function j(e){var t=e.flow,o=e.flagReason,n=(0,i.ZP)();if(t===m.Zw.REPORT){if("attacks"===o)return(0,f.jsx)(_.xv,{size:"100",children:(0,a.nk)(n._('Learn more about our {{ linkToTopic }}', 'footer link to learn more about community guidelines', 'footer link to learn more about community guidelines'),{linkToTopic:(0,f.jsx)(_.rU,{target:"blank",href:u.Ms,children:(0,f.jsx)(_.xv,{inline:!0,color:"error",size:"100",weight:"bold",children:n._('Community Guidelines', 'name of footer link to community guidelines', 'name of footer link to community guidelines')})},"policyLink")})});if("policies"===o)return(0,f.jsxs)("p",{children:[(0,f.jsx)(_.xv,{size:"100",children:(0,a.nk)(n._('Learn about {{ linkToTopic }}', 'footer link to learn more about a topic', 'footer link to learn more about a topic'),{linkToTopic:(0,f.jsx)(_.rU,{target:"blank",href:u.Ms+"#sub-section-adult-content",children:(0,f.jsx)(_.xv,{inline:!0,color:"error",size:"100",children:n._('our nudity policies', 'name of footer link to policy', 'name of footer link to policy')})},"policyLink")})}),(0,f.jsx)(_.xv,{size:"100",children:(0,a.nk)(n._('Learn about {{ linkToTopic }}', 'footer link to learn more about a topic', 'footer link to learn more about a topic'),{linkToTopic:(0,f.jsx)(_.rU,{target:"blank",href:u.Ms+"#sub-section-dangerous-goods-and-activities",children:(0,f.jsx)(_.xv,{inline:!0,color:"error",size:"100",children:n._('our policies on hurtful content', 'name of footer link to policy', 'name of footer link to policy')})},"policyLink")})}),(0,f.jsx)(_.xv,{size:"100",children:(0,a.nk)(n._('Learn about {{ linkToTopic }}', 'footer link to learn more about a topic', 'footer link to learn more about a topic'),{linkToTopic:(0,f.jsx)(_.rU,{target:"blank",href:u.Ms+"#sub-section-violence",children:(0,f.jsx)(_.xv,{inline:!0,color:"error",size:"100",children:n._('our policies on gore', 'name of footer link to policy', 'name of footer link to policy')})},"policyLink")})})]});if("spam"===o||void 0===o)return(0,f.jsx)(_.xv,{size:"100",children:(0,a.nk)(n._('Learn about {{ linkToTopic }}', 'footer link to learn more about a topic', 'footer link to learn more about a topic'),{linkToTopic:(0,f.jsx)(_.rU,{target:"blank",href:u.Ms,children:(0,f.jsx)(_.xv,{inline:!0,color:"error",size:"100",weight:"bold",children:"spam"===o?n._('our spam policies', 'name of footer link to policy', 'name of footer link to policy'):n._('our policies', 'name of footer link to policy', 'name of footer link to policy')})},"policyLink")})})}return null}function w(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function O(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function z(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?O(Object(o),!0).forEach((function(t){T(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):O(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function T(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function S(e){var t=e.arrayOfData,o=e.handleSelectReason,n=e.selectedReason,r=(0,i.ZP)();return(0,f.jsx)(_.xu,{padding:2,children:(0,f.jsx)(_.FX,{id:"flag-option-radio-group",legend:r._('Flag legends', 'flag_legend', 'Flag legends'),legendDisplay:"hidden",children:t.map((function(e,t){var r=e.condition;return void 0===r||r?function(e,t,o,n){var r=e.text,l=e.value,i=e.category;return(0,f.jsx)(_.xu,{paddingY:2,children:(0,f.jsx)(_.FX.RadioButton,{checked:o===l,id:l,onChange:function(e){var o=e.checked;return t(o,l,i)},name:"flagReason",value:l,label:r})},n)}(e,o,n,t):null}))})})}var C=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=t,this.configMap=function(e){var t={},o=function(o){e[o].forEach((function(e){var n=e.value;if(Object.prototype.hasOwnProperty.call(t,n))throw new Error("Duplicate key in FlagOptions config: "+n);t[n]=z(z({},e),{},{parentOption:o})}))};for(var n in e)o(n);return t}(t)}var t,o,n;return t=e,(o=[{key:"getFlagOption",value:function(e){return e?this.configMap[e]:null}},{key:"renderFlagLabels",value:function(e){var t=e.flagReason,o=e.onSelectReason,n=e.selectedReason;return(0,f.jsx)(S,{arrayOfData:this.config[t],handleSelectReason:o,selectedReason:n})}}])&&w(t.prototype,o),n&&w(t,n),e}();function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function B(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?R(Object(o),!0).forEach((function(t){N(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):R(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=Z(e);if(t){var r=Z(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return G(this,o)}}function G(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return I(e)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(l,e);var t,o,n,r=U(l);function l(){var e;D(this,l);for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return N(I(e=r.call.apply(r,[this].concat(o))),"flagOptions",new C(e.props.flagOptionsConfig)),N(I(e),"renderContent",(function(){var t=e.props,o=t.content,n=t.flow,r=t.onSelectReason,l=t.selectedReason;return o||(n===m.Zw.REPORT?e.flagOptions.renderFlagLabels({flagReason:e.props.flagReason||"__default",onSelectReason:r,selectedReason:l}):n===m.Zw.END?(0,f.jsx)(_.xv,{children:e.props.i18n._('We\u2019ll use your feedback to make your Pinterest experience better.', 'final message in reporting flow', 'final message in reporting flow')}):void 0)})),e}return t=l,(o=[{key:"componentDidUpdate",value:function(e){var t=e.flow,o=e.onCompletedReport,n=e.onCompletedBlock;if(this.props.flow!==t)switch(t){case m.Zw.REPORT:o&&o();break;case m.Zw.BLOCK:n&&n()}}},{key:"render",value:function(){var e=this,t=this.props,o=t.accessibilityModalLabel,n=t.flagType,r=t.flow,l=t.status,i=t.modalTitle,s=t.onClose,a=t.selectedReason,c=t.submitButton,u=t.flagReason,d=t.showPrimaryAction,h=t.users,p=t.blockContext;return(0,f.jsx)(A.ZP,{accessibilityModalLabel:o,heading:i,onDismiss:s,size:"md",footer:r!==m.Zw.BLOCK?(0,f.jsxs)(_.kC,{alignItems:"center",justifyContent:"start",children:[(0,f.jsx)(_.xu,{flex:"grow",children:(0,f.jsx)(j,{flagReason:u,flow:r})}),(0,f.jsx)(_.xu,{padding:1,children:r===m.Zw.REPORT?(0,f.jsx)(_.zx,{fullWidth:!0,onClick:void 0===u?this.props.onClose:function(){var t,o;null===(t=(o=e.props).onRevert)||void 0===t||t.call(o)},text:void 0===u?this.props.i18n._('Cancel', 'cancel form', 'cancel form'):this.props.i18n._('Back', 'previous step in a form', 'previous step in a form')}):null}),(0,f.jsx)(_.xu,{padding:1,children:(0,f.jsx)(v,{flagOptions:this.flagOptions,flow:r,handleClose:this.props.onClose,handleNext:function(){var t,o;null===(t=(o=e.props).onNext)||void 0===t||t.call(o)},selectedReason:a,showPrimaryAction:!!d,submitButton:c})})]}):void 0,children:(0,f.jsx)(_.xu,{children:r===m.Zw.BLOCK?(0,f.jsx)(x,{flagReason:u,flagType:n,onClose:s,selectedReason:a,status:l,users:h,blockContext:p}):this.renderContent()})})}}])&&L(t.prototype,o),n&&L(t,n),l}(n.Component);function F(e){var t=(0,i.ZP)();return(0,f.jsx)(q,B(B({},e),{},{i18n:t}))}},129274:function(e,t,o){o.d(t,{N:function(){return f},d:function(){return _}});var n=o(76911),r=o(425288),l=o(174798),i=o(515198);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==o)return;var n,r,l=[],i=!0,s=!1;try{for(o=o.call(e);!(i=(n=o.next()).done)&&(l.push(n.value),!t||l.length!==t);i=!0);}catch(a){s=!0,r=a}finally{try{i||null==o.return||o.return()}finally{if(s)throw r}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var c=(0,r.Z)("Flag"),u=c.Provider,_=c.useHook,f=function(e){var t=e.children,o=s((0,n.useState)(),2),r=o[0],a=o[1],c=s((0,n.useState)(l.Zw.REPORT),2),_=c[0],f=c[1],d=s((0,n.useState)(l.qb.STARTED),2),h=d[0],p=d[1],m=s((0,n.useState)(),2),b=m[0],g=m[1],y=s((0,n.useState)(),2),P=y[0],k=y[1],x=(0,n.useMemo)((function(){return{flagReason:P,flow:_,status:h,selectedReason:b,modalTitle:r,setFlagReason:k,setFlow:f,setModalTitle:a,setStatus:p,setSelectedReason:g}}),[r,_,h,b,P]);return(0,i.jsx)(u,{value:x,children:t})}},174798:function(e,t,o){o.d(t,{Vm:function(){return l},Zw:function(){return n},qb:function(){return r}});var n={REPORT:"REPORT",BLOCK:"BLOCK",END:"END"},r={STARTED:"STARTED",SELECTED:"SELECTED",SUBMITTED:"SUBMITTED",PROCESSING:"PROCESSING",COMPLETED:"COMPLETED"},l={CONVERSATION:"CONVERSATION",DID_IT:"DID_IT"}},512465:function(e,t,o){o.d(t,{Z:function(){return u},w:function(){return _}});var n=o(349700),r=function(e){return e._('{{ first }}', 'Generic message that lists 1 item', 'Generic message that lists 1 item (ex: Stevie)')},l=function(e){return e._('{{ first }} and {{ second }}', 'Generic message that lists 2 items', 'Generic message that lists 2 items (ex: Stevie and Michael)')},i=function(e){return e._('{{ first }}, {{ second }} and {{ third }}', 'Generic message that lists 3 items', 'Generic message that lists 3 items (ex: Stevie, Michael and Cyndi)')},s=function(e){return e._('{{ first }}, {{ second }}, {{ third }} and {{ fourth }}', 'Generic message that lists 4 items', 'Generic message that lists 4 items (ex: Stevie, Michael, Cyndi and Bob)')},a=function(e){return e._('{{ first }}, {{ second }}, {{ third }}, {{ fourth }} and {{ fifth }}', 'Generic message that lists 5 items', 'Generic message that lists 5 items (ex: Stevie, Michael, Cyndi, Bob and Bruce)')},c=function(e){return e._('{{ first }}, {{ second }}, {{ third }}, {{ fourth }}, {{ fifth }} and {{ sixth }}', 'Generic message that lists 6 items', 'Generic message that lists 6 items (ex: Stevie, Michael, Cyndi, Bob, Bruce and Lionel)')};function u(e,t){var o={first:e[0],second:e[1],third:e[2],fourth:e[3],fifth:e[4],sixth:e[5],remaining:e.length-5};switch(e.length){case 0:return[];case 1:return(0,n.nk)(r(t),o);case 2:return(0,n.nk)(l(t),o);case 3:return(0,n.nk)(i(t),o);case 4:return(0,n.nk)(s(t),o);case 5:return(0,n.nk)(a(t),o);case 6:return(0,n.nk)(c(t),o);default:return(0,n.nk)(function(e){return e._('{{ first }}, {{ second }}, {{ third }}, {{ fourth }}, {{ fifth }} and {{ remaining }} others', 'Generic message that lists more than 6 items', 'Generic message that lists more than 6 items (ex: Stevie, Michael, Cyndi, Bob, Bruce and 2 others)')}(t),o)}}function _(e,t){var o={first:e[0],second:e[1],third:e[2],fourth:e[3],fifth:e[4],sixth:e[5],seventh:e[6],remaining:e.length-6};switch(e.length){case 0:return[];case 1:return(0,n.nk)(r(t),o);case 2:return(0,n.nk)(l(t),o);case 3:return(0,n.nk)(i(t),o);case 4:return(0,n.nk)(s(t),o);case 5:return(0,n.nk)(a(t),o);case 6:return(0,n.nk)(c(t),o);case 7:return(0,n.nk)(function(e){return e._('{{ first }}, {{ second }}, {{ third }}, {{ fourth }}, {{ fifth }}, {{ sixth }} and {{ seventh }}', 'Generic message that lists 7 items', 'Generic message that lists 7 items (ex: Stevie, Michael, Cyndi, Bob, Bruce, Lionel and Tina)')}(t),o);default:return(0,n.nk)(function(e){return e._('{{ first }}, {{ second }}, {{ third }}, {{ fourth }}, {{ fifth }}, {{ sixth }} and {{ remaining }} others', 'Generic message that lists more than 7 items', 'Generic message that lists more than 7 items (ex: Stevie, Michael, Cyndi, Bob, Bruce, Lionel and 2 others)')}(t),o)}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/55582-d26a639064b13532.js.map