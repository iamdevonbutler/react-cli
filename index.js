#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const rruhe = require('./lib/rruhe');
const nextjs = require('./lib/nextjs');

// Load config file.
var file, config;
try {
  file = fs.readFileSync('./rr-cli.config.js', {encoding: 'utf-8'});
}
catch (e) {
  console.log('Config file not found. Add a "./rr-cli.config.js" file to your app\'s root directory');
  return;
}
try {
  config = JSON.parse(file);
}
catch (e) {
  console.log('Config file is fucked homes.');
  return;
}

// Delegate command to proper handlers.
const {type} = config;
const argv = process.argv.slice(2);
switch (type) {
  case 'rruhe':
    rruhe(argv, config);
    break;
  case 'next.js':
    nextjs(argv, config);
    break;
  default:
    console.log('Wrong type guy.');
}
