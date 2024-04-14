const { existsSync } = require('fs')

const { showDir, showExt, moduleTypes } = require('./shared/base.cjs')

/**
 * 自动创建
 * @param {import('plop').NodePlopAPI} plop
 */
function create(plop) {
  let exist = null
  let modulePath = null

  plop.setGenerator('controller', {
    description: '自动创建',
    prompts: [
      {
        name: 'type',
        type: 'list',
        default: 'component',
        message: '您希望生成哪种类型的模块?',
        choices: moduleTypes,
      },
      {
        name: 'name',
        type: 'input',
        message({ type }) {
          return `请输入 ${type} 的命名`
        },
      },
      {
        name: 'shouldReset',
        type: 'confirm',
        default: false,
        message({ type }) {
          return `目标 ${type} 已存在，是否重置?`
        },
        // 确认模块是否已存在，是则询问是否重置
        when({ type, name, isMarkdown }) {
          const dir = showDir(type)
          console.log('🐬-----dir-----', dir)
          const ext = showExt(type, isMarkdown)
          console.log('🎉-----ext-----', ext)
          modulePath = `src/${dir}/${name}.${ext}`
          console.log('🎁-----modulePath-----', modulePath)
          exist = existsSync(modulePath)
          if (exist) {
            return true
          }
        },
      },
    ],
    actions(answer) {
      const { type, shouldReset } = answer
      console.log('🦄-----shouldReset-----', shouldReset)
      console.log('🐬-----type-----', type)
      //   if (exist && !shouldReset) {
      //     throw new Error(`${type} 创建失败`)
      //   }
      //   return [
      //     {
      //       type: 'add',
      //       force: true,
      //       path: `../${modulePath}`,
      //       templateFile: `./template/${type}.hbs`,
      //     },
      //   ]
    },
  })
}

module.exports = create
