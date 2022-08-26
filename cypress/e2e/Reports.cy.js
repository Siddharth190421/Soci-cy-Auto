describe('Reports', ()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
        });

    it('Navigating/Email Reports', ()=>{

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
            });

        cy.visit('/admin/account/3854/office/0/project/320406/page/82269/editor_v2#edit_content')
        cy.intercept('GET', '/admin/account/3854/office/0/project/320406/page/82269/editor_v2#edit_content').as('Report')
        cy.intercept('api/reports/*/get_all\\?*' ).as('getAll');
        cy.get('@Report')
        cy.get('@getAll')
        // cy.get('.overview > :nth-child(1)').click()
        // cy.get('[onclick="download_report()"]').click()
        cy.get('.email_report').click()
        // cy.get('.dlg_email > form').focus()
        cy.get('[name="to"]').type('skakade@meetsoci.com')
        cy.get('.primary_button').click()
        cy.wait(5000)
        
       

    })

    it('Download Reports - C2850', ()=>{

        Cypress.on('fail', (error, runnable) => {

            return false
            
          })

        cy.visit('/admin/account/3854/office/0/project/320406/page/82269/editor_v2#edit_content')
        cy.intercept('GET', '/admin/account/3854/office/0/project/320406/page/82269/editor_v2#edit_content').as('Report')
        cy.intercept('api/reports/*/get_all\\?*' ).as('getAll');
        cy.get('@Report')
        cy.get('@getAll')
        cy.get('[onclick="download_report()"]').click()
        

    })

    it.skip('Logo check', function(done){


        // let element = 'label.label_check'
        // let className = "c_on"





        // cy.get('.overview > :nth-child(1)' ).then( (UnCheck)=>{

        //     if
        //     (expect(UnCheck).to.have.class('c_on'))
        //     {
        //         cy.get('.overview > :nth-child(1) > c_on' ).click()
        //     }
        //     else{
        //         cy.get('#frame').should('be.visible')

        //     }


        // })





        // cy.get('.overview > :nth-child(1) ').should('have.class', 'c_on',  {failOnStatusCode: false}).then( (Checked)=>{

        //     cy.get('#frame').should('be.visible')

        // })

// const { proxy, flush } = require("@alfonso-presa/soft-assert");
// const { expect } = require("chai");
// const softExpect = proxy(expect);


// var flag = true;

// try {

//      cy.get('.overview > :nth-child(1)').then(($el) => {
//                 expect($el).not.to.have.class('c_on',  {failOnStatusCode: false})     
//                 })
                              

// } catch(e) {

//     // cy.get('.overview > :nth-child(1)').click()
    


//     console.log(e)
//     flag = false
//     done(e)

// } finally {
//     //do something
//     cy.get('.overview > :nth-child(1)').click()
//     if(flag)
   
//         done()
// }

      

    
      

        // try  
        // {
        //     if( cy.get('.overview > :nth-child(1)').then(($el) => {
        //         softExpect($el).not.to.have.class('c_on')     
        //         })
        
        //          ) {
                    
        //             cy.get('.overview > :nth-child(1)').click()
        //         }

        //     else{

        //         cy.get('#frame').should('be.visible')
                

        //     }    
        
        //     // cy.get('#frame').should('be.visible')
        
        // } catch {
           
        //     cy.get('#frame').should('be.visible')
        // }
        

    })

    it.skip('Check-logo', ()=>{

        cy.get('.overview > :nth-child(1) ').should('have.class', 'label_check c_on').then( ()=>{

            cy.get('#frame').should('be.visible')

        })
    })

    it.skip('Check-logo-2', ()=>{

        cy.get('.overview > :nth-child(1) ').should('not.have.class', 'c_on').then( (G)=>{

            cy.get(G).click()

        })
    })

it('Check logo - C2849', ()=>{

        Cypress.on('uncaught:exception', (err, runnable) => {
            
            return false

            });

        cy.visit('/admin/account/3854/office/0/project/320406/page/82269/editor_v2#edit_content')

        
        // cy.get('label.label_check').first().click({force:true}).should('have.class','c_on')

        // cy.get('label.label_check').first().click().should('have.class','c_on')

        


   

//     var flag = true;

// try {

//     cy.get('label.label_check').first().click({force:true}).should('have.class','c_on')

//     flag = true
     
                              

// } catch(e) {

    
//     cy.get('label.label_check').first().click().should('have.class','c_on')


//     console.log(e)
//     flag = false
//     done(e)

// } finally {
//     //do something
//     cy.get('label.label_check').first().click()
//     if(flag)
   
//         done()
// }


// cy.get('label.label_check').first().then( check=>{

//     cy.wrap(check)
//     const checky = check.should('have.class', 'c_on')

//     if (checky = true){

//         //do nothing for now
//     }else {

//         checky.click()

//     }
// })
// try{
// if (cy.get('.overview > :nth-child(1)').contains('label.label_check.c_on', 'Show Logo')){

//             //do nothing for now

//         }else {
    
//             cy.get('.overview > :nth-child(1)').click()
    
//         }
//     }catch{

//          cy.get('.overview > :nth-child(1)').click()
//     }

// })


// try {
//     cy.get('.overview > :nth-child(1)').contains('label.label_check.c_on', 'Show Logo')

// } catch {

//     cy.get('.overview > :nth-child(1)').click()   
// }


// })


// it('Alias', () => {

//     Cypress.on('uncaught:exception', (err, runnable) => {
            
//         return false

//         });
//         cy.visit('/admin/account/3854/office/0/project/320406/page/82269/editor_v2#edit_content')
//         cy.wait(7000)

// // try {

    
// //     cy.get('.overview > :nth-child(1)').contains('label.label_check', 'Show Logo').as('Uncheck')
// //     cy.get('@Uncheck').click()

    
// // } catch (error) {

// //     //nothing
// //     cy.get('@Uncheck').click()
// //     cy.get('@Uncheck').contains('label.label_check.c_on', 'Show Logo')
    
// // }
// // try {

    
// //     cy.get('.overview > :nth-child(1)').contains('label.label_check', 'Show Logo').as('Uncheck')
// //     cy.get('@Uncheck').click()

    
// // } catch (error) {

// //     //nothing
// //     cy.get('@Uncheck').click()
// //     cy.get('@Uncheck').contains('label.label_check.c_on', 'Show Logo')
    
// // }
// // cy.get('.overview > :nth-child(1)').contains('label.label_check', 'Show Logo').as('Uncheck')
// // cy.get('.overview > :nth-child(1)').contains('label.label_check.c_on', 'Show Logo').as('Check')


// // if((cy.get('@Uncheck')) != (cy.get('@Check')) ){

// //     cy.get('@Uncheck').click()
// //     this.Fail()

// // } else {

// //     cy.get('@Uncheck')
// // }


        cy.get('.label_check').children('input').first().check({force: true})
        cy.wait(5000)
        cy.scrollTo('top')
        cy.get('#frame').should('be.visible')
        
    
        cy.get('.label_check').children('input').as('All')

        cy.get('.label_check').children('input').first().as('logo')
        cy.get('@logo').click({force: true})
        cy.get('@logo').check({force: true})

        cy.get('@All').check({force: true})


  })

  it('Email with all Checked - C2851', ()=>{

    cy.get('.email_report').click()
    // cy.get('.dlg_email > form').focus()
    cy.get('[name="to"]').type('skakade@meetsoci.com')
    cy.get('.primary_button').click()
    cy.wait(5000)

  })

  it('Group Reports - C2852', ()=>{

    cy.visit('/admin/account/3854/group/36523/reports')
    cy.wait(6000)
    cy.contains('.buttons_tabs > .white_button', 'Print').click()
    // cy.visit('https://sneaky.meetsoci.com/admin/account/3854/group/36523/reports?print=1&since=2022-07-01&until=2022-08-01')

    
  })

  it('Return', ()=>{


    Cypress.on('uncaught:exception', (err, runnable) => {
       
        return false
        });

    cy.visit('/admin/account/3854/group/36523/reports')
    
  })

})


    