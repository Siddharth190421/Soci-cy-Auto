import {LoginPage} from "../support/page_objects/LoginPage"


const loginPage = new LoginPage()

it('login' , ()=>{


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
        
  
})
