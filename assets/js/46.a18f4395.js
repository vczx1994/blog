(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{526:function(t,a,s){"use strict";s.r(a);var e=s(42),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("date: 2020-04-10 20:00")]),t._v(" "),s("hr"),t._v(" "),s("h1",{attrs:{id:"df-被-hang-住-无法查看磁盘使用情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#df-被-hang-住-无法查看磁盘使用情况"}},[t._v("#")]),t._v(" df 被 hang 住，无法查看磁盘使用情况")]),t._v(" "),s("h2",{attrs:{id:"情景再现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#情景再现"}},[t._v("#")]),t._v(" 情景再现")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("centos7")]),t._v(" 中，当使用 "),s("code",[t._v("df")]),t._v(" 命令查看磁盘空间时被 hang 住，时隔两周决定处理这个问题")]),t._v(" "),s("h2",{attrs:{id:"捉虫"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#捉虫"}},[t._v("#")]),t._v(" 捉虫")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("df")]),t._v(" 命令 "),s("code",[t._v("hanging")])]),t._v(" "),s("li",[s("code",[t._v("strace df")]),t._v("，查看系统调用，发现阻塞在了 "),s("code",[t._v('stat("/proc/sys/fs/binfmt_misc")')])]),t._v(" "),s("li",[s("code",[t._v("mount | grep binfmt")]),t._v("，查看挂载情况，输出 "),s("code",[t._v("systemd-1 on /proc/sys/fs/binfmt_misc type autofs (rw,relatime,fd=31,pgrp=1,timeout=300,minproto=5,maxproto=5,direct)")])])]),t._v(" "),s("h3",{attrs:{id:"补充知识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补充知识"}},[t._v("#")]),t._v(" 补充知识")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("df")]),t._v(": 查看磁盘使用情况")]),t._v(" "),s("li",[s("code",[t._v("strace")]),t._v(": 查看某命令的系统调用")])]),t._v(" "),s("h2",{attrs:{id:"原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[t._v("#")]),t._v(" 原因")]),t._v(" "),s("p",[s("code",[t._v("proc-sys-fs-binfmt_misc.automount")]),t._v(" 与 "),s("code",[t._v("proc-sys-fs-binfmt_misc.mount")]),t._v(" 这两个之间存在竞争条件")]),t._v(" "),s("h2",{attrs:{id:"解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[t._v("#")]),t._v(" 解决")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ systemctl restart proc-sys-fs-binfmt_misc.mount\n")])])]),s("h3",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://www.jianshu.com/p/7e71b5248cb3",target:"_blank",rel:"noopener noreferrer"}},[t._v("解决CentOS 7 df命令卡住问题"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://unix.stackexchange.com/questions/21199/why-is-df-hanging",target:"_blank",rel:"noopener noreferrer"}},[t._v("why is df hanging"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.colabug.com/2018/0607/3072371/",target:"_blank",rel:"noopener noreferrer"}},[t._v("centos7 系统 df hang 问题处理说明"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);