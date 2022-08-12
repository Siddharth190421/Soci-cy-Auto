import {LoginPage} from "../support/page_objects/LoginPage"


const loginPage = new LoginPage()

it('login' , ()=>{

        loginPage.toURL()
        loginPage.userName()
        loginPage.password()
        loginPage.clickSignIn()
        
  
})
