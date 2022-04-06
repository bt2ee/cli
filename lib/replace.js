import rc from 'replace'
import ora from 'ora'
import fs from 'fs'

import input from './input.js'
import prompts from './../config/prompts.js'

async function replace(folder) {
  const answers = await input(prompts)

  const spinner = ora('generate...')
  spinner.start()

  try {
    fs.unlinkSync(`${folder}/README.md`)
    fs.unlinkSync(`${folder}/.git`)
  } catch (e) {
    console.log(e)
  }

  prompts.forEach(async prompt => {
    await rc({
      regex: '<\\$' + prompt.name + '\\$>',
      replacement: answers[prompt.name],
      paths: [`${folder}/`],
      recursive: true,
      silent: true
    })
  })

  spinner.stop()
  console.log('nice~')
}

export default replace
