(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"7xKR":function(t,e,r){"use strict";r.r(e);var a=r("lSNA"),n=r.n(a),o=r("L2JU"),s=r("nhF1");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}var i={data:function(){return{form:{email:"",password:""},loading:!1,languages:[{value:"vn",title:"Việt Nam"},{value:"en",title:"English"}],redirect:void 0}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(r,!0).forEach((function(e){n()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({rules:function(){return{email:[{required:!0,message:this.$t("auth.error.email"),trigger:["change","blur"]},{type:"email",message:this.$t("auth.error.email_valid"),trigger:["change","blur"]}],password:[{required:!0,message:this.$t("auth.error.password"),trigger:["change","blur"]}]}}},Object(o.c)(["user"])),watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},methods:{handleCommand:function(t){"vn"!==t&&"en"!==t||this.$store.dispatch("lang/".concat(s.g),t)},login:function(){var t=this;this.loading=!0,this.$refs.login.validate((function(e){if(!e)return t.loading=!1,!1;t.$store.dispatch("user/".concat(s.d),t.form).then((function(){t.loading=!1,t.$router.push({path:t.redirect||t.$store.state.settings.redirect})})).catch((function(){t.loading=!1}))}))}}},c=r("KHd+"),u=Object(c.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-container",{staticClass:"blue-grey lighten-5 h-screen justify-center items-center"},[r("el-row",[r("el-col",{attrs:{span:24}},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("div",{staticClass:"flex justify-center items-center relative"},[r("img",{attrs:{src:"/images/avatar/logo-tanmnt.png",width:"200"}}),t._v(" "),r("el-dropdown",{staticClass:"language absolute right-0 top-0",attrs:{trigger:"click"},on:{command:t.handleCommand}},[r("span",{staticClass:"el-dropdown-link"},[r("svg-icon",{staticClass:"text-4xl",attrs:{"icon-class":"language"}})],1),t._v(" "),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{class:{"bg-blue-400 text-white font-bold":"vn"===t.$store.getters.lang},attrs:{icon:"flag-icon flag-icon-vn",command:"vn"}},[t._v("Việt Nam\n                ")]),t._v(" "),r("el-dropdown-item",{class:{"bg-blue-400 text-white font-bold":"en"===t.$store.getters.lang},attrs:{icon:"flag-icon flag-icon-my",command:"en"}},[t._v("English\n                ")])],1)],1)],1)]),t._v(" "),r("el-form",{ref:"login",attrs:{model:t.form,"status-icon":"",rules:t.rules,"label-width":"120px","label-position":"left"}},[r("el-form-item",{attrs:{label:t.$t("auth.login.email"),prop:"email"}},[r("el-input",{attrs:{type:"text",autocomplete:"on"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),r("el-form-item",{attrs:{label:t.$t("auth.login.password"),prop:"password"}},[r("el-input",{attrs:{type:"password","show-password":"",autocomplete:"off"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1),t._v(" "),r("el-row",[r("el-col",{staticClass:"mb-5",attrs:{span:24}},[r("el-button",{staticClass:"w-full",attrs:{type:"primary",loading:t.loading},on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v(t._s(t.$t("auth.login.login"))+"\n            ")])],1),t._v(" "),r("el-col",{attrs:{span:12}},[r("el-checkbox",[t._v(t._s(t.$t("auth.login.remember")))])],1),t._v(" "),r("el-col",{staticClass:"text-right",attrs:{span:12}},[r("router-link",{staticClass:"text-black",attrs:{to:{name:"reset_password"}}},[t._v(t._s(t.$t("auth.login.forgot_password")))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=u.exports}}]);