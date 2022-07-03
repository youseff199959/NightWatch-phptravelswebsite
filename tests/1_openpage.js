module.exports={

    'Open the first page testing' : function (browser){
        browser.url(browser.launchUrl).maximizeWindow()
        browser.waitForElementVisible('div[class="logo"]', 1000,  "the logo is appered")
    },

    'Find login button and click on it' : function (browser){
        browser.waitForElementVisible('[class="theme-btn theme-btn-small theme-btn-transparent ml-1 waves-effect"]', 1000,  "the logo is appered")
    },

    'Check that the website has multi-langaues' : function (browser){
        browser.waitForElementVisible("#languages")
        browser.click("#languages")
        browser.waitForElementVisible('ul[class="dropdown-menu show"]')   
        browser.assert.elementsCount('ul[class="dropdown-menu show"] li', 12);
       
    },

    'Click the login and wait the page to load' : function (browser){
        browser.click('a[class="theme-btn theme-btn-small theme-btn-transparent ml-1 waves-effect"]', ()=>console.log("clicked"))
        browser.pause(1000)
        browser.verify.title("Login - PHPTRAVELS")
    },



  
}