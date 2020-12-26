(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{617:function(t,n,s){"use strict";s.r(n);var e=s(42),a=Object(e.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("date: 2020-07-10 08:53")]),t._v(" "),s("hr"),t._v(" "),s("h1",{attrs:{id:"如何使用-docker-高效部署-node-应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何使用-docker-高效部署-node-应用"}},[t._v("#")]),t._v(" 如何使用 Docker 高效部署 Node 应用")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/shfshanyue/Daily-Question/issues/420",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何在生产环境部署一个 Node 应用？"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("一个合理并且高效的部署方案，不仅能够实现快速升级，平滑切换，负载均衡，应用隔离等部署特性，而且配有一套成熟稳定的监控。")]),t._v(" "),s("p",[s("code",[t._v("kubernetes")]),t._v(" 把 Node 应用视作一个服务端应用的黑盒子，完美匹配了以上条件，越来越多的团队把 node 部署在 k8s 上。")]),t._v(" "),s("p",[t._v("但在此之前，需要先把 Node 应用跑在一个 Docker 容器上，这也是本章的主题。")]),t._v(" "),s("blockquote",[s("p",[t._v("关于前端在 docker 上部署，山月曾写了两篇文章：")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://shanyue.tech/frontend-engineering/docker.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何在 docker 中部署前端"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://shanyue.tech/frontend-engineering/feature-deploy.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端部署 Prview 与 Production"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://shanyue.tech/frontend-engineering/deploy.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端部署的发展过程"),s("OutboundLink")],1)])])]),t._v(" "),s("h2",{attrs:{id:"一个简单的-node-应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一个简单的-node-应用"}},[t._v("#")]),t._v(" 一个简单的 Node 应用")]),t._v(" "),s("p",[s("strong",[t._v("index.js")])]),t._v(" "),s("p",[t._v("一个 "),s("code",[t._v("hello, world")]),t._v(" 版的 Node Web App")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" http "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("app")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello, world'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nhttp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("strong",[t._v("package.json")])]),t._v(" "),s("p",[t._v("配置 "),s("code",[t._v("npm start")]),t._v(" 来启动应用")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"start"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node index.js"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("但这仅仅是最简单的 Node 应用，真实环境中还有各种数据存储及定时任务调度等，暂撇开不谈，这已经足够了。")]),t._v(" "),s("p",[t._v("再稍微复杂一点点的 Node 应用可以查看山月的项目 "),s("a",{attrs:{href:"https://github.com/shfshanyue/whoami",target:"_blank",rel:"noopener noreferrer"}},[t._v("whoami"),s("OutboundLink")],1),t._v(": 一个最简化的 "),s("code",[t._v("serverless")]),t._v(" 与 "),s("code",[t._v("dockerize")]),t._v(" 示例。")]),t._v(" "),s("h2",{attrs:{id:"node-env-production"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-env-production"}},[t._v("#")]),t._v(" NODE_ENV=production")]),t._v(" "),s("p",[t._v("在生产环境中，无需安装 "),s("code",[t._v("devDependecies")]),t._v(" 中依赖，NODE_ENV 环境变量设置为 production 时将会跳过 "),s("code",[t._v("devDep")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 通过设置环境变量，只安装生产环境依赖")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NODE_ENV")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("production "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" ci\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 通过显式指定 flag，只安装生产环境依赖")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" ci --production\n")])])]),s("p",[t._v("另一方面，某些第三方模块会根据 NODE_ENV 环境变量做出一些意料不到的配置。因此在生产环境注意该环境变量的配置。")]),t._v(" "),s("h2",{attrs:{id:"一个-node-应用的简单部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一个-node-应用的简单部署"}},[t._v("#")]),t._v(" 一个 Node 应用的简单部署")]),t._v(" "),s("p",[t._v("一个典型的、面向服务端的 Node 应用是这么跑起来的:")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("npm install")])]),t._v(" "),s("li",[s("code",[t._v("npm run config")]),t._v("，从配置服务(consul/vault)拉取配置 ，如数据库与缓存的账号密码，此时构建服务器需要配置服务权限")]),t._v(" "),s("li",[s("code",[t._v("npm run migrate")]),t._v("，数据库迁移脚本，执行数据库表列行更改操作，此时构建服务器需要数据库访问权限")]),t._v(" "),s("li",[s("code",[t._v("npm start")]),t._v("，启动一个 Node 服务")])]),t._v(" "),s("p",[t._v("把运行步骤翻译为 Dockerfile:")]),t._v(" "),s("div",{staticClass:"language-dockerfile extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 选择一个体积小的镜像 (~5MB)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("12"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("alpine\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 环境变量设置为生产环境")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENV")]),t._v(" NODE_ENV production\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /code\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更好的根据 Image Layer 利用缓存")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" package.json package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("lock.json /code\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" npm ci\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" . /code\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置服务及数据库迁移")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" npm run config "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("if"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("present && npm run migrate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("if"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("present\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPOSE")]),t._v(" 3000\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CMD")]),t._v(" npm start\n")])])]),s("p",[t._v("这对于大部分 Node 应用已经是足够了，如果精益求精，可以再走接下来的多阶段构建")]),t._v(" "),s("h2",{attrs:{id:"node-gyp-与-native-addon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-gyp-与-native-addon"}},[t._v("#")]),t._v(" node-gyp 与 Native Addon")]),t._v(" "),s("p",[t._v("在 Node 中有可能存在着一些 Native Addon，它们通过 node-gyp 进行编译，而它依赖于 "),s("code",[t._v("python")]),t._v("，"),s("code",[t._v("make")]),t._v(" 与 "),s("code",[t._v("g++")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ apk --no-cache "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" python "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" g++\n")])])]),s("p",[t._v("在带有编译过程的镜像构建中，源文件与构建工具都会造成空间的浪费。借助镜像的"),s("strong",[t._v("多阶段构建")]),t._v("可以高效利用空间。"),s("code",[t._v("Go App")]),t._v(" 与 "),s("code",[t._v("FE App")]),t._v(" 的构建也遵循此规则。")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.docker.com/develop/develop-images/multistage-build/#use-multi-stage-builds",target:"_blank",rel:"noopener noreferrer"}},[t._v("多阶段构建 Go 应用"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://shanyue.tech/frontend-engineering/docker.html#%E5%A4%9A%E9%98%B6%E6%AE%B5%E6%9E%84%E5%BB%BA",target:"_blank",rel:"noopener noreferrer"}},[t._v("多阶段构建前端应用"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("在构建 Node 应用镜像时，第一层镜像用以构造 "),s("code",[t._v("node_modules")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-dockerfile extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 选择一个体积小的镜像 (~5MB)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("12"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("alpine as builder\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 环境变量设置为生产环境")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENV")]),t._v(" NODE_ENV production\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更好的根据 Image Layer 利用缓存")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" package.json package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("lock.json ./\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" npm ci\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 多阶段构建之第二阶段")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 多阶段构建之第二阶段")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 多阶段构建之第二阶段")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("12"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("alpine\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /code\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENV")]),t._v(" NODE_ENV production\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" . .\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("from=builder node_modules node_modules\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置服务及数据库迁移")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" npm run config "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("if"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("present && npm run migrate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("if"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("present\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPOSE")]),t._v(" 3000\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CMD")]),t._v(" npm start\n")])])]),s("h2",{attrs:{id:"相关文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关文章"}},[t._v("#")]),t._v(" 相关文章")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://hackernoon.com/n-api-and-getting-started-with-writing-c-addons-for-node-js-cf061b3eae75",target:"_blank",rel:"noopener noreferrer"}},[t._v("N-API and getting started with writing C addons for Node.js"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://dev.to/alex_barashkov/using-docker-for-nodejs-in-development-and-production-3cgp",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using Docker for Node.js in Development and Production"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=a.exports}}]);