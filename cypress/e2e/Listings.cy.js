import {ListingPage} from "../support/page_objects/Listings"

const Listing = new ListingPage()


let text = '';

let textafter = '';

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
        Listing.enableAllListings()

    })

    it('Auto Sync Disable All - C2994', ()=>{

        Listing.settingsGear()
        Listing.disableAllListings()

    })

    it('Pause Auto Sync - C2995', ()=>{

        Listing.settingsGear()
        cy.get('.autosync_controls > .bootstrap_checkbox').children('input').check({force:true})
    })

    it('Listing Account level Dash - C2996', ()=>{

        Listing.settingsGear()
        //Step 1 Enable all listing
        Listing.enableAllListings()

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

    it('Listing on Loactions Dash - C2999', ()=>{

        cy.visit('/admin/account/3854/office/0/project/320406/listings_overview/3182')
        cy.wait(6000)


        Listing.locationandGrouplevelElements()

    })

    it('Listing on Groups  - C3000', ()=>{

        cy.visit('/admin/account/3854/group/36523/listings_overview/3182')
        cy.wait(6000)

        Listing.locationandGrouplevelElements()

    })

    it('Account level Required Fields - C3001', ()=>{

        
        Listing.settingsGear()
        Listing.enableAllListings()
        Listing.gotoListingAccount()

        cy.get('[class="SociTooltip no-style fa fa-info-circle"]').first().click()

        cy.get('#soci_tooltip').then( Tooltip =>{

            cy.wrap( Tooltip ).contains('Required Fields Include:')
            cy.wrap( Tooltip ).contains('Listings Name')
            cy.wrap( Tooltip ).contains('Phone')
            cy.wrap( Tooltip ).contains('Address')
            cy.wrap( Tooltip ).contains('Primary Category')

        } ).should('be.visible')


    } )

    it.only('Required fields update - C3002', ()=>{

        Listing.gotoListingAccount()

        // cy.contains('.frac-numerator', '12')

        cy.get('.frac-numerator').first().should( ($numerator)=>{

            text = $numerator.text()

        })

        
        cy.get('[style="--section-size:410px; --grid-gap:10px; --grid-template-columns:2.02fr 1fr 1fr;"] > .subsections > :nth-child(3) > :nth-child(1) > .BiModulesModule > .BiModulesTypesBase').click()
        cy.wait(7000)
        cy.get('.bbm-modal__section').contains('Smoke-22').click()
        cy.wait(5000)
        cy.get('.DlgProject > .bbm-modal > .bbm-modal__section').find('.listings_name').type('L-Name')
        cy.get('.DlgProject > .bbm-modal > .bbm-modal__bottombar').find('.btn_save').click()
        cy.wait(4000)
        cy.reload()
        cy.wait(7000)

        Listing.gotoListingAccount()

        cy.get('.frac-numerator').first().should( ($numeratornxt)=>{

         textafter = $numeratornxt.text()

         expect(textafter).not.to.eq(text)

      })


    })


    it.only('Going back a step', ()=>{

         //going back a step


         cy.get('[style="--section-size:410px; --grid-gap:10px; --grid-template-columns:2.02fr 1fr 1fr;"] > .subsections > :nth-child(3) > :nth-child(1) > .BiModulesModule > .BiModulesTypesBase').click()
         cy.wait(7000)
         cy.get('.bbm-modal__section').contains('Smoke-22').click()
         cy.wait(7000)
         cy.get('.DlgProject > .bbm-modal > .bbm-modal__section').find('.listings_name').type('{selectAll}').type('{backspace}')
         cy.wait(4000)
         cy.get('.DlgProject > .bbm-modal > .bbm-modal__bottombar').find('.btn_save').click()
         cy.wait(4000)
         
    })


    




})