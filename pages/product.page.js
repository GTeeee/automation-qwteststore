class Product{

    get addToCartButton(){ return $('div.extra > div > button')}
    get shoppingCartSuccess(){ return $('div.fade.hidden.transition')}
    get productPrice(){ return $('div.description > p') }

    getSingleProduct(index){return $(`a.ui.card:nth-child(${index})`)}

<<<<<<< HEAD
    addItemToCart(){
        this.addToCartButton.waitForDisplayed()
        this.addToCartButton.click()
    }

    seeSingleItem(index){
        this.getSingleProduct(index).waitForDisplayed()
        this.getSingleProduct(index).click()  
    }

    getPriceOfProduct(){
        this.productPrice.waitForDisplayed()
=======
    async addItemToCart(){
        await this.addToCartButton.waitForDisplayed()
        await this.addToCartButton.click()
    }

    async seeSingleItem(index){
        await this.getSingleProduct(index).waitForDisplayed()
        await this.getSingleProduct(index).click()  
    }

    async getPriceOfProduct(){
        await this.productPrice.waitForDisplayed()
>>>>>>> main
        return this.productPrice.getText()
    }
 
}
module.exports = new Product();