(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{438:function(t,e,s){t.exports=s.p+"assets/img/sentry-issue.a9e1ad29.png"},439:function(t,e,s){t.exports=s.p+"assets/img/sentry-seen.0d747222.png"},440:function(t,e,s){t.exports=s.p+"assets/img/releases-overview.de615366.png"},602:function(t,e,s){"use strict";s.r(e);var a=s(42),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sentry-免费的异常上报服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sentry-免费的异常上报服务"}},[t._v("#")]),t._v(" Sentry: 免费的异常上报服务")]),t._v(" "),a("p",[t._v("在以前的章节中，我们可以使用免费的云服务来完成一个弱存储的前端应用")]),t._v(" "),a("ol",[a("li",[t._v("使用 Vercel (或 Netlify) 部署前端应用")]),t._v(" "),a("li",[t._v("使用 Vercel Serverless Function (或其它 Serverless 方案) 部署简单的后端 API")])]),t._v(" "),a("p",[t._v("此时，尚缺一个异常报警系统，可以用 "),a("code",[t._v("Sentry")]),t._v(" 搞定。"),a("code",[t._v("Sentry")]),t._v("，官网 <sentry.io>，帮助开发者解决 Bug 和优化性能的一个 APM (application monitoring platform) 系统。对于个人开发者，你可以免费使用它帮助自己监控多个项目，"),a("strong",[t._v("只不过功能有限，在看文档时要格外注意")]),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("至于登录 Sentry，直接使用 Github 登录即可。")]),t._v(" 以下对 Sentry 的使用做一个简单的介绍。")]),t._v(" "),a("h2",{attrs:{id:"术语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#术语"}},[t._v("#")]),t._v(" 术语")]),t._v(" "),a("p",[t._v("基本属于为以下两个")]),t._v(" "),a("ul",[a("li",[t._v("Event: 应用端每次触发异常，就是一次 Event，会上报到 Sentry 中")]),t._v(" "),a("li",[t._v("Issue: Sentry 把同一位置触发的异常聚合在一起就是 Issue，"),a("strong",[t._v("在 Sentry 中以 Issue 为主要单位分析问题")])])]),t._v(" "),a("blockquote",[a("p",[t._v("多想一步：Sentry 如何把 Event 聚合成 Issue，即如何确认多个 Event 都是在同一位置触发的？")])]),t._v(" "),a("h2",{attrs:{id:"上报"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上报"}},[t._v("#")]),t._v(" 上报")]),t._v(" "),a("p",[t._v("作为一个专业的异常上报服务，Sentry 支持各式各样的语言，如下所示:")]),t._v(" "),a("ul",[a("li",[t._v("Javascript")]),t._v(" "),a("li",[t._v("Go")]),t._v(" "),a("li",[t._v("Python")]),t._v(" "),a("li",[t._v("Ruby")]),t._v(" "),a("li",[t._v("Java")])]),t._v(" "),a("p",[t._v("基本上适用于 Serverless 运行时的语言都可以接入 "),a("code",[t._v("Sentry")]),t._v("，这是一个振奋人心的好消息。")]),t._v(" "),a("p",[t._v("关于各大语言及框架可如何接入，直接参考官方文档 "),a("a",{attrs:{href:"https://docs.sentry.io/platforms/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sentry Supported Platforms"),a("OutboundLink")],1),t._v("，最简答最基本的方式就是直接捕捉异常并上报。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("aFunctionThatMightFail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Sentry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("captureException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"报警-alert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#报警-alert"}},[t._v("#")]),t._v(" 报警 (Alert)")]),t._v(" "),a("h3",{attrs:{id:"报警规则-alert-rule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#报警规则-alert-rule"}},[t._v("#")]),t._v(" 报警规则 (Alert Rule)")]),t._v(" "),a("p",[t._v("如以下是常见却容易被忽略的报警规则")]),t._v(" "),a("ol",[a("li",[t._v("当只有生产环境下的 Issue 才会触发报警")]),t._v(" "),a("li",[t._v("当只有异常级别大于 Error 才会触发报警")])]),t._v(" "),a("p",[t._v("当然，你也可以个性化定义一些 Alert Rule")]),t._v(" "),a("p",[a("img",{attrs:{src:s(438),alt:"Create Alert Rule"}})]),t._v(" "),a("h3",{attrs:{id:"报警方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#报警方式"}},[t._v("#")]),t._v(" 报警方式")]),t._v(" "),a("p",[t._v("当出现问题时如何受到通知？")]),t._v(" "),a("p",[t._v("这当然不能够一直忙等待空轮询，否则过于耗费精力。当然要使用发送邮件这类通知类型的方式了，除了邮件外还有其他的不过需要集成到 Sentry 中。")]),t._v(" "),a("ul",[a("li",[t._v("发送邮件")]),t._v(" "),a("li",[t._v("钉钉消息 (需集成)")]),t._v(" "),a("li",[t._v("手机短信 (需集成)")]),t._v(" "),a("li",[t._v("手机电话 (需集成)")])]),t._v(" "),a("h2",{attrs:{id:"分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[t._v("#")]),t._v(" 分析")]),t._v(" "),a("h3",{attrs:{id:"_1-第一次-最后一次报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-第一次-最后一次报错"}},[t._v("#")]),t._v(" 1. 第一次/最后一次报错")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("First Seen")]),t._v(": 第一次报错时间有助于捕捉到该异常发生的版本号")]),t._v(" "),a("li",[a("code",[t._v("Last Seen")]),t._v(": 最后一次报错时间决定这个异常是否已解决，或者是否还需要解决")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(439),alt:"报错时间"}})]),t._v(" "),a("h3",{attrs:{id:"_2-获取到-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取到-release"}},[t._v("#")]),t._v(" 2. 获取到 Release")]),t._v(" "),a("p",[a("code",[t._v("Release")]),t._v(" 就是版本号，这个需要在代码中"),a("em",[t._v("手动配置")]),t._v("。通过 Release 可以")]),t._v(" "),a("ol",[a("li",[t._v("快速推断出出现问题的 Commit，并指定给对应的提交者")]),t._v(" "),a("li",[t._v("对该 Release 出现的问题进行聚类")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(440),alt:"Release"}})])])}),[],!1,null,null,null);e.default=r.exports}}]);