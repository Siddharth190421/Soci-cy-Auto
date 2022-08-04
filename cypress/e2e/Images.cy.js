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
        cy.get('.control').selectFile('cypress/fixtures/download.png')

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

    
})