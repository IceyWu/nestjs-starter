## Prisma

```bash
# 初始化
$ npx prisma init

# 生成迁移文件
$ npx prisma migrate dev

# 重置数据库
$ npx prisma migrate reset
```

## Nest

```bash
# 使用 CLI 创建模块
$ nest g module auth

# 创建服务类
$ nest g service auth --no-spec

# 创建控制器
$ nest g controller auth --no-spec

# 创建完整模块
$ nest g res article --no-spec


```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

pnpm config set sharp_libvips_binary_host "https://npmmirror.com/mirrors/sharp-libvips"
pnpm config set sharp_binary_host "https://npmmirror.com/mirrors/sharp"
pnpm install --force @img/sharp-linux-x64
pnpm install --os=win32 --cpu=x64 sharp
