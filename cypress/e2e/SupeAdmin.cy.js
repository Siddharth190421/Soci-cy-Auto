

describe('Superadmin/ Admin/ User', ()=>{

    beforeEach(() => {

        Cypress.on('uncaught:exception', (err, runnable) => {    
    
            return false
    
        })
      
    })


    it('superAdmin can access Back Office - C2739', ()=>{

        cy.visit('/')
        cy.intercept('GET', '/admin/account/3854').as('acc')
        cy.get('@acc')
        cy.get('.back_office').click()

        cy.get('.crumbs_inner').find('.crumbs_stack_left > .translated').should('have.text','Back Office')
      
    })

    it('Superadmin edit Back office - C2740', ()=>{

        cy.get('[data-tab="demo"]').click()
        cy.get('.account_search').type('Santosh').type('{enter}')
        cy.wait(7000)
        cy.get('.AccountListView').find('[data-id="3854"]').trigger('mouseover').find('[class="gray_button btn_details translated"]').click({force: true})
        cy.wait(4000)
        // cy.contains('.gray_button btn_details translated','Edit').click({force:true})
        cy.get('.primary_button').click({force:true})

    })

    it('Edit Account - C2741', ()=>{

        cy.visit('/')
        cy.get(8000)
        cy.get('.project_controls > .icon_button').click({force:true})
        cy.wait(6000)
        cy.wait(5000)
        cy.get('.btn_enable_all_listings').click()
        cy.get('.DlgUtilityConfirm > .bbm-modal > .bbm-modal__bottombar > .primary_button').click()
        cy.get('[data-cy="toast_message"]').should('have.text','\n\t\tListings successfully enabled for all locations.\n\t\t\n\t')
    })




})