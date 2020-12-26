(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{675:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"http-静态文件响应头的-etag-如何生成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-静态文件响应头的-etag-如何生成"}},[t._v("#")]),t._v(" http 静态文件响应头的 ETag 如何生成")]),t._v(" "),s("p",[t._v("关于 "),s("code",[t._v("etag")]),t._v(" 的生成需要满足几个条件")]),t._v(" "),s("ol",[s("li",[t._v("当文件不会更改时，"),s("code",[t._v("etag")]),t._v(" 值保持不变。所以不能单纯使用 "),s("code",[t._v("inode")])]),t._v(" "),s("li",[t._v("便于计算，不会特别耗 CPU。这样子 "),s("code",[t._v("hash")]),t._v(" 不是特别合适")]),t._v(" "),s("li",[t._v("便于横向扩展，多个 "),s("code",[t._v("node")]),t._v(" 上生成的 "),s("code",[t._v("etag")]),t._v(" 值一致。这样子 "),s("code",[t._v("inode")]),t._v(" 就排除了")])]),t._v(" "),s("p",[t._v("关于服务器中 "),s("code",[t._v("etag")]),t._v(" 如何生成可以参考 "),s("a",{attrs:{href:"https://stackoverflow.com/questions/4533/http-generating-etag-header",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP: Generating ETag Header"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("那么在 "),s("code",[t._v("nginx")]),t._v(" 中的 "),s("code",[t._v("etag")]),t._v(" 是如何生成的？")])]),t._v(" "),s("h2",{attrs:{id:"nginx-中-etag-的生成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-中-etag-的生成"}},[t._v("#")]),t._v(" nginx 中 ETag 的生成")]),t._v(" "),s("p",[t._v("我在网上找到一些资料与源代码了解到了 "),s("code",[t._v("etag")]),t._v(" 的计算方法。由 "),s("code",[t._v("python")]),t._v(" 伪代码表示计算方法如下")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("etag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{:x}-{:x}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("last_modified"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content_lenth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("源码: "),s("a",{attrs:{href:"https://github.com/nginx/nginx/blob/6c3838f9ed45f5c2aa6a971a0da3cb6ffe45b61e/src/http/ngx_http_core_module.c#L1582",target:"_blank",rel:"noopener noreferrer"}},[t._v("ngx_http_core_modules.c"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("etag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("len "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ngx_sprintf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("etag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\"%xT-%xO\\""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                  r"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("headers_out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("last_modified_time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                  r"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("headers_out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content_length_n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" etag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("总结："),s("code",[t._v("nginx")]),t._v(" 中 "),s("code",[t._v("etag")]),t._v(" 由响应头的 "),s("code",[t._v("Last-Modified")]),t._v(" 与 "),s("code",[t._v("Content-Length")]),t._v(" 表示为十六进制组合而成。")])]),t._v(" "),s("p",[t._v("随手在我的k8s集群里找个 "),s("code",[t._v("nginx")]),t._v(" 服务测试一下")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --head "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.97")]),t._v(".109.49\nHTTP/1.1 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" OK\nServer: nginx/1.16.0\nDate: Tue, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" Dec "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v(" 06:45:24 GMT\nContent-Type: text/html\nContent-Length: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("612")]),t._v("\nLast-Modified: Tue, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v(" Apr "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(":18:21 GMT\nConnection: keep-alive\nETag: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5cbee66d-264"')]),t._v("\nAccept-Ranges: bytes\n")])])]),s("p",[t._v("由 "),s("code",[t._v("etag")]),t._v(" 计算 "),s("code",[t._v("Last-Modified")]),t._v(" 与 "),s("code",[t._v("Content-Length")]),t._v("，使用 "),s("code",[t._v("js")]),t._v(" 计算如下，结果相符")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5cbee66d'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toJSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-04-23T10:18:21.000Z"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'264'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("612")]),t._v("\n")])])]),s("h2",{attrs:{id:"last-modified-etag-与协商缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-etag-与协商缓存"}},[t._v("#")]),t._v(" Last-Modified，ETag 与协商缓存")]),t._v(" "),s("p",[t._v("我们知道协商缓存有两种方式")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Last-Modified")]),t._v("/"),s("code",[t._v("if-Modified-Since")])]),t._v(" "),s("li",[s("code",[t._v("ETag")]),t._v("/"),s("code",[t._v("If-None-Match")])])]),t._v(" "),s("p",[t._v("既然在 "),s("code",[t._v("nginx")]),t._v(" 中 "),s("code",[t._v("ETag")]),t._v(" 由 "),s("code",[t._v("Last-Modified")]),t._v(" 和 "),s("code",[t._v("Content-Length")]),t._v(" 组成，那它便算是一个加强版的 "),s("code",[t._v("Last-Modified")]),t._v(" 了，那加强在什么地方呢？")]),t._v(" "),s("p",[t._v("** "),s("code",[t._v("Last-Modified")]),t._v(" 是由一个 "),s("code",[t._v("unix timestamp")]),t._v(" 表示，则意味着它只能作用于秒级的改变**")]),t._v(" "),s("p",[t._v("那下一个问题："),s("a",{attrs:{href:"https://github.com/shfshanyue/Daily-Question/issues/113",target:"_blank",rel:"noopener noreferrer"}},[t._v("如果 http 响应头中 ETag 值改变了，是否意味着文件内容一定已经更改"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);