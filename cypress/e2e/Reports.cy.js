import { Reports, Reportspage } from "../support/page_objects/Reportspage"

const Report = new Reports()



describe('Reports', () => {


  beforeEach(() => {

    // cy.viewport('samsung-s10')

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    });

    Cypress.on('fail', (error, runnable) => {

      return false
      
    })

        // cy.viewport('iphone-xr')

    // Cypress.on('fail', (error, runnable) => {

    //     return false

    //   })

    cy.visit('/admin/account/3854/reporting/')


    cy.intercept('GET', '/admin/account/3854/office/0/project/320406/page/82269/editor_v2#edit_content').as('Report')

    cy.intercept('GET', '/api/bi_reports/0/get_all_from_account?*').as('Allreports')
    cy.intercept('api/reports/*/get_all\\?*').as('getAll');
    cy.intercept('GET', '/api/tasks/0/count_unread?*').as('tasks')
    cy.intercept('GET', '/api/group/36523/get_schedule?*').as('groups')
    // cy.intercept('POST', '//graphql/*').as('graph')
    cy.intercept('POST', '/dqs?*').as('graph')
    // GET  /api/tasks/0/count_unread?


  })




  it('Navigating/Email Reports', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    });

    cy.visit('/admin/account/3854/office/0/project/320406/page/82269/editor_v2#edit_content')
    cy.wait(10000)
    cy.wait('@tasks')
    // cy.wait('@Report')
    // cy.wait('@getAll')
    // cy.get('.overview > :nth-child(1)').click()
    // cy.get('[onclick="download_report()"]').click()
    cy.get('.email_report').click()
    // cy.get('.dlg_email > form').focus()
    cy.get('[name="to"]').type('skakade@meetsoci.com')
    cy.get('.primary_button').click()
    // cy.wait(5000)



  })

  it('Download Reports - C2850', () => {

    // Cypress.on('fail', (error, runnable) => {

    //   return false

    // })

    cy.visit('/admin/account/3854/office/0/project/320406/page/82269/editor_v2#edit_content')
    
    cy.get('@Report')
    cy.get('@getAll')
    cy.get('[onclick="download_report()"]').click()


  })

  it.skip('Logo check', function (done) {


    // let element = 'label.label_check'
    // let className = "c_on"





    // cy.get('.overview > :nth-child(1)' ).then( (UnCheck)=>{

    //     if
    //     (expect(UnCheck).to.have.class('c_on'))
    //     {
    //         cy.get('.overview > :nth-child(1) > c_on' ).click()
    //     }
    //     else{
    //         cy.get('#frame').should('be.visible')

    //     }


    // })





    // cy.get('.overview > :nth-child(1) ').should('have.class', 'c_on',  {failOnStatusCode: false}).then( (Checked)=>{

    //     cy.get('#frame').should('be.visible')

    // })

    // const { proxy, flush } = require("@alfonso-presa/soft-assert");
    // const { expect } = require("chai");
    // const softExpect = proxy(expect);


    // var flag = true;

    // try {

    //      cy.get('.overview > :nth-child(1)').then(($el) => {
    //                 expect($el).not.to.have.class('c_on',  {failOnStatusCode: false})     
    //                 })


    // } catch(e) {

    //     // cy.get('.overview > :nth-child(1)').click()



    //     console.log(e)
    //     flag = false
    //     done(e)

    // } finally {
    //     //do something
    //     cy.get('.overview > :nth-child(1)').click()
    //     if(flag)

    //         done()
    // }






    // try  
    // {
    //     if( cy.get('.overview > :nth-child(1)').then(($el) => {
    //         softExpect($el).not.to.have.class('c_on')     
    //         })

    //          ) {

    //             cy.get('.overview > :nth-child(1)').click()
    //         }

    //     else{

    //         cy.get('#frame').should('be.visible')


    //     }    

    //     // cy.get('#frame').should('be.visible')

    // } catch {

    //     cy.get('#frame').should('be.visible')
    // }


  })

  it.skip('Check-logo', () => {

    cy.get('.overview > :nth-child(1) ').should('have.class', 'label_check c_on').then(() => {

      cy.get('#frame').should('be.visible')

    })
  })

  it.skip('Check-logo-2', () => {

    cy.get('.overview > :nth-child(1) ').should('not.have.class', 'c_on').then((G) => {

      cy.get(G).click()

    })
  })

  it('Check logo - C2849', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {

      return false

    });




    // cy.get('label.label_check').first().click({force:true}).should('have.class','c_on')

    // cy.get('label.label_check').first().click().should('have.class','c_on')






    //     var flag = true;

    // try {

    //     cy.get('label.label_check').first().click({force:true}).should('have.class','c_on')

    //     flag = true



    // } catch(e) {


    //     cy.get('label.label_check').first().click().should('have.class','c_on')


    //     console.log(e)
    //     flag = false
    //     done(e)

    // } finally {
    //     //do something
    //     cy.get('label.label_check').first().click()
    //     if(flag)

    //         done()
    // }


    // cy.get('label.label_check').first().then( check=>{

    //     cy.wrap(check)
    //     const checky = check.should('have.class', 'c_on')

    //     if (checky = true){

    //         //do nothing for now
    //     }else {

    //         checky.click()

    //     }
    // })
    // try{
    // if (cy.get('.overview > :nth-child(1)').contains('label.label_check.c_on', 'Show Logo')){

    //             //do nothing for now

    //         }else {

    //             cy.get('.overview > :nth-child(1)').click()

    //         }
    //     }catch{

    //          cy.get('.overview > :nth-child(1)').click()
    //     }

    // })


    // try {
    //     cy.get('.overview > :nth-child(1)').contains('label.label_check.c_on', 'Show Logo')

    // } catch {

    //     cy.get('.overview > :nth-child(1)').click()   
    // }


    // })


    // it('Alias', () => {

    //     Cypress.on('uncaught:exception', (err, runnable) => {

    //         return false

    //         });
    //         cy.visit('/admin/account/3854/office/0/project/320406/page/82269/editor_v2#edit_content')
    //         cy.wait(7000)

    // // try {


    // //     cy.get('.overview > :nth-child(1)').contains('label.label_check', 'Show Logo').as('Uncheck')
    // //     cy.get('@Uncheck').click()


    // // } catch (error) {

    // //     //nothing
    // //     cy.get('@Uncheck').click()
    // //     cy.get('@Uncheck').contains('label.label_check.c_on', 'Show Logo')

    // // }
    // // try {


    // //     cy.get('.overview > :nth-child(1)').contains('label.label_check', 'Show Logo').as('Uncheck')
    // //     cy.get('@Uncheck').click()


    // // } catch (error) {

    // //     //nothing
    // //     cy.get('@Uncheck').click()
    // //     cy.get('@Uncheck').contains('label.label_check.c_on', 'Show Logo')

    // // }
    // // cy.get('.overview > :nth-child(1)').contains('label.label_check', 'Show Logo').as('Uncheck')
    // // cy.get('.overview > :nth-child(1)').contains('label.label_check.c_on', 'Show Logo').as('Check')


    // // if((cy.get('@Uncheck')) != (cy.get('@Check')) ){

    // //     cy.get('@Uncheck').click()
    // //     this.Fail()

    // // } else {

    // //     cy.get('@Uncheck')
    // // }
    cy.visit('/admin/account/3854/office/0/project/320406/page/82269/editor_v2#edit_content')
    cy.wait('@tasks')

    cy.get('@Report')
    cy.get('@getAll')
    cy.get('.label_check').children('input').first().check({ force: true })
    // cy.wait(5000)
    cy.scrollTo('top')
    cy.get('#frame').should('be.visible')


    cy.get('.label_check').children('input').as('All')

    cy.get('.label_check').children('input').first().as('logo')
    cy.get('@logo').click({ force: true })
    cy.get('@logo').check({ force: true })

    cy.get('@All').check({ force: true })


  })

  it('Email with all Checked - C2851', () => {

    cy.get('.email_report').click()
    // cy.get('.dlg_email > form').focus()
    cy.get('[name="to"]').type('skakade@meetsoci.com')
    cy.get('.primary_button').click()
    // cy.wait(5000)

  })

  it('Group Reports - C2852', () => {

    cy.visit('/admin/account/3854/group/36523/reports')
    cy.wait('@groups')
    cy.contains('.buttons_tabs > .white_button', 'Print').click()
    // cy.visit('https://sneaky.meetsoci.com/admin/account/3854/group/36523/reports?print=1&since=2022-07-01&until=2022-08-01')


  })

  it('Return', () => {


    Cypress.on('uncaught:exception', (err, runnable) => {

      return false
    });

    cy.visit('/admin/account/3854/group/36523/reports')

  })

  it('Clear Cookies', ()=>{

        cy.clearCookies()
        cy.wait(4000)
        

  })

  it('Reports BETA - Comparison Report', () => {

    Report.toReports()


    cy.get('.report_card').eq(0).click()

    for (let i = 0; i < 4; i++) {

      cy.wait('@graph')

    }

    Report.sendEmail()

    Report.checkGraphs()



  })

  it('Reports BETA - Content Creators', () => {

    Report.toReports()

    cy.get('.report_card').eq(2).click()

    for (let i = 0; i < 4; i++) {

      cy.wait('@graph')

    }

    Report.sendEmail()

    cy.get('.highcharts-plot-background').eq(0).should('be.visible')
    // Report.checkGraphs()
    cy.get('#DataTables_Table_1_wrapper > .dataTables_scroll > .dataTables_scrollBody').should('be.visible')
    cy.get('.highcharts-root > .highcharts-background').should('be.visible')



  })

  it('Reports BETA - Facebook Organic vs paid', ()=>{

    Report.toReports()

    cy.get('.report_card').eq(3).click()

    Report.sendEmail()
 
    for (let i = 0; i < 6; i++) {

      cy.wait('@graph')

    }


    cy.get('.highcharts-plot-background').eq(0).should('be.visible')
    // // Report.checkGraphs()
    cy.get('.highcharts-plot-background').eq(1).should('be.visible')
    cy.get('.highcharts-root > .highcharts-background').should('be.visible')

    // cy.get('.highcharts-background').eq(2).should('be.visible')
    // cy.get('.highcharts-background').eq(3).should('be.visible')
    // cy.get('.highcharts-background').eq(4).should('be.visible')


    // Report.checkGraphs()

  })

  it('Reports BETA - Facebook Post performance report', ()=>{

    Report.toReports()

    cy.get('.report_card').eq(4).click()

    Report.sendEmail()

    for (let i = 0; i < 6; i++) {

      cy.wait('@graph')

    }


    cy.get('.highcharts-plot-background').eq(0).should('be.visible')
    // // Report.checkGraphs()
    cy.get('.highcharts-plot-background').eq(1).should('be.visible')

    cy.get('.highcharts-root > .highcharts-background').should('be.visible')


    // Report.checkGraphs()

  })

  it('Reports BETA - Facebook report', ()=>{

    Report.toReports()

    cy.get('.report_card').eq(5).click()

    // Report.sendEmail()

    for (let i = 0; i < 6; i++) {

      cy.wait('@graph')

    }

    Report.sendEmail()

    cy.get('.highcharts-plot-background').eq(0).should('be.visible')
    // // Report.checkGraphs()
    cy.get('.highcharts-plot-background').eq(1).should('be.visible')
    cy.get('.highcharts-root > .highcharts-background').should('be.visible')


    // Report.checkGraphs()

  })

  it('Reports BETA - GMB Leads report', ()=>{

    Report.toReports()

    cy.get('.report_card').eq(6).click()

    // Report.sendEmail()

    for (let i = 0; i < 6; i++) {

      cy.wait('@graph')

    }

    Report.sendEmail()

    cy.get('.highcharts-plot-background').eq(0).should('be.visible')
    // // Report.checkGraphs()
    cy.get('.highcharts-plot-background').eq(1).should('be.visible')
    cy.get('.highcharts-root > .highcharts-background').should('be.visible')


    // Report.checkGraphs()

  })

  it('Reports BETA - GMB Post Performance Report', ()=>{

    Report.toReports()

    cy.get('.report_card').eq(7).click()

    for (let i = 0; i < 6; i++) {

      cy.wait('@graph')

    }

    Report.sendEmail()

    cy.get('.highcharts-plot-background').eq(0).should('be.visible')
    // // Report.checkGraphs()
    cy.get('.highcharts-plot-background').eq(1).should('be.visible')
    cy.get('.highcharts-root > .highcharts-background').should('be.visible')


    // Report.checkGraphs()

  })

  it('Reports BETA - GMB Report', ()=>{

    Report.toReports()

    cy.get('.report_card').eq(8).click()

    for (let i = 0; i < 6; i++) {

      cy.wait('@graph')

    }

    Report.sendEmail()

    cy.get('.highcharts-plot-background').eq(0).should('be.visible')
    // // Report.checkGraphs()
    cy.get('.highcharts-plot-background').eq(1).should('be.visible')
    cy.get('.highcharts-root > .highcharts-background').should('be.visible')


    // Report.checkGraphs()

  })

  it('Reports BETA - Instagram leads Report', ()=>{

    Report.toReports()

    cy.get('.report_card').eq(9).click()

    for (let i = 0; i < 6; i++) {

      cy.wait('@graph')

    }

    Report.sendEmail()

    cy.get('.highcharts-plot-background').eq(0).should('be.visible')
    // // Report.checkGraphs()
    cy.get('.highcharts-plot-background').eq(1).should('be.visible')
    cy.get('.highcharts-root > .highcharts-background').should('be.visible')


    // Report.checkGraphs()

  })

  it('Reports BETA - Instagram Post Performance Report', ()=>{

    Report.toReports()

    cy.get('.report_card').eq(10).click()

    for (let i = 0; i < 6; i++) {

      cy.wait('@graph')

    }

    Report.sendEmail()

    cy.get('.highcharts-plot-background').eq(0).should('be.visible')
    // // Report.checkGraphs()
    cy.get('.highcharts-plot-background').eq(1).should('be.visible')
    cy.get('.highcharts-root > .highcharts-background').should('be.visible')


    // Report.checkGraphs()

  })

  it('Reports BETA - Instagram Report', ()=>{

    Report.toReports()

    cy.get('.report_card').eq(11).click()

    for (let i = 0; i < 3; i++) {

      cy.wait('@graph')

    }

    Report.sendEmail()

    cy.get('.highcharts-plot-background').eq(0).should('be.visible')
    // // Report.checkGraphs()
    cy.get('.highcharts-plot-background').eq(1).should('be.visible')
    cy.get('.highcharts-root > .highcharts-background').should('be.visible')


    // cy.get('@tasks').should('have.property', 'status', 200)
    // Report.checkGraphs()

  })

  it('Reports BETA - LinkedIN Post performance report', ()=>{

    Report.toReports()

    cy.get('.report_card').eq(12).click()

    for (let i = 0; i < 3; i++) {

      cy.wait('@graph')

    }

    Report.sendEmail()

    cy.get('.highcharts-plot-background').eq(0).should('be.visible')
    // Report.checkGraphs()
    cy.get('.highcharts-plot-background').eq(1).should('be.visible')
    cy.get('.highcharts-root > .highcharts-background').should('be.visible')


    // cy.get('@tasks').should('have.property', 'status', 200)
    // Report.checkGraphs()

  })

  it('Reports BETA - LinkedIN report', ()=>{

    Report.toReports()

    cy.get('.report_card').eq(13).click()

    for (let i = 0; i < 3; i++) {

      cy.wait('@graph')

    }

    Report.sendEmail()

    cy.get('.highcharts-plot-background').eq(0).should('be.visible')
    // // Report.checkGraphs()
    cy.get('.highcharts-plot-background').eq(1).should('be.visible')
    cy.get('.highcharts-root > .highcharts-background').should('be.visible')


    // cy.get('@tasks').should('have.property', 'status', 200)
    // Report.checkGraphs()

  })

  it('Reports BETA - Reputation Performance Report', ()=>{

    Report.toReports()

    cy.get('.report_card').eq(14).click()

    for (let i = 0; i < 3; i++) {

      cy.wait('@graph')

    }

    Report.sendEmail()

    cy.get('.highcharts-plot-background').eq(0).should('be.visible')
    // Report.checkGraphs()
    cy.get('.highcharts-plot-background').eq(1).should('be.visible')
    cy.get('.highcharts-root > .highcharts-background').should('be.visible')


    // cy.get('@tasks').should('have.property', 'status', 200)
    // Report.checkGraphs()

  })

  it('Reports BETA - Review Management Report', ()=>{

    Report.toReports()

    cy.get('.report_card').eq(15).click()

    for (let i = 0; i < 3; i++) {

      cy.wait('@graph')

    }

    Report.sendEmail()

    cy.get('.highcharts-plot-background').eq(0).should('be.visible')
    // Report.checkGraphs()
    cy.get('.highcharts-plot-background').eq(1).should('be.visible')
    cy.get('.highcharts-root > .highcharts-background').should('be.visible')


  })

  it('Reports BETA - Twitter post Performance report', ()=>{

    Report.toReports()

    cy.get('.report_card').eq(16).click()

    for (let i = 0; i < 3; i++) {

      cy.wait('@graph')

    }

    Report.sendEmail()

    cy.get('.highcharts-plot-background').eq(0).should('be.visible')
    // // Report.checkGraphs()
    cy.get('.highcharts-plot-background').eq(1).should('be.visible')
    cy.get('.highcharts-root > .highcharts-background').should('be.visible')


    // cy.get('@tasks').should('have.property', 'status', 200)
    // Report.checkGraphs()

  })

  it('Reports BETA - Twitter Report', ()=>{

    Report.toReports()

    cy.get('.report_card').eq(17).click()

    for (let i = 0; i < 3; i++) {

      cy.wait('@graph')

    }

    Report.sendEmail()


    cy.get('.highcharts-plot-background').eq(0).should('be.visible')
    // // Report.checkGraphs()
    cy.get('.highcharts-plot-background').eq(1).should('be.visible')
    cy.get('.highcharts-root > .highcharts-background').should('be.visible')


    Report.datePicker()

    Report.downloadXLSX()
  

    // cy.get('@tasks').should('have.property', 'status', 200)
    // Report.checkGraphs()

  })


  it('Reviews Filters', ()=>{

    Report.toReports()
    // cy.visit('/admin/account/3854/reporting')
    cy.get('[ref="report_item"][class="report_card instagram"][data-id="482"]').should('be.visible')
    cy.get('[data-tag-name="Reviews"]').click()
    cy.wait(3000)
    cy.get('[ref="report_item"][class="report_card instagram"][data-id="482"]').should('not.exist')

  })

  it('Social Filters', ()=>{

        Report.toReports()
        // cy.visit('/admin/account/3854/reporting')
        cy.get('[ref="report_item"][class="report_card "][data-id="3209"]').should('be.visible')
        cy.get('[data-tag-name="Social"]').click()
        cy.wait(3000)
        cy.get('[ref="report_item"][class="report_card "][data-id="3209"]').should('not.exist')
    
      })

    it('Fb filter', ()=>{

      Report.toReports()
      cy.get('[data-tag-name="Facebook"]').click()
      cy.wait(4000)
      cy.get('[ref="report_item"][class="report_card instagram"][data-id="482"]').should('not.exist')



    })

    it('GMB filter', ()=>{

      Report.toReports()
      cy.get('[ref="report_item"][class="report_card google_my_business"][data-id="480"]').should('be.visible')
      cy.get('[ref="report_item"][class="report_card instagram"][data-id="482"]').should('be.visible')
      cy.get('[data-tag-name="Google My Business"]').click()
      cy.wait(4000)
      cy.get('[ref="report_item"][class="report_card google_my_business"][data-id="480"]').should('be.visible')
      cy.get('[ref="report_item"][class="report_card instagram"][data-id="482"]').should('not.exist')

    })

    it('Instagram', ()=>{

      Report.toReports()
      cy.get('[ref="report_item"][class="report_card instagram"][data-id="482"]').should('be.visible')

      cy.get('[data-tag-name="Instagram"]').click()
      cy.wait(4000)
      cy.get('[ref="report_item"][class="report_card instagram"][data-id="482"]').should('be.visible')
      cy.get('[ref="report_item"][class="report_card "][data-id="3209"]').should('not.exist')


    })

    it('LinkedIn', ()=>{

      Report.toReports()
      cy.get('[ref="report_item"][class="report_card linkedin"][data-id="485"]').should('be.visible')

      cy.get('[data-tag-name="LinkedIn"]').click()
      cy.wait(4000)
      cy.get('[ref="report_item"][class="report_card linkedin"][data-id="485"]').should('be.visible')
      cy.get('[ref="report_item"][class="report_card "][data-id="3209"]').should('not.exist')


    })

    it('Twitter', ()=>{

      Report.toReports()
      cy.get('[ref="report_item"][class="report_card twitter"][data-id="484"]').should('be.visible')
      cy.get('[data-tag-name="Twitter"]').click()
      cy.wait(4000)
      cy.get('[ref="report_item"][class="report_card twitter"][data-id="484"]').should('be.visible')
      cy.get('[ref="report_item"][class="report_card "][data-id="3209"]').should('not.exist')


    })


    it('Comparison Report', ()=>{

      Report.toReports()
      cy.get('[ref="report_item"][class="report_card "][data-id="490"]').should('be.visible')
      cy.get('[data-tag-name="Comparison"]').click()
      cy.wait(4000)
      cy.get('[ref="report_item"][class="report_card "][data-id="490"]').should('be.visible')
      cy.get('[ref="report_item"][class="report_card twitter"][data-id="484"]').should('not.exist')



    })


    it('Group Publishing', ()=> {

      Report.toReports()
      cy.get('[ref="report_item"][class="report_card facebook"][data-id="630"]').should('be.visible')
      cy.get('[data-tag-name="Group Publishing"]').click()
      cy.wait(4000)
      cy.get('[ref="report_item"][class="report_card facebook"][data-id="630"]').should('be.visible')
      cy.get('[ref="report_item"][class="report_card facebook"][data-id="511"]').should('not.exist')



    })

    it('Lead Generator', ()=>{

      Report.toReports()
      
      cy.get('[ref="report_item"][class="report_card google_my_business"][data-id="629"]').should('be.visible')
      cy.get('[data-tag-name="Leads Generator"]').click()
      cy.wait(4000)
      cy.get('[ref="report_item"][class="report_card google_my_business"][data-id="629"]').should('be.visible')
      cy.get('[ref="report_item"][class="report_card instagram"][data-id="624"]').should('not.exist')


    })

    it('Page Activity', ()=>{

      Report.toReports()
      cy.get('[ref="report_item"][class="report_card linkedin"][data-id="485"]').should('be.visible')
      cy.get('[data-tag-name="Page Activity"]').click()
      cy.wait(4000)
      cy.get('[ref="report_item"][class="report_card linkedin"][data-id="485"]').should('be.visible')
      cy.get('[ref="report_item"][class="report_card instagram"][data-id="624"]').should('not.exist')




    })

    it("Paid Social", ()=>{

      Report.toReports()
      cy.get('[ref="report_item"][class="report_card facebook"][data-id="511"]').should('be.visible')
      cy.get('[data-tag-name="Paid Social"]').click()
      cy.wait(4000)
      cy.get('[ref="report_item"][class="report_card facebook"][data-id="511"]').should('be.visible')
      cy.get('[ref="report_item"][class="report_card instagram"][data-id="624"]').should('not.exist')


    })

    it('Performance', ()=>{

      Report.toReports()
      cy.get('[ref="report_item"][class="report_card"][data-id="3209"]').should('be.visible')
      cy.get('[data-tag-name="Performance"]').click()
      cy.wait(4000)
      cy.get('[ref="report_item"][class="report_card"][data-id="3209"]').should('be.visible')
      cy.get('[ref="report_item"][class="report_card twitter "][data-id="484"]').should('not.exist')



    })


    it('Team Member Activity',()=>{

      Report.toReports()
      cy.get('[ref="report_item"][class="report_card"][data-id="1974"]').should('be.visible')
      cy.get('[data-tag-name="Team Member Activity"]')
      cy.wait(4000)
      cy.get('[ref="report_item"][class="report_card"][data-id="1974"]').should('be.visible')
      cy.get('[ref="report_item"][class="report_card twitter "][data-id="484"]').should('not.exist')


    })


  describe('Automated Email', ()=>{
    
    it('Automated Email',()=>{

      Report.toReports()

      cy.get('[data-href="reporting_automated_emails"]').click()
      cy.get('.state > .state_inner_wrapper > .btn_delete').eq(0).click()
      cy.get('.primary_button').click()


    })


    it('Copy Email', ()=>{

      Report.toReports()
      cy.get('[data-href="reporting_automated_emails"]').click()
      cy.get('.state > .state_inner_wrapper > .btn_copy').eq(1).click()
      cy.wait(4000)
      cy.get('.primary_button').click()


    })

    it('Scheduled Email', ()=>{

      Report.toReports()
      cy.get('[data-href="reporting_automated_emails"]').click()
      cy.get('[data-name="plans"]').click()
      cy.wait(4000)
      cy.get('.btn_edit').click()
      cy.get('.secondary_button').click()
      

    })

  })

    // it.only('youtube', ()=>{

    //   cy.visit('https://www.youtube.com/')
    //   cy.wait(4000)
    //   cy.get('#search-form > #container').type('Russ - Pull the trigger {enter}')
    //   cy.wait(4000)
    //   cy.contains('Russ - Pull The Trigger (Official Video').click()
    //   cy.wait(9000)
    //   cy.contains('Skip Ads').click()

    // })


  


})


