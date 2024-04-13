import { Controller, Get, Post, Body, Patch, Param, Delete, Query, DefaultValuePipe } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
@ApiTags('user(用户)')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto)
  }

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1)) page: number,
    @Query('size', new DefaultValuePipe(10)) size: number,
    @Query('sort', new DefaultValuePipe('createdAt,desc')) sort: string,
    @Query('name') name?: string,
  ) {
    return this.userService.findAll(page, size, sort, name)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id)
  }
}
