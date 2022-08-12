
export class LoginPage{

    toURL(){

        cy.visit('https://sneaky.meetsoci.com/admin/login')
        
      
    }
    
    userName(){

        cy.get('#password_login > :nth-child(2) > .input_email').type('skakade@meetsoci.com')
        
    }

    password(){

        cy.get('.input_password').type('Logitech@2')

    }

    clickSignIn(){

        cy.contains('.gray_button','Sign In').click()
    }
}

// export const onNaigationPage = new NavigationPage()