---
title: SkyWalking 链路追踪
icon: state
---

```yaml
version: '3'
services:
  oap:
    image: apache/skywalking-oap-server:9.4.0
    container_name: skywalking-oap
    restart: always
    ports:
      - "11800:11800"

  oap-ui:
    image: apache/skywalking-ui:9.4.0
    container_name: skywalking-ui
    restart: always
    ports:
      - "34180:8080"
    environment:
      - SW_OAP_ADDRESS=http://oap:12800
    depends_on:
      - oap
```