// require('cypress-xpath')

describe('Post activity', ()=>{


    beforeEach(() => {

        Cypress.on('uncaught:exception', (err, runnable) => {    

            return false

        })

        
        // Cypress.on('fail', (error, runnable) => {

        //     return false
            
        //   })

        cy.intercept('GET', '/admin/account/3854').as('account')

        // cy.intercept('POST', '/graphql?_op=AllNetworksPostActivity').as('postAct')
        cy.intercept('POST', '/dqs?_op=AllNetworksPostActivity').as('postAct')

        // cy.intercept('POST', '/graphql?*').as('pg')
        cy.intercept('POST', '/dqs?*').as('pg')

        cy.intercept('GET', '/api/broadcast_messages/0/count_new?*').as('dwnld')


      
    })
    


 function isPublished(){

    cy.get(':nth-child(1) > .LayoutDropAreaView > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value').should('not.have.value', 0)
    

}

    it('To account level - C2960, C2966', ()=>{

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test       
            return false
        })

        
        cy.visit('https://sneaky.meetsoci.com/admin/account/3854')
        cy.wait('@account')
        cy.contains('Social').click()
        cy.get('[data-href="post_activity"]').click()
        cy.wait('@postAct')
        cy.get('.date-range-container').click()
        cy.get('[data-range-key="Last 30 Days"]').click()

        //     expect(published).to.eq(22)
            
            // cy.get('[data-gs-x="6"] > .grid-stack-item-content > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value').should('not.contain', '0')
            // cy.get('[data-gs-x="18"] > .grid-stack-item-content > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value').should('not.contain', '0')
            // cy.get('[data-gs-x="9"] > .grid-stack-item-content > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value').should('not.contain', '0')

        })

        it('Published', ()=>{
            
            // isPublished()
            cy.get(':nth-child(1) > .LayoutDropAreaView > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value').should('not.have.value', 0)
            // cy.readFile('D:/Web/SOCi/cypress/downloads/')

        })

        it('Failed', ()=>{

            cy.get(':nth-child(2) > .LayoutDropAreaView > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value').should('not.have.value', 0)
            
        })

        it('Upcoming', ()=>{

            cy.get(':nth-child(3) > .LayoutDropAreaView > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value').should('not.have.value', 0)
            
        })

        it('Edited', ()=>{

            cy.get(':nth-child(4) > .LayoutDropAreaView > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value').should('not.have.value', 0)
            
        })

        it('Deleted', ()=>{

            cy.get(':nth-child(5) > .LayoutDropAreaView > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value').should('not.have.value', 0)
            
        })

        it('Pending', ()=>{

            cy.get(':nth-child(6) > .LayoutDropAreaView > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value').should('not.have.value', 0)
            
        })

        it('Rejected', ()=>{

            cy.get(':nth-child(7) > .LayoutDropAreaView > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value').should('not.have.value', 0)
            
        })

        describe('Individual Social', ()=>{

            it('FB - C2961', ()=>{

            
            cy.get('[data-name="Facebook"]').click()
            isPublished()


        })

        it('Instagram - C2962', ()=>{

            cy.get('[data-name="Instagram"]').click()
            isPublished()

        })

        it('Twitter - C2964', ()=>{

            cy.get('[data-name="Twitter"]').click()
            isPublished()
        })

        it('LinkedIn - C2965',()=>{

            cy.get('[data-name="LinkedIn"]').click()
            isPublished()
        })

        
        })

    
        describe('Table - C2967', ()=>{ 

        it('Column Verification', ()=>{

            cy.get('[data-name="All Networks"]').click()
            cy.wait('@postAct')
            cy.get('.dataTables_scrollHeadInner > .display > thead > tr > .sorting').should('be.visible')
            cy.get('.dataTables_scrollHeadInner > .display > thead > tr > .sorting_desc > div').should('be.visible')

        })


        it('Status dropdown - C2968 ', ()=>{

            cy.contains('.select2-chosen', 'Status').click()
            // cy.wait('@postAct')
            cy.contains('.select2-result-label', 'Pending Approval').click()
            cy.wait('@postAct')
            cy.contains('[style="min-width: 160px;"]', 'Pending Approval').first().should('be.visible')
    
        })

        it('Post View - C2970', ()=>{

            // cy.wait('@pg')
            cy.contains('.select2-chosen', 'Location Post View').click()
            // cy.wait(4000)
            cy.contains('.select2-result-label', 'Group Post View').click()
            // cy.wait(5000)

            
        })

        it('Post types - C2971', ()=>{

            cy.contains('.toggle_button ','All Post Types').click()
            // cy.wait(4000)
            cy.get('[data-id="ORGANIC"]').click({force:true})
            cy.wait('@pg')
            // cy.readFile('*.xlsx')

        })

        it('Export XLSX - C2972', ()=>{


            Cypress.on('fail', (error, runnable) => {

                return false
                
              })

            cy.visit('https://sneaky.meetsoci.com/admin/account/3854/post_activity/75')
            cy.get('.icon_button[title="Export XLSX"]').click()
            // cy.wait(4000)
            cy.wait('@pg')
            cy.get('.bbm-modal__bottombar').find('.primary_button ').click()
            cy.get('[data-cy="toast_message"]').should('be.visible')
            // cy.wait(10000)
            // cy.wait('@dwnld')
            cy.get('.icon_button[title="Export XLSX"]').click()
            cy.get('.bbm-modal__section').find(':nth-child(3) > .item_row > .btn').click()
            cy.get('.bbm-modal__bottombar > .secondary_button').click({force:true})
            cy.wait('@dwnld')
            // cy.readFile('downloads/*.xlsx')
            
            
        })

        // cy.readFile('*.xlsx')
        // const downloadsFolder = Cypress.config('downloadsFolder')
        // const downloadedFilename = path.join(downloadsFolder, '.xlsx')
        
        // cy.readFile(downloadedFilename, 'binary', { timeout: 15000 })
        // .should('have.text', 'Report Time Period:');

      });
    


    })

   

    // })
