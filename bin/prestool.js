#!/usr/bin/env node

const version = require('../package.json').version;
const prog = require('caporal');

prog
  .version(version)

prog.parse(process.argv);
