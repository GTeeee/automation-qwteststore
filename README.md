# automation-qwteststore
This project seeks to automate a few core functionality of the QW Test Store using the Webdriverio automation testing framework with chai and chair-webdriverio for assertions. The page object model approach was taken.

Functionality that have been automated:
Login,
Adding products to cart,
Checkout,

You will require npm as your package manager...
*initialize the project
*install npm
*instantiate wdio
*install dependencies []

To run all the tests in the test directory:
npm run test

To run an individual test use the following command in your terminal.
npm run test -- --spec <nameofthetest>
e.g. If I wish to run my login test only: npm run test -- --spec login.test.js

Update: 
You may now run your test on the dev or production environment using the following command
ENV=<nameofenv> npm run test ...  The name of the environments can be found on in the urls.js file.