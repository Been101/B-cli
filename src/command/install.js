const inquirer = require('inquirer')
const program = require('commander')

program
    .command('install')
    .description('install template')
    .action( option => {
        console.log('install')
        let choices = ['a', 'b', 'c']
        const question = [
            {
                type: 'list',
                name: 'repo',
                message: 'which repo do you want to install?',
                choices
            }
        ]
        inquirer.prompt(question).then(answer=> {
            console.log(answer)
        })
    })
    program.parse(process.argv)