import 'cypress-file-upload';
import {survey} from "../support/page_objects/survey"

const Survey = new survey();

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

  
  const xMen = [
    'professorX',
    'beast',
    'colossus',
    'cyclops',
    'iceman',
    'wolverine',
    ];
    

describe('Survey', ()=>{

    beforeEach(() => {

        Cypress.on('uncaught:exception', (err, runnable) => {     

            return false

        })




        cy.intercept('GET', '/admin/account/3854/surveys_insights/3153').as('insights')
        // cy.intercept('POST', '/graphql?*').as('pg')
        // cy.intercept('POST', '/dqs?_op=SurveyList').as('pg')
             // cy.intercept('POST', '/dqs?_op=SurveyList').as('pg')
        cy.intercept('POST', '/dqs?*').as('pg')
        cy.intercept('GET', '/admin/account/3854/office/0/project/320406/').as('Smoke-21')
        // /admin/account/3854/office/0/project/320406/surveys_list/3164

      
    })


    it('Insights Location level - C2975', ()=>{

        cy.visit('/admin/account/3854/surveys_insights/3153')
        cy.get('[data-cy="Surveys"] > .section-heading > .section-label').click()
        cy.wait(6000)
        cy.wait('@insights')
        cy.wait(6000)

        // cy.wait('@pg')
        cy.get('.highcharts-series.highcharts-series-0 > .highcharts-point').first().trigger('mouseover')
        cy.get('[class="highcharts-point highcharts-color-1"]').should('be.visible')
        cy.get('.SurveysRecentNegativeReviewsView').should('be.visible')

        

    })

    it('Survey on Account level - C2976', ()=>{

        cy.visit('/admin/account/3854/surveys_list/3164')
        cy.get('[data-cy="Surveys"] > .section-heading > .section-label').click()
        // cy.wait('@pg')
        cy.wait(6000)

        cy.get('.dataTables_scrollBody').should('be.visible')

    })

    it('Survey on loc level - C2977', ()=>{

        cy.visit('admin/account/3854/office/0/project/320406/surveys_insights/3155')
        cy.get('[data-cy="Surveys"] > .section-heading > .section-label').click()
        // cy.wait('@pg')
        cy.wait(6000)

        cy.get('.system_contents').should('be.visible')
        
    })


    it('Go to locations ', ()=>{

        cy.visit('/admin/account/3854/office/0/project/320406/')
        cy.wait('@Smoke-21')
        cy.url().should('include', '3854')
        cy.get('.admin_logo').should('be.visible')
        cy.title().should('eq','SOCi - Social Media Management... Solved')

    })
    

    it('open Survey', ()=>{

        
        cy.get('div[data-href="surveys"] > .section-heading > .section-label').click()
        // cy.wait('@pg') 
        cy.wait(6000)

        cy.url().should('include', 'surveys')
        cy.get('[data-href="surveys_list"]').click()
        

    })

    it('Create survey- C2978', ()=>{

        const filepath = 'tesla.jpg'
        cy.visit('/admin/account/3854/office/0/project/320406/surveys_list/3164')
        cy.get('[data-href="surveys_list"]').click()
        cy.wait(7000)
        // cy.wait('@pg')
        cy.get('.control_wrapper > .icon_button').click()
        cy.get('.survey_fields > :nth-child(1) > input').type('Survey' + xMen[Math.floor(Math.random() * 6)])
        cy.get(':nth-child(2) > .supports_dynamic_text').type('skakade@meetsoci.com')
        cy.get(':nth-child(3) > .supports_dynamic_text').type('Subject test')
        // cy.get('.upload_logo_container > .white_button').selectFile(filepath)
        cy.get('.upload_logo_container > .white_button').siblings('input[type="file"]').attachFile(filepath)
        // cy.wait('@pg')     
        // cy.get('label > input').click()
        cy.get(':nth-child(6) > .supports_dynamic_text').type('Survey-Foot')
        cy.contains('.bbm-modal__bottombar > .primary_button','Save').click({force:true}) 
        // cy.wait(5000)
        // cy.wait('@pg') 
        
    })

    it('Create Campaign - C2979, 80', ()=>{


        cy.visit('/admin/account/3854/office/0/project/320406/surveys_list/3164')
        cy.get('[data-href="surveys_list"]').click()
        cy.wait(7000)
        // cy.wait('@pg') 
        Survey.createCampaign()
        
        
    })

    it('Verify rated Campaign- C2983', ()=>{

        cy.visit('/admin/account/3854/surveys_list/3158')
        cy.get('[data-href="surveys_list"]').click()
        cy.get('.truncated').first().click()
        cy.wait(7000)
        // cy.wait('@pg')
        cy.get('.SurveyReportView').should('be.visible')

    })

    it('Verify Localize feature - C2984', ()=> {

        cy.visit('/admin/account/3854/surveys_list/3158')
        cy.get('[data-href="surveys_list"]').click()
        cy.wait(5000) 
        // cy.wait('@pg')
        cy.get('.control_wrapper > .icon_button').click()
        cy.wait(4000)
        cy.contains('.select2-chosen', 'Localize').click()
        cy.contains('{%Address Line 1}').click()


    })

    it('Upload CSV - C2985', ()=>{

        cy.visit('/admin/account/3854/surveys_list/3158')
        cy.get('[data-href="surveys_list"]').click()
        // cy.wait('@pg')
        cy.wait(5000)
        cy.get('.ActionButtonsColumn > .white_button').first().click({force:true})
        cy.get('.csv_file_button').siblings('input').attachFile('survey.csv')
        cy.get('.bbm-modal__bottombar > .secondary_button').click()

    })


    it('Clear downloads folder', () => {

        cy.exec('del /q cypress\\downloads\\.', { log: true, failOnNonZeroExit: false });
      
      })


})


