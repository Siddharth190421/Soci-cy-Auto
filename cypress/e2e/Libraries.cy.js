
// require('cypress-xpath')
import {LibraryPage} from "../support/page_objects/LibraryPage"

const Library = new LibraryPage()

let date = new Date()
let day = date.getDate();
let month = date.getMonth()+1;
let Hdate = month + day

 

describe('Libraries', ()=>{


    beforeEach(() => {

        Cypress.on('uncaught:exception', (err, runnable) => {    
    
            return false
    
        })

    })



    it('Library on Account Level - C2920', ()=>{

        cy.visit('/admin/account/3854/canned')
        Library. createLibrary()
        Library.deleteLibrary()

        
    })

    it('On Location Level - C2921', ()=>{

        cy.visit('/admin/account/3854/office/0/project/320512/canned/overview')
        Library.createLibrary()
        Library.deleteLibrary()

    })

    it('Create Library on Group Level - C2922', ()=>{

        cy.visit('/admin/account/3854/group/36523/canned/overview')
        Library.createLibrary()
        Library.deleteLibrary()


    })

    it('Search - C2923', ()=>{

        cy.visit('/admin/account/3854/canned')
        Library.searchLibrary()

    })

    
    // it("Transfer Library Message to a different Library - C2926 ", ()=>{

    //     cy.reload()
    //     cy.get('.component_tab_text').eq(4).click({force:true})
    //     Library.transferMessage()

    //     // cy.xpath('//*[@id="canned_post_32502159"]/div/div[2]/div/div/div[4]/div[3]').click()
    //     // cy.xpath("//*[contains(@class,'dlg_canned_move DlgCannedMove bbm-wrapper')]/following-sibling::div/div/input").type('___J20-Lib')
    //     // cy.wait(5000)
    //     // cy.get('.name').click()
    //     // cy.wait(6000)
    //     // cy.get('.primary_button').click()
    //     // cy.get('.label_check').click()

    // })

    it("Add Text-Message - C2924", ()=>{

        cy.visit('/admin/account/3854/canned')
        cy.wait(5000)

        Library.createLibrary()

        Library.addText()

    })

    it("Add Image ", ()=>{

      Library.addImage()

    })


    it("Edit message - C2925", ()=>{


       Library.editMessage()

    
    })

    it("Transfer Library Message to a different Library - C2926 ", ()=>{

        cy.reload()
        cy.get('.component_tab_text').eq(4).click({force:true})
        Library.transferMessage()

        // cy.xpath('//*[@id="canned_post_32502159"]/div/div[2]/div/div/div[4]/div[3]').click()
        // cy.xpath("//*[contains(@class,'dlg_canned_move DlgCannedMove bbm-wrapper')]/following-sibling::div/div/input").type('___J20-Lib')
        // cy.wait(5000)
        // cy.get('.name').click()
        // cy.wait(6000)
        // cy.get('.primary_button').click()
        // cy.get('.label_check').click()

    })

    it('Delete Message - C2927,28,31', ()=>{

        cy.reload()
        Library.searchLibrary()

        cy.get('[class="icon_button warning_button btn_del_message"][title="Delete"]').first().click()
        cy.wait(4000)
        cy.get('.primary_button').click({force:true})
        
        Library.deleteLibrary()

    })


    it("Schedule", ()=>{

        cy.get('.component_tab_text').eq(4).click()
        Library.schedule()

    })



})