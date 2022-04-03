#!/usr/bin/env node

import input from './../lib/input.js'
import help from './../lib/help.js'
import download from './../lib/download.js'
import repo from './../config/repo.js'

async function run() {
  help()

  const answers = await input([
    {
      type: 'list',
      name: 'frame',
      message: '请选择你要生成的模板名字',
      choices: Object.keys(repo),
      default: 'qiankun-vue-template'
    },
    {
      type: 'input',
      name: 'folder',
      message: '请输入文件夹名：',
      default: 'my-project'
    }
  ])

  const url = repo[answers.frame]

  if (!url) {
    console.log('仓库未找到')
    return
  }

  await download(url, answers.folder)
}

run()
