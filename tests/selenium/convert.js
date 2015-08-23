var converter = require("selenium-html-js-converter");
var fs = require('fs');
var dir = 'tic-tac-toe';
var files = fs.readdirSync(dir);

console.log(files);

var htmlFile = 'tic-tac-toe/blueWinsLeft.html';
var exportFile = 'dist/blueWinsLeft.js';
var testCaseName = 'BlueWinsLeft';

converter.convertHtmlFileToJsFile(htmlFile, exportFile, testCaseName);