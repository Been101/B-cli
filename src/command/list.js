
const program = require('commander')
const fs = require('fs')

program
    .command('list')
    .description('list files in current working directory.')
    .option('-a, --all', 'Whether to display hidden files')
    .action( options => {
        fs.readdir( process.cwd(), (err, files) => {
            let list = files
            if(!options.all){
                list = files.filter( file => {
                    return !file.startsWith('.')
                })
            }
            console.log(list.join('\n\r'))
        })
    })

program.parse( process.argv )