signInPage = require('../pages/signIn.page')

describe('Sign In to the store', () => {
    it('should enter valid email and password', async () => {
        await browser.url(`${browser.options.baseUrl}/login`)
        await signInPage.addEmailToField('desk@desk.com')
        await signInPage.addPasswordToField('desk1')
        await signInPage.clickLoginButton()
        await browser.pause(50000)
        await signInPage.loginHeader.waitForExist()
        assert.equal('My previous orders', await signInPage.loginHeader.getText())
        
    })

    it('should login with a valid email and an invalid password', async () => {
        await browser.url(`${browser.options.baseUrl}/login`)
        await signInPage.addEmailToField('desk@desk.com')
        await signInPage.addPasswordToField('1desk')
        await signInPage.clickLoginButton()
        await signInPage.invalidPasswordAndEmailError.waitForExist()
        assert.equal(`Sorry\nPlease check your login details and try again.`, await signInPage.invalidPasswordAndEmailError.getText())
    })

    it('should login with a valid email and no password', async () => {
        await browser.url(`${browser.options.baseUrl}/login`)
        await signInPage.addEmailToField('desk@desk.com')
        await signInPage.addPasswordToField('')
        await signInPage.clickLoginButton()
        await signInPage.emptyPasswordError.waitForExist()
        assert.equal('Password is required', await signInPage.emptyPasswordError.getText())
    })

    it('should login with an invalid email', async () => {
        await browser.url(`${browser.options.baseUrl}/login`)
        await signInPage.addEmailToField('desk@desk.om')
        await signInPage.addPasswordToField('1desk')
        await signInPage.clickLoginButton()
        await signInPage.invalidPasswordAndEmailError.waitForExist()
        assert.equal(`Sorry\nPlease check your login details and try again.`, await signInPage.invalidPasswordAndEmailError.getText())
    })

    it('should login with no email and no password', async () => {
        await browser.url(`${browser.options.baseUrl}/login`)
        await signInPage.addEmailToField('')
        await signInPage.addPasswordToField('')
        await signInPage.clickLoginButton()
        await browser.pause(50000)
        await signInPage.emptyEmailError.waitForExist()
        //await signInPage.emptyPasswordError.waitForExist()
        assert.equal('Email address is required', await signInPage.emptyEmailError.getText())
        //assert.equal('Password is required', await signInPage.emptyPasswordError.getText())
    })

})