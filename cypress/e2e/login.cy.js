/// <reference types="cypress"/>

// const { logLines } = require("cypress/lib/logger")


// it.only('Download', function(){
//     cy.viewport('iphone-xr')
//     cy.visit("https://google.com")
//     cy.get('.gLFyf').type("Arsenal").type("{enter}")
//     cy.get('.MUFPAc > :nth-child(5) > a').click()
//     cy.get('[data-ved="2ahUKEwjLtcfy8rz0AhXkiNgFHXtSDsYQMygBegUIARDKAQ"] > .wXeWr > .bRMDJf > .rg_i').click()
//     cy.get('[data-ved="2ahUKEwj83JGa87z0AhVqMLcAHV0ZBHwQMygAegUIARDIAQ"] > .wXeWr > .bRMDJf > .rg_i').click()

// })


it('login' , function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    // cy.visit('https://sneaky.meetsoci.com/admin/login')
    cy.visit('/')
    cy.get('#password_login > :nth-child(2) > .input_email').type('skakade@meetsoci.com')
    cy.get('.input_password').type('Logitech@2').type('{enter}')
    cy.get('.select2-arrow').click()
    cy.contains('Smoke-21').click()
    

})


// // it('create-Lib', function(){
// //     Cypress.on('uncaught:exception', (err, runnable) => {
// //         // returning false here prevents Cypress from
// //         // failing the test
// //         return false
// //     })
// //     cy.get(':nth-child(2) > .section-heading > .section-label').click()
// //     cy.get('[data-href="canned"] > .subsection-label').click()
// //     cy.get('.canned_control').click()
// //     cy.get('#name').type('C-Testing15').type('{enter}')
// //     // cy.get('.bbm-modal__bottombar').find('.primary_button').click() 
// //     // checkbox tick be
// //     // cy.get(':nth-child(2) > .label_check').click()
// //     // cy.get('.bbm-modal__bottombar')
// //     // cy.contains('Create').click()
// //     // cy.get(".DlgEditLibrary bbm-lg bbm-wrapper")    
    
// // })

// // it('New Loc', function(){
// //     Cypress.on('uncaught:exception', (err, runnable) => {
// //         // returning false here prevents Cypress from
// //         // failing the test
// //         return false
// //     })
// //     cy.get('.account_crumb').click()
// //     cy.get('[data-href="locations"]').click()
// //     cy.get('.control_wrapper > .icon_button').click()
// //     cy.get('#project_name').type('Test155').type('{enter}')


// // } )


// it('Switch2Location', function(){
//     Cypress.on('uncaught:exception', (err, runnable) => {
//         // returning false here prevents Cypress from
//         // failing the test
//         return false
//     })
// //  cy.get('.select2-arrow').click()
// //     cy.contains('Smoke-21').rightclick('bottomLeft')
   
// })


// it('Insights updation', function(){
//     //insights is updated with above function switching the location
// })


// it('engage', function(){

// // cy.visit("https://sneaky.meetsoci.com/admin/account/3854/brand_engagements/2816")
// // cy.get('#password_login > :nth-child(2) > .input_email').type('skakade@meetsoci.com')
// //     cy.get('.input_password').type('Logitech@2').type('{enter}')

// cy.get('div[data-href="social_listening"] > .section-heading > .section-label').click()

// // scrollIntoView({ easing: 'linear' })  


// })



// describe('Social', function() {

//     it('scheduler', function(){
//         Cypress.on('uncaught:exception', (err, runnable) => {
//             // returning false here prevents Cypress from
//             // failing the test
//         return false
//     })

//     //navigating to social will itself open up scheduler

//     cy.get(':nth-child(2) > .section-heading > .section-label').click()
//     cy.get('[data-href="scheduler_dashboard"] > .subsection-label').click()
//     cy.get('.mf-week').click()       

//     })

//     it('Post Plans', function(){
//         cy.get('.btn_plans').click()
//         cy.get('.primary_button').click()
//         cy.get('.title').type('New Plan test') 
//         cy.get('.btn_next').click()  //checking for post plans permissions (post-button)
//         cy.get('.DlgPlanView > .bbm-modal > .bbm-modal__topbar > .bbm-modal__icon_close').click()
//         cy.get('.bbm-modal__bottombar > .btn_cancel').click()
    

//     })


//     it('Dicovery', function(){
//         cy.get('[data-href="digger"]').click({force: true})
    
//     })

//     it('Queue', function(){

//         cy.get('[data-href="upcoming"]').click()
//     })

//     it('Published', function(){

//         cy.get('[data-href="social_hub"]').click()
//     })

//     it('Images', function(){
//         cy.get('[data-href="image_library"]').click()
//     })

//     it('Notifications', function(){
//         cy.get('[data-href="notif"] > .subsection-label').click()
//     })

// })




// // it('Create Post', function(){
// //     Cypress.on('uncaught:exception', (err, runnable) => {
// //         // returning false here prevents Cypress from
// //         // failing the test
// //         return false
// //     })
// //     cy.get('.btn_postnow').click()
// //     cy.get('.ComponentMessageEditor').find('.message_editable').type('Test post')
// //     cy.get('.schedule > .label_check').click()
// //     cy.get('.bbm-modal__bottombar').find('.primary_button').click()
  
// // })


// describe('Post Activity', () => {

//     it('Post Activity', function(){
//         cy.get('.account_crumb').click()
//         // cy.get('.open > .section-heading > .section-label').click()
//         cy.get('[data-href="post_activity"] > .subsection-label').click()

//     })

//     it('Post Activity-FB', function(){

//         cy.get('[data-name="Facebook"] > :nth-child(1) > .component_tab_text').click()

//     })

//     it('Post Activity-insta', function(){

//         cy.get('[data-name="Instagram"] > :nth-child(1) > .component_tab_text').click()

//     })

//     it('Post Activity-Googlemybusi', function(){

//         cy.get('[data-name="Google My Business"] > :nth-child(1) > .component_tab_text').click()

//     })

//     it('Post Activity-Twitter', function(){

//         cy.get('[data-name="Twitter"] > :nth-child(1) > .component_tab_text').click()

//     })

//     it('Post Activity-LinkedIn', function(){

//         cy.get('[data-name="LinkedIn"] > :nth-child(1) > .component_tab_text').click()

//     })

// })

// describe('Location', () => {

//     it('location search', function(){
//         cy.get('[data-href="locations"] > .subsection-label').click()

//     })


//     it('location delete', function(){
//         cy.get('.col_actions > .icon_button').click()
//         // cy.get('.primary_button > .ui-button-text').click()
//         cy.get('.ui-dialog-titlebar-close').click() // delete confirm message test
        

//     })

//     it('add location-check mandatory fields', function(){
//         cy.get('.control_wrapper > .icon_button').click()
//         cy.get('#project_name').type("Test-Loc07")
//         cy.get('.buttons > .primary_button').click()

//     })

//     it('add location-create', function(){
//         cy.get(':nth-child(3) > :nth-child(2) > input').click().type("test-Loc09")
//         cy.get('.buttons > .primary_button').click()
//         cy.get('.jq-modal__icon_close').click()  
    
//     }) 


// })


// it('Listening', function(){

// })


// it('Insights', function(){
//     Cypress.on('uncaught:exception', (err, runnable) => {
//         // returning false here prevents Cypress from
//         // failing the test
//         return false

//     })
//     cy.get('.open > .section-heading > .section-label').click()
//     cy.get('.active > .subsection-label').click()
//     cy.get('.select2-arrow').click()
//     cy.contains('Smoke-21').click()
    
// })


// it('Listening', function(){
//     cy.get('.account_crumb')
//     cy.get('div[data-href="listings_header"] > .section-heading > .section-label').click()

// })


// // it('upload image', function(){
// //     Cypress.on('uncaught:exception', (err, runnable) => {
// //         // returning false here prevents Cypress from
// //         // failing the test
// //         return false
// //     })  
// //     assert("Done")
// //     cy.get('[data-href="image_library"] > .subsection-label').click()
// //     // cy.get('.control icon_button btn_image')
// //     

// // })


// it('groups', function(){
//     cy.log("All is well")
    
// })


// it('' , function(){
//     cy.getCookie("name")

// })

// it('Ads Plus', function(){
//     cy.get('.open > .section-heading > .section-label').click()
    
// })

// it('Brand mentions', function(){

//    cy.get('[data-href="brand_mentions"] > .subsection-label').click()

// })

// it('User Generated content', function(){

//     cy.get('[data-href="ugc"] > .subsection-label').click()

// })


// it('competitor-analysis', function(){

//     cy.get('[data-href="competitor_analysis"] > .subsection-label').click()
// })


// it('industry trends, opportunities', function(){

// cy.get('[data-href="industry_trends"] > .subsection-label').click()
// cy.get('[data-href="opportunities"] > .subsection-label').click()


// })


// describe('SmartBot', function(){

//     it('Smart-bot> Insights', function(){
//         //clicking on smartbot itself will open up insights
//     })

//     it('Smart-bot> topics', function(){
//         cy.get('[data-href="bots_qa"]').click()
//     })
    
//     it('Smart-bot> location', function(){
//         cy.get('[data-href="bots_locations"]').click()

//     })

//     it('Smart-bot> Leads', function(){
//         cy.get('[data-href="bots_leads"]').click()

//     })


// })


// describe('describe-nest', function(){

//     describe('BoostPLUS ', function(){

//         it('test', function(){
//             cy.log('Nested code works')
//             cy.get('div[data-href="boost"] > .section-heading > .section-label').click()


//         })


//     })


// })

// describe('Reports BETA', function(){

//     it('Reporting Suite', function(){
//         cy.get('.open > .section-heading > .section-label').click()

//     })

//     it('Automated Emails', function(){
//         cy.get('[data-href="reporting_automated_emails"]').click()

//     })
                                                                                                                                                                                  
// })

// beforeEach( () =>{

//     cy.log('I run before every test in spec file !!!')

// })

// afterEach( () => {

//     cy.log('i run after every test file !!!')

// })

  
// describe('Add rule', function(){

    

// })

       








 