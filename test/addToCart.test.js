cart = require('../pages/cart.page.js')
productPage = require('../pages/product.page.js')
signInPage = require('../pages/signIn.page.js')

describe('shopping cart test as guest and authenicated user', function(){
    it('should add one item to cart - guest', async () => {
        await browser.url(`${browser.options.baseUrl}`)
        await productPage.seeSingleItem(1)
        await productPage.addItemToCart()
        expect(productPage.shoppingCartSuccess).to.be.displayed

    })
    it('should add multiple items to the cart - guest', async () => {
        await browser.url(`${browser.options.baseUrl}`)
        await productPage.seeSingleItem(1)
        await productPage.addItemToCart()
        expect(productPage.shoppingCartSuccess).to.be.displayed
        await browser.back()
        await productPage.seeSingleItem(4)
        await productPage.addItemToCart()
        expect(productPage.shoppingCartSuccess).to.be.displayed
    })
    it('should add one item to cart multiple times - guest', async () => {
        await browser.url(`${browser.options.baseUrl}`)
        await productPage.seeSingleItem(3)
        await productPage.addItemToCart()
        expect(productPage.shoppingCartSuccess).to.be.displayed
        await browser.back()
        await productPage.seeSingleItem(3)
        await productPage.addItemToCart()
        expect(productPage.shoppingCartSuccess).to.be.displayed
        //await browser.url(`${browser.options.baseUrl}/cart`)
    })
    it('should validate that product price is same of details page and cart screen', async () => {
        await browser.url(`${browser.options.baseUrl}/login`)
        await signInPage.addEmailToField('desk@desk.com')
        await signInPage.addPasswordToField('desk1')
        await signInPage.clickLoginButton()
        await browser.url(`${browser.options.baseUrl}`)
        await productPage.seeSingleItem(5)
        await productPage.getPriceOfProduct()
        await productPage.addItemToCart()
        await browser.url(`${browser.options.baseUrl}/cart`)
        expect (cart.getTextOfPrice).to.contain(productPage.getPriceOfProduct)

    })
    it('should ensure user cart does not change after sign out ', async () => {
        await browser.url(`${browser.options.baseUrl}/login`)
        await signInPage.addEmailToField('desk@desk.com')
        await signInPage.addPasswordToField('desk1')
        await signInPage.clickLoginButton()
        await browser.url('/')
        await productPage.seeSingleItem(1)
        await productPage.addItemToCart()
        //await productPage.addItemToCart()
        //await productPage.addItemToCart()
        await browser.url(`${browser.options.baseUrl}/cart`)
        let preSignOut = await cart.getSubtotalText
        await cart.signOutOfAccount()
        await signInPage.addEmailToField('desk@desk.com')
        await signInPage.addPasswordToField('desk1')
        await signInPage.clickLoginButton()
        await browser.url(`${browser.options.baseUrl}/cart`)
        expect (preSignOut).to.equal(cart.getSubtotalText)

    })

})