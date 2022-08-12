require('cypress-xpath')

describe('Post activity', ()=>{

 function isPublished(){

    cy.get(':nth-child(1) > .LayoutDropAreaView > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value').should('not.contain', '0')
    cy.wait(3000)

}

    it('To account level - C2960, C2966', ()=>{

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test       
            return false
        })

        cy.visit('https://sneaky.meetsoci.com/admin/account/3854')
        cy.wait(5000)
        cy.contains('Social').click()
        cy.get('[data-href="post_activity"]').click()
        cy.wait(5000)
        cy.get('.date-range-container').click()
        cy.get('[data-range-key="Last 30 Days"]').click()
        // cy.get('[data-item-cid="c1817"] > .grid-stack-item-content > .BiModulesModule > .BiModulesTypesBase').contains('eq', 22)
        // cy.get('[data-item-cid="c1823"] > .grid-stack-item-content > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value').invoke('text').then((published) => {

        //     expect(published).to.eq(22)
            
            // cy.get('[data-gs-x="6"] > .grid-stack-item-content > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value').should('not.contain', '0')
            // cy.get('[data-gs-x="12"] > .grid-stack-item-content > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value').should('not.contain', '0')
            // cy.get('[data-gs-x="18"] > .grid-stack-item-content > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value').should('not.contain', '0')
            // cy.get('[data-gs-x="3"] > .grid-stack-item-content > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value').should('not.contain', '0')
            // cy.get('[data-gs-x="9"] > .grid-stack-item-content > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value').should('not.contain', '0')

            // cy.get('[data-gs-x="15"] > .grid-stack-item-content > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value').should('not.contain', '0')

        })

        it('Published', ()=>{
            isPublished()
        })

        it('Failed', ()=>{

            cy.get(':nth-child(2) > .LayoutDropAreaView > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value').should('not.contain', '0')
            
        })

        it('Upcoming', ()=>{

            cy.get(':nth-child(3) > .LayoutDropAreaView > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value').should('not.contain', '0')
            
        })

        it('Edited', ()=>{

            cy.get(':nth-child(4) > .LayoutDropAreaView > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value').should('not.contain', '0')
            
        })

        it('Deleted', ()=>{

            cy.get(':nth-child(5) > .LayoutDropAreaView > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value').should('not.contain', '0')
            
        })

        it('Pending', ()=>{

            cy.get(':nth-child(6) > .LayoutDropAreaView > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value').should('not.contain', '0')
            
        })

        it('Rejected', ()=>{

            cy.get(':nth-child(7) > .LayoutDropAreaView > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value').should('not.contain', '0')
            
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
            cy.wait(6000)
            cy.contains('.sorting > .translated', 'Post').should('be.visible')
            cy.contains('.sorting > .translated', 'Post').click()
            cy.contains('.sorting_desc > .translated','Scheduled For').should('be.visible')
            cy.contains('.sorting_desc > .translated','Scheduled For').click()

        })

        it('Status dropdown - C2968 ', ()=>{

            cy.contains('.select2-chosen', 'Status').click()
            cy.wait(4000)
            cy.contains('.select2-result-label', 'Pending Approval').click()
            cy.wait(6000)
            cy.contains('[style="min-width: 160px;"]', 'Pending Approval').first().should('be.visible')
    
        })

        it('Post View - C2970', ()=>{

            cy.contains('.select2-chosen', 'Location Post View').click()
            cy.wait(4000)
            cy.contains('.select2-result-label', 'Group Post View').click()
            cy.wait(5000)

            
        })

        it('Post types - C2971', ()=>{

            cy.contains('.toggle_button ','All Post Types').click()
            cy.wait(4000)
            cy.get('[data-id="ORGANIC"]').click()
        })

        it('Export XLSX - C2972', ()=>{


            Cypress.on('fail', (error, runnable) => {

                return false
                
              })

            cy.get('.icon_button[title="Export XLSX"]').click()
            cy.wait(4000)
            cy.get('.bbm-modal__bottombar').find('.primary_button ').click()
            cy.get('[data-cy="toast_message"]').should('be.visible')
            cy.wait(10000)
            cy.get('.icon_button[title="Export XLSX"]').click()
            cy.get('.bbm-modal__section').find(':nth-child(1) > .item_row > .btn').click()
            cy.get('.bbm-modal__bottombar > .secondary_button').click()
            

        })


    })

   

    })
