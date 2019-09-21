const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

const command = process.argv[2]

console.log(process.argv)
console.log(yargs.argv)