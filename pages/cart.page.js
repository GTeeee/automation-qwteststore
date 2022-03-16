class shoppingCart{

    get priceInCart(){ return $('div.meta')} //this gets back the quantity and price
<<<<<<< HEAD
    get subTotalInCart(){ return $(`div.ui.large.clearing.segment > span:nth-child(1)`)}
    get signOutButton(){ return $(`div.right.menu a:nth-child(2)`)}

    getTextOfPrice(){
        this.priceInCart.waitForDisplayed()
        return this.priceInCart.getText()
    }

    signOutOfAccount(){
        this.signOutButton.waitForDisplayed()
        this.signOutButton.click()
    }

    getSubtotalText(){
        this.subTotalInCart.waitForDisplayed()
        return this.subTotal.cart.getText()
    }

=======
    get checkoutButton(){ return $('button.ui.black.right.floated.button')}
    get subTotalInCart(){ return $(`div.ui.large.clearing.segment > span:nth-child(1)`)}
    get signOutButton(){ return $(`div.right.menu a:nth-child(2)`)}

    get checkoutHeader(){ return $('.title > h1')}
    get iframe(){ return $('iframe.stripe_checkout_app')}
    get iframeBody(){ return $('body.stripeInFrame')}
    get emailField(){ return $('input#email')}
    get nameField(){ return $('input#billing-name')}
    get streetAddressField(){ return $('input#billing-street')}
    get cityField(){return $('input#billing-city')}
    get zipcodeInput(){ return $('.zipCodeInput')}
    get countryDropdown(){return $('select#billing-country')}

    get cardNumber(){ return $('input#card_number')}
    get cardExpiry(){ return $('input#cc-exp')}
    get cardCVC(){ return $('input#cc-csc')}
    get payButton(){ return $('button#submitButton')}
    get payIssue(){ return $('div.buttonsView > div.popoverView:nth-child(5) > div.content')}
    get paymentMessage(){ return $('div.ui.success.message')}
    get successButton(){ return $('div.button.submit.success')}

    async getTextOfPrice(){
        await this.priceInCart.waitForDisplayed()
        return this.priceInCart.getText()
    }

    async signOutOfAccount(){
        await this.signOutButton.waitForDisplayed()
        await this.signOutButton.click()
    }

    async getSubtotalText(){
        await this.subTotalInCart.waitForDisplayed()
        return this.subTotal.cart.getText()
    }

    async getPayIssueText(){
        await this.payIssue.waitForDisplayed()
        return this.payIssue.getText()
    }

    async getJamaicaDropdown(){
        await this.countryDropdown.waitForDisplayed()
        await this.countryDropdown.selectByAttribute('value', 'JM')
    }

    async getUsDropdown(){
        await this.countryDropdown.waitForDisplayed()
        await this.countryDropdown.selectByAttribute('value', 'US')
    }
        
    async clickCheckoutButton(){
        await this.checkoutButton.isDisplayed()
        await this.checkoutButton.click()
    }

    /**
     * input an email value in the store form
     */
    
    async sendEmail(text){
        await this.emailField.waitForDisplayed()
        return this.emailField.setValue(text)
    }

    async sendName(text){
        await this.nameField.waitForDisplayed()
        return this.nameField.setValue(text)
    }

    async sendStreetAddress(text){
        await this.streetAddressField.waitForDisplayed()
        return this.streetAddressField.setValue(text)
    }

    async sendCity(text){
        await this.cityField.waitForDisplayed()
        return this.cityField.setValue(text)
    }

    async sendCardNumber(text){
        await this.cardNumber.waitForDisplayed()
        return this.cardNumber.setValue(text)
    }

    async sendCardExpiry(text){
        await this.cardExpiry.waitForDisplayed()
        return this.cardExpiry.setValue(text)
    }

    async sendCardCVC(text){
        await this.cardCVC.waitForDisplayed()
        return await this.cardCVC.setValue(text)
    }

    async clickPayButton(){
        await this.payButton.waitForDisplayed()
        await this.payButton.click()
    }

    async sendZipcodeText(text){
        await this.zipcodeInput.waitForDisplayed()
        await this.zipcodeInput.setValue(text)
    }
>>>>>>> main
}
module.exports = new shoppingCart();