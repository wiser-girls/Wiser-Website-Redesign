const gulp = require("gulp")
const suite = require('@cloudcannon/suite')

const { scripts } = require('./tasks/scripts')

// suite.dev(gulp, {
//   tasks: [scripts]
// })

suite.dev(gulp)

// function hello(cb) {
//   console.log('hello from gulp');
//   cb();
// }
// exports.hello = hello;

// exports.scripts = scripts

