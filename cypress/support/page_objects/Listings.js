export class ListingPage{

    settingsGear(){

        cy.reload()
        cy.wait(5000)
        cy.get('.project_controls > .icon_button > .fa').click()

    }

    gotoListingAccount(){

        cy.reload()
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


}