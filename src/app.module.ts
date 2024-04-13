import { Module } from '@nestjs/common'
import { CacheModule } from '@nestjs/cache-manager'
import { ConfigModule } from '@nestjs/config'
import * as redisStore from 'cache-manager-redis-store'
import { AliyunModule } from './aliyun/aliyun.module'
import { AppController } from './app.controller'
import { AuthModule } from './auth/auth.module'

import configs from './config/index'

import { PrismaModule } from './prisma/prisma.module'

import { TagModule } from './tag/tag.module'

import { WsStartGateway } from './websocket/websocket.gateway' //

@Module({
  imports: [
    AliyunModule,
    ConfigModule.forRoot({ load: configs, isGlobal: true }),
    CacheModule.register({
      store: redisStore as any,
      host: 'localhost',
      port: 6379,
      isGlobal: true,
    }),
    AuthModule,
    PrismaModule,

    TagModule,
  ],
  controllers: [AppController],
  providers: [WsStartGateway],
})
export class AppModule {}
