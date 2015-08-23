var wdSync = require('wd-sync');

var client  = wdSync.remote(); // phantomjs default wd port
var browser = client.browser;
var sync    = client.sync;

var test1 = require('./dist/blueWinsLeft.js');

sync(function(){
    console.log("server status:", browser.status());

    browser.init({ browserName: 'chrome' });
    test1(browser);

    //browser.quit();
});
