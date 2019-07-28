#!/usr/bin/env node

const { init, install, list } = require('../src/command')

const argv = require('yargs')
        .command("init", 'init project', init)
        .command("install", 'install project', install)
        .command("list", 'list project', list)
        .argv