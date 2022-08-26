// require('cypress-xpath')

describe('Listening', ()=>{

    beforeEach(() => {

        Cypress.on('uncaught:exception', (err, runnable) => {     
            return false

        })
      
    })

    it('Insights Page-C2932,33', ()=>{



        cy.visit('/admin/account/3854/brand_engagements/2816')
        cy.intercept('GET', '/admin/account/3854/brand_engagements/2816').as('listen')
        cy.get('@listen')
        cy.get('g.highcharts-legend-item.highcharts-column-series.highcharts-color-0.highcharts-series-0 > rect').first().trigger('mouseover')
        cy.get('g.highcharts-legend-item.highcharts-column-series.highcharts-color-0.highcharts-series-0 > rect').last().trigger('mouseover')



    })

    it('Export XLSX-C2934', ()=>{


        Cypress.on('fail', (error, runnable) => {

            return false
            
          })

        cy.visit('/admin/account/3854/brand_engagements/2816')  
       
        // cy.get('.action_buttons > .icon_button').click()
        cy.get('.action_buttons > .icon_button').click({force:true})
        cy.wait(10000)
        cy.get('.action_buttons > .icon_button').click()
        cy.get('.item_container > .ReportItemView > .item_row > .btn').first().click({force:true})
      
    
 
    })


    it('Engagements/Add tag-C2936', ()=>{


        cy.visit('/admin/account/3854/brand_engagements/2816')
        cy.wait(5000)
        cy.contains('[data-name="all"] > :nth-child(1) > .component_tab_text', 'All Engagements').click()
        cy.wait(5000)
        cy.get('.show_duplicates').click({force:true})
        cy.wait(5000)
        cy.get(':nth-child(2) > .hpanel > .panel-body > :nth-child(2) > .interaction > .btn-group > .btn-tag').last().click({force:true})
        cy.get('.select2-input').last().type('Taggy')
        cy.get('.primary_button').click()
        cy.get('[data-cy="toast_message"]').should('have.text', '\n\t\tTags saved\n\t\t\n\t')
    })


    it('Assign task-C2935', ()=>{


        cy.visit('/admin/account/3854/brand_engagements/2816')
        cy.wait(5000)
        cy.contains('[data-name="all"] > :nth-child(1) > .component_tab_text', 'All Engagements').click()
        cy.wait(5000)
        cy.get('.btn-assign').first().click()
        cy.get('.bbm-modal__section').find('.select2-choice > .select2-arrow').click()
        cy.contains('.select2-result-label','Santosh Kakade Demo Account').click({force:true})
        cy.get('.primary_button').click()
        cy.get('[data-cy="toast_message"]').should('have.text','\n\t\tTask assigned\n\t\t\n\t')

    })

    it('Respond To a Task-C2937',()=>{

        cy.visit('/admin/account/3854/brand_engagements/2816')
        cy.wait(5000)
        cy.contains('[data-name="all"] > :nth-child(1) > .component_tab_text', 'All Engagements').click()
        cy.wait(5000)
        cy.get('.interaction > .icon_button').click()
        cy.get('.input_reply_container > .rounded_3').type('Thank you to response')
        cy.get('.bbm-modal__bottombar > .btn_cancel').click()
        cy.wait(5000)



    })

    it('Resolve a task-C2938', ()=>{

        cy.visit('/admin/account/3854/brand_engagements/2816')
        cy.wait(5000)
        cy.contains('[data-name="all"] > :nth-child(1) > .component_tab_text', 'All Engagements').click()
        cy.wait(5000)
        cy.get('.notif_checkbox > .label_check').click()
        cy.get('.resolve_Selected').click()
        cy.get('.primary_button').click()

    })

    it('Archive a task-C2939', ()=>{

        cy.visit('/admin/account/3854/brand_engagements/2816')
        cy.wait(5000)
        cy.contains('[data-name="all"] > :nth-child(1) > .component_tab_text', 'All Engagements').click()
        cy.wait(5000)
        cy.get('.btn-archive').click()
        cy.get('.primary_button').click()
        cy.wait(5000)
        cy.get('[data-cy="toast_message"]').should('have.text','\n\t\tTask archived\n\t\t\n\t')

    })

    it('Unarchive a task-C', ()=>{

        cy.visit('/admin/account/3854/brand_engagements/2816')
        cy.wait(5000)
        cy.contains('[data-name="all"] > :nth-child(1) > .component_tab_text', 'All Engagements').click()
        cy.wait(5000)
        cy.get('.btn-archive').click()
        cy.get('.primary_button').click()
        cy.wait(5000)
        cy.get('[data-cy="toast_message"]').should('have.text','\n\t\tTask Unarchived\n\t\t\n\t')

    })

    it('Delete a Task-C2940', ()=>{

        cy.visit('/admin/account/3854/brand_engagements/2816')
        cy.wait(5000)
        cy.contains('[data-name="all"] > :nth-child(1) > .component_tab_text', 'All Engagements').click()
        cy.wait(5000)
        cy.get('.show_duplicates').click()
        cy.wait(5000)
        cy.get('.btn-delete').last().click()
        // :nth-child(17) > .hpanel > .panel-body > :nth-child(2) > .interaction > .btn-group > .btn-delete
        cy.contains('.primary_button', 'Confirm').click({force:true})


    })

    it('Undelete-C', ()=>{

        cy.visit('/admin/account/3854/brand_engagements/2816')
        cy.wait(5000)
        cy.contains('[data-name="all"] > :nth-child(1) > .component_tab_text', 'All Engagements').click()
        cy.wait(5000)
        cy.get('.show_duplicates').click()
        cy.wait(5000)
        cy.get('.btn-delete').last().click()
        cy.wait(4000)
        cy.contains('.primary_button', 'Confirm').click({force:true})


    })

    it('Resolve a Task-C2941', ()=>{

        cy.visit('/admin/account/3854/brand_engagements/2816')
        cy.wait(5000)
        cy.contains('[data-name="all"] > :nth-child(1) > .component_tab_text', 'All Engagements').click()
        cy.wait(5000)
        cy.get('.notif_checkbox > .label_check').first().click()
        cy.get('.resolve_Selected').click()
        cy.contains('.primary_button', 'Confirm').click({force:true})
        cy.wait(5000)


    })

    it('Resolve All-C2942', ()=>{

        cy.get('.resolve_All').click()
        cy.contains('.primary_button', 'Confirm').click({force:true})

    })
    

    it('Archive All-C2943', ()=>{

        cy.get('.archive_All').click()
        cy.contains('.primary_button', 'Confirm').click({force:true})
        cy.wait(5000)

    })

    it('Archive Selected-C2944',()=>{

        cy.get('.notif_checkbox > .label_check').first().click()
        cy.get('.archive_Selected').click()


    })

    it('elements on the panel in All Engagements Tab-C2945', ()=>{

        cy.visit('/admin/account/3854/brand_engagements/2816')
        cy.wait(7000)
        cy.contains('[data-name="all"] > :nth-child(1) > .component_tab_text', 'All Engagements').click()
        cy.wait(5000)
        cy.contains('.select2-chosen', 'Sentiment').should('be.visible')
        cy.contains('.select2-chosen', 'Network').should('be.visible')
        cy.contains('.select2-chosen', 'Locations/Groups').should('be.visible')
        cy.get('.date-range-container').should('be.visible')
        cy.get('[class="selector_button "][ref="selector_button"]').should('be.visible')
        cy.get('[class="filter_container keywords"][data-filter="keywords"]').should('be.visible')
        cy.get('[class="filter_container tags"][data-filter="tags"]').should('be.visible')


    })

    it('Elements on Sentiment-C2946', ()=>{

        cy.visit('/admin/account/3854/brand_engagements/2816')
        cy.wait(7000)
        cy.contains('[data-name="all"] > :nth-child(1) > .component_tab_text', 'All Engagements').click()
        cy.wait(5000)
        cy.contains('.select2-chosen', 'Sentiment').click()
        cy.wait(3000)
        cy.contains('[class="select2-result-label"]', 'Positive').click()
        cy.wait(5000)
        cy.contains('[title="Edit Sentiment"]', 'Positive').should('be.visible')
        cy.contains('.select2-chosen', 'Positive').click()
        cy.wait(3000)
        cy.contains('[class="select2-result-label"]', 'Negative').click()
        cy.wait(3000)
        cy.contains('[title="Edit Sentiment"]', 'Negative').should('be.visible')


    })

    it('Elements on Network-C2947', ()=>{

        cy.visit('/admin/account/3854/brand_engagements/2816')
        cy.wait(7000)
        cy.contains('[data-name="all"] > :nth-child(1) > .component_tab_text', 'All Engagements').click()
        cy.wait(5000)
        cy.get('[class="filter_container network"][data-filter="network"]').click()
        cy.contains('.select2-result-label','Facebook').click({force:true})
        cy.wait(5000)
        cy.get('[class="filter_container network"][data-filter="network"]').click()
        cy.contains('.select2-result-label','Twitter').click({force:true})

    })  

    it('DatePicker Data-C2948', ()=>{

        cy.visit('/admin/account/3854/brand_engagements/2816')
        cy.wait(7000)
        cy.contains('[data-name="all"] > :nth-child(1) > .component_tab_text', 'All Engagements').click()
        cy.wait(5000)
        cy.get('.date-range-container').click()
        cy.get('[data-range-key="All Time"]').click()
        cy.wait(5000)
        cy.get('.date-range-container').click()
        cy.get('[data-range-key="Last 6 months"]').click()



    })

    it('Panel - Locations/Groups-C2949,50', ()=>{

        cy.visit('/admin/account/3854/brand_engagements/2816')
        cy.wait(7000)
        cy.contains('[data-name="all"] > :nth-child(1) > .component_tab_text', 'All Engagements').click()
        cy.wait(5000)
        cy.contains('.select2-chosen', 'Locations/Groups').click()
        cy.wait(4000)
        cy.contains('.content_selector_element', 'AAAuto-Group-to-D').click()

    })

    it('Search-C2951', ()=>{

        cy.visit('/admin/account/3854/brand_engagements/2816')
        cy.wait(7000)
        cy.contains('[data-name="all"] > :nth-child(1) > .component_tab_text', 'All Engagements').click()
        cy.wait(4000)
        cy.get('[placeholder="Search..."]').type('Mocha')
        cy.wait(4000)

    })

    it('Tags-C2952', ()=>{

        cy.visit('/admin/account/3854/brand_engagements/2816')
        cy.wait(7000)
        cy.contains('[data-name="all"] > :nth-child(1) > .component_tab_text', 'All Engagements').click()
        cy.wait(4000)
        cy.get('[placeholder="Tags"]').type('Tag')
        cy.wait(4000)
        cy.get('.col-xs-9 > .attr > .tags > .tag').should('be.visible')
        cy.get('.col-xs-9 > .attr > .tags > .tag').should('have.text','Tag')

    })

    it('Rules Verification-C2953', ()=>{

        cy.visit('/admin/account/3854/brand_engagements/2816')
        cy.wait(7000)
        cy.get('[data-name="rules"]').click()
        cy.wait(5000)
        cy.get('.rules_counter').should('be.visible')
        cy.get('.btn_add_text').should('be.visible')
        cy.get('.btn_export').should('be.visible')
        cy.get('.warning_button').should('be.visible')
        cy.get('.label').should('be.visible')
        cy.get('.ButtonSubscription').should('be.visible')
        cy.get('.MonitoringRulesView').should('be.visible')
        
        
    })


    it('Create Rule-C2954', ()=>{


        cy.visit('/admin/account/3854/brand_engagements/2816')
        cy.wait(7000)
        cy.get('[data-name="rules"]').click()
        cy.wait(5000)
        cy.get('.btn_add_text').click()
        cy.get('.rule_name').type('AAA1')
        cy.get('.primary_button').click({force:true})


    })

    it('Pin a Rule-C2955', ()=>{

        cy.visit('/admin/account/3854/brand_engagements/2816')
        cy.wait(7000)
        cy.get('[data-name="rules"]').click()
        cy.wait(5000)
        cy.contains('.label', 'More ').click()
        cy.contains('span[title="rule14"]', 'rule14').siblings('input').check({force:true})
        cy.contains('.component_tab_text', 'rule14').should('be.visible')
      
        
    })

    it('Uncheck the pinned-C', ()=>{

        cy.contains('.label', 'More ').click()
        cy.contains('span[title="rule14"]', 'rule14').click({force:true})
        cy.wait(5000)

    })

    it('Edit rule-C2956', ()=>{

        cy.visit('/admin/account/3854/brand_engagements/2816')
        cy.wait(7000)
        cy.get('[data-name="rules"]').click()
        cy.wait(5000)
        cy.get('.btn_rule_edit').first().click()
        // :nth-child(1) > .hpanel > .panel-body > :nth-child(1) > .interaction > .btn-group > .btn_rule_edit
        cy.get('.rule_name').type('Edit')
        cy.get('.bbm-modal__bottombar > .active').click()
        cy.get('[data-cy="toast_message"]').should('have.text','\n\t\tRule updated!\n\t\t\n\t')

    })

    it('Delete A Rule-C2957', ()=>{

        cy.visit('/admin/account/3854/brand_engagements/2816')
        cy.wait(7000)
        cy.get('[data-name="rules"]').click()
        cy.wait(5000)
        cy.contains('p[class="rule-name"]', 'AAA1').parents('[class="panel-body"]').find('[aria-label="delete"]').click()
        cy.get('.primary_button').click({force:true})

    })

    it('Export Rules/Export specific-C2959', ()=>{

        
        Cypress.on('fail', (error, runnable) => {

            return false
            
          })

        cy.visit('/admin/account/3854/brand_engagements/2816')
        cy.wait(7000)
        cy.get('[data-name="rules"]').click()
        cy.wait(5000)
        cy.get('.btn_export').click()
        cy.wait(5000)
        
    })

    it('Export Specific-C2958',()=>{

        Cypress.on('fail', (error, runnable) => {

            return false
            
          })
        cy.visit('/admin/account/3854/brand_engagements/2816')
        cy.wait(7000)
        cy.get('[data-name="rules"]').click()
        cy.wait(5000)
        cy.contains('p[class="rule-name"]', 'Sneakrule24').parents('[class="panel-body"]').find('[aria-label="download"]').click()
        cy.wait(5000)
    })


    
})