class shoppingCart{

    get priceInCart(){ return $('div.meta')} //this gets back the quantity and price
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

}
module.exports = new shoppingCart();