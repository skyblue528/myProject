var wdSync = require('wd-sync');
var fs = require('fs');

var client  = wdSync.remote(); // phantomjs default wd port
var browser = client.browser;
var sync    = client.sync;

sync(function(){
    console.log("server status:", browser.status());

    browser.init({ browserName: 'chrome' });

    var exportDir = __dirname + '/dist/';
    var files = fs.readdirSync(exportDir);

    for (var i = 0; i < files.length; i++) {
        var jsFile = exportDir + files[i];
        var test = require(jsFile);
        test(browser);
    }

    browser.quit();
});
