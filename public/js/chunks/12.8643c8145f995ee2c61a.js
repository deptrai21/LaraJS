(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+Awk":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("lwsE"),a=n.n(r),i=n("W8MJ"),s=n.n(i),o=n("rywy"),u=function(){function e(t){a()(this,e),this.uri=t}return s()(e,[{key:"list",value:function(e){return Object(o.a)({url:"/"+this.uri,method:"get",params:e})}},{key:"get",value:function(e){return Object(o.a)({url:"/"+this.uri+"/"+e,method:"get"})}},{key:"store",value:function(e){return Object(o.a)({url:"/"+this.uri,method:"post",data:e})}},{key:"update",value:function(e,t){return Object(o.a)({url:"/"+this.uri+"/"+e,method:"put",data:t})}},{key:"destroy",value:function(e){return Object(o.a)({url:"/"+this.uri+"/"+e,method:"delete"})}}]),e}()},"1pTT":function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("lwsE"),a=n.n(r),i=n("a1gu"),s=n.n(i),o=n("Nsbk"),u=n.n(o),c=n("7W2i"),l=n.n(c),f=function(e){function t(){return a()(this,t),s()(this,u()(t).call(this,"users"))}return l()(t,e),t}(n("+Awk").a)},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},GczY:function(e,t,n){"use strict";var r=n("g6NE"),a={inserted:function(e,t,n){var a=t.value,i=r.a.getters&&r.a.getters.permissions;if(!(a&&a instanceof Array&&a.length>0))throw new Error("Permissions are required! Example: v-permission=\"['manage user','manage permission']\"");var s=a;i.some((function(e){return s.includes(e)}))||e.parentNode&&e.parentNode.removeChild(e)}},i=function(e){e.directive("permission",a)};window.Vue&&(window.permission=a,Vue.use(i)),a.install=i;t.a=a},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?a(e):t}},dyIB:function(e,t,n){"use strict";n.r(t);var r=n("GczY"),a=new(n("1pTT").a),i={directives:{permission:r.a},data:function(){var e=this;return{table:{columns:["id","name","email","avatar","roles","created_at","actions"],options:{requestFunction:function(e){return a.list(e)},headings:{id:function(){return e.$t("table.user.id")},name:function(){return e.$t("table.user.name")},avatar:function(){return e.$t("table.user.avatar")},"role.name":function(){return e.$t("table.user.role")},created_at:function(){return e.$t("date.created_at")}},columnsClasses:{id:"text-center",avatar:"text-center",roles:"text-center",created_at:"text-center"},templates:{created_at:function(t,n){return e.$options.filters.parseTime(n.created_at,"{y}-{m}-{d}")},roles:function(e,t){return t.roles.map((function(e){return e.name}))}},sortable:["id","created_at"]}},loading:!1}},mounted:function(){var e=this;Event.$on("vue-tables.loading",(function(){e.loading=!0})),Event.$on("vue-tables.loaded",(function(){e.loading=!1}))},methods:{remove:function(e,t){var n=this;this.$confirm(this.$t("messages.delete_confirm",{attribute:t}),this.$t("messages.warning"),{confirmButtonClass:"outline-none",confirmButtonText:this.$t("button.ok"),cancelButtonClass:this.$t("button.cancel"),type:"warning",center:!0}).then((function(){a.destroy(e).then((function(){var t=n.$refs.table_user.data.findIndex((function(t){return t.id===e}));n.$refs.table_user.data.splice(t,1),n.$message({showClose:!0,message:n.$t("messages.delete"),type:"success"})}))}))}}},s=n("KHd+"),o=Object(s.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",[n("el-col",{attrs:{span:24}},[n("el-card",[n("div",{staticClass:"flex justify-end items-center",attrs:{slot:"header"},slot:"header"},[n("router-link",{directives:[{name:"permission",rawName:"v-permission",value:["create"],expression:"['create']"}],staticClass:"pan-btn blue-btn",attrs:{to:{name:"user_create"},tag:"button"}},[n("i",{staticClass:"fa fa-plus mr-2"}),e._v("Create\n        ")])],1),e._v(" "),n("v-server-table",{ref:"table_user",attrs:{name:"table_user",columns:e.table.columns,options:e.table.options},scopedSlots:e._u([{key:"id",fn:function(t){return[e._v(e._s(t.index))]}},{key:"avatar",fn:function(e){var t=e.row;return[n("el-avatar",{attrs:{size:60,src:t.avatar},on:{error:!0}},[n("img",{attrs:{src:"/images/avatar-default.png"}})])]}},{key:"actions",fn:function(t){var r=t.row;return n("div",{staticClass:"flex justify-center items-center"},[n("router-link",{directives:[{name:"permission",rawName:"v-permission",value:["edit"],expression:"['edit']"}],attrs:{to:{name:"user_edit",params:{id:r.id}}}},[n("i",{staticClass:"fa fa-edit el-link el-link--primary mr-2"})]),e._v(" "),n("a",{directives:[{name:"permission",rawName:"v-permission",value:["delete"],expression:"['delete']"}],staticClass:"cursor-pointer",on:{click:function(t){return t.stopPropagation(),e.remove(r.id,r.name)}}},[n("i",{staticClass:"fa fa-trash-o el-link el-link--danger"})])],1)}}])},[e.loading?n("template",{slot:"afterBody"},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"overlay-loader"})]):e._e()],2)],1)],1)],1)}),[],!1,null,null,null);t.default=o.exports},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}}]);