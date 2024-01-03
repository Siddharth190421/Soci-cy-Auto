describe('Reviews', ()=>{

    it('to Reviews ', ()=>{

        Cypress.on('uncaught:exception', (err, runnable) => {
    
            return false
  
        })

        cy.visit('/admin/account/3854')
        cy.wait(4000)
        cy.get('div[data-href="reputation"] > .section-heading > .section-label').click()
        cy.wait(4000)
        cy.get('.report_view_container').should('be.visible')
        cy.wait(4000)
        cy.get('.highcharts-series.highcharts-series-0 > [x="132.5"]').should('be.visible')
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

    })

    it('Locations',()=>{

        cy.get('[data-href="reputation_locations"]').click()
        
    })



})