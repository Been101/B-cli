const inquirer = require('inquirer')
const program = require('commander')
const downloadGitRepo = require('download-git-repo')


program
    .command('install')
    .description('install template')
    .action( option => {
        console.log('install')
        let choices = ['history', 'canvas', 'gooooooooo']
        const question = [
            {
                type: 'list',
                name: 'repo',
                message: 'which repo do you want to install?',
                choices
            }
        ]
        inquirer.prompt(question).then(answer=> {
            const repository = `github:Been101/${answer.repo}`
            downloadGitRepo(repository, './test', false, err => {
                console.log(err ? 'fail' : 'success')
            })
        })
    })
    program.parse(process.argv)