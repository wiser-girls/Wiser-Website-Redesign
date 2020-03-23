const gulp = require("gulp");
const suite = require('@cloudcannon/suite');
const { buildScripts } = require('./tasks/webpack');


suite.dev(gulp);

// function hello(cb) {
//   console.log('hello from gulp');
//   cb();
// }
// exports.hello = hello;

exports.buildScripts = buildScripts;

