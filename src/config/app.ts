import { registerAs } from '@nestjs/config'
export const app = registerAs('app', () => ({
  name: process.env.APP_NAME || 'IceyWu',
  token_access: process.env.TOKEN_SECRET || '',
  mobile: process.env.MOBILE || '',
  is_dev: process.env.NODE_ENV == 'development',

  //课程每页显示数量
  lesson_page_row: 9,
  topic_page_row: 10,
  video_page_row: 10,
  // 上传配置
  upload: {
    // 上传文件目录
    file_path: 'public/uploads',
    bucket_name: process.env.BUCKET_NAME || '/nestDev',
  },
}))
