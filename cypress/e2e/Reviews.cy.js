describe('Reviews', ()=>{

    it.only('to Reviews ', ()=>{

        Cypress.on('uncaught:exception', (err, runnable) => {
    
            return false
  
        })

        cy.visit('/admin/account/3854')
        cy.wait(4000)
        cy.get('div[data-href="reputation"] > .section-heading > .section-label').click()
        cy.wait(4000)
        cy.get('.report_view_container').should('be.visible')
        cy.wait(4000)
        // cy.get('.highcharts-series.highcharts-series-0 > [x="132.5"]').should('be.visible')
        cy.get('.report_view_container').should('be.visible')


    })

    it("Inbox",()=>{

        cy.get('[data-href="reputation_reviews"]').click()
        cy.get('[data-name="reviews"] > :nth-child(1) > .component_tab_text').click()
        cy.wait(7000)
        cy.get('[ref="reviews"] > :nth-child(1)').should('be.visible')

    })

    it('More', ()=>{

        cy.get('.label').click()
        cy.wait(5000)
        cy.get('[data-name="rules"] > :nth-child(1) > .component_tab_text').click()
        cy.get('[data-name="my_tasks"]').should('be.visible')
        cy.get('[data-name="my_tasks"]').should('be.visible')


    })

    it('Locations',()=>{

        cy.get('[data-href="reputation_locations"]').click()
        cy.get('.section').should('be.visible')
        
    })

    it('Widget', ()=>{

        cy.get('[data-href="reviews_widget"]').click()
        cy.get('.ReviewsWidgetWithCustomizerView').should('be.visible')
    })

    it("Add Rule",()=>{

        cy.get('[data-href="reputation_reviews"]').click()
        cy.get('[data-name="reviews"] > :nth-child(1) > .component_tab_text').click()
        cy.wait(7000)
        cy.get('[ref="reviews"] > :nth-child(1)').should('be.visible')

        // cy.get('.btn_add_rule').click()
        // cy.get('.rule_name').type('Rule777 ')
        // cy.get('.primary_button').click()

        cy.reload()

        cy.get('.label').click()
        cy.contains('input[type="checkbox"][class="ComponentMultiselectorOption"]', 'Rule777').click()


    })




})