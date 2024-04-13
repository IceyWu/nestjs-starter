import { applyDecorators, UnsupportedMediaTypeException, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface'
import * as path from 'path'
//上传类型验证
export function filterFilter(type: string) {
  return (req: any, file: Express.Multer.File, callback: (error: Error | null, acceptFile: boolean) => void) => {
    if (!file.mimetype.includes(type)) {
      callback(new UnsupportedMediaTypeException('文件类型错误'), false)
    } else {
      callback(null, true)
    }
  }
}

//文件上传
export function upload(field = 'file', options: MulterOptions) {
  return applyDecorators(UseInterceptors(FileInterceptor(field, options)))
}

//图片上传
export function Image(field = 'file') {
  return upload(field, {
    //上传文件大小限制
    limits: Math.pow(1024, 2) * 2,
    fileFilter: filterFilter('image'),
  } as MulterOptions)
}

//文档上传
export function Document(field = 'file') {
  return upload(field, {
    //上传文件大小限制
    limits: Math.pow(1024, 2) * 5,
    fileFilter: filterFilter('document'),
  } as MulterOptions)
}

// 计算缩略图尺寸
function calculateThumbnailSize(
  originalWidth: number,
  originalHeight: number,
  maxSize: number,
): { width: number; height: number } {
  let width = originalWidth
  let height = originalHeight

  if (width > maxSize) {
    height = Math.round((height * maxSize) / width)
    width = maxSize
  }

  if (height > maxSize) {
    width = Math.round((width * maxSize) / height)
    height = maxSize
  }

  return { width: parseInt(String(width)), height: parseInt(String(height)) }
}
