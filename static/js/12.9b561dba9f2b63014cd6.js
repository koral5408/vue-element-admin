webpackJsonp([12],{"39yc":function(e,n,t){var s=t("GtcS");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);t("rjj0")("0d3d07de",s,!0,{})},GtcS:function(e,n,t){(e.exports=t("FZ+f")(!1)).push([e.i,"",""])},IrpG:function(e,n,t){var s=t("Q+MC");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);t("rjj0")("d0c2841a",s,!0,{})},MQgT:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s={data:function(){return{message:this.formInfo}},props:{formInfo:{type:Object}},watch:{formInfo:{handler:function(e){this.message=e},deep:!0},message:{handler:function(e){this.$emit("on-form-change",e)},deep:!0}},methods:{}},a={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"form-child"},[t("el-form",{ref:"form",attrs:{model:e.message,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"活动名称"}},[t("el-input",{model:{value:e.message.name,callback:function(n){e.$set(e.message,"name",n)},expression:"message.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"活动区域"}},[t("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.message.region,callback:function(n){e.$set(e.message,"region",n)},expression:"message.region"}},[t("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),t("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"活动时间"}},[t("el-col",{attrs:{span:11}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.message.date1,callback:function(n){e.$set(e.message,"date1",n)},expression:"message.date1"}})],1),e._v(" "),t("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),t("el-col",{attrs:{span:11}},[t("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"选择时间"},model:{value:e.message.date2,callback:function(n){e.$set(e.message,"date2",n)},expression:"message.date2"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"即时配送"}},[t("el-switch",{model:{value:e.message.delivery,callback:function(n){e.$set(e.message,"delivery",n)},expression:"message.delivery"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"活动性质"}},[t("el-checkbox-group",{model:{value:e.message.type,callback:function(n){e.$set(e.message,"type",n)},expression:"message.type"}},[t("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),e._v(" "),t("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),e._v(" "),t("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),e._v(" "),t("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"特殊资源"}},[t("el-radio-group",{model:{value:e.message.resource,callback:function(n){e.$set(e.message,"resource",n)},expression:"message.resource"}},[t("el-radio",{attrs:{label:"线上品牌商赞助"}}),e._v(" "),t("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"活动形式"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.message.desc,callback:function(n){e.$set(e.message,"desc",n)},expression:"message.desc"}})],1)],1)],1)},staticRenderFns:[]};var l={data:function(){return{forms:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},test:"占位符..."}},methods:{onFormChange:function(e){this.test="子组件数据正在传送给父组件..."}},components:{FormChild:t("VU/8")(s,a,!1,function(e){t("IrpG")},null,null).exports}},r={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"form-listen components-wrap"},[n("form-child",{attrs:{formInfo:this.forms},on:{"on-form-change":this.onFormChange}}),this._v(" "),n("el-button",[this._v(this._s(this.test))])],1)},staticRenderFns:[]};var o=t("VU/8")(l,r,!1,function(e){t("39yc")},null,null);n.default=o.exports},"Q+MC":function(e,n,t){(e.exports=t("FZ+f")(!1)).push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}});