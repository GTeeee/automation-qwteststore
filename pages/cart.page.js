class shoppingCart{

    get priceInCart(){ return $('div.meta')} //this gets back the quantity and price
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

    getPayIssueText(){
        this.payIssue.waitForDisplayed()
        return this.payIssue.getText()
    }

    getJamaicaDropdown(){
        this.countryDropdown.waitForDisplayed()
        this.countryDropdown.selectByAttribute('value', 'JM')
    }

    clickCheckoutButton(){
        this.checkoutButton.isDisplayed()
        this.checkoutButton.click()
    }

    /**
     * input an email value in the store form
     */
    
    sendEmail(text){
        this.emailField.waitForDisplayed()
        return this.emailField.setValue(text)
    }

    sendName(text){
        this.nameField.waitForDisplayed()
        return this.nameField.setValue(text)
    }

    sendStreetAddress(text){
        this.streetAddressField.waitForDisplayed()
        return this.streetAddressField.setValue(text)
    }

    sendCity(text){
        this.cityField.waitForDisplayed()
        return this.cityField.setValue(text)
    }

    sendCardNumber(text){
        this.cardNumber.waitForDisplayed()
        return this.cardNumber.sendKeys(text)
    }

    sendCardExpiry(text){
        this.cardExpiry.waitForDisplayed()
        return this.cardExpiry.sendKeys(text)
    }

    sendCardCVC(text){
        this.cardCVC.waitForDisplayed()
        return this.cardCVC.sendKeys(text)
    }

    clickPayButton(){
        this.payButton.waitForDisplayed()
        this.payButton.click()
    }

    sendZipcodeText(text){
        this.zipcodeInput.waitForDisplayed()
        this.zipcodeInput.setValue(text)
    }







}
module.exports = new shoppingCart();