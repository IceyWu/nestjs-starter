import { PrismaClient } from '@prisma/client'
import { Random } from 'mockjs'
import { createV2, create } from '../helper'

export default async () => {
  // await createV2(10, 'words', {
  //   author: Random.cname(),
  //   title: Random.ctitle(),
  //   content: Random.cparagraph(),
  //   book_name: Random.ctitle(),
  //   userId: Random.integer(1, 10),
  // })

  await create(10, async (prisma: PrismaClient) => {
    return prisma.words.create({
      data: {
        author: Random.cname(),
        title: Random.ctitle(),
        content: Random.cparagraph(),
        book_name: Random.ctitle(),
        userId: Random.integer(1, 10),
      },
    })
  })
}
