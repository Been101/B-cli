const program = require('commander')

program
    .command('init')
    .description('init project for local.')
    .action( options => {
        console.log(options._name)
        console.log('init project success')
    })
    
program
    .command('init2')
    .description('init project for local.')
    .action( options => {
        console.log(options._name)
        console.log('init2 2 2')
    })

program.parse(process.argv)
