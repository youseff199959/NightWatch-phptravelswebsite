const loginData = require('../data/login');





module.exports={
    'Click the signup and wait the page to load' : function (browser){
        browser.url(browser.launchUrl).maximizeWindow()
        browser.waitForElementVisible('a[class="theme-btn theme-btn-small theme-btn-transparent ml-1 waves-effect"]')
        browser.click('a[class="theme-btn theme-btn-small theme-btn-transparent ml-1 waves-effect"]', ()=>console.log("clicked"))
        browser.pause(1000)
        browser.verify.title("Login - PHPTRAVELS")
        
        loginData.writeInFile("dskjfhsd")
    },
}