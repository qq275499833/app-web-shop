webpackJsonp([9],{"6y6/":function(e,s){},m6VK:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t("gJlW"),n=t("hhm8"),r=t("i84Q"),o={data:function(){return{username:"",answer:"",password:"",questionText:"",forgetToken:"",usernameShow:!0,answerShow:!1,passwordShow:!1}},methods:{usernameNext:function(){var e=this;Object(n.c)(this.username,"require")&&Object(r.k)(this.username).then(function(s){e.usernameShow=!1,e.answerShow=!0,e.questionText=s.data})},answerNext:function(){var e=this;if(Object(n.c)(this.answer,"require")){var s={username:this.username,question:this.questionText,answer:this.answer};Object(r.w)(s).then(function(s){e.forgetToken=s.data,e.usernameShow=!1,e.answerShow=!1,e.passwordShow=!0})}},passwordSubmit:function(){var e=this;if(Object(n.c)(this.password,"require")){var s={username:this.username,passwordNew:this.password,forgetToken:this.forgetToken};Object(r.j)(s).then(function(){alert("重置密码成功"),e.$router.push("./login")})}},removeSpace:function(e){return Object(n.f)(e)}},components:{mHeader:a.a}},i={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("m-header",{attrs:{mTitle:"忘记密码"}}),e._v(" "),t("section",{staticClass:"page"},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.usernameShow,expression:"usernameShow"}],staticClass:"forget-content slide-username"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:e.username},on:{input:function(s){s.target.composing||(e.username=s.target.value)}}}),e._v(" "),t("button",{class:{active:e.removeSpace(e.username)},on:{click:e.usernameNext}},[e._v("下 一 步")])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.answerShow,expression:"answerShow"}],staticClass:"forget-content slide-question"},[t("p",[e._v("密码提示问题是："),t("span",[e._v(e._s(e.questionText))])]),e._v(" "),t("div",[t("span",[e._v("请输入答案:")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"answer"}],attrs:{type:"text",placeholder:"请输入密码提示问题答案"},domProps:{value:e.answer},on:{input:function(s){s.target.composing||(e.answer=s.target.value)}}})]),e._v(" "),t("button",{class:{active:e.removeSpace(e.answer)},on:{click:e.answerNext}},[e._v("下 一 步")])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.passwordShow,expression:"passwordShow"}],staticClass:"forget-content slide-password"},[t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"请重置密码"},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}})]),e._v(" "),t("button",{class:{active:e.removeSpace(e.password)},on:{click:e.passwordSubmit}},[e._v("提 交")])])])],1)},staticRenderFns:[]};var u=t("VU/8")(o,i,!1,function(e){t("6y6/")},"data-v-91bcb300",null);s.default=u.exports}});
//# sourceMappingURL=9.d06daab2ff33432cfb7b.js.map