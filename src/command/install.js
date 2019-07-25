const inquirer = require('inquirer')
const downloadGitRepo = require('download-git-repo')
module.exports = function install(yargs) {
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
}