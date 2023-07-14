
export class LibraryPage{

    createLibrary(){
        cy.wait(6000)
        cy.contains('.canned_control', 'Create Library').click()
        cy.get('#name').type('LLLibrary levelzzz')
        cy.get('.primary_button').click()
        cy.wait(5000)
    }

    deleteLibrary(){

        cy.wait(4000)
        cy.get('.CannedFiltersView > .canned_control').click()
        cy.wait(4000)
        cy.get('.btn_delete').click()
        cy.contains('.bbm-modal__bottombar > .primary_button','Confirm').click()
    }

    searchLibrary(){

        cy.wait(5000)
        cy.contains('#s2id_library_select > .select2-choice', 'All libraries').click()
        cy.wait(6000)
        // cy.get('#select2-drop').children('.select2-search').type('_-Last-test')LLLibrary levelzzz
        cy.get('#select2-drop').children('.select2-search').type('LLLibrary levelzzz')

        cy.wait(10000)
        cy.get('[class="select2-result-label"][role="option"]').first().click()
        
    }


    addText(){

        cy.get('.canned_control_wrapper > .active > .btn_add_text').click()
        cy.get('.ComponentMessageEditor').type("Message test")
        // cy.xpath('//*[contains(text(),"Create Message")]/parent::div/following-sibling::div[1]/div[2]/label/div[1]/ul/li/input').type("ATag").type('{enter}')
        // cy.get('.bbm-modal__section').find(':nth-child(79) > [data-layer="Content"]').type('A-tag').type('{enter}')
        cy.get('.select2-search-field').type('A-tag').type('{enter}')
        cy.wait(5000)
        cy.get('.bbm-modal__bottombar > .gray_button').click()

    }

    addImage(){

        cy.wait(4000)
        cy.contains('.canned_control_wrapper > .active', 'Add Message').click({force:true})
        cy.wait(4000)
        cy.get('.select2-search-field').type('A-tag').type('{enter}')

        // cy.get('.bbm-modal__section').find('.select2-container').type('A-tag').type('{enter}')

        cy.get('.btn_choose_image').click()
        cy.wait(5000)
        // cy.get('[data-id="22603675"] > .visual_container').click()
        cy.get('.visual_container').first().click()
        cy.wait(4000)
        // cy.get('.bbm-modal__section').find('.select2-container').type('A-tag').type('{enter}')
        // cy.xpath('//*[contains(text(),"Create Message")]/parent::div/following-sibling::div[1]/div[2]/label/div[1]/ul/li/input').type("ATag").type('{enter}')
        cy.wait(5000)          
        // cy.get('.bbm-modal__bottombar > .gray_button').click({force:true})
        cy.contains('.bbm-modal__bottombar > .primary_button','Save to Library').click({force:true})

        cy.wait(4000)

    }

    editMessage(){

         // cy.xpath("//div[@id='canned_post_31557888']//div[@title='Edit']").click()
        // cy.get('[data-name="1094117"] > :nth-child(1) > .component_tab_text').click()
        cy.get('[class="icon_button btn_canned_menu_action btn_canned_edit fa fa-pencil-square-o"]').first().click({force:true})
        cy.wait(5000)
        // cy.xpath('//*[@id="canned_post_32502159"]/div/div[2]/div/div/div[4]/div[2]').click()
        cy.get('.ComponentMessageEditor').find('.message_editable > div').type("Editing one")
        cy.contains('.bbm-modal__bottombar > .primary_button','Save to Library').click({force:true})

    }

    transferMessage(){



        cy.get('[class="icon_button btn_copy"][title="Move to Library"]').first().click()
        // cy.get('.icon_button btn_copy').first().click({force:true})
        cy.contains('.select2-chosen','Select a Destination Library').click()
        cy.get('#select2-drop').children('.select2-search').type('_-Last-test')
        cy.wait(10000)
        cy.get('[class="select2-result-label"][role="option"]').click()
        cy.get('.label_check').children('input').check({force:true})
        cy.contains('.bbm-modal__bottombar > .primary_button','Transfer').click({force:true})

        // cy.get('.primary_button').click({force:true})

    
    }

    schedule(){

        // cy.wait(5000)
        cy.visit('/admin/account/3854/office/0/project/320512/canned/1094117')
        cy.wait(5000)
        cy.contains('.component_tab_text', '_-Last-test' ).click({force:true})
        cy.wait(5000)
        cy.get('[class="fa fa-calendar-plus-o"]').first().click()
        cy.wait(4000)
        cy.get('.bbm-modal__bottombar').find('.gray_button').click({force:true})

    }

}