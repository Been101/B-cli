const program = require('commander')

program
    .command('init')
    .description('init project for local.')
    .action( options => {
        console.log(options._name)
        console.log('init project success')
    })
program.parse(process.argv)
