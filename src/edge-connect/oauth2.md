---
title: 什么是 OAuth2.0
icon: command
---

## 什么是 `OAuth`

OAuth（开放授权）是一个开放标准，允许用户授权第三方网站访问他们存储在另外的服务提供者上的信息，而不需要将用户名和密码提供给第三方网站或分享他们数据的所有内容。

![](/o1.svg)

![](https://mermaid.ink/img/pako:eNp1k01LwzAYx79KyFmD1fnWg9Bpd_Mku_US2mwWXDu79CBDcAoyQecOviCiOC-KDqsMnTLmvsySdd_CdO206tZTyfPL7__kaVOEum0QKMMC2XSJpZMVE2cdnNMsIJ48dqipm3lsUZAGuAB6J_e83PxfVFKDar3efT_gZx9-2-u23gA7OOo9eiPo5Ei6WhlJqwO3amQJWLYti-h0rFhN_kdj1vTk0pKSkoGE_KdO__zpTwchpKQEpQpqGvnNht-us_JzYIyEvYsWa5_2a6_9q9twgxpsSMtgBvlek7_shjMKuZ_cwJhArPbI9i9CglWPmLffuynFNGpSBrNDT8ygJqPiHOo_HPpeKb4szPPI75ywy2teKfOrvd_O4MQLo-uDsypCuxhl-pUmOz4L--t2arwUTU4Z5ktTaBzz3aMkIX5TE31-p7FqmTdO-c5djAxipemorzGJg481M56JJi8lED-udj8v4wicgDni5LBpiL-7GGzQIF0nOaJBWbwaJIPdDapBzdoWKHapvbZl6VCmjksmoJs3MB1eBihn8EZBrBLDpLazGt4Y3bYyZhZufwH4m3K5?type=png)

```sequence
participant U as 用户
participant AF as 第三方软件 前端
participant AB as 第三方软件 后端
participant EF as Edge Connect 前端
participant EB as Edge Connect 后端
U->>AF: 1.访问第三方软件
AF->>EF: 2.跳转到EdgeConnect登录页面
EF->>U: 3.请求用户登录
U->>EF: 4.填写用户名密码
EF->>EB: 5.请求登录
EB->>EB: 6.验证
EB->>EF: 7.返回授权码
EF->>AF: 8.返回授权码
AF->>AB: 9.请求获取用户信息
AB->>EB: 10.获取用户信息
EB->>EB: 11.校验授权码合法性
EB->>AB: 12.返回用户信息
AB->>AF: 13.返回用户信息
AF->>U: 14.提供用户信息
```