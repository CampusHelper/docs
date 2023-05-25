---
title: 什么是 CampusHelper？
icon: creative
---

CampusHelper 是一个由 [AkagiYui](https://akagiyui.com) 制作的**开源的**校园助手，
一站式解决你的校园生活需求。

::: tip 注意
如果你只是希望使用 CampusHelper，你可以直接访问 [campushelper.akagiyui.com](https://campushelper.akagiyui.com)。
:::

该项目起始于 :calendar:**2023年 4月 1日**，目前处于开发阶段。

## 有什么功能？

![业务架构图](/graph/overview-light.svg#light)
![业务架构图](/graph/overview-light.svg#dark)

是个**缝合怪**。

## 为什么有这个项目？

AkagiYui 是一位本科大学生，她希望自己可以做一个项目，融合各种技术栈，让自己了解更多知识，掌握更多本领，于是就有了这个项目。

所以！这个项目其实是一个**学习项目**，并不是一个**商业项目**。
它并不稳定，也并不成熟，请不要尝试在生产环境中使用！

::: danger
该项目并不 **`小而美`** ！
:::

当你在网络上发现这个项目的源代码时，意味着开发者已经毕业，这个项目**或许**不会继续维护了。

## 使用了哪些技术栈？

![技术栈](https://skillicons.dev/icons?i=vue,vite,html,css,js,ts,flutter,dart,vercel,nodejs,java,spring,mysql,postgres,mongodb,redis,rabbitmq,kafka,git,github,gitlab,githubactions,docker,kubernetes,prometheus,grafana,linux,md,gradle&theme=light&perline=10#light)
![技术栈](https://skillicons.dev/icons?i=vue,vite,html,css,js,ts,flutter,dart,vercel,nodejs,java,spring,mysql,postgres,mongodb,redis,rabbitmq,kafka,git,github,gitlab,githubactions,docker,kubernetes,prometheus,grafana,linux,md,gradle&theme=dark&perline=10#dark)

- [客户端](https://campushelper.akagiyui.com)技术栈
  - [x] [Vue.js 3](https://cn.vuejs.org/)，前端框架
  - [x] [Vite 4](https://cn.vitejs.dev/)，前端构建工具
  - [x] [pnpm](https://pnpm.io/zh/)，包管理工具
  - [x] [VuePress](https://vuepress.vuejs.org/zh/)，文档生成（即你现在看到的这个页面）
    - [x] [VuePress Theme Hope](https://theme-hope.vuejs.press/zh/)，VuePress 主题
  - [ ] [Tailwind CSS](https://tailwindcss.com/)，CSS 框架
  - [x] [TypeScript](https://www.typescriptlang.org/)，JavaScript 的超集，提供了类型系统
  - [ ] [Flutter](https://flutter.dev/)，跨平台移动应用开发框架
  - [x] [Vercel](https://vercel.com/)，前端自动构建与部署平台
  - [ ] [Naive UI](https://www.naiveui.com/)，界面组件库
  - [ ] [Chart.js](https://www.chartjs.org/)，数据可视化
  - [x] [CDN](https://www.huaweicloud.com/product/cdn.html)，内容分发网络

- 服务端技术栈
  - [x] [SpringBoot](https://spring.io/projects/spring-boot)，Java Web 框架
  - [x] [SpringSecurity](https://spring.io/projects/spring-security)，安全框架
  - [x] [SpringCloud](https://spring.io/projects/spring-cloud)，微服务框架
  - [x] [JPA](https://spring.io/projects/spring-data-jpa)，ORM 框架
  - [ ] [MyBatis](https://mybatis.org/mybatis-3/)，ORM 框架
    - [ ] [MyBatis Plus](https://mybatis.plus/)，MyBatis 的增强框架
  - [x] [Maven](https://maven.apache.org/)，Java 构建工具
  - [ ] [Gradle](https://gradle.org/)，Java 构建工具
  - [x] [MySQL](https://www.mysql.com/)，关系型数据库，[JDBC驱动](https://dev.mysql.com/downloads/connector/j/)
  - [ ] [PostgreSQL](https://www.postgresql.org/)，关系型数据库，[JDBC驱动](https://jdbc.postgresql.org/)
  - [ ] [MongoDB](https://www.mongodb.com/)，非关系型数据库
  - [x] [Redis](https://redis.io/)，缓存数据库
  - [x] [RabbitMQ](https://www.rabbitmq.com/)，消息队列
  - [ ] [Kafka](https://kafka.apache.org/)，消息队列
  - [ ] [MinIO](https://min.io/)，对象存储
  - [ ] [Socket.IO](https://socket.io/)，即时通信
  - [ ] [WebSocket](https://zh.wikipedia.org/wiki/WebSocket)，即时通信
  - [x] [Nacos](https://nacos.io/zh-cn/)，服务注册与发现
  - [x] [Dubbo](https://dubbo.apache.org/zh/)，RPC 框架

- DevOps，开发运维
  - [x] [Git](https://git-scm.com/)，版本控制
  - [ ] [Drone](https://drone.io/)，持续集成
  - [x] [GitHub](https://github.com/)，代码托管
  - [x] [GitLab](https://about.gitlab.com/)，代码托管、持续集成
  - [x] [Docker](https://www.docker.com/)，容器化
    - [x] [Portainer](https://www.portainer.io/)，Docker 可视化管理
  - [ ] [Harbor](https://goharbor.io/)，镜像仓库
  - [ ] [Kubernetes](https://kubernetes.io/)，容器编排
  - [ ] [Prometheus](https://prometheus.io/)，监控系统
  - [ ] [Grafana](https://grafana.com/)，监控数据可视化
  - [x] [SkyWalking](https://skywalking.apache.org/)，分布式追踪系统
