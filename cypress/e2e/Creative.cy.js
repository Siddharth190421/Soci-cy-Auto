describe('Creative', ()=>{
   
    function gotoAccount() {

        cy.visit('/admin/account/3854/create_cover')
        cy.wait(6000)
    
    }
    
    function gotoLocation(){
    
    
        cy.visit("/admin/account/3854/office/0/project/320406")
        cy.intercept('GET', '/admin/account/3854/office/0/project/320406').as('creative')
        cy.get('@creative')
    
    }

    beforeEach(() => {

        Cypress.on('uncaught:exception', (err, runnable) => {    
    
            return false
    
        })

        // Cypress.on('fail', (error, runnable) => {

        //     return false
            
        //   })
      
    })



    it('Navigating to Locations level', ()=>{


     gotoLocation()


    })

    it('add a Cover image (Single upload) - C2844', ()=>{

        gotoAccount()
        const filepath = 'emi.jpg'
        cy.get("input[type='file']").attachFile(filepath)
        cy.wait(8000)
        cy.get('.primary_button').click({force:true})

    })


    it('tag a Cover Image - C2846', ()=>{

        gotoAccount()
        cy.get('.image > .image_info_container > .info > .btn_edit_tags').first().click()
        cy.get('.ComponentTagsEditor').type('Taggy').type('{enter}')
        cy.wait(4000)
        cy.get('.primary_button').click({force:true})
     
    })

    it('Delete a Cover Image -  C2847', ()=>{

        gotoAccount()

        cy.get('.image > .image_info_container > .info > .warning_button').first().click()
        cy.wait(4000)
        cy.get('.primary_button').click()
        cy.get('[data-cy="toast_message"]').should('have.text','\n\t\tImage has been deleted from the library!\n\t\t\n\t')


    })

    it('to Creative', ()=>{

        gotoLocation()
        cy.get('div[data-href="design_hub"] > .section-heading > .section-label').click()
        cy.get('[data-href="create_cover"]').click()
        cy.wait(5000)

    })

    it('Create Cover Image for FB - C2848', ()=>{
     
        // cy.visit("/admin/account/3854/office/0/project/320406")

        cy.get('#create_page').click()
        cy.wait(7000)
        cy.get('.customize_header > .section_right > .section_heading > table > tbody > tr > [valign="top"]').click()
        cy.wait(4000)
        cy.get('.add_image_lib').click()
        cy.wait(5000)
        // cy.get('#s2id_autogen9 > .select2-choice').select('Santosh Kakade Demo Account (Account)')
        // cy.contains('SOCI Library (System)').select('Santosh Kakade Demo Account (Account)')
        // cy.contains('Santosh Kakade Demo Account (User)')
        cy.contains('.select2-choice', 'SOCI Library (System)').click()
        cy.wait(4000)
        cy.contains('.select2-result-label', 'Santosh Kakade Demo Account (Account)').click()
        cy.wait(4000)
        cy.get('.images_holder > :nth-child('+ 2 +') > img').click()
        cy.wait(10000)
        cy.get('.btn_publish').click()
        cy.wait(20000)
        cy.get('.primary_button').click()
        
    })

    it.skip('Download - C2990', ()=>{

        gotoAccount()

        Cypress.on('fail', (error, runnable) => {

            return false
            
          })

        cy.get('.image > .image_info_container > .info > .btn_download').first().click()
         
    })

})
