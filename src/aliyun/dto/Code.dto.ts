import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsMobilePhone, IsNotEmpty } from 'class-validator'

export class CodeDto {
  @ApiPropertyOptional({ description: '手机号', example: '18584906615' })
  @IsNotEmpty({ message: '手机号不能空' })
  @IsMobilePhone('zh-CN', {}, { message: '手机号格式错误' })
  mobile: string
}
