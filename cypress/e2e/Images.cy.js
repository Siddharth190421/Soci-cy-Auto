
import 'cypress-file-upload';

describe('Images', ()=>{

    it('Navigating to Images', ()=>{

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test       
            return false
        })

        cy.visit('admin/account/3854/image_library')
        cy.wait(6000)

    })

    it('upload Image', ()=>{

        
        const filepath = 'download.png'
        // cy.get('.control').selectFile('cypress/fixtures/download.png')
        cy.get('.control').attachFile(filepath)


    })


    it('Edit', ()=>{

        cy.get('[data-id="22603675"] > .image > .image_info_container > .info > .btn_edit_tags').click()
        cy.get('.bbm-modal__section').find('[class="select2-input"]').type('aae bhai ')
        cy.get('.primary_button').click()
        cy.server({ enable: false })

        
    })

    it('Download', ()=>{

        cy.get('[data-id="22603675"] > .image > .image_info_container > .info > .btn_download').click()
    })

    it('Delete', ()=>{

        cy.get('[data-id="22603675"] > .image > .image_info_container > .info > .warning_button').click()
        cy.contains('Cancel').click()
        
    })

    // it.only('Upload post', ()=>{

    //     Cypress.on('uncaught:exception', (err, runnable) => {
                  
    //         return false

    //     })


    //     const filepath = 'download.png'
    //     cy.visit('/admin/account/3854/office/0/project/320406/scheduler_dashboard/week?t__SuggestedContentTab=Create')
    //     cy.wait(6000)
    //     cy.get('.btn_postnow').click()
    //     cy.wait(5000)
    //     cy.get('.message_editable').type('MSg')
    //     cy.get('.btn_upload_image').parent('.post_detail').siblings('.image_preview').children('.label_check').children('input').selectFile(filepath)
    //     // .attachFile(filepath)
    //     cy.get('.gray_button').click()

    // })

    
})