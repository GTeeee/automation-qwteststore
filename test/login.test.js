//const { assert } = require('chai')

const { assert } = require('chai')

signInPage = require('../pages/signIn.page')

describe('Sign In to the store', () => {
    it('should enter valid email and password', async () => {
        await browser.url(`${browser.options.baseUrl}/login`)
        signInPage.addEmailToField('desk@desk.com')
        signInPage.addPasswordToField('desk1')
        await browser.pause(5000)
        signInPage.clickLoginButton()
        await browser.pause(5000)
        assert.equal('')
    })

    it('login with valid email and invalid password', async () => {

    })

    it('should login with', async () => {

    })

    it('', async () => {

    })

    it('', async () => {

    })

})