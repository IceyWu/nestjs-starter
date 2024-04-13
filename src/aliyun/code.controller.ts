import { ConfigService } from '@nestjs/config'
import { success } from './../helper'
import { CodeDto } from './dto/Code.dto'
import { CodeService } from './code.service'
import { Controller } from '@nestjs/common'
import { Post } from '@nestjs/common'
import { Body } from '@nestjs/common'
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger'
@ApiTags('code(短信)')
@Controller('code')
export class CodeController {
  constructor(
    private codeService: CodeService,
    private config: ConfigService,
  ) {}

  @Post('send')
  @ApiBearerAuth()
  @ApiResponse({
    // code: 200,
    // msg: 'OK',
    // result: {
    //   message: '验证码发送成功',
    //   data: '',
    //   code: 0,
    // },
    // timestamp: 1709645439855,
    status: 403,
    description: '未授权.',
  })
  @ApiResponse({ status: 200, description: '请求成功' })
  async send(@Body() dto: CodeDto) {
    const code = await this.codeService.code(dto.mobile)
    return success('验证码发送成功', this.config.get('app.is_dev') ? code : '')
  }
}
