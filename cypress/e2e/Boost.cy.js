// require('cypress-xpath')

let date = new Date()
let day = date.getDate();
let month = date.getMonth()+1;

let Hdate = month + "" + day 

describe('Boost', ()=> {


    beforeEach(() => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false

        })

    })


    it('Insights - C2804', ()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
          
            return false
            });

        cy.visit('/admin/account/3854/office/0/project/320406/boost_dashboard')
        cy.wait(5000)
        cy.get('.AdsRecommendationsContainerView > .ads_content_container').should('be.visible')
        cy.get('.BoostDashboardView').should('be.visible')
        cy.get('.dashboard_controls').should('be.visible')

        
    })

    it('Update Insights', ()=>{

        cy.get('.date-range-container').click()
        cy.get('[data-range-key="Last 90 Days"]').click()
        cy.get('.AdsRecommendationsContainerView > .ads_content_container').should('be.visible')

    })

    it('Create Audience - C2805', ()=>{

        Cypress.on('uncaught:exception', (err, runnable) => {
        
            return false
            });

        cy.visit('/admin/account/3854/office/0/project/320406/boost_audiences')
        cy.wait(5000)
        cy.get('.btn_create_audience').click()
        cy.get('.audience_name').type('Audience-'+ Hdate)
        cy.wait(4000)
        // cy.get('#s2id_autogen30 > .select2-choices').type('batman')
        // cy.xpath('/html/body/div[21]/ul/li[1]/div/div[2]').click()
        cy.get('.primary_button').click()


    })

    it('Delete Audience - C2806', ()=>{

        cy.visit('/admin/account/3854/office/0/project/320406/boost_audiences')
        cy.wait(7000)
        cy.get(':nth-child(3) > .AdItemView > .item_row > .action > .label_check').click()
        cy.get('.delete').click()
        cy.get('.primary_button').click()

    })


    it('Navigating to Boost/Edit Audience ', ()=>{

        Cypress.on('uncaught:exception', (err, runnable) => {
           
            return false
            });
        

        cy.visit('/admin/account/3854/office/0/project/320406/boost_audiences')
            cy.wait(8000)
        //    cy.get('div[data-href="boost"] > .section-heading > .section-label').should('contain.text', 'Boost')
        //    cy.wait(4000)
        //    cy.get('[data-href="boost_audiences"]').click()
           cy.get('.AdItemView > .item_row > .action > .label_check').eq(4).click()
           cy.get('.edit').click()
           cy.wait(4000)
           cy.get('.audience_name').type('editBoostaud')
           cy.wait(4000)
           cy.get('.primary_button').click()

    })
    

    it('Management - C2807', ()=>{


        cy.visit('/admin/account/3854/office/0/project/320406/boost_management')
        cy.wait(5000)
        cy.get('[data-href="boost_management"]').click()
        cy.wait(4000)
        cy.get('.control_btn_group > .active').click()
        cy.wait(4000)
        cy.get('.campaign > .field_input > .promote_input').type('Batman')
        // cy.contains('Custom Objective Per Ad').click()
        // cy.xpath('//*[contains(text(),"Reach")][@class="select2-result-label"]').click()
        cy.contains('.select2-choice','Use Location Default Audience').click()
        cy.wait(4000)
        // cy.xpath("//*[contains(text(),'Audience')]").first().click({force:true})
        cy.contains('[class="select2-result-label"][role="option"]', 'Audience-').first().click()
        cy.get('.prefixed_input > .promote_input').type('99')
        cy.get('.date-range-container').click()
        cy.get('[data-range-key="Last 30 Days"]').click()
        cy.get(':nth-child(1) > .post_checkbox > .label_check').click()
        cy.get('.primary_button').click()
        cy.wait(5000)
        cy.log('Boost Created Successfully !')

    })

    it('Pause Ads', ()=>{

        cy.visit('/admin/account/3854/office/0/project/320406/boost_management')
        cy.wait(6000)
        cy.get('.dropdown').click()
        cy.get('.overflow_menu_item').click()
        cy.wait(10000)


    })

    it('Notifications - C2808', ()=>{

        cy.visit('/admin/account/3854/office/0/project/320406/boost_notif')
        cy.wait(6000)
        cy.get('.single_notif_container').first().should('be.visible')


    })

    it('Resolve Notifications - C2809', ()=>{

        cy.visit('/admin/account/3854/office/0/project/320406/boost_notif')
        cy.wait(6000)
        cy.get('.resolve-selected > .label_check').click()
        cy.wait(4000)
        cy.get('.resolve_Selected').should('be.enabled')
        cy.get('.resolve_Selected').click()
        cy.get('.secondary_button').click()
        cy.get('.resolve_All').click()
        cy.get('.primary_button').click()



    })




})

