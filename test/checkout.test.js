cart = require('../pages/cart.page.js')
signInPage = require('../pages/signIn.page.js')
productPage = require('../pages/product.page.js')

describe('Checkout items in cart ', function(){
    it('should checkout selected items as a guest ', async () =>{
        await browser.url(`${browser.options.baseUrl}`)
        await productPage.seeSingleItem(4)
        await productPage.addItemToCart()
        await browser.url(`${browser.options.baseUrl}/cart`)
        let subTotal = cart.subTotalInCart.getText()
        await cart.clickCheckoutButton()
        //await cart.iframe.waitForExisting()
        await browser.switchToFrame(cart.iframe)
        await cart.sendEmail('test@test.com')
        await cart.sendName('Test')
        await cart.sendStreetAddress('TestStreet')
        await cart.sendCity('TestCity')
        await cart.clickPayButton()
        await cart.sendCardNumber.waitForExisting()
        await cart.sendCardNumber('4242424242424242')
        await cart.sendCardExpiry('422')
        await cart.sendCardCVC('529')
        await cart.clickPayButton()

    })
    it.skip('should checkout selected items as an authenticated user ', async () =>{
        await browser.url(`${browser.options.baseUrl}/login`)
        await signInPage.addEmailToField('desk@desk.com')
        await signInPage.addPasswordToField('desk1')
        await signInPage.clickLoginButton()
        await browser.url(`${browser.options.baseUrl}`)
        await productPage.seeSingleItem(3)
        await productPage.addItemToCart()
        await browser.url(`${browser.options.baseUrl}/cart`)
        await cart.clickCheckoutButton
        await browser.switchToFrame(cart.iframe)

        //code for complete checkout

    })

})