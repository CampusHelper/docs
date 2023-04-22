---
title: 边际互联
icon: mount
---

我将用户登录模块分离出来，单独开发了一套账号系统，类似于在各种平台使用的 微信/QQ/微博 登录形式。

这使得我在后续开发其他项目时，不用再重复开发用户登录模块，只需要将该用户登录模块集成到新的项目中即可。

项目开源地址：<HopeIcon icon="github" />[EdgeConnect](https://github.com/AkagiYui/EdgeConnect)

这是一个基于 OAuth2 的账号系统，类似于国内的[QQ互联](https://connect.qq.com/)，该系统用于登录我开发的各个项目，例如 [`CampusHelper`](https://campushelper.akagiyui.com) 。

你也可以将你的项目集成到这个系统中，这样你的用户就可以使用这个系统的账号登录你的项目。

你可以使用公共的服务：[edge.akagiyui.com](https://edge.akagiyui.com)，
也可以自己部署该服务。