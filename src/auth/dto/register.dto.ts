import { IsConfirmRule } from '@/validate/is-confirm.rule'
import { IsNotExistsRule } from '@/validate/is-not-exists.rule'
import { IsMobilePhone, IsNotEmpty, Length } from 'class-validator'
import { ApiPropertyOptional } from '@nestjs/swagger'

export class RegisterDto {
  @ApiPropertyOptional({ description: '手机号', example: '18584906615' })
  @IsMobilePhone('zh-CN', {}, { message: '手机号输入错误' })
  @IsNotExistsRule('user', { message: '手机号已经注册' })
  mobile: string

  @ApiPropertyOptional({ description: '密码', example: '123456' })
  @IsNotEmpty({ message: '密码不能为空' })
  @Length(5, 20, { message: '请输入5~20位的密码' })
  @IsConfirmRule({ message: '两次密码不一致' })
  password: string

  @ApiPropertyOptional({ description: '密码(二次)', example: '123456' })
  @IsNotEmpty({ message: '确认密码不能为空' })
  password_confirm: string

  @ApiPropertyOptional({ description: '密码(二次)', example: '123456' })
  @IsNotEmpty({ message: '验证码不能为空' })
  code: string
}
