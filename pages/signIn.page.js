class signIn {

    get emailField() {return $('#email')}
    get passwordField() { return $('#password')}
    get loginHeader() { return $('h1.ui')}
    get loginButton() {return $('button.ui.orange.button')}  
    get myPreviousOrders() { return $('h1.header')}
    get emptyEmailError() { return $('p[data-testid]')}
    get emptyPasswordError() { return $(`div.ui.segment > p`)} //to find a better xPath. This is copied from devtool
    get invalidPasswordAndEmailError() { return $('div.ui.error.message')}


    /**
     * Inputs the given email address
     * @param {String} text is the email address that will be input in the email field
     */
    async addEmailToField(text){
        await this.emailField.waitForDisplayed()
        await this.emailField.moveTo()
        //this.emailField.click()
        return this.emailField.setValue(text)
    }

    /**
     * 
     * @param {String} text Password
     */

    addPasswordToField(password) {
        this.passwordField.waitForDisplayed()
        this.passwordField.moveTo()
        return this.passwordField.setValue(password)
    }


    /**
     * Button click action for submitting the form
     */
    clickLoginButton(){
        this.loginButton.waitForDisplayed()
        //this.loginButton.moveTo()
        return this.loginButton.click()
    }

}
module.exports = new signIn