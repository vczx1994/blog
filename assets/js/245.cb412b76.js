(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{757:function(t,s,a){"use strict";a.r(s);var e=a(42),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"建立一个-tcp-连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建立一个-tcp-连接"}},[t._v("#")]),t._v(" 建立一个 TCP 连接")]),t._v(" "),a("p",[t._v("我们已经通过 DNS 解析到了 IP 地址")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("shanyue.tech")]),t._v(": 178.128.123.58")]),t._v(" "),a("li",[a("code",[t._v("shici.xiange.tech")]),t._v(": 59.110.216.155，我在阿里云的服务器")])]),t._v(" "),a("p",[t._v("在本地(客户端)查看建立好的连接:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打印头部信息")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -tan "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -n 2p\nProto Recv-Q Send-Q  Local Address          Foreign Address        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -tan "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("59.110")]),t._v("\ntcp4       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.16")]),t._v(".12.207.49239    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("59.110")]),t._v(".216.155.443     ESTABLISHED\n")])])]),a("p",[t._v("在云主机上(服务端)查看建立好的连接:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -tan "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("124.200")]),t._v("\n")])])]),a("ul",[a("li",[t._v("建立连接的过程是什么")]),t._v(" "),a("li",[t._v("如何监控连接的状态变化")])]),t._v(" "),a("h2",{attrs:{id:"报文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#报文"}},[t._v("#")]),t._v(" 报文")]),t._v(" "),a("p",[a("img",{attrs:{src:"",alt:"TCP 报文字段"}})]),t._v(" "),a("ul",[a("li",[t._v("TCP 关注于端口，而 IP 寻址由 IP 层完成")]),t._v(" "),a("li",[t._v("报文长度是 20 Byte+")])]),t._v(" "),a("h2",{attrs:{id:"socket"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#socket"}},[t._v("#")]),t._v(" socket")]),t._v(" "),a("p",[t._v("当解析到 IP 地址后，客户端与服务器端建立一个 TCP 连接。TCP Client 与 TCP Server 建立连接的过程如下")]),t._v(" "),a("p",[a("img",{attrs:{src:"",alt:"TCP 连接过程"}})]),t._v(" "),a("h2",{attrs:{id:"三次握手与四次挥手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三次握手与四次挥手"}},[t._v("#")]),t._v(" 三次握手与四次挥手")]),t._v(" "),a("p",[t._v("当我们访问 "),a("code",[t._v("shici.xiange.tech")]),t._v(" 时，服务器已经处于 "),a("code",[t._v("accept")]),t._v(" 状态等待，而客户端一般会以三次握手主动开始进行连接，四次挥手主动关闭连接。")]),t._v(" "),a("p",[a("img",{attrs:{src:"",alt:"TCP 三次握手与四次挥手"}})]),t._v(" "),a("h2",{attrs:{id:"tcp-连接状态装换图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-连接状态装换图"}},[t._v("#")]),t._v(" TCP 连接状态装换图")]),t._v(" "),a("p",[a("img",{attrs:{src:"",alt:"TCP 连接状态"}})]),t._v(" "),a("p",[t._v("当然最常见的状态还是以下几种")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("LISTEN")])]),t._v(" "),a("li",[a("code",[t._v("ESTABLISEHED")])])]),t._v(" "),a("h2",{attrs:{id:"更多问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多问题"}},[t._v("#")]),t._v(" 更多问题")]),t._v(" "),a("ul",[a("li",[t._v("TCP 为什么是可靠的连接")]),t._v(" "),a("li",[t._v("为什么刚好是三次握手")]),t._v(" "),a("li",[t._v("TCP 如何进行拥塞控制")]),t._v(" "),a("li",[t._v("一个主机中 TCP 连接的上限是多少")]),t._v(" "),a("li",[t._v("如何查看某个服务的TCP连接数")]),t._v(" "),a("li",[t._v("如何查看 mysql/postgres 的TCP连接数")]),t._v(" "),a("li",[t._v("如何判断某个端口号是TCP连接还是UDP连接")]),t._v(" "),a("li",[t._v("我们如何找到某个端口号上跑的进程")])])])}),[],!1,null,null,null);s.default=r.exports}}]);