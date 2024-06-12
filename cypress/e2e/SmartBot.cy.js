
describe('SmartBot', ()=>{

    beforeEach(() => {

        Cypress.on('uncaught:exception', (err, runnable) => {    

            return false

        })

        Cypress.on('fail', (error, runnable) => {

            return false
            
          })

        // Cypress.on('fail', (error, runnable) => {

        //     return false
            
        //   })

        // cy.viewport('iphone-xr')


          cy.intercept('GET', 'frontend-services/BotsLocations/BotsLocations.js?*').as('frontend')
          cy.intercept('GET', '/api/bi_reports/3053/get?*').as('insights')

          cy.intercept('GET', '/admin/account/3854/office/0/project/320406/bots_locations/3053').as('atBots')
          cy.intercept('GET', '/admin/account/3854/bots_locations/3053').as('account')
          cy.intercept('GET', '/admin/account/3854/bots_qa').as('qa')

          cy.intercept('GET', '/api/bots/0/engagement_analysis?*').as('engg')
          cy.intercept('GET', '/api/bots/0/keywords/all?*').as('keywords')
          cy.intercept('GET', '/admin/account/3854/office/0/project/320406/bots_leads').as('leads')

          
      
    })
    

    it('To SmartBot - C2821', ()=>{

  

        cy.visit('admin/account/3854/office/0/project/320406/bots_locations/3053')
        cy.wait('@insights')
        cy.wait('@frontend')

    })

    it('Deactivate Bot Loc Level', ()=>{


        cy.get('.bulk-select-col > .BulkSelectColumn > div > .header > span').click()
        cy.get('[class="select2-container state_selector"]').click()
        // cy.get('[role="presentation"]').click()
        cy.contains('Disable').first().click()
        cy.get('.input_wrapper > :nth-child(3)').click()
        cy.get('.input_wrapper > :nth-child(4)').click()
        cy.get('.btn_action_apply').click()
        // cy.wait(5000)
        cy.get(':nth-child(1) > [data-cy="toast_type"] > .notification_close > .fa').click()

    })

    it('Activate Bot loc level', ()=>{


        cy.visit('admin/account/3854/office/0/project/320406/bots_locations/3053')
        cy.wait('@insights')
        cy.wait('@frontend')
        cy.get('.bulk-select-col > .BulkSelectColumn > div > .header > span').click()
        cy.get('[class="select2-container state_selector"]').click()
        cy.contains('[class="select2-result-label"]', 'Enable').click()
        cy.get('.input_wrapper > :nth-child(3)').click()
        cy.get('.input_wrapper > :nth-child(4)').click()
        cy.get('.btn_action_apply').click()
        cy.get(':nth-child(1) > [data-cy="toast_type"] > [data-cy="toast_message"]').should('have.text', '\n\t\tActivated SmartBot for 1 locations.\n\t\t\n\t')
        // cy.get('[data-cy="toast_message"]').should('have.text', '\n\t\tSmartBot for Facebook Messenger was enabled for 1 locations.\n\t\t\n\t')

    })


    it('Add Smart Bot to a location-Account level- C2821,22', ()=>{



        cy.visit('/admin/account/3854/bots_locations/3053')
        cy.wait(6000)
        // cy.wait('@atBots')
        // cy.wait('@account')
        cy.wait('@frontend')
        cy.wait('@insights')
        cy.get('tbody > :nth-child(1) > .bulk-select-col > .BulkSelectColumn > div > .bulk_select > span').click()
        cy.get('.input_wrapper > :nth-child(3)').click()
        cy.get('.input_wrapper > :nth-child(4)').click()
        cy.get('[class="select2-container state_selector"]').click()
        cy.contains('[class="select2-result-label"]', 'Enable').click()
        cy.get('.btn_action_apply').click()
        cy.get('[class="fab custom-icons-bot"]').should('be.visible')


    })

    it('Create Topics- C2823,24', ()=>{


        cy.visit('/admin/account/3854/bots_qa')
        cy.wait('@qa')
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
        cy.contains('.primary_button','Save').click({force:true})
        // cy.wait(5000)


    })

    it('Add button on acc', ()=>{


        cy.visit('/admin/account/3854/office/0/project/320406/bots_qa')
        cy.wait('@engg')
        cy.get('.add_topic_btn').should('not.exist')

    })

    it('Turning On a Topic- C2825', ()=>{


        cy.visit('/admin/account/3854/office/0/project/320406/bots_qa')
        cy.wait('@engg')
        cy.wait('@keywords')
        cy.get(':nth-child(11) > .enable-column').click()
        cy.wait('@engg')
        cy.get('.primary_button').click()



    })

    it('Create Welcome message- C2826', ()=>{


        cy.visit('/admin/account/3854/office/0/project/320406/bots_qa')
        cy.wait('@engg')
        cy.wait('@keywords')
        cy.contains('Welcome Message').click()
        cy.get('.topic-response').type('Again')
        cy.get('.primary_button').click({force:true})
        cy.get('[data-cy="toast_message"]').should('have.text', '\n\t\tTopic saved.\n\t\t\n\t')

        
    })

    it('Edit Topic on account Level- C2830', ()=>{


        cy.visit('/admin/account/3854/bots_qa')
        cy.wait('@qa')
        cy.wait('@keywords')
        cy.contains('Topic-14').click()
        cy.get('#topic-title').type('edit')
        cy.get('.primary_button').click({force:true})
        cy.get('[data-cy="toast_message"]').should('have.text', '\n\t\tTopic saved.\n\t\t\n\t')


    })

    it('Edit Topic on location level- C2831', ()=>{


        cy.visit('/admin/account/3854/office/0/project/320406/bots_qa')
        cy.wait('@engg')
        cy.wait('@keywords')
        cy.contains('Topic-14').click()
        cy.get('.topic-response').type('EditL')
        cy.get('.primary_button').click({force:true})
        cy.get('[data-cy="toast_message"]').should('have.text', '\n\t\tTopic saved.\n\t\t\n\t')


    })


    it('Delete a Topic on Location level - C2833,34', ()=>{

        cy.visit('/admin/account/3854/office/0/project/320406/bots_qa')
        cy.wait('@engg')
        cy.wait('@keywords')
        cy.contains('Topic-14').click()

        cy.get('.remove_btn').should('be.disabled')
        cy.get('.bbm-modal__icon_close').click()


        
    })

    it.skip('Download Leads- C2841 ', ()=>{

        Cypress.on('fail', (error, runnable) => {
            return false
          })

        cy.visit('/admin/account/3854/office/0/project/320406/bots_leads')
        cy.wait('@leads')
        cy.get('.controls_container > .icon_button').click()

    })

    it('Insights page - C2836,42,43', ()=>{

        cy.visit('/admin/account/3854/office/0/project/320406/bots_locations/3053')
        cy.wait('@atBots')
        cy.wait('@frontend')
        cy.wait('@insights')
        cy.get('[style="min-width: 151px;"] > .right_aligned').should('be.visible')
        cy.get('.highcharts-background').should('be.visible')
        cy.get('.BotNetworkStateView > .custom-icons-bot').should('be.visible')


    })



})