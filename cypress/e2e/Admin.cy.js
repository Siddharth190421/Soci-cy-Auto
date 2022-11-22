import {LoginPage} from "../support/page_objects/LoginPage"


const loginPage = new LoginPage()

it('login' , ()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      });

        //  const logout = (() => {

        cy.request('POST', '/api/logout').then((response) => {
            if (response.status !== 200) {
                console.log(response);
                const bodyStr = JSON.stringify(response.body);
                throw new Error(
                    `[cy.login: logout did not have status 200 ${bodyStr}`
                );
            }
            // sometimes logout has status error "You can not do this."
            if (response.body.status !== 'ok') {
                console.log('Logout error:', response);
            }
        });
        
//     });

        loginPage.toURL()
        loginPage.userName()
        loginPage.password()
        loginPage.clickSignIn()
        
  
        // cy.clearCookies()

        // cy.wait(5000)
        // cy.visit('/')

        // cy.get('div[data-href="ads"] > .section-heading > .section-label > i').click()

})
