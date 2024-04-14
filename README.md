<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">

## Description 🌈

[Nest](https://github.com/nestjs/nest) framework stater with prisma redis,swagger and scalar .

## Features 🦄

- ⚡️ [Nest](https://github.com/nestjs/nest), [pnpm](https://pnpm.io/)



- 🎨 [Prisma](https://www.prisma.io) - safe and modern JavaScript/TypeScript ORM for Node.js that's tailored to your data. Supports PostgreSQL, CockroachDB, MySQL, MariaDB, SQL Server, SQLite & MongoDB databases.

- 😃 [Ridis](https://github.com/redis/node-redis)

- 📥 [API references with swagger and scalar](https://github.com/scalar/scalar) - generate beautiful API references from OpenAPI specs

<!-- - 🚀  自动版本更新并生成 `CHANGELOG` -->
<!-- - 🚀   [Changelogen](https://github.com/unjs/changelogen) - auto version update and generate `CHANGELOG` -->

## Start the app

```bash
$ pnpm install

# 生成迁移文件(数据库初始化)
$ npx prisma migrate dev

# development
$ pnpm dev

```

## Module Create 🫧

```bash
nest g res [module name] --no-spec
```

## Schema init 🫧

- 📦 [schema](./prisma/schema.prisma) Go to edit