import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { PrismaService } from './../prisma/prisma.service'
import { paginateT } from '@/helper'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user'
  }

  async findAll(page: number, pSize: number, sort: string, name?: string) {
    const where = {}
    name && (where['name'] = { contains: name })
    // 字段过滤
    const sortWay = sort.split(',').find((item) => ['desc', 'asc'].includes(item)) || 'desc'
    const sortField = sort.split(',').find((item) => !['desc', 'asc'].includes(item)) || 'createdAt'
    const data = await this.prisma.user.findMany({
      // select: {
      //   email: true,
      //   avatarInfo: true,
      // },
      skip: (page - 1) * pSize,
      take: pSize,
      orderBy: { [sortField]: sortWay },
      where,
    })
    const total = await this.prisma.user.count({ where })
    return paginateT({ page, data, size: pSize, total })
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
