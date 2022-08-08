export class ListingPage{

    settingsGear(){

        cy.visit('/admin/account/3854')
        cy.wait(6000)
        cy.get('.project_controls > .icon_button > .fa').click()

    }

    enableAllListings(){

        cy.wait(5000)
        cy.get('.btn_enable_all_listings').click()
        cy.get('.DlgUtilityConfirm > .bbm-modal > .bbm-modal__bottombar > .primary_button').click()
    }

    disableAllListings(){

        cy.get('.btn_disable_all_autosync').click()
        cy.get('.DlgUtilityConfirm > .bbm-modal > .bbm-modal__bottombar > .primary_button').click()
    }

    gotoListingAccount(){

        cy.visit('/admin/account/3854')
        cy.wait(6000)
        cy.contains('div[data-href="listings_header"] > .section-heading > .section-label','Listings').click()
        cy.wait(6000)

    }

    locationEdit(){

        cy.visit('/admin/account/3854/office/0/project/321267/dashboard')
        cy.wait(5000)
        cy.get('.project_details_button > .fa').click()
        cy.wait(6000)
    }

    locationandGrouplevelElements(){

        cy.get('.highcharts-background').should('be.visible')
        cy.get('[style="--section-size:auto; height: auto; --grid-gap:10px; --grid-template-columns:1fr 1fr 1fr 1fr;"] > .subsections > :nth-child(4) > .LayoutDropAreaView > .BiModulesModule > .BiModulesTypesBase').should('be.visible')
        cy.get('[style="--section-size:386px; --grid-gap:10px; --grid-template-columns:2.03fr 1fr 1fr;"] > .subsections > :nth-child(3) > :nth-child(1) > .BiModulesModule > .BiModulesTypesBase').should('be.visible')
        cy.get('.multi_value_container').should('be.visible')
        cy.get('.dataTables_scrollBody').should('be.visible')

    }

}