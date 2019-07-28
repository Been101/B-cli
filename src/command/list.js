const fs = require('fs')

module.exports = function list(yargs) {
    fs.readdir( process.cwd(), (err, files) => {
        let list = files
        if(!options.all){
            list = files.filter( file => {
                return !file.startsWith('.')
            })
        }
        console.log(list.join('\n\r'))
    })
}