// require('cypress-xpath')


let date = new Date()
let day = date.getDate();
let month = date.getMonth() + 1;

let Hdate = month + "" + day

let CompleteURL = 'https://sneaky.meetsoci.com/admin/account/3854/'

let LibName = 'Ads-create' + Hdate 

let test = ` "okay "okay" " `

const xMen = [
    'professorX',
    'beast',
    'colossus',
    'cyclops',
    'iceman',
    'wolverine',
];



function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}


describe('Ads', () => {

    beforeEach(() => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false

        })


        cy.intercept('GET', '/admin/account/3854/office/0/project/320406/ads_dashboard').as('ads')
        cy.intercept('GET', '/admin/account/3854/office/0/project/320406/ads_creatives').as('creatives')
        cy.intercept('GET', '/admin/account/3854/office/0/project/320406/ads_leads').as('leads')
        cy.intercept('GET', '/admin/account/3854/office/0/project/320406/ads_audiences').as('audience')
        cy.intercept('GET', '/admin/account/3854/office/0/project/320406/ads_management').as('management')

        cy.intercept('GET', '/api/admin/139546/get_libraries_accessible?*').as('afterCreative')
        cy.intercept('POST', '/api/admin/139546/get_libraries_accessible?*').as('libdrp')
        // alternative_ordering=1&type=creative&start=0&limit=20&permission=read&include_total=1&previousStart=0&previousLimit=20&currentView=visual&request_token=wnPmHMIvQ7Vgu52Y8oA8
        // request_token=wnPmHMIvQ7Vgu52Y8oA8
        cy.intercept('GET', '/api/ads_facebook/0/audiences?*').as('mgmtdrp')
        cy.intercept('POST','/api/ads_facebook/0/delivery_estimate?*').as('audres')
        // POST 200 /resources/1/2ce2c052c2?
        // GET 200 /api/ads_facebook/0/audiences?

    })

    describe('Dashboard ', () => {

        it('Insights - C2791', () => {


            cy.visit('/admin/account/3854/office/0/project/320406/ads_dashboard')
            cy.wait('@ads')
            cy.get('.date-range-container').click()
            cy.get('[data-range-key="Last Year"]').click()
            cy.get('.dashboard_controls').should('be.visible')
            cy.get('.AdsDashboardView').should('be.visible')
            cy.get('.stat_module_spend > .AdsMetricView > .metric_view_container').should('be.visible')
            cy.get('.stat_module_impressions > .AdsMetricView').should('be.visible')
            cy.get('.stat_module_engagement > .AdsMetricView > .metric_view_container').should('be.visible')
            cy.get('.stat_module_active_ads > .AdsMetricView').should('be.visible')
            cy.get('.AdsTopPerformingCreativesView').should('be.visible')



        })

    })

    describe('Library-creative', () => {



        it('Creatve Lib - C2793', () => {


            cy.visit('/admin/account/3854/office/0/project/320406/ads_creatives')
            cy.wait('@creatives')
            cy.get('.btn_add_library').click()
            cy.get('#name').type(LibName)
            cy.get('.primary_button').click()
            cy.wait('@afterCreative')

        })

        it('Add creative - C2794', () => {

            cy.visit('/admin/account/3854/office/0/project/320406/ads_creatives')
            cy.wait('@creatives')
            cy.contains('.select2-chosen', 'All libraries').click()
            cy.wait(4000)

            cy.wait('@libdrp')
            cy.get('#s2id_autogen2_search').type(LibName)
            cy.wait(4000)
            cy.get('[class="select2-result-label"][role="option"]').first().click()
            cy.get('.btn_add_creative').click()
            cy.get('.AdCreativeImageFormatView > .btn_container > .left-col > .label_check').click()
            cy.wait(4000)
            cy.contains('.primary_button', 'Save').click({ force: true })
            cy.wait(2000)

        })

        it('edit creative - C2795', () => {

            // cy.get('.creative_toolbar > .btn_secondary').first().click()
            cy.get(':nth-child(1) > .creative_toolbar > .btn_secondary').click()
            cy.wait(4000)
            cy.get('.AdCreativeImageFormatView > .text_input_container > :nth-child(1) > textarea').first().type('arsenal')
            cy.contains('.primary_button','Save').click({ force: true }) 

        })

        it('Transfer creative - C2796', () => {

            cy.visit('/admin/account/3854/office/0/project/320406/ads_creatives')
            cy.wait('@creatives')
            // cy.get(':nth-child(3) > .wrapper').click({force:true})
            cy.get('.wrapper > .section_image > .img').eq(2).click()
            // cy.reload()
            cy.wait(7000)
            cy.get('.creative_toolbar > :nth-child(3) > .btn_gray').first().click({force:true})
            // cy.get(':nth-child(1) > .creative_toolbar > .transfer').first().click()
            cy.wait(4000)
            cy.get('.label_checkbox').click()
            cy.contains('.select2-chosen', 'All libraries').click().type('...Lib17thfeb')
            cy.wait(2000)
            cy.contains('[class="name"]', '...Lib17thfeb').click()
            cy.get('.primary_button').click()


        })


    })

    describe('Leads', () => {

        it('Create Lead - C2801', () => {


            cy.visit('/admin/account/3854/office/0/project/320406/ads_leads')
            cy.wait('@leads')
            cy.get('[data-href="ads_leads"]').click()
            cy.get('.control_btn_group > .AdLeadsControlBarView > .icon_button').click()
            cy.get(':nth-child(1) > .row > input').type('Leadz' + Hdate + xMen[Math.floor(Math.random() * 6)])
            cy.get(':nth-child(5) > .header').click()
            cy.wait(4000)
            cy.get('.open > .content > :nth-child(2) > input').type(CompleteURL)
            cy.wait(4000)
            cy.get(':nth-child(7) > .header').click()
            cy.get(':nth-child(5) > input').type(CompleteURL)
            cy.get('.primary_button').click({ force: true })
            cy.wait(5000)

        })

        it.skip('Leads Form-Download - C2803', () => {

            Cypress.on('fail', (error, runnable) => {

                return false

            })


            cy.visit('/admin/account/3854/office/0/project/320406/ads_leads')
            cy.wait('@leads')
            cy.get('[data-href="ads_leads"]').click()

            cy.get('[class="icon_button export fa fa-download"][title="Export Leads"]').first().click()
            cy.wait(5000)
            cy.contains('Download All Leads').click()
            cy.get('.btn_export').click()
            

        })

        it('Leads Form-Copy - C2802', () => {

            cy.visit('/admin/account/3854/office/0/project/320406/ads_leads')
            cy.wait('@leads')
            cy.get('[data-href="ads_leads"]').click()


            cy.get('[class="icon_button copy fa fa-copy"][title="Copy Form"]').first().click({force:true})
            cy.wait(5000)
            cy.get('.primary_button').click()
            cy.get('.bbm-modal__icon_close').click()

        })

        it('Leads Form-Delete', () => {

            cy.visit('/admin/account/3854/office/0/project/320406/ads_leads')
            cy.wait('@leads')
            cy.get('[data-href="ads_leads"]').click()
            cy.wait(4000)
            cy.get('[class="icon_button delete fa fa-trash"][title="Delete Form"]').first().click()
            cy.wait(5000)
            cy.get('.primary_button').click()
            cy.get('.bbm-modal__icon_close').click()

        })

    })
    
        describe('Ads PLUS', () => {


            it('Audience - C2792', () => {

                cy.visit('/admin/account/3854/office/0/project/320406/ads_audiences')
                cy.wait('@audience')
                cy.get('.btn_create_audience').click()
                cy.get('.audience_name').type('Audience-' + Hdate)
                cy.wait('@audres')
                // cy.wait(4000)
                // cy.get('#s2id_autogen30 > .select2-choices').type('batman')
                // cy.xpath('/html/body/div[21]/ul/li[1]/div/div[2]').click()
                cy.get('.primary_button').click()
                cy.get('[data-cy="toast_message"]').should('have.text','\n\t\tAudience created!\n\t\t\n\t')


            })

            it('Management - C2797', () => {


                cy.visit('/admin/account/3854/office/0/project/320406/ads_management')
                cy.wait('@management')
                cy.get('.control_btn_group > .active').click()
                cy.get('.campaign > .field_input > .promote_input').type(Hdate + xMen[Math.floor(Math.random() * 6)])
                cy.contains('Custom Objective Per Ad').click()
                // cy.xpath('//*[contains(text(),"Reach")][@class="select2-result-label"]').click()
                cy.contains('[class="select2-result-label"][role="option"]', 'Reach').click()
                cy.contains('Use Location Default Audience').click()
                cy.wait('@mgmtdrp')
                cy.contains('[class="select2-result-label"][role="option"]', 'Audience-').first().click()
                cy.get('.prefixed_input > .promote_input').type('99')

                // cy.get('#select2-chosen-12').click()
                cy.contains('.select2-choice > .select2-chosen', 'All libraries').click()
                cy.wait(4000)
                // cy.contains('.select2-result-label','---tyest').click()              //'.content_selector_element'
                cy.get(':nth-child(1) > .front_grid > .PromoteAdCreativeFrontView').click()
                cy.get(':nth-child(1) > .post_checkbox > .label_check').click()
                cy.get('.bbm-modal__bottombar > .primary_button').click({force:true})
                cy.log('Ad created successfully')


            })

            it('Pause Ads - C2798', () => {

                cy.visit('/admin/account/3854/office/0/project/320406/ads_management')
                cy.wait('@management')
                cy.get('.dropdown').click()
                cy.get('.overflow_menu_item').click()


                // cy.exec('npx cypress run --spec "D:\Web\SOCi\cypress\e2e\Proper.cy.js"')
            })

       


    })



})