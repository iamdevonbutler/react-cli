#!/usr/bin/env node

const {add, remove, rename, move} = require('./actions');

const argv = process.argv.slice(2);
const action = argv[0];

switch (action) {
  case 'add':
    add(argv);
    break;
  case 'remove':
    remove(argv);
    break;
  case 'rename':
    rename(argv);
    break;
  case 'move':
    move(argv);
    break;
  default:
    console.log('Wrong command kid.');
}
