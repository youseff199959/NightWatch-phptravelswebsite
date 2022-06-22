const elements = {
    firstName : '[name="first_name"]',
    lastName : '[name="last_name"]',
    phone : '[name="phone"]',
    email : '[name="email"]',
    password : '[name="password"]',
    customerType : '#select2-account_type-container',
    submitButton: 'button[type="submit"]',
    loginButton:'a[type="submit"]',
    signUpButton:'a[class="theme-btn theme-btn-small waves-effect"]'


};

const commands = [
    {
        submitPageForm(firstName,lastName,phone,email,password,customerTypeNumber){
            return this.setValue(`@firstName`, firstName)
                        .setValue(`@lastName`, lastName)
                        .setValue(`@phone`, phone)
                        .setValue(`@email`, email)
                        .setValue(`@password`, password)
                        .click(`@customerType`)
                        .click(`ul#select2-account_type-results > li:nth-of-type(${customerTypeNumber})`)
                        .pause(1000)
                        .click(`@submitButton`)
                        
        },
        checkSignup(){
            return this.verify.elementPresent('div[class="alert alert-success signup"]')
                        .expect.element('div[class="alert alert-success signup"]').text.to.contain("Signup successfull please login.").after(100)
        },
        verifySignupForm(){
            return this.verify.title("Signup - PHPTRAVELS")
                        .verify.elementPresent(`@firstName`)
                        .verify.elementPresent(`@lastName`)
                        .verify.elementPresent(`@phone`)
                        .verify.elementPresent(`@email`)
                        .verify.elementPresent(`@password`)
                        .verify.elementPresent(`@customerType`)
                        .verify.elementPresent(`@submitButton`)
                        .verify.elementPresent(`@loginButton`)
                        .click(`@customerType`)
                        .assert.elementsCount('ul[class="select2-results__options"] li', 3)
        }
    }

];


module.exports={
    
    elements: elements,
    commands:commands,


}