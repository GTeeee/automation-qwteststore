cart = require('../pages/cart.page.js')
productPage = require('../pages/product.page.js')

describe('shopping cart test as guest and authenicated user', function(){
    it('should add one item to cart - guest', async () => {
        await browser.url(`${browser.options.baseUrl}`)
        await productPage.seeSingleItem(1)
        await productPage.addItemToCart(1)
        expect(productPage.shoppingCartSuccess).to.be.displayed

    })
    it('should add multiple items to the cart - guest', async () => {
        await browser.url(`${browser.options.baseUrl}`)
        await productPage.seeSingleItem(1)
        await productPage.addItemToCart(1)
        expect(productPage.shoppingCartSuccess).to.be.displayed
        await browser.back()
        await productPage.seeSingleItem(4)
        await productPage.addItemToCart(4)
        expect(productPage.shoppingCartSuccess).to.be.displayed
    })
    it('should add one item to cart multiple times - guest', async () => {
        await browser.url(`${browser.options.baseUrl}`)
        await productPage.seeSingleItem(3)
        await productPage.addItemToCart(3)
        expect(productPage.shoppingCartSuccess).to.be.displayed
        await browser.back()
        await productPage.seeSingleItem(3)
        await productPage.addItemToCart(3)
        expect(productPage.shoppingCartSuccess).to.be.displayed
        //await browser.url(`${browser.options.baseUrl}/cart`)
    })
    it.skip('should validate that product price is same of details page and cart screen', async () => {
        

    })
    it.skip('should ensure user cart does not change after sign out ', async () => {


    })

})