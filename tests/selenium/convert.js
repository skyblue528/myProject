var converter = require("selenium-html-js-converter");
var htmlFile = 'tic-tac-toe/blueWinsLeft.html';
var exportFile = 'dist/blueWinsLeft.js';
var testCaseName = 'BlueWinsLeft';

converter.convertHtmlFileToJsFile(htmlFile, exportFile, testCaseName);