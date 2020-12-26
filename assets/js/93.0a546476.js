(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{579:function(e,t,v){"use strict";v.r(t);var _=v(42),a=Object(_.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"cicd-下前端的多特性分支环境部署"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cicd-下前端的多特性分支环境部署"}},[e._v("#")]),e._v(" CICD 下前端的多特性分支环境部署")]),e._v(" "),v("p",[e._v("无论大中小企业，多特性分支的前端环境基本上已成为了标配，即每一个功能分支都配有相应的测试环境。今天山月就循序渐进来讲解下多分支环境的实现方式，经济基础决定上层建筑，企业的基础服务建设决定实现方式，这里是基于 Docker 与 CICD 的实现。")]),e._v(" "),v("p",[e._v("至于服务器端的多分支环境部署，由于都是基于容器的思想，思路与前端一致，如果直接想看结论，请翻到最后看小结。")]),e._v(" "),v("p",[e._v("从前后端的开发到上线，不同的企业对不同的环境有不同的命名，甚至有更精细的划分。但是一般可以可以划分为三个环境，我把这三个环境命名如下，并会在下述")]),e._v(" "),v("ol",[v("li",[v("code",[e._v("local")]),e._v("：本地环境，把项目 git clone 到自己的工作笔记本或者开发机中，在 "),v("code",[e._v("localhost:8080")]),e._v(" 类似的地址进行调试与开发。此时环境的面向对象主要是开发者。")]),e._v(" "),v("li",[v("code",[e._v("dev")]),e._v("：测试环境，本地业务迭代开发结束并交付给测试进行功能测试的环境，在 "),v("code",[e._v("dev.shanyue.tech")]),e._v(" 类似的二级域名进行测试。此时环境的面向对象主要是测试人员。")]),e._v(" "),v("li",[v("code",[e._v("prod")]),e._v("：生产环境，线上供用户使用的环境，在 "),v("code",[e._v("shanyue.tech")]),e._v(" 类似的地址。此时环境的面向对象主要是用户。")])]),e._v(" "),v("p",[e._v("那什么是多分支环境部署呢？这要从 Git 的工作流说起")]),e._v(" "),v("blockquote",[v("p",[e._v("本篇文章要求你有一定的 Docker，DevOps 以及前端工程化的知识储备。如果没有的话，本系列文章以及 "),v("a",{attrs:{href:"https://github.com/shfshanyue/blog#%E4%B8%AA%E4%BA%BA%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%90%E7%BB%B4%E6%8C%87%E5%8D%97",target:"_blank",rel:"noopener noreferrer"}},[e._v("个人服务器运维指南"),v("OutboundLink")],1),e._v(" 中的 Docker 部分会对你有所帮助。")])]),e._v(" "),v("h2",{attrs:{id:"git-工作流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git-工作流"}},[e._v("#")]),e._v(" Git 工作流")]),e._v(" "),v("p",[e._v("随着不同的环境的区分，基于版本管理工具演化出了各种各样的工作流，比如 "),v("code",[e._v("Git Flow")]),e._v("，"),v("code",[e._v("Github Flow")]),e._v(" 与 "),v("code",[e._v("Gitlab Flow")]),e._v("。这里简单介绍一种最常见的 "),v("code",[e._v("Git Flow")])]),e._v(" "),v("p",[v("img",{attrs:{src:"https://nvie.com/img/git-model@2x.png",alt:"git flow"}})]),e._v(" "),v("p",[v("code",[e._v("git flow")]),e._v(" 流程如图上所示，关于细节这里不作过多的讨论。一般来说")]),e._v(" "),v("ol",[v("li",[v("code",[e._v("feature")]),e._v(" 分支对应本地环境")]),e._v(" "),v("li",[v("code",[e._v("develop")]),e._v(" 分支对应测试环境")]),e._v(" "),v("li",[v("code",[e._v("master")]),e._v(" 分支对应生产环境")])]),e._v(" "),v("p",[e._v("由于每次 "),v("code",[e._v("feature")]),e._v(" 开发结束后都要合并到 "),v("code",[e._v("develop")]),e._v(" 分支进行测试。此时会有几个问题")]),e._v(" "),v("ol",[v("li",[e._v("当 "),v("code",[e._v("develop")]),e._v(" 分支测试出现 bug 后，每次修复后都需要合并到 "),v("code",[e._v("develop")]),e._v(" 分支。")]),e._v(" "),v("li",[v("strong",[e._v("当多功能同时开发时会造成 "),v("code",[e._v("develop")]),e._v(" 分支的拥挤导致，各个功能最后只能统一上线")]),e._v("，因为它无法时刻保持一个干净的 "),v("code",[e._v("develop")]),e._v(" 分支，这与我们现在所提倡的敏捷开发，小步迭代格格不入。")])]),e._v(" "),v("p",[e._v("此时，基于 "),v("code",[e._v("feature")]),e._v(" 分支急需一套可单独测试的环境")]),e._v(" "),v("h2",{attrs:{id:"多分支环境部署"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多分支环境部署"}},[e._v("#")]),e._v(" 多分支环境部署")]),e._v(" "),v("p",[e._v("CI，"),v("code",[e._v("Continous Integration")]),e._v(" 持续集成使项目变得更加自动化，充分减少程序员的手动操作，并且在产品快速迭代的同时提高代码质量。基于 CICD 的工作流也大大改善了 Git 的工作流。其中就增加了一个基于分支的前端环境：")]),e._v(" "),v("ol",[v("li",[e._v("特性环境 (也不知道叫啥名字，就这么起吧)，对应于 "),v("code",[e._v("feature")]),e._v(" 分支。每个 "),v("code",[e._v("feature")]),e._v(" 分支都会有一个环境，可以视为本地环境与测试环境的结合体。如对功能 "),v("code",[e._v("feature-A")]),e._v(" 的开发在 "),v("code",[e._v("feature-A.dev.shanyue.tech")]),e._v(" 类似的三级域名进行测试。")])]),e._v(" "),v("p",[e._v("此时对于开发，测试，产品交付来讲，整个流程的体验就顺滑了很多。于是终于到了今天的正题：")]),e._v(" "),v("p",[v("strong",[e._v("如何实现多分支环境部署？")])]),e._v(" "),v("h2",{attrs:{id:"基于-docker-进行部署"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基于-docker-进行部署"}},[e._v("#")]),e._v(" 基于 docker 进行部署")]),e._v(" "),v("p",[e._v("由于 docker 的轻便易用，隔离性好并且可移植性高的特点，这里选择基于 docker 的部署，镜像配置文件如下所示。")]),e._v(" "),v("div",{staticClass:"language-dockerfile extra-class"},[v("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" node"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("10"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("alpine as builder\n\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ENV")]),e._v(" PROJECT_ENV development\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ENV")]),e._v(" NODE_ENV production\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# http-server 不变动也可以利用缓存")]),e._v("\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WORKDIR")]),e._v(" /code\n\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ADD")]),e._v(" package.json package"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("lock.json /code\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RUN")]),e._v(" npm install "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("production\n\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ADD")]),e._v(" . /code\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RUN")]),e._v(" npm run build\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 选择更小体积的基础镜像")]),e._v("\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" nginx"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("10"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("alpine\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("COPY")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("from=builder /code/public /usr/share/nginx/html\n")])])]),v("p",[e._v("另外由于此时不在生产环境，完全没有必要把所有静态资源扔到 CDN 去处理，甚至为了方便调试，在打包时也可以避免做过多的混淆及压缩。如果你对 docker 不熟悉，可以查看本系列暨前端工程暨高级前端进阶的系列文章第 N 篇："),v("a",{attrs:{href:"https://shanyue.tech/frontend-engineering/docker.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用 Docker 部署前端项目"),v("OutboundLink")],1)]),e._v(" "),v("h2",{attrs:{id:"基于容器的前端部署与反向代理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基于容器的前端部署与反向代理"}},[e._v("#")]),e._v(" 基于容器的前端部署与反向代理")]),e._v(" "),v("p",[e._v("现在流行的 "),v("code",[e._v("kubernetes")]),e._v("，"),v("code",[e._v("docker-compose")]),e._v(" 应用编排都是基于容器的，所以我们只需要着力于容器，思考如何利用它做多分支部署。")]),e._v(" "),v("p",[e._v("首先解决的问题是多分支部署环境的多域名问题，因此首先要了解如何利用容器来映射域名，以下是两种常见的方案，但是利用容器的 label 的方式还是多一些")]),e._v(" "),v("ol",[v("li",[e._v("基于 container label，如 "),v("code",[e._v("traefik")]),e._v(" 以及 "),v("code",[e._v("kubernetes ingress")]),e._v("。")]),e._v(" "),v("li",[e._v("基于 environment，如 "),v("code",[e._v("docker-nginx")]),e._v("。")])]),e._v(" "),v("p",[e._v("但是无论基于那种方式的部署，我们总是可以在给它封装一层来简化操作，一来方便运维管理，一来方便开发者直接接入。如把部署抽象为一个命令，我们这里暂时把这个命令命名为 "),v("code",[e._v("deploy")]),e._v("，"),v("code",[e._v("deploy")]),e._v(" 这个命令可能基于 "),v("code",[e._v("kubectl/heml")]),e._v(" 也有可能基于 "),v("code",[e._v("docker-conpose")]),e._v("。")]),e._v(" "),v("p",[e._v("该命令最核心 API 如下：")]),e._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[e._v("$ deploy service-name --host :host\n")])])]),v("p",[e._v("假设要部署一个应用 "),v("code",[e._v("shanyue-feature-A")]),e._v("，设置它的域名为 "),v("code",[e._v("feature-A.dev.shanyue.tech")]),e._v("，则这个部署前端的命令为：")]),e._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[e._v("$ deploy shanyue-feature-A --host feature-A.dev.shanyue.tech\n")])])]),v("p",[e._v("现在只剩下了一个问题：找到当前分支。")]),e._v(" "),v("h2",{attrs:{id:"基于-cicd-的多分支部署"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基于-cicd-的多分支部署"}},[e._v("#")]),e._v(" 基于 CICD 的多分支部署")]),e._v(" "),v("p",[e._v("在 CICD 中很容易获取当前分支的信息，在 CI 环境中可以通过环境变量获取到。")]),e._v(" "),v("p",[e._v("如在 gitlab CI 中可以通过环境变量 "),v("code",[e._v("CI_COMMIT_REF_SLUG")]),e._v(" 获取，该环境变量还会做相应的分支名替换，如 "),v("code",[e._v("feature/A")]),e._v(" 到 "),v("code",[e._v("feature-a")]),e._v(" 的转化。")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("CI_COMMIT_REF_SLUG")]),e._v(": $CI_COMMIT_REF_NAME lowercased, shortened to 63 bytes, and with everything except 0-9 and a-z replaced with -. No leading / trailing -. Use in URLs, host names and domain names.")])]),e._v(" "),v("p",[e._v("以下是一个基于 "),v("code",[e._v("gitlab CI")]),e._v(" 的一个多分支部署的简单示例")]),e._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[e._v("deploy-for-feature:\n  stage: deploy\n  only:\n    refs:\n      - /^feature"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("/.*$/\n  script:\n    - deploy shanyue-"),v("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CI_COMMIT_REF_SLUG")]),e._v(" --host https://"),v("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CI_COMMIT_REF_SLUG")]),e._v(".sp.dev.smartstudy.com \n  environment:\n    name: review/"),v("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CI_COMMIT_REF_NAME")]),e._v("\n    url: http://"),v("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CI_COMMIT_REF_SLUG")]),e._v(".dev.shanyue.tech\n")])])]),v("h2",{attrs:{id:"小结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),v("p",[e._v("随着 CICD 的发展，对快速迭代以及代码质量提出了更高的要求，而基于分支的多测试环境则成为了刚需。对于该环境的搭建，思路也很清晰")]),e._v(" "),v("ol",[v("li",[e._v("借用现有的 CICD 服务，如 "),v("code",[e._v("jenkins")]),e._v("，"),v("code",[e._v("gitlab CI")]),e._v(" 或者 "),v("code",[e._v("drone CI")]),e._v("，获取当前分支信息")]),e._v(" "),v("li",[e._v("借用 Docker 快速部署前端或者后端，根据分支信息启动不同的容器，并配置标签")]),e._v(" "),v("li",[e._v("根据容器的标签与当前 Git 分支对前端后端设置不同的域名")])]),e._v(" "),v("p",[e._v("另外，这个基于容器的思路不仅仅使用于前端，同样也适用于后端。而现实的业务中复杂多样，如又分为已下几种，这需要在项目的使用场景中灵活处理。")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("feature-A")]),e._v(" 的前端分支对应 "),v("code",[e._v("feature-A")]),e._v(" 的后端分支环境")]),e._v(" "),v("li",[v("code",[e._v("feature-A")]),e._v(" 的前端分支对应 "),v("code",[e._v("develop")]),e._v(" 的后端分支环境")]),e._v(" "),v("li",[v("code",[e._v("feature-A")]),e._v(" 的前端分支对应 "),v("code",[e._v("master")]),e._v(" 的后端分支环境")])])])}),[],!1,null,null,null);t.default=a.exports}}]);