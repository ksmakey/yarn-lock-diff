#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');
const YarnLockDiff = require('../src/index.js');

program
    .version(pkg.version)
program.parse(process.argv);

let command = new YarnLockDiff(program.user, program.email, program.branch);
command.run();
