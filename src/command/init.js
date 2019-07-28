module.exports = function init(yargs) {
    const argv = yargs.reset()
        .option('y', {
            alias: 'yes',
            description: 'init project -y --yes.'
        })
        .help('h')
        .alias('h', 'help')
        .argv

    console.log('init', argv.y)
}