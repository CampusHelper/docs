---
title: MySQL 数据库
icon: mysql
---

```
MySQL 8相比MySQL 5.7有以下主要提升:
1. 支持JSON数据类型。MySQL 8支持JSON数据类型,可以更方便的存储和查询JSON数据。
2. 支持Window函数。MySQL 8支持许多窗口函数,如RANK(),DENSE_RANK(),ROW_NUMBER(),NTILE()等,方便进行分析和统计。
3. 支持Common Table Expressions(CTE)。MySQL 8支持CTE递归查询,可以方便的 querying hierarchical data 等。
4. 支持DESC表约束。MySQL 8支持DESC表约束,可以在创建表时添加检查约束。
5. 改进的安全特性。MySQL 8提供了许多安全特性的提升,如支持caching_sha2_password认证插件,默认启用密码验证等。
6. 改进的优化器。MySQL 8的查询优化器有很大提升,能做更智能的查询优化。
7. 支持 roles 和 dynamic privileges。MySQL 8支持角色和动态权限,简化权限管理。
总之,MySQL 8在功能、性能、安全等方面都有较大提升,所以对许多项目来说使用MySQL 8都是很好的选择。当然,在升级到MySQL 8之前,需要检查应用的兼容性,确保顺利升级。
所以,使用MySQL 8的主要理由是:
1. 获得最新的数据库技术和特性
2. 性能和安全性提升
3. 简化运维,如管理权限
4. 满足未来项目需求
```

::: details 部署 MySQL8


```shell
# 创建数据目录
mkdir -p /srv/mysql/data
cd /srv/mysql
# 创建配置文件
vim docker-compose.yaml
# 启动 MySQL
docker-compose -p mysql up -d
```

```yaml
version: '3'

services:
  mysql:
    image: mysql:8
    container_name: mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
    volumes:
      - /srv/mysql/data:/var/lib/mysql
    ports:
      - 3306:3306
```

:::