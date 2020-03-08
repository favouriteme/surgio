(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{226:function(t,a,s){"use strict";s.r(a);var e=s(28),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"快速搭建托管-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速搭建托管-api"}},[t._v("#")]),t._v(" 快速搭建托管 API")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("本文亦发布于我的个人博客 "),s("a",{attrs:{href:"https://blog.dada.li/2019/surgio-api-gateway",target:"_blank",rel:"noopener noreferrer"}},[t._v("blog.dada.li"),s("OutboundLink")],1)])]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#前言"}},[t._v("前言")])]),s("li",[s("a",{attrs:{href:"#简述实现"}},[t._v("简述实现")]),s("ul",[s("li",[s("a",{attrs:{href:"#now-sh-badge-text-推荐-vertical-middle"}},[t._v("now.sh "),s("Badge",{attrs:{text:"推荐",vertical:"middle"}})],1)]),s("li",[s("a",{attrs:{href:"#阿里云函数"}},[t._v("阿里云函数")])])])]),s("li",[s("a",{attrs:{href:"#部署-now-sh-badge-text-推荐-vertical-middle"}},[t._v("部署 - now.sh "),s("Badge",{attrs:{text:"推荐",vertical:"middle"}})],1),s("ul",[s("li",[s("a",{attrs:{href:"#准备"}},[t._v("准备")])]),s("li",[s("a",{attrs:{href:"#配置"}},[t._v("配置")])]),s("li",[s("a",{attrs:{href:"#编写云函数"}},[t._v("编写云函数")])]),s("li",[s("a",{attrs:{href:"#配置"}},[t._v("配置")])]),s("li",[s("a",{attrs:{href:"#部署"}},[t._v("部署")])]),s("li",[s("a",{attrs:{href:"#使用"}},[t._v("使用")])]),s("li",[s("a",{attrs:{href:"#最后"}},[t._v("最后")])])])]),s("li",[s("a",{attrs:{href:"#部署-阿里云函数-badge-text-即将废弃-vertical-middle-type-error"}},[t._v("部署 - 阿里云函数 "),s("Badge",{attrs:{text:"即将废弃",vertical:"middle",type:"error"}})],1),s("ul",[s("li",[s("a",{attrs:{href:"#准备"}},[t._v("准备")])]),s("li",[s("a",{attrs:{href:"#配置"}},[t._v("配置")])]),s("li",[s("a",{attrs:{href:"#编写云函数"}},[t._v("编写云函数")])]),s("li",[s("a",{attrs:{href:"#部署"}},[t._v("部署")])]),s("li",[s("a",{attrs:{href:"#使用"}},[t._v("使用")])]),s("li",[s("a",{attrs:{href:"#最后"}},[t._v("最后")])])])]),s("li",[s("a",{attrs:{href:"#最后的最后"}},[t._v("最后的最后")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("相信很多人都用过网络上处理规则的 API 接口，也有人在使用过 Surgio 后觉得更新规则不太灵活。虽然我们已经能够通过自动化的方法每隔一段时间更新一次规则，但还是无法做到实时更新。这篇文章就是想教大家，利用现成的 SAAS(Software as a Service) 服务，来实现一个 Surgio 规则仓库的 API。")]),t._v(" "),s("h2",{attrs:{id:"简述实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简述实现"}},[t._v("#")]),t._v(" 简述实现")]),t._v(" "),s("p",[t._v("目前 Surgio 支持两个部署平台，阿里云函数服务和 zeit 的 now.sh。他们各自有各自的优缺点，由各位定夺使用谁（无法同时使用）。")]),t._v(" "),s("h3",{attrs:{id:"now-sh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#now-sh"}},[t._v("#")]),t._v(" now.sh "),s("Badge",{attrs:{text:"推荐",vertical:"middle"}})],1),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("ul",[s("li",[t._v("管理简单")]),t._v(" "),s("li",[t._v("有免费额度（几乎不可能用完）")]),t._v(" "),s("li",[t._v("有香港边缘服务器节点（源站位于美国）")])]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ul",[s("li",[t._v("英文界面、文档")])]),t._v(" "),s("h3",{attrs:{id:"阿里云函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阿里云函数"}},[t._v("#")]),t._v(" 阿里云函数")]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("ul",[s("li",[t._v("有免费额度")]),t._v(" "),s("li",[t._v("有香港机房")])]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ul",[s("li",[t._v("管理复杂（文档很多很杂）")])]),t._v(" "),s("h2",{attrs:{id:"部署-now-sh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署-now-sh"}},[t._v("#")]),t._v(" 部署 - now.sh "),s("Badge",{attrs:{text:"推荐",vertical:"middle"}})],1),t._v(" "),s("h3",{attrs:{id:"准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),s("ol",[s("li",[t._v("注册一个 "),s("a",{attrs:{href:"https://now.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("now.sh"),s("OutboundLink")],1),t._v(" 账号")]),t._v(" "),s("li",[t._v("可以不绑定付款方式")])]),t._v(" "),s("h3",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("p",[t._v("首先，安装工具链。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -g now\n")])])]),s("p",[t._v("登录账号。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ now login\n")])])]),s("p",[t._v("新建文件 "),s("code",[t._v("now.json")]),t._v("，注意修改代码中 "),s("code",[t._v("<...>")]),t._v(" 部分。")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"public"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"builds"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"src"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/gateway.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"use"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@now/node"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"includeFiles"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"provider/**"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"template/**"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*.json"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"routes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"src"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/(.*)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dest"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/gateway.js"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("在 "),s("code",[t._v("package.json")]),t._v(" 中增加如下字段：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"engines"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"node"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10.x"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"编写云函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写云函数"}},[t._v("#")]),t._v(" 编写云函数")]),t._v(" "),s("p",[t._v("新建文件 "),s("code",[t._v("gateway.js")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use strict'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" gateway "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'surgio/build/gateway'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gateway"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createHttpServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"配置-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-2"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("h4",{attrs:{id:"接口鉴权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口鉴权"}},[t._v("#")]),t._v(" 接口鉴权")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("接口鉴权依赖使用新版的部署方法，旧的 "),s("code",[t._v("nowHandler")]),t._v(" 不支持。")])]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("surgio.conf.js")]),t._v(" 中增加如下字段：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  gateway"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    auth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    accessToken"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YOUR_PASSWORD'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("对于已经部署了托管接口的用户，推荐不要第一时间打开鉴权功能，而是配置 "),s("code",[t._v("accessToken")]),t._v(" 一段时间后再将 "),s("code",[t._v("auth")]),t._v(" 改为 "),s("code",[t._v("true")]),t._v("。这样可以让已经下载过旧托管文件的客户端更新到新的包含有 "),s("code",[t._v("access_token")]),t._v(" 参数的托管文件。")])]),t._v(" "),s("h3",{attrs:{id:"部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ now --prod\n")])])]),s("p",[t._v("如果不出意外你会看到如图的信息，高亮的 URL 即为云函数服务的访问地址。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.typcdn.com/geekdada/8428848087_769637.png",alt:"carbon.png"}})]),t._v(" "),s("p",[t._v("为了让托管地址保持一致，你需要到 "),s("code",[t._v("surgio.conf.js")]),t._v(" 把 "),s("code",[t._v("urlBase")]),t._v(" 更新为：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("https://xxxxxx.xxx.now.sh/get-artifact/\n")])])]),s("p",[t._v("最后，再运行一次")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ now --prod\n")])])]),s("p",[t._v("更新服务。")]),t._v(" "),s("h3",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("移步至")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/guide/api.html"}},[t._v("托管 API 的功能介绍")])],1)]),t._v(" "),s("h3",{attrs:{id:"最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),s("p",[t._v("有几点需要大家注意的：")]),t._v(" "),s("ol",[s("li",[t._v("每一次更新本地的代码，都需要执行一次 "),s("code",[t._v("now")]),t._v("，保证远端和本地代码一致")]),t._v(" "),s("li",[t._v("访问日志、监控、域名绑定等复杂功能恕不提供教程")]),t._v(" "),s("li",[t._v("如果访问地址泄漏，请立即删除云函数然后修改机场密码")])]),t._v(" "),s("h2",{attrs:{id:"部署-阿里云函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署-阿里云函数"}},[t._v("#")]),t._v(" 部署 - 阿里云函数 "),s("Badge",{attrs:{text:"即将废弃",vertical:"middle",type:"error"}})],1),t._v(" "),s("p",[t._v("首先需要确保本地 Surgio 版本已经更新到 v0.12.4 或更新。")]),t._v(" "),s("h3",{attrs:{id:"准备-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备-2"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),s("ol",[s("li",[t._v("注册一个阿里云账号，最好是国内的因为我不清楚国际版有什么差异")]),t._v(" "),s("li",[t._v("开启 "),s("a",{attrs:{href:"https://fc.console.aliyun.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("云函数功能"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"配置-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-3"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("p",[t._v("首先，安装"),s("a",{attrs:{href:"https://github.com/alibaba/funcraft",target:"_blank",rel:"noopener noreferrer"}},[t._v("云函数工具链"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @alicloud/fun -g\n")])])]),s("p",[t._v("在使用工具链之前，需要做一些基本的配置。在控制台中输入：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ fun config\n")])])]),s("p",[t._v("然后按照提示，依次配置 "),s("code",[t._v("Account ID")]),t._v(", "),s("code",[t._v("Access Key Id")]),t._v(", "),s("code",[t._v("Secret Access Key")]),t._v(", "),s("code",[t._v("Default Region Name")]),t._v("。关于服务区的选择，我建议避免使用大陆服务区。")]),t._v(" "),s("p",[t._v("在仓库中新建文件 "),s("code",[t._v("template.yml")]),t._v("，注意修改代码中 "),s("code",[t._v("<...>")]),t._v(" 部分。")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ROSTemplateFormatVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2015-09-01'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Aliyun::Serverless-2018-04-03'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Resources")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  <输入服务名 (例如 surgio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("api)>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Aliyun::Serverless::Service'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Properties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Surgio API service'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("get-artifact")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Aliyun::Serverless::Function'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Properties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gateway.handler\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Initializer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gateway.initializer\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("CodeUri")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Runtime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nodejs10\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Events")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http-service")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HTTP\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Properties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("AuthType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ANONYMOUS\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Methods")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HEAD'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("新建文件 "),s("code",[t._v(".funignore")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# Logs\nlogs/\n*.log\n\n# Dependency directories\n!/node_modules/\n")])])]),s("h3",{attrs:{id:"编写云函数-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写云函数-2"}},[t._v("#")]),t._v(" 编写云函数")]),t._v(" "),s("p",[t._v("新建文件 "),s("code",[t._v("gateway.js")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use strict'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" gateway "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'surgio/build/gateway'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nexports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("initializer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gateway"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("initializer\nexports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handler "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gateway"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"部署-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署-2"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ fun deploy\n")])])]),s("p",[t._v("如果不出意外你会看到如图的信息，高亮的 URL 即为云函数服务的访问地址。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.typcdn.com/geekdada/8428849460_548622.png",alt:"carbon.png"}})]),t._v(" "),s("h3",{attrs:{id:"使用-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-2"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("p",[t._v("如果你已经配置好了一个 Artifact 名为 "),s("code",[t._v("surge.conf")]),t._v("，那该文件的访问地址就是：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("https://1234567890.cn-hongkong.fc.aliyuncs.com/2016-08-15/proxy/surgio-api/get-artifact/surge.conf\n")])])]),s("p",[t._v("为了让托管地址保持一致，你需要到 "),s("code",[t._v("surgio.conf.js")]),t._v(" 把 "),s("code",[t._v("urlBase")]),t._v(" 更新为：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("https://1234567890.cn-hongkong.fc.aliyuncs.com/2016-08-15/proxy/surgio-api/get-artifact/\n")])])]),s("p",[t._v("最后，再运行一次 "),s("code",[t._v("fun deploy")]),t._v(" 更新服务。")]),t._v(" "),s("h3",{attrs:{id:"最后-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最后-2"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),s("p",[t._v("有几点需要大家注意的：")]),t._v(" "),s("ol",[s("li",[t._v("每一次更新本地的代码，都需要执行一次 "),s("code",[t._v("fun deploy")]),t._v("，保证远端和本地代码一致")]),t._v(" "),s("li",[t._v("访问日志、监控、域名绑定等复杂功能恕不提供教程")]),t._v(" "),s("li",[t._v("如果访问地址泄漏，请立即删除云函数然后修改机场密码")])]),t._v(" "),s("h2",{attrs:{id:"最后的最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最后的最后"}},[t._v("#")]),t._v(" 最后的最后")]),t._v(" "),s("p",[t._v("API 能够极大地方便我们获取 Surgio 仓库中的规则。之后我还会为这个功能带来更多有趣的新特性。")])])}),[],!1,null,null,null);a.default=r.exports}}]);