class shoppingCart{

    get priceInCart(){ return $('div.meta')} //this gets back the quantity and price
    get checkoutButton() { return $('button.ui.black.right.floated.button')}
    get subTotalInCart(){ return $(`div.ui.large.clearing.segment > span:nth-child(1)`)}
    get signOutButton(){ return $(`div.right.menu a:nth-child(2)`)}

    get iframe(){ return $('.stripe_checkout_app')}
    get emailField(){ return $('input#email')}
    get nameField(){ return $('input#billing-name')}
    get streetAddressField(){ return $('input#billing-street')}
    get cityField(){return $('input#billing-city')}

    get cardNumber(){ return $('input#card_number')}
    get cardExpiry(){ return $('input#cc-exp')}
    get cardCVC(){ return $('input#cc-csc')}
    get payButton(){ return $('button#submitButton')}

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

    clickCheckoutButton(){
        this.checkoutButton.isDisplayed()
        this.checkoutButton.click()
    }

    /**
     * input an email value in the store form
     */
    
    sendEmail(text){
        this.emailField.waitForDisplayed()
        return this.emailField.sendText(text)
    }

    sendName(text){
        this.nameField.waitForDisplayed()
        return this.nameField.sendText(text)
    }

    sendStreetAddress(text){
        this.streetAddressField.waitForDisplayed()
        return this.streetAddressField.sendText(text)
    }

    sendCity(text){
        this.cityField.waitForDisplayed()
        return this.cityField.sendText(text)
    }

    sendCardNumber(){
        this.cardNumber.waitForDisplayed()
        return this.cardNumber.sendText(text)
    }

    sendCardExpiry(){
        this.sendCardExpiry.waitForDisplayed()
        return this.sendCardExpiry.sendText(text)
    }

    sendCardCVC(){
        this.cardCVC.waitForDisplayed()
        return this.cardCVC.sendText(text)
    }

    clickPayButton(){
        this.payButton.waitForDisplayed()
        this.payButton.click()
    }





}
module.exports = new shoppingCart();