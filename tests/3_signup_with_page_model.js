const data = require('../data/invalidSignupData');
const fileFunction = require('../data/fileFunctions');


module.exports={

    'Click the signup and wait the page to load' : function (browser){
        const myPageObject = browser.page.model();
        myPageObject.navigate(browser.launchUrl).maximizeWindow()
        myPageObject.waitForElementVisible(`@signUpButton`)
        myPageObject.click(`@signUpButton`)
        myPageObject.pause(1000)
        myPageObject.verify.titleEquals("Signup - PHPTRAVELS")
    },

    "Check that the form has all the required elements" : function(browser){
        const myPageObject = browser.page.model();
        myPageObject.verifySignupForm();
        browser.refresh()
    },

    'Fill the form of the signup with valid data and verfiy that the signup is done without errors' : function (browser){
        let email = "youseff"+ Math.floor(Math.random() * 5000) +"@gmail.com";
        let password = Math.random() * 10 ;
        const myPageObject = browser.page.model();
        myPageObject.verify.titleEquals("Signup - PHPTRAVELS")
        myPageObject.submitPageForm("Yousef","Mahfouz","00201019147836",  email , password , 2)
        myPageObject.pause(1000)
        if(myPageObject.checkSignup()){
            fileFunction.writeInFile(email+"\n"+password)
        }
    },

    'Fill the form of the signup with invalid data and verfiy that the signup isn\'t completed and error is appeared' : function (browser){
        const myPageObject = browser.page.model();
        myPageObject.navigate(browser.launchUrl).maximizeWindow()
        myPageObject.click(`@signUpButton`)
        myPageObject.pause(1000)
        myPageObject.verify.titleEquals("Signup - PHPTRAVELS")
        data.forEach(({firstName,lastName,phone,email,password}) => {
        myPageObject.submitPageForm(firstName,lastName,phone,email,password,2)
        myPageObject.verify.titleEquals("Signup - PHPTRAVELS")
        browser.refresh()
    });
    },


    


}