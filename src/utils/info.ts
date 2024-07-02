import picocolors from 'picocolors'
import {  portVal } from '@/utils/envEnum'

export const showInfo = () => {
  const { green, blue, bold, underline } = picocolors
  console.log(
    bold(
      green(
        `👏欢迎使用${blue(
          '[nestjs-starter]',
        )}，如果您感觉不错，记得点击后面链接给个star哦💖 ${underline('https://github.com/IceyWu/nestjs-starter')}
        `,
      ),
    ),
  )
  console.log(
    bold(
      green(
        `🎉${blue('[API-doc]')}: ${underline(`http://localhost:${portVal}/reference`)}
    `,
      ),
    ),
  )
}
