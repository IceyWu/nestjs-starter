import { PrismaClient } from '@prisma/client'
import { hash } from 'argon2'
import { Random } from 'mockjs'
import { create } from '../helper'
const prisma = new PrismaClient()
export default async () => {
  // me
  await prisma.user.create({
    data: {
      name: 'IceyWu',
      username: 'IceyWu',
      sex: 1,
      mobile: process.env.MOBILE,
      password: await hash('123456'),
      avatar: `https://test.wktest.cn:3001/assets/IceyWu.jpg`,
    },
  })
  await create(10, async (prisma: PrismaClient) => {
    return prisma.user.create({
      data: {
        name: Random.cname(),
        username: Random.cname(),
        sex: Random.integer(0, 2),
        mobile: String(Random.integer(11111111111, 19999999999)),
        password: await hash('123456'),
        avatar: `${process.env.URL}/assets/user/文件${Random.integer(1, 20)}.jpg`,
      },
    })
  })
}
