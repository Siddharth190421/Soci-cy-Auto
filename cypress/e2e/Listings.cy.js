import {ListingPage} from "../support/page_objects/Listings"

const Listing = new ListingPage()

describe('Listings', ()=>{

    beforeEach(() => {

        Cypress.on('uncaught:exception', (err, runnable) => {     
            return false

        })
      
    })


    it('Enable on Account Level - C2991', ()=>{

        cy.visit('/admin/account/3854')
        cy.wait(5000)
        Listing.settingsGear()
        cy.get('.btn_enable_all_listings').click()
        cy.get('.DlgUtilityConfirm > .bbm-modal > .bbm-modal__bottombar > .primary_button').click()
        cy.get('[data-cy="toast_type"] > [data-cy="toast_message"]').should('have.text','\n\t\tListings successfully enabled for all locations.\n\t\t\n\t')
    })

    it('Disable Listing - C2992', ()=>{

        Listing.settingsGear()
        cy.get('.btn_disable_all_listings').click()
        cy.get('.DlgUtilityConfirm > .bbm-modal > .bbm-modal__bottombar > .primary_button').click()
        cy.get('[data-cy="toast_type"] > [data-cy="toast_message"]').should('have.text','\n\t\tListings successfully disabled for all locations.\n\t\t\n\t')


    })

    it('Auto Sync Enable All - C2993', ()=>{

        Listing.settingsGear()
        cy.get('.btn_enable_all_autosync').click()
        cy.get('.DlgUtilityConfirm > .bbm-modal > .bbm-modal__bottombar > .primary_button').click()
    })

    it('Auto Sync Disable All - C2994', ()=>{

        Listing.settingsGear()
        cy.get('.btn_disable_all_autosync').click()
        cy.get('.DlgUtilityConfirm > .bbm-modal > .bbm-modal__bottombar > .primary_button').click()
    })

    it('Pause Auto Sync - C2995', ()=>{

        Listing.settingsGear()
        cy.get('.autosync_controls > .bootstrap_checkbox').children('input').check({force:true})
    })

    it('Listing Account level Dash - C2996', ()=>{

        Listing.settingsGear()
        //Step 1 Enable all listing
        cy.get('.btn_enable_all_listings').click()
        cy.get('.DlgUtilityConfirm > .bbm-modal > .bbm-modal__bottombar > .primary_button').click()

        Listing.gotoListingAccount()

        cy.get('.highcharts-background').should('be.visible')
        cy.get('[style="--section-size:410px; --grid-gap:10px; --grid-template-columns:2.02fr 1fr 1fr;"] > .subsections > :nth-child(3) > :nth-child(1) > .BiModulesModule > .BiModulesTypesBase').should('be.visible')
        cy.get('[style="--section-size:410px; --grid-gap:10px; --grid-template-columns:2.02fr 1fr 1fr;"] > .subsections > :nth-child(4) > :nth-child(1) > .BiModulesModule > .BiModulesTypesBase').should('be.visible')
        cy.get(':nth-child(3) > :nth-child(2) > .BiModulesModule > .BiModulesTypesBase').should('be.visible')
        cy.get(':nth-child(4) > :nth-child(2) > .BiModulesModule > .BiModulesTypesBase').should('be.visible')
        cy.get(':nth-child(5) > .LayoutDropAreaView > .BiModulesModule > .BiModulesTypesBase').should('be.visible')
        cy.get('[style="--section-size:94px; --grid-gap:10px; --grid-template-columns:1fr;"] > .subsections > .LayoutSubSectionView > .LayoutDropAreaView > .BiModulesModule > .BiModulesTypesBase').should('be.visible')
        cy.get('.btn_action_bulk_edit').should('be.visible')
        cy.get('.multi_value_container').should('be.visible')
        // cy.get('#DataTables_Table_3_wrapper').should('be.visible')
        cy.get('.dataTables_scrollBody').should('be.visible')

    })

    it('Enable on location level- C2997', ()=>{

        Listing.locationEdit()
        cy.contains('Features').click()
        cy.contains('.label_check','Listings').children('input').check({force:true})
        cy.get('.btn_save').click()


    }) //feature broken rn

    it('Auto Sync - C2998', ()=>{

        Listing.locationEdit()
        cy.get('.switch_inner').click()

    })

    it.only('Listing on Loactions Dash - C2999', ()=>{

        cy.visit('/admin/account/3854/office/0/project/320406/listings_overview/3182')
        cy.wait(6000)

        cy.get('.highcharts-background').should('be.visible')
       
        cy.get('[style="--section-size:386px; --grid-gap:10px; --grid-template-columns:2.03fr 1fr 1fr;"] > .subsections > :nth-child(3) > :nth-child(1) > .BiModulesModule > .BiModulesTypesBase').should('be.visible')
       
        cy.get('.dataTables_scrollBody').should('be.visible')

    })




})