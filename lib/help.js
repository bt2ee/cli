import chalk from 'chalk'
import commander from 'commander'

commander.on('--help', () => {
  console.log()
  console.log('Examples:')
  console.log()
  console.log(chalk.gray('# create a new project'))
  console.log('$ forchange-cli')
  console.log()
})

function help() {
  commander.parse(process.argv)
  if (commander.args.length > 1) return commander.help()
}

export default help
