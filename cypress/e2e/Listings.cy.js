import {ListingPage} from "../support/page_objects/Listings"

const Listing = new ListingPage()


let text = '';

let textafter = '';

let webURL = 'https://sneaky.meetsoci.com/admin/account/3854/';

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

    it('Required fields update - C3002', ()=>{

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


    it('Going back a step', ()=>{

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

    it('Basic Fields - C3003', ()=>{

        Listing.settingsGear()
        
        Listing.enableAllListings()

        Listing.gotoListingAccount()

        cy.get('[class="SociTooltip no-style fa fa-info-circle"]').eq(2).click()

        cy.get('#soci_tooltip').then( Tooltip =>{

            cy.wrap( Tooltip ).contains('Basic Fields Include:')
            cy.wrap( Tooltip ).contains('Hours')
            cy.wrap( Tooltip ).contains('Attributes')
            cy.wrap( Tooltip ).contains('Short Description')
            cy.wrap( Tooltip ).contains('Long Description')
            cy.wrap( Tooltip ).contains('Website URL')
            cy.wrap( Tooltip ).contains('Service Areas')


        } ).should('be.visible')



    })

    it('Basic Fields updated after edit C3004', ()=>{


        Listing.gotoListingAccount()

        cy.get('.frac-numerator').eq(2).should( $numBasic =>{

            text = $numBasic.text()

        })

        cy.get('[style="--section-size:410px; --grid-gap:10px; --grid-template-columns:2.02fr 1fr 1fr;"] > .subsections > :nth-child(4) > :nth-child(1) > .BiModulesModule > .BiModulesTypesBase').click()
        cy.wait(7000)
        cy.get('.bbm-modal__section').contains('Smoke-22').click()
        cy.wait(7000)
        cy.get('.DlgProject > .bbm-modal > .bbm-modal__section').find('.website_url').type(webURL)
        cy.wait(4000)
         cy.get('.DlgProject > .bbm-modal > .bbm-modal__bottombar').find('.btn_save').click()
         cy.wait(4000)

         Listing.gotoListingAccount()

         cy.get('.frac-numerator').eq(2).should( ($numeratornxt)=>{

            textafter = $numeratornxt.text()
   
            expect(textafter).not.to.eq(text)
   
         })


         //going a step back

         cy.get('[style="--section-size:410px; --grid-gap:10px; --grid-template-columns:2.02fr 1fr 1fr;"] > .subsections > :nth-child(4) > :nth-child(1) > .BiModulesModule > .BiModulesTypesBase').click()
        cy.wait(7000)
        cy.get('.bbm-modal__section').contains('Smoke-22').click()
        cy.wait(7000)
        cy.get('.DlgProject > .bbm-modal > .bbm-modal__section').find('.website_url').type('{selectAll}').type('{backspace}')
        cy.wait(4000)
        cy.get('.DlgProject > .bbm-modal > .bbm-modal__bottombar').find('.btn_save').click()
         cy.wait(4000)
         cy.get('.bbm-modal__bottombar > .secondary_button').click()



    } )


    it('Advanced Fields - C3005', ()=>{


        Listing.settingsGear()
        Listing.enableAllListings()
        Listing.gotoListingAccount()

        cy.get(':nth-child(3) > :nth-child(2) > .BiModulesModule > .BiModulesTypesBase > .module_title > .SociTooltip').click()

        cy.get('#soci_tooltip').then( Tooltip =>{

            cy.wrap( Tooltip ).contains('Advanced Fields Include:')
            cy.wrap( Tooltip ).contains('Keywords')
            cy.wrap( Tooltip ).contains('Payment Forms')
            cy.wrap( Tooltip ).contains('Price Range')


        } ).should('be.visible')

    })

    it('Advanced Fields updated - C3006', ()=>{

        Listing.settingsGear()
        Listing.enableAllListings()
        Listing.gotoListingAccount()


        cy.get(':nth-child(3) > :nth-child(2) > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value > .frac-numerator').should( $Adv =>{

            text = $Adv.text()

        })

        cy.get(':nth-child(3) > :nth-child(2) > .BiModulesModule > .BiModulesTypesBase').click()
        cy.wait(7000)
        cy.get('.bbm-modal__section').contains('Smoke-22').click()
        cy.wait(7000)
        cy.get('.keywords').find('.input_container').type('Keywords').type('{enter}')
        cy.wait(4000)
        cy.get('.DlgProject > .bbm-modal > .bbm-modal__bottombar').find('.btn_save').click()
        cy.wait(4000)
        cy.get('.bbm-modal__bottombar > .secondary_button').click()
        cy.wait(5000)


        cy.get(':nth-child(3) > :nth-child(2) > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value > .frac-numerator').should( ($nAdv)=>{

            textafter = $nAdv.text()
   
            expect(textafter).not.to.eq(text)
   
         })


         //going back step

         cy.get(':nth-child(3) > :nth-child(2) > .BiModulesModule > .BiModulesTypesBase').click()
         cy.wait(7000)
         cy.get('.bbm-modal__section').contains('Smoke-22').click()
         cy.wait(7000)
         cy.get('.keywords').find('.input_container')
         cy.get('#s2id_autogen79 > .select2-choices > .select2-search-choice > .select2-search-choice-close').click()
         cy.wait(4000)
        cy.get('.DlgProject > .bbm-modal > .bbm-modal__bottombar').find('.btn_save').click()
        cy.wait(4000)
        cy.get('.bbm-modal__bottombar > .secondary_button').click()
        cy.wait(5000)



    })


    it('Bonus Fields - C3007', ()=>{

        Listing.gotoListingAccount()

        cy.get('[class="SociTooltip no-style fa fa-info-circle"]').eq(3).click()

        
        cy.get('#soci_tooltip').then( Tooltip =>{

            cy.wrap( Tooltip ).contains('Bonus Fields Include:')
            cy.wrap( Tooltip ).contains('Email')
            cy.wrap( Tooltip ).contains('Brands')
            cy.wrap( Tooltip ).contains('Languages')


        } ).should('be.visible')

    })

    it('Update Bonus fields - C3008', ()=>{

        Listing.settingsGear()
        Listing.enableAllListings()
        Listing.gotoListingAccount()


        cy.get('.frac-numerator').eq(3).should( $bonus =>{


            text = $bonus.text()

        })
        
        cy.get('.frac-numerator').eq(3).click()
        cy.wait(7000)
        cy.get('.bbm-modal__section').contains('Smoke-22').click()
        cy.wait(7000)
        cy.get('.email_address').find('.input_container').type('skakade@meetsoci.com')
        cy.wait(4000)
        cy.get('.DlgProject > .bbm-modal > .bbm-modal__bottombar').find('.btn_save').click()
        cy.wait(4000)
        cy.get('.bbm-modal__bottombar > .secondary_button').click()
        cy.wait(5000)


        cy.reload()
        cy.wait(6000)

        cy.get('.frac-numerator').eq(3).should( $nbonus =>{

            textafter = $nbonus.text()

            expect(textafter).not.to.eq(text)

        })

        //going step back

        cy.get('.frac-numerator').eq(3).click()
        cy.wait(7000)
        cy.get('.bbm-modal__section').contains('Smoke-22').click()
        cy.wait(7000)
        cy.get('.email_address').find('.input_container').type('{selectAll}').type('{backspace}')
        cy.wait(4000)
        cy.get('.DlgProject > .bbm-modal > .bbm-modal__bottombar').find('.btn_save').click()
        cy.wait(4000)
        cy.get('.bbm-modal__bottombar > .secondary_button').click()
        cy.wait(5000)


    })


    it('Locations with issue fields - C3009', ()=>{

        Listing.settingsGear()
        Listing.enableAllListings()
        Listing.gotoListingAccount()

        cy.get(':nth-child(5) > .LayoutDropAreaView > .BiModulesModule > .BiModulesTypesBase').should('be.visible')
        cy.get(':nth-child(5) > .LayoutDropAreaView > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value > .far').should('be.visible')
        cy.get(':nth-child(5) > .LayoutDropAreaView > .BiModulesModule > .BiModulesTypesBase').click()
        cy.wait(5000)
        cy.get('#DataTables_Table_1_wrapper > .dataTables_scroll > .dataTables_scrollBody').should('be.visible')
        cy.get('.bbm-modal__bottombar > .secondary_button').click()

    })

    it('Directories - C3010', ()=>{

        Listing.gotoListingAccount()
        
        cy.get('.primary').should('be.visible')
        cy.get('.multi_value_container').should('be.visible')


    })

    it.only('edit Custom Field', ()=>{

        Listing.settingsGear()
        cy.get(':nth-child(12) > .translated').click()

        cy.get('#custom_fields_table').should('be.visible')
        // cy.get('#location_fields_table').scrollTo('bottom').should('be.visible')
        cy.get('.location_fields > h3').should('be.visible')

        cy.get('.custom_field_input').first().type('1')
        cy.get('#custom_fields_table > tbody').find('.select2-arrow').first().click()


    })

})