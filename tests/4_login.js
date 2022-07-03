const fileFunction = require('../data/fileFunctions');
const invalidLoginData = require('../data/invalidLoginData');
var arr = fileFunction.ReadFile("login.txt")


module.exports={
    'Click the login button and wait the page to load' : function (browser){
        const myPageObject = browser.page.loginModel();
        myPageObject.navigate(browser.launchUrl).maximizeWindow()
        myPageObject.waitForElementVisible('@homePageLoginButton')
        myPageObject.click('@homePageLoginButton')
        browser.pause(1000)
        myPageObject.verify.title("Login - PHPTRAVELS")
    },

    'Check that the user able to login with valid data' : function (browser){
        const myPageObject = browser.page.loginModel();
        myPageObject.verify.title("Login - PHPTRAVELS")
        myPageObject.waitForElementVisible('@email')
        myPageObject.waitForElementVisible('@password')
        myPageObject.setValue('@email',arr[0])
        myPageObject.setValue('@password',arr[1])
        myPageObject.click('@loginButton')
        browser.pause(1000)
        myPageObject.verify.title("Dashboard - PHPTRAVELS")
        myPageObject.end()
    },

    'Check that aren\'t able to login with invalid data' : function (browser){
        const myPageObject = browser.page.loginModel();
        myPageObject.navigate(browser.launchUrl).maximizeWindow()
        myPageObject.waitForElementVisible('@homePageLoginButton')
        myPageObject.click('@homePageLoginButton')
        browser.pause(1000)
        myPageObject.verify.title("Login - PHPTRAVELS")
        invalidLoginData.forEach(({email,password})=> {
            myPageObject.waitForElementVisible('@email')
            myPageObject.waitForElementVisible('@password')
            myPageObject.setValue('@email',email)
            myPageObject.setValue('@password',password)
            myPageObject.click('@loginButton')
            browser.pause(1000)
            myPageObject.verify.title("Login - PHPTRAVELS")
        });
        
    },

}