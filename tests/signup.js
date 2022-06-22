const data = require('../data/data');


module.exports={

    'Click the signup and wait the page to load' : function (browser){
        browser.url(browser.launchUrl).maximizeWindow()
        browser.waitForElementVisible('a[class="theme-btn theme-btn-small waves-effect"]')
        browser.click('a[class="theme-btn theme-btn-small waves-effect"]', ()=>console.log("clicked"))
        browser.pause(1000)
        browser.verify.title("Signup - PHPTRAVELS")
    },

    "Check that the form has all the required elements" : function(browser){
        browser.verify.title("Signup - PHPTRAVELS")
        browser.verify.elementPresent('[name="first_name"]')
        browser.verify.elementPresent('[name="last_name"]')
        browser.verify.elementPresent('[name="phone"]')
        browser.verify.elementPresent('[name="email"]')
        browser.verify.elementPresent('[name="password"]')
        browser.verify.elementPresent('#select2-account_type-container')
        browser.verify.elementPresent('button[type="submit"]')
        browser.verify.elementPresent('a[type="submit"]')
        browser.click('#select2-account_type-container')
        browser.assert.elementsCount('ul[class="select2-results__options"] li', 3);
        browser.refresh()
    },

    'Fill the form of the signup with valid data and verfiy that the signup is done without errors' : function (browser){
        
        browser.verify.title("Signup - PHPTRAVELS")
        browser.setValue('[name="first_name"]' , "Yousef")
        browser.setValue('[name="last_name"]' , "Mahfouz")
        browser.setValue('[name="phone"]', "00201019147836")
        browser.setValue('[name="email"]', "youseff"+ Math.floor(Math.random() * 5000) +"@gmail.com")
        browser.setValue('[name="password"]' , Math.random() * 10)
        browser.click('#select2-account_type-container')
        browser.click('ul#select2-account_type-results > li:nth-of-type(3)') // the solution to select Supplier from UL tag
        browser.pause(1000)
        browser.click('button[type="submit"]')
        browser.verify.elementPresent('div[class="alert alert-success signup"]')
        browser.expect.element('div[class="alert alert-success signup"]').text.to.contain("Signup successfull please login.").after(100)
    },

    'Fill the form of the signup with invalid data and verfiy that the signup isn\'t completed and error is appeared' : function (browser){
        browser.url(browser.launchUrl).maximizeWindow()
        browser.click('a[class="theme-btn theme-btn-small waves-effect"]')
        browser.pause(1000)
        browser.verify.title("Signup - PHPTRAVELS")
        data.forEach(({firstName,lastName,phone,email,password}) => {
        browser.setValue('[name="first_name"]' , firstName)
        browser.setValue('[name="last_name"]' , lastName)
        browser.setValue('[name="phone"]', phone)
        browser.setValue('[name="email"]', email)
        browser.setValue('[name="password"]' , password)
        browser.click('button[type="submit"]')  
        browser.pause(1000)
        browser.verify.title("Signup - PHPTRAVELS")
        browser.refresh()
    });
    },


    


}