module.exports = function testDraw (browser, options)  {

    if (!options) options = {};
    if (!options.lbParam) options.lbParam = {vuSn: 1};
    var assert = require('assert');
    var baseUrl = "http://localhost:5000/";
    var acceptNextAlert = true;
    browser.get(addUrl(baseUrl, "/ttt"));
    browser.elementById("0-0").click();
    browser.elementById("0-1").click();
    browser.elementById("1-1").click();
    browser.elementById("1-2").click();
    browser.elementById("2-2").click();
    browser.elementById("2-5").click();
    browser.elementById("5-5").click();
    browser.elementById("5-8").click();
    browser.elementById("8-8").click();
    browser.elementById("8-7").click();
    browser.elementById("7-7").click();
    browser.elementById("7-6").click();
    browser.elementById("6-6").click();
    browser.elementById("6-3").click();
    browser.elementById("3-3").click();
    browser.elementById("3-0").click();
    browser.elementById("0-3").click();
    browser.elementById("3-6").click();
    browser.elementById("6-7").click();
    browser.elementById("7-8").click();
    browser.elementById("8-5").click();
    browser.elementById("5-2").click();
    browser.elementById("2-1").click();
    browser.elementById("1-0").click();
    browser.elementById("0-2").click();
    browser.elementById("2-0").click();
    browser.elementById("0-8").click();
    browser.elementById("8-0").click();
    browser.elementById("0-7").click();
    browser.elementById("7-1").click();
    browser.elementById("1-4").click();
    browser.elementById("4-4").click();
    browser.elementById("4-8").click();
    browser.elementById("8-4").click();
    browser.elementById("4-0").click();
    browser.elementById("0-6").click();
    browser.elementById("6-4").click();
    browser.elementById("4-2").click();
    browser.elementById("2-4").click();
    browser.elementById("4-7").click();
    browser.elementById("7-4").click();
    browser.elementById("4-1").click();
    browser.elementById("1-3").click();
    browser.elementById("3-4").click();
    browser.elementById("4-3").click();
    browser.elementById("3-2").click();
    browser.elementById("2-3").click();
    browser.elementById("3-1").click();
    browser.elementById("1-7").click();
    browser.elementById("7-3").click();
    browser.elementById("3-5").click();
    browser.elementById("5-0").click();
    browser.elementById("0-5").click();
    browser.elementById("5-6").click();
    browser.elementById("6-2").click();
    browser.elementById("6-1").click();
    browser.elementById("1-8").click();
    browser.elementById("8-3").click();
    browser.elementById("3-8").click();
    browser.elementById("8-6").click();
    browser.elementById("6-0").click();
    browser.elementById("0-4").click();
    browser.elementById("4-5").click();
    browser.elementById("5-4").click();
    browser.elementById("4-6").click();
    /* ERROR: Caught exception [ERROR: Unsupported command [selectWindow | null | ]] */
    browser.elementById("2-6").click();
    browser.elementById("6-1").click();
    browser.elementById("1-8").click();
    browser.elementById("8-3").click();
    browser.elementById("3-7").click();
    browser.elementById("7-0").click();
    browser.elementById("0-4").click();
    browser.elementById("4-6").click();
    browser.elementById("6-5").click();
    browser.elementById("5-4").click();
    browser.elementById("4-5").click();
    browser.elementById("5-3").click();
    browser.elementById("3-8").click();
    browser.elementById("8-6").click();
    browser.elementById("6-8").click();
    browser.elementById("8-1").click();
    browser.elementById("1-6").click();
    browser.elementById("6-0").click();
    browser.elementById("1-5").click();
    browser.elementById("5-1").click();
    browser.elementById("2-7").click();
    browser.elementById("7-2").click();
    browser.elementById("2-8").click();
    browser.elementById("8-2").click();
    browser.elementById("7-5").click();
    browser.elementById("5-7").click();

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
