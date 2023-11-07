export class hosted{


    search(){

        cy.get('#search_input').type('60604')
        cy.get('.button-search').click()
        cy.get('.poi-item').first().should('be.visible')

        cy.get('#search_input').clear()
        cy.get('#search_input').type('90046')
        cy.get('.button-search').click()
        cy.get('.poi-item').first().should('be.visible')
        // cy.get(':nth-child(1) > .poi-item').should('be.visible')

        cy.get('#search_input').clear()
        cy.get('#search_input').type('santa clara')
        cy.get('.button-search').click()
        cy.get('.poi-item').first().should('be.visible')
        // cy.get(':nth-child(1) > .poi-item').should('be.visible')


    }


    selectFilters(){

        cy.get('#filter_button').click()
        cy.wait(4000)
        cy.get(':nth-child(3) > .filter_unselected').click()
        cy.get(':nth-child(4) > .filter_unselected').click()
        cy.get(':nth-child(5) > .filter_unselected').click()
        cy.wait(4000)
        cy.get('#apply_button').click()
        
    }

}