(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{309:function(t,a,e){t.exports=e.p+"assets/img/transform.77175c26.jpg"},453:function(t,a,e){t.exports=e.p+"assets/img/http-cache-hierarchy.83ce47c1.png"},656:function(t,a,e){"use strict";e.r(a);var s=e(42),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"http-缓存问题与-lm-factor-算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存问题与-lm-factor-算法"}},[t._v("#")]),t._v(" http 缓存问题与 LM Factor 算法")]),t._v(" "),s("p",[t._v("前几天写了一篇博客，"),s("RouterLink",{attrs:{to:"/post/binary-in-frontend/"}},[t._v("浏览器中的二进制")]),t._v("，其中使用 "),s("a",{attrs:{href:"draw.io"}},[t._v("draw.io")]),t._v(" 总结了一张图，并且附在了我的博客里。")],1),t._v(" "),s("p",[s("img",{attrs:{src:e(309),alt:"前端中二进制的转换"}})]),t._v(" "),s("p",[t._v("后来，我对图片做了一些更改，但是命名未发生改变，又重新部署了博客。")]),t._v(" "),s("p",[s("strong",[t._v("这时候问题出现了，图片并没有更新！")])]),t._v(" "),s("p",[s("strong",[t._v("比没有缓存更严重的问题是缓存了不该缓存的东西！")]),t._v(" 前者属于性能优化，而后者可能就属于故障了，使你不厌其烦地充当客服工作。有时就是这样，性能优化时会增进复杂度，而增加复杂度就会引来新的问题。一切都需要权衡。")]),t._v(" "),s("p",[t._v("关于 http 的问题，则应该专注于它的报文信息。我研究了下该图片的 "),s("code",[t._v("Request")]),t._v("/"),s("code",[t._v("Response")]),t._v(" 信息，总结为以下三点")]),t._v(" "),s("ol",[s("li",[t._v("图片从缓存中获取，没有走网络流量，显示 "),s("code",[t._v("from memory cache")])]),t._v(" "),s("li",[t._v("响应头设置了 ETag 与 Last-Modified")]),t._v(" "),s("li",[t._v("响应头没有设置 Cache-Control，以及 Expires")])]),t._v(" "),s("h2",{attrs:{id:"lm-factor-算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lm-factor-算法"}},[t._v("#")]),t._v(" LM factor 算法")]),t._v(" "),s("blockquote",[s("p",[t._v("如何得出某资源的最后更新时间以及本次请求资源所生成的时间")])]),t._v(" "),s("p",[t._v("先熟悉以下两个 Response Header")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Date")]),t._v(": 报文在源服务器的产生时间")]),t._v(" "),s("li",[s("code",[t._v("Last-Modified")]),t._v(": 资源在源服务器的上次修改时间")])]),t._v(" "),s("p",[t._v("从这两个头可以计算出资源已经多久没有更新了。")]),t._v(" "),s("p",[s("strong",[t._v("LM factor 算法在没有 Cache-Control 以及 Expires 的时候，用来计算应该强制缓存多长时间。")])]),t._v(" "),s("p",[t._v("算法大致介绍如下：对于本次请求资源，如果没有发现关于强制缓存的配置。而且该资源最后一次修改是在 10 小时以前，那么就对它设置 10 * factor 个小时的缓存。")]),t._v(" "),s("p",[t._v("factor 即 LM factor，设置为 (0, 1)。")]),t._v(" "),s("blockquote",[s("p",[t._v("可参考《http 权威指南》")])]),t._v(" "),s("h2",{attrs:{id:"问题总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题总结"}},[t._v("#")]),t._v(" 问题总结")]),t._v(" "),s("p",[t._v("如果你不设置 "),s("code",[t._v("Cache-Control")]),t._v(" 的话，那你的资源访问很危险，用户可能正在访问已过期的页面或者图片！")]),t._v(" "),s("p",[t._v("另外，在对你的应用进行二次刷新时，你大部分资源都进了缓存，加载速度很快。先不要高兴太早，有可能不是你缓存设置得好，更有可能是你压根就没设置缓存。")]),t._v(" "),s("p",[s("strong",[t._v("一言蔽之，无论如何，要主动设置 Cache-Control，不要让浏览器替你做决策")])]),t._v(" "),s("h2",{attrs:{id:"问题解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题解决"}},[t._v("#")]),t._v(" 问题解决")]),t._v(" "),s("p",[t._v("找到了问题所在，只需添加一个响应头 "),s("code",[t._v("Cache-Control: no-cache;")]),t._v(" 就可以解决问题。")]),t._v(" "),s("blockquote",[s("p",[t._v("no-cache 代表需要每次校验资源的新鲜度，来决定是否从缓存中取\nno-store 代表从不存缓存")])]),t._v(" "),s("p",[t._v("由于博客没有能做长期缓存的资源，统一对博客的所有请求添加了响应头 "),s("code",[t._v("Cache-Control: no-cache")]),t._v("。")]),t._v(" "),s("p",[t._v("我使用了 "),s("code",[t._v("traefik")]),t._v(" 作为反向代理，并使用 "),s("code",[t._v("docker-compose")]),t._v(" 部署，修改 "),s("code",[t._v("docker-compose.yml")]),t._v(" 配置文件如下所示")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("blog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" .\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"traefik.frontend.rule=Host:shanyue.tech"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"traefik.frontend.headers.customResponseHeaders=Cache-Control:no-cache"')]),t._v("\n")])])]),s("p",[t._v("再次部署后，图片缓存的问题已经解决。")]),t._v(" "),s("h2",{attrs:{id:"缓存策略设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存策略设置"}},[t._v("#")]),t._v(" 缓存策略设置")]),t._v(" "),s("p",[t._v("这时再思考一个项目的缓存策略设置")]),t._v(" "),s("blockquote",[s("p",[t._v("图片总结如下，参考谷歌开发者文档 https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching#defining_optimal_cache-control_policy")])]),t._v(" "),s("p",[s("img",{attrs:{src:e(453),alt:"如何设置资源的缓存策略"}})]),t._v(" "),s("p",[t._v("而我的缓存策略简单总结如下")]),t._v(" "),s("ul",[s("li",[t._v("对于带指纹信息的资源设置永久缓存")]),t._v(" "),s("li",[t._v("对于不带指纹信息的资源设置 ETag 每次校验新鲜度")])]),t._v(" "),s("h2",{attrs:{id:"使用-service-worker-增强缓存功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-service-worker-增强缓存功能"}},[t._v("#")]),t._v(" 使用 Service Worker 增强缓存功能")]),t._v(" "),s("blockquote",[s("p",[t._v("如果 304 过多怎么办")])]),t._v(" "),s("p",[t._v("如果不带指纹的资源过多，又需要资源保障实时的新鲜度如何处理。这么一大堆资源每次去向服务器比对 ETag，服务器也是很烦的，毕竟也会消耗一些 CPU。")]),t._v(" "),s("p",[t._v("这时候可以考虑使用 service worker 做缓存增强。")]),t._v(" "),s("ol",[s("li",[t._v("使用 workbox 自动生成 sw.js")]),t._v(" "),s("li",[t._v("sw.js 对所有资源打一个 hash 戳，维护一个文件与hash的键值对清单，并使用 Cache API 对所有资源做永久缓存。")]),t._v(" "),s("li",[t._v("sw.js 每次请求需要校验新鲜度")]),t._v(" "),s("li",[t._v("当静态资源有所更改，sw.js 维护的键值对清单发生变化，sw.js 会获取到新的资源")])]),t._v(" "),s("p",[t._v("此时，只需要 sw.js 每次校验新鲜度，而无需一大堆文件都去校验新鲜度了")])])}),[],!1,null,null,null);a.default=r.exports}}]);