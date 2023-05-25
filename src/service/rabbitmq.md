---
title: RabbitMQ 消息队列
icon: emmet
---

```yaml
version: '3'
services:
  rabbitmq:
    image: rabbitmq:3-management-alpine
    container_name: rabbitmq
    restart: always
    ports:
      - "5673:5672"
      - "15673:15672"
    environment:
      - RABBITMQ_DEFAULT_USER=admin
      - RABBITMQ_DEFAULT_PASS=admin
      - RABBITMQ_DEFAULT_VHOST=campus
      - TZ=Asia/Shanghai
```
