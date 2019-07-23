#!/usr/bin/env node
try{
    require(`../src/command/${process.argv[2]}.js`)
} catch( err ){
    console.log(`Cannot find module ../src/command/${process.argv[2]}.js`)
}