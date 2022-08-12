require('cypress-xpath')


describe('SmartBot', ()=>{


    it('To SmartBot', ()=>{

  
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test       
        return false
    })

        cy.visit('admin/account/3854/office/0/project/320406/bots_locations/3053')
        cy.wait(5000)

    })

    it('Deactivate Bot Loc Level', ()=>{

        cy.get('.bulk-select-col > .BulkSelectColumn > div > .header > span').click()
        cy.get('[class="select2-container state_selector"]').click()
        // cy.get('[role="presentation"]').click()
        cy.contains('Disable').first().click()
        cy.get('.input_wrapper > :nth-child(3)').click()
        cy.get('.input_wrapper > :nth-child(4)').click()
        cy.get('.btn_action_apply').click()
        cy.wait(5000)
        cy.get(':nth-child(1) > [data-cy="toast_type"] > .notification_close > .fa').click()

    })

    it('Activate Bot loc level', ()=>{

        cy.visit('admin/account/3854/office/0/project/320406/bots_locations/3053')
        cy.wait(5000)
        cy.get('.bulk-select-col > .BulkSelectColumn > div > .header > span').click()
        cy.get('[class="select2-container state_selector"]').click()
        cy.contains('[class="select2-result-label"]', 'Enable').click()
        cy.get('.input_wrapper > :nth-child(3)').click()
        cy.get('.input_wrapper > :nth-child(4)').click()
        cy.get('.btn_action_apply').click()
        cy.get(':nth-child(1) > [data-cy="toast_type"] > [data-cy="toast_message"]').should('have.text', '\n\t\tActivated SmartBot for 1 locations.\n\t\t\n\t')
        // cy.get('[data-cy="toast_message"]').should('have.text', '\n\t\tSmartBot for Facebook Messenger was enabled for 1 locations.\n\t\t\n\t')
        // cy.get(':nth-child(4) > [data-cy="toast_type"] > [data-cy="toast_message"]')

    })


    it('Add Smart Bot to a location-Account level- C2821', ()=>{

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test       
            return false
        })

        cy.visit('/admin/account/3854/bots_locations/3053')
        cy.wait(6000)
        cy.get('tbody > :nth-child(1) > .bulk-select-col > .BulkSelectColumn > div > .bulk_select > span').click()
        cy.get('.input_wrapper > :nth-child(3)').click()
        cy.get('.input_wrapper > :nth-child(4)').click()
        cy.get('[class="select2-container state_selector"]').click()
        cy.contains('[class="select2-result-label"]', 'Enable').click()
        cy.get('.btn_action_apply').click()
        cy.get('[class="fab custom-icons-bot"]').should('be.visible')


    })

    it('Create Topics', ()=>{

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test       
            return false
        })

        cy.visit('/admin/account/3854/bots_qa')
        cy.wait(6000)
        cy.get('.add_topic_btn').click() //Add Topic button
        cy.get('#topic-title').type('Ca')


        cy.get('#topic-keyword-search').then( Keywords =>{

            cy.wrap(Keywords).type('Coffee').type('{enter}')
            cy.wrap(Keywords).type('Mocha').type('{enter}')
            cy.wrap(Keywords).type('Chai').type('{enter}')
            cy.wrap(Keywords).type('expresso').type('{enter}')

        })

        cy.get('[data-name="qa-tab"]').click()
        cy.get('#topic-question-search').type('What types of coffee available ?"').type('{enter}')
        cy.get('.topic-response').type('All Kinds available')
        cy.contains('[class="primary_button gray_button btn_save translated"]','Save').click({force:true})
        cy.wait(5000)




    })

    it.only('Add button on acc', ()=>{

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test       
            return false
        })

        cy.visit('/admin/account/3854/office/0/project/320406/bots_qa')
        cy.wait(6000)
        cy.get('.add_topic_btn').should('not.exist')

    })


})


