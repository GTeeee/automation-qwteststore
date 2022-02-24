//const { assert } = require('chai')

const { assert } = require('chai')

signInPage = require('../../pages/signIn.page')

describe('Sign In to the store', () => {
    it('should enter valid email and password', async () => {
        await browser.url(`${browser.options.baseUrl}/login`)
        signInPage.addEmailToField('desk@desk.com')
        signInPage.addPasswordToField('desk1')
        signInPage.clickLoginButton()
        await browser.pause(5000)
        //assert.equal('')
    })

    it.skip('should login with a valid email and an invalid password', async () => {
        await browser.url(`${browser.options.baseUrl}/login`)

    })

    it.skip('should login with a valid email and no password', async () => {
        await browser.url(`${browser.options.baseUrl}/login`)

    })

    it.skip('should login with an invalid email', async () => {
        await browser.url(`${browser.options.baseUrl}/login`)

    })

    it.skip('should login with no email and no password', async () => {
        await browser.url(`${browser.options.baseUrl}/login`)

    })

})