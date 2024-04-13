import { uploadParams } from '@/helper'
import { Controller, Post, UploadedFile, Body } from '@nestjs/common'
import { Image } from './upload'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
@ApiTags('upload(upload)')
@Controller('upload')
export class UploadController {
  @Post('image')
  @Image()
  async image(
    @UploadedFile() file: Express.Multer.File,
    @Body() formData: any, // 使用MulterFormData解析请求正文中的表单数据
  ) {
    const thumbnailPath = ''
    return uploadParams(file, thumbnailPath)
  }
}
