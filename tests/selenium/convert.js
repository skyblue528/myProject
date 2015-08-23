var converter = require("selenium-html-js-converter");
var fs = require('fs');
var dir = __dirname + '/tic-tac-toe';
var exportDir = __dirname + '/dist';

var files = fs.readdirSync(dir);
for (var i = 0; i < files.length; i++) {
    var testCaseName = files[i].replace(/html$/, '');
    var htmlFile = dir + '/' + files[i];
    var exportFile = exportDir + '/' + testCaseName + 'js';

    converter.convertHtmlFileToJsFile(htmlFile, exportFile, testCaseName);
}
