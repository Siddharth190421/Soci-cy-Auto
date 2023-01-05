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
        
        


    })

})