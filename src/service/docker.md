---
title: Docker 容器引擎
icon: categoryselected
---

## 背景

[Docker](https://www.docker.com/) Engine 是一种开源容器化技术，用于构建和容器化应用程序。

## Portainer

[Portainer](https://www.portainer.io/) 是 Docker 的一款 WebUI 工具，Portainer 本身也运行在 Docker 之上。


::: details 部署 Portainer

```shell
docker run -d -p 9000:9000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce
```

:::
