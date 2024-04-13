import { PrismaClient } from '@prisma/client'
import { create } from '../helper'

export default async () => {
  const tagList = ['推荐', '旅行', '美食', '影视', '音乐', '动漫', '绘画', '摄影', '科技', '其他']
  await create(tagList.length, async (prisma: PrismaClient, index: number) => {
    return prisma.tag.create({
      data: {
        title: tagList[index - 1],
        cover: '',
      },
    })
  })
}
