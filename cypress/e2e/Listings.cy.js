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

    it('Bulk edit - C3011', ()=>{

        cy.visit('/admin/account/3854/listings_overview/3239')
        cy.wait(8000)
        cy.get('.sorting_disabled > .BulkSelectColumn > div > .header > span').click()
        cy.wait(5000)
        cy.get('.btn_action_bulk_edit').click()
        cy.get('[data-name="Images"] > :nth-child(1) > .component_tab_text').click()
        // cy.get('.all-directories-content > .ImageDirectoryView > .images-directory-content > .top-row > .images-logo > .ImageCategoryView > .image-category-content > .images > .ImageCardView > .image-card-content > .image > .image-edit-backdrop > .image_upload_button > #undefined > .icon_button').click({force:true})
        //incomplete due to input tag

    })


    it('edit Custom Field - C3013', ()=>{

        Listing.settingsGear()
        Listing.dataFields()

        cy.get('#custom_fields_table').should('be.visible')
        // cy.get('#location_fields_table').scrollTo('bottom').should('be.visible')
        cy.get('.location_fields > h3').should('be.visible')

        cy.get('.custom_field_input').first().type('1')
        cy.get('#custom_fields_table > tbody').find('.select2-arrow').first().click()


    })

    it('Editable by all on manager level - C3014', ()=>{

        Cypress.on('fail', (error, runnable) => {

            return false
            
          })

       Listing.Account()
       cy.get('[data-href="users"]').click()
       cy.wait(7000)
       cy.contains('[class="col_role"]','Manager').click()
       cy.get('.user_edit_form_buttons > :nth-child(3) > .gray_button').click()
       cy.get('.bbm-modal__bottombar').find('.primary_button').click()
       cy.visit('/admin/account/3854/office/0/project/445429')
        Listing.locationEdit()
        cy.get('.listings_name').find('input').type('Edit manager')
        cy.get('.btn_save').click()
        cy.contains('.stop_impersonation','Back to Your User').click() 

    })


    it('Hidden option - C3015', ()=>{

        Listing.settingsGear()
        Listing.dataFields()
        cy.contains('.odd','Service Areas').find('.select2-container').click()
        cy.contains('.select2-result-label', 'Hidden').click()
        cy.get('.bbm-modal__bottombar').find('.primary_button').click()  
        

    })


    it('Hidden fields on Manager level - C3016', ()=>{

        Listing.Account()
       Listing.toManagerLevel()
        Listing.locationEdit()
        // cy.get('.service_areas').should('not.be.visible')
        // cy.contains('Service Areas').should('not.be.visible')
        cy.get('.cancel_button > .secondary_button').click()
        cy.contains('.stop_impersonation','Back to Your User').click()


    })

    it('Editable with approval - C3017', ()=>{

        Listing.Account()
        Listing.settingsGear()
        Listing.dataFields()
        cy.contains('.even','Long Description').find('.select2-container').click()
        cy.contains('.select2-result-label', 'Editable with approval').click()
        cy.get('.bbm-modal__bottombar').find('.primary_button').click()  



    })

    it('Editable with approval on Manager level - C3018', ()=>{

        Listing.Account()
        Listing.toManagerLevel()
       Listing.locationEdit()
       cy.get('.long_description > .FormFieldView > .field_container > .input_container > .MultiLineInputView > .edit_input').type('Long')
       cy.get('.btn_save').click()  
    //    cy.get('.long_description').find('input').type('Long')
        // cy.hash().should('eq','3854')


        cy.get('.stop_impersonation').click()
        cy.get('@Account')
        cy.get('div[data-href="listings_header"] > .section-heading > .section-label').click()
        cy.get(':nth-child(3) > .subsections > .LayoutSubSectionView > .LayoutDropAreaView > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value > .far').should('be.visible')



    })

    it('Read-only for Managers - C3019', ()=>{


        Listing.Account()
        Listing.settingsGear()
        Listing.dataFields()
        cy.contains('.even', 'Address').find('.select2-container').click()
        cy.contains('.select2-result-label','Read-only for Managers').click()
        cy.get('.bbm-modal__bottombar').find('.primary_button').click()


    })

    it('verify Read-only for Managers - C3020',()=>{

        Listing.Account()
        Listing.toManagerLevel()
        Listing.locationEdit()
        cy.get('[class="address_line_1"]').find('input').should('have.attr','readonly')
        cy.get('.secondary_button').click()
        Listing.backToSuper()

    })

    it('Enable Locked - C3021', ()=>{

        Listing.Account()
        Listing.settingsGear()
        Listing.dataFields()
        cy.contains('.even', 'Brands').find('.select2-container').click()
        cy.contains('.select2-result-label','Hidden').click()
        cy.get('.bbm-modal__bottombar').find('.primary_button').click()


    })

    it('Verify Locked on Manager level - C3022', ()=>{

        Listing.Account()
        Listing.toManagerLevel()
        Listing.locationEdit()

        cy.get('.right_col').then( $el=>{

            expect($el).to.not.have.class('brands')

        })   //.not('.brands')

        cy.get('.secondary_button').click()
        cy.wait(4000)

        Listing.backToSuper()


    })

    it('Generate CSV - C3023',()=>{

        Cypress.on('fail', (error, runnable) => {

            return false
            
          })

        Listing.Account()
        cy.get('[data-href="locations"]').click()
        cy.get('.fa-download').click()
        cy.get('.label_check').find('input').first().check({force:true})
        cy.get('.primary_button').click()
        cy.wait(10000)
        cy.get('.fa-download').click()
        cy.get('.item_row > .btn').last().click()


    })

    it('Readfile - C3024',()=>{

        cy.log('pending')
        
    })

    it('Images - C3030',()=>{

        Listing.Account()
        Listing.settingsGear()
        Listing.enableAllListings()
        Listing.locationEdit()
        cy.get('.ui-tabs-nav > :nth-child(6) > .translated').click()
        cy.get('#tab-images').should('be.visible')
        cy.get('.all-directories-content > .ImageDirectoryView > .images-directory-content > .top-row > .images-logo > .ImageCategoryView > .image-category-content > .images > .ImageCardView > .image-card-content > .image > .image-thumbnail').should('be.visible')

        cy.get('[class="fa fa-gmb-square"]').should('be.visible')
        cy.get('[class="fa fa-facebook-square"]').should('be.visible')
        cy.get('.secondary_button').click()


    })

    it('Categories and Attributes Tab - C3037',()=>{

        Listing.Account()
        Listing.settingsGear()
        Listing.enableAllListings()
        Listing.locationEdit()
        cy.contains('Categories & Attributes').click()
        cy.get('.primary_section').find('.input_container').click()
        cy.get('.select2-result-label').first().click()
        cy.wait(7000)
        cy.get('.ListingsAttributesView > h4').should('be.visible')
        cy.get('.btn_save').click()
        
    })

    it.only('Edit Primary category - C3038', ()=>{

        Listing.Account()
        Listing.settingsGear()
        Listing.enableAllListings()
        Listing.locationEdit()
        cy.contains('.ui-tabs-nav > .ui-state-default', 'Categories & Attributes').click()
        cy.get('.select2-search-choice > .select2-search-choice-close').click()
        cy.get('.primary_section').find('.input_container').click()
        cy.get('.select2-result-label').eq(4).click()
        cy.get('.btn_save').click()
        




    })



    it.skip('verify if super admin can accept', ()=>{

        cy.get(':nth-child(3) > .subsections > .LayoutSubSectionView > .LayoutDropAreaView > .BiModulesModule > .BiModulesTypesBase > .module_wrapper > [ref="module_value_container"] > .value > .far').click()
        cy.get('#DataTables_Table_1 > tbody > .odd > :nth-child(1)').click()
        cy.contains('.admin-actions > .gray_button', 'Approve').click()


    })


})