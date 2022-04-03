import inquirer from 'inquirer'

const input = async list => {
  let answers = inquirer.prompt(list)

  return answers
}

export default input
