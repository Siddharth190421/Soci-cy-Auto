// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

// Cypress.Commands.add('login', (email, password) => { 

//     cy.visit('https://sneaky.test-meetsoci.com/admin/login')
//     cy.get('#password_login > :nth-child(2) > .input_email').type(email)
//     cy.get('.input_password').type(password)
//     cy.get('#password_login > .gray_button').click()


//  })



    // const logout = (() => {
    //     cy.request('POST', '/api/logout').then((response) => {
    //         if (response.status !== 200) {
    //             console.log(response);
    //             const bodyStr = JSON.stringify(response.body);
    //             throw new Error(
    //                 `[cy.login: logout did not have status 200 ${bodyStr}`
    //             );
    //         }
    //         // sometimes logout has status error "You can not do this."
    //         if (response.body.status !== 'ok') {
    //             console.log('Logout error:', response);
    //         }
    //     });
    // });
    


    import 'cypress-file-upload';

    const getUserObject = ((user) => {
        const userObject = Cypress.env(user);
        const requiredFields = ['email', 'password', 'utc_offset'];
        // Ensure user exists
        if (!userObject) {
            throw new Error(
                `[cy.login: No user "${user}" defined in environment. Add user info to cypress.json env object.`
            );
        }
        // Ensure required options exist
        const missing = requiredFields.filter(
            (option) => !(option in userObject)
        );
        if (missing.length > 0) {
            throw new Error(
                `[cy.login: Missing required field(s) for user "${user}": [${missing.join(', ')}]`
            );
        }
        return userObject;
    });

    Cypress.Commands.add('login', (user) => {
        const userObject = getUserObject(user);
        // Logout before attempting to login
        // logout();
        // Login as desired user
        loginAs(userObject);
        cy.getCookie('PHPSESSID').should('exist');
    });


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

    
import 'cypress-mochawesome-reporter/register';
    