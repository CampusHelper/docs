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

![总览](/graph/overview-light.svg#light)
![总览](/graph/overview-dark.svg#dark)

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

![总览](https://github-readme-tech-stack.vercel.app/api/cards?title=&align=center&titleAlign=center&showBorder=false&lineHeight=8&lineCount=7&gap=7&hideBg=true&hideTitle=true&line1=vuedotjs,Vue.js,4FC08D;vite,vite,646CFF;pnpm,pnpm,F69220;css3,css3,1572B6;typescript,typescript,3178C6;flutter,flutter,02569B;&line2=vercel,vercel,000000;chartdotjs,chart.js,FF6384;git,git,F05032;github,github,181717;javascript,javascript,F7DF1E;githubactions,actions,2088FF;&line3=harbor,harbor,60B932;mongodb,mongodb,47A248;redis,redis,DC382D;drone,drone,212121;apachekafka,kafka,231F20;&line4=spring,spring,6DB33F;springboot,springboot,6DB33F;springsecurity,springsecurity,6DB33F;gradle,gradle,02303A;&line5=prometheus,prometheus,E6522C;dotenv,dotenv,ECD53F;postgresql,postgresql,4169E1;podman,podman,892CA0;&line6=intellijidea,idea,000000;visualstudiocode,vscode,007ACC;apachemaven,maven,C71A36;portainer,portainer,13BEF9;docker,docker,2496ED;&line7=socketdotio,socket.io,010101;kubernetes,kubernetes,326CE5;grafana,grafana,F46800;diagramsdotnet,diagrams.net,F08705;#light)
![总览](https://github-readme-tech-stack.vercel.app/api/cards?title=&align=center&titleAlign=center&showBorder=false&lineHeight=8&lineCount=1&theme=github_dark&hideBg=true&hideTitle=true&line1=express,express,d83426;trello,trello,9f32b0;flutter,flutter,f6fcef;spring,spring,40da49;#dark)

![技术栈](https://skillicons.dev/icons?i=vue,vite,html,css,js,ts,flutter,dart,vercel,nodejs,java,spring,postgres,mongodb,redis,kafka,git,github,githubactions,docker,kubernetes,prometheus,grafana,linux,idea,vscode,androidstudio,postman,md,gradle&theme=light&perline=10#light)
![技术栈](https://skillicons.dev/icons?i=vue,vite,html,css,js,ts,flutter,dart,vercel,nodejs,java,spring,postgres,mongodb,redis,kafka,git,github,githubactions,docker,kubernetes,prometheus,grafana,linux,idea,vscode,androidstudio,postman,md,gradle&theme=dark&perline=10#dark)

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
  - [ ] [SpringSecurity](https://spring.io/projects/spring-security)，安全框架
  - [ ] [SpringCloud](https://spring.io/projects/spring-cloud)，微服务框架
  - [ ] [MyBatis](https://mybatis.org/mybatis-3/)，ORM 框架
    - [MyBatis Plus](https://mybatis.plus/)，MyBatis 的增强框架
    - 考虑使用 [JPA](https://spring.io/projects/spring-data-jpa) 代替
  - [x] [Gradle](https://gradle.org/)，Java 构建工具
  - [x] [PostgreSQL](https://www.postgresql.org/)，关系型数据库，[JDBC驱动](https://jdbc.postgresql.org/)
  - [ ] [MongoDB](https://www.mongodb.com/)，非关系型数据库
  - [ ] [Redis](https://redis.io/)，缓存数据库
  - [ ] [Kafka](https://kafka.apache.org/)，消息队列
  - [ ] [MinIO](https://min.io/)，对象存储
  - [ ] [Socket.IO](https://socket.io/)，实时通信

- DevOps，开发运维
  - [x] [Git](https://git-scm.com/)，版本控制
  - [ ] [Drone](https://drone.io/)，持续集成
  - [x] [GitHub](https://github.com/)，代码托管
    - [Gitea](https://gitea.io/)，代码托管(镜像备份)
  - [x] [Docker](https://www.docker.com/)，容器化
    - [Portainer](https://www.portainer.io/)，Docker 可视化管理
    - [Harbor](https://goharbor.io/)，Docker 镜像仓库
    - [Podman](https://podman.io/)，容器引擎（Docker 替代品）
  - [ ] [Kubernetes](https://kubernetes.io/)，容器编排
  - [ ] [Prometheus](https://prometheus.io/)，监控系统
  - [ ] [Grafana](https://grafana.com/)，监控数据可视化
  - [ ] [Apifox](https://apifox.com/)，API 调试

以上技术栈，应该都会在论文中提及。
