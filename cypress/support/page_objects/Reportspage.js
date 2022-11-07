export class Reports{


    toReports(){

    cy.visit('/admin/account/3854')
    cy.wait('@tasks')
    cy.contains('.section-label', 'Reports BETA').click()
    cy.wait('@Allreports')

    }

    sendEmail(){
    
    cy.wait(4000)
    cy.get('.fa-envelope').click({force:true})
    cy.wait(4000)
    cy.get('.report_schedule_name').type('Report-1')
    cy.get('.bbm-modal__section').find('.select2-choices').type('skakade@meetsoci.com {enter}')
    cy.get('.bbm-modal__bottombar').find('.primary_button').click()

    }

    checkGraphs(){

    cy.get('[style="--section-size:429px; --grid-gap:10px; --grid-template-columns:1.8fr 1fr;"] > .title > .title_container > .BiModulesTypesBase').should('be.visible')
    cy.get('.system_contents').should('be.visible')
    cy.get('.highcharts-background').should('be.visible')
    cy.get('.highcharts-plot-background').eq(0).should('be.visible')
    cy.get('.highcharts-plot-background').eq(1).should('be.visible')
    cy.get('.highcharts-plot-background').eq(2).should('be.visible')
    cy.get('.highcharts-plot-background').eq(3).should('be.visible')
    cy.get('.highcharts-root > .highcharts-background').should('be.visible')


    }
}