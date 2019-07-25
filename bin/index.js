#!/usr/bin/env node
const { init, install } = require('../src/command')
const argv = require('yargs')
        .command("init", 'init project', init)
        .command("install", 'install project', install)
        .argv