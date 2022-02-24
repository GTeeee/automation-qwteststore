//const { default: $ } = require("webdriverio/build/commands/browser/$")

const { default: $ } = require("webdriverio/build/commands/browser/$")

class signIn {

    get emailField() {return $('#email')}
    get passwordField() { return $('#password')}
    get loginHeader() { return $('h1.ui')}
    get loginButton() {return $('.button')}  
    get myPreviousOrders() { return $('h1.header')}
    get emptyEmailError() { return $('p[data-testid]')}
    get emptyPasswordError() { return $(`//*[@id="gatsby-focus-wrapper"]/div[2]/form/div/p[2]`)} //to find a better xPath. This is copied from devtool
    get invalidPasswordAndEmailError() { return $('div.ui.error.message')}


    /**
     * Inputs the given email address
     * @param {String} text is the email address that will be input in the email field
     */
    addEmailToField(text){
        this.emailField.waitForDisplayed()
        this.emailField.moveTo()
        this.emailField.click()
        return this.emailField.setValue(text)
    }

    /**
     * 
     * @param {String} text Password
     */

    addPasswordToField(password) {
        this.passwordField.waitForDisplayed()
        this.passwordField.moveTo()
        this.passwordField.click()
        return this.passwordField.setValue(password)
    }


    /**
     * Button click action for submitting the form
     */
    clickLoginButton(){
        this.loginButton.waitForDisplayed()
        return this.loginButton.click()
    }

/*     getPasswordErrorMessage() {

    } */
}
module.exports = new signIn