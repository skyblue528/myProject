module.exports = function testBlueHorizontalTopWin (browser, options)  {

    if (!options) options = {};
    if (!options.lbParam) options.lbParam = {vuSn: 1};
    var assert = require('assert');
    var baseUrl = "http://localhost:5000/";
    var acceptNextAlert = true;
    browser.get(addUrl(baseUrl, "/ttt"));
    browser.elementById("0-0").click();
    browser.elementById("0-3").click();
    browser.elementById("3-0").click();
    browser.elementById("0-4").click();
    browser.elementById("4-0").click();
    browser.elementById("0-5").click();
    browser.elementById("5-1").click();
    browser.elementById("1-3").click();
    browser.elementById("3-1").click();
    browser.elementById("1-4").click();
    browser.elementById("4-1").click();
    browser.elementById("1-5").click();
    browser.elementById("5-2").click();
    browser.elementById("2-3").click();
    browser.elementById("3-2").click();
    browser.elementById("2-4").click();
    browser.elementById("4-2").click();
    browser.elementById("2-5").click();

};

function isAlertPresent(browser) {
    try {
        browser.alertText();
        return true;
    } catch (e) {
        return false;
    }
}

function closeAlertAndGetItsText(browser, acceptNextAlert) {
    try {
        var alertText = browser.alertText() ;
        if (acceptNextAlert) {
            browser.acceptAlert();
        } else {
            browser.dismissAlert();
        }
        return alertText;
    } catch (ignore) {}
}

function isEmptyArray(arr){
    return !(arr && arr.length);
}

function addUrl(baseUrl, url){
    if (endsWith(baseUrl, url))
        return baseUrl;

    if (endsWith(baseUrl,"/") && startsWith(url,"/"))
        return baseUrl.slice(0,-1) + url;

    return baseUrl + url;
}

function endsWith(str,endStr){
    if (!endStr) return false;

    var lastIndex = str && str.lastIndexOf(endStr);
    if (typeof lastIndex === "undefined") return false;

    return str.length === (lastIndex + endStr.length);
}

function startsWith(str,startStr){
    var firstIndex = str && str.indexOf(startStr);
    if (typeof firstIndex === "undefined")
        return false;
    return firstIndex === 0;
}

function waitFor(browser, checkFunc, timeout, pollFreq){
    var val;
    if (!timeout)
        timeout = 30000;
    if (!pollFreq)
        pollFreq = 200;
    while(!val) {
        val = checkFunc(browser);
        if (val)
            break;
        if (timeout < 0) {
            require("assert").throws("Timeout");
            break;
        }
        browser.sleep(pollFreq);
        timeout -= pollFreq;
    }

    return val;
}

function createFolderPath(path) {
    var fs = require('fs');
    var folders = path.split(/[/\\]+/);
    path = '';

    while (folders.length) {
        /* This works for both absolute and relative paths, as split on an absolute path will have resulted in an array with the first bit empty. Safe for absolute Windows paths as well: */
        path += folders.shift() + '/';

        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
        } else if (!fs.statSync(path).isDirectory()) {
            throw new Error("Cannot create directory '" + path + "'. File of same name already exists.");
        }
    }
}
