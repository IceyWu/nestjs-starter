import { PrismaClient } from '@prisma/client'
import { list, isEmpty } from '@iceywu/utils'
const prisma = new PrismaClient()
export const create = async (count = 1, callback: (prisma: PrismaClient, index: number) => Promise<any>) => {
  for (let i = 1; i <= count; i++) {
    await callback(prisma, i)
  }
}

export const createV2 = async (count = 1, target = 'words', data = {}, tempList = []) => {
  const dataList = list(1, count, (index) => {
    const newData = !isEmpty(tempList) && tempList?.length >= index + 1 ? tempList[index] : data
    return newData
  })
  for (let i = 0; i < count; i++) {
    await prisma[target].create({
      data: dataList[i],
    })
  }
}
