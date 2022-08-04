export {}

describe('CAG', ()=>{

function futureCAG(){

    cy.wait(5000)
    cy.get('.control_wrapper > .fa-thumbs-up').click()
    cy.wait(4000)
    cy.get('.require_approval_block > .label_check').children('input').check({force: true})
    cy.get('.secondary_button').click()
    cy.wait(5000)

    for (let i = 0; i < 5; i++) {
      
      cy.get('.fa-angle-right').click()


    }

    cy.wait(4000)
    cy.get('[data-hour="20"]').last().click()
    cy.wait(5000)
    cy.get('.ComponentMessageEditor').type('Future CAG-Post')
    cy.get('.btn_choose_image').click({force: true})
    cy.wait(5000)
    cy.get('.visual_container').first().click()
    cy.wait(5000)
    cy.get('.gray_button').click()
    cy.wait(10000)
}

    beforeEach(() => {

        Cypress.on('uncaught:exception', (err, runnable) => {   

            return false

        })
      
    })

    it('Turn on CAG- C2761', ()=>{

        cy.visit('/admin/account/3854/group/36523/scheduler_dashboard/week?calendarId=942701&t__SuggestedContentTab=Suggested')
        cy.wait(5000)
        
        futureCAG()


    })

    it('To CAG_Approve Post- C2762', ()=>{

        cy.visit('https://sneaky.meetsoci.com/approve?group_id=36523&token=1649955458')
        cy.wait(4000)
        cy.contains('.approval_post_body > .approval_actions_area > .btn_approval_approve','Approve').first().click()
         

    })

    it('Reject Post- C2763', ()=>{

        cy.visit('https://sneaky.meetsoci.com/approve?group_id=36523&token=1649955458')
        cy.wait(4000)
        cy.contains('.approval_post_body > .approval_actions_area > .btn_approval_reject','Reject').first().click()
        // #post_49343982 > .approval_post_body > .rejection_actions_area > .rejection_textarea_container > .rejection_textarea
        cy.get('[class="rejection_textarea"][name="reject_reason"][placeholder="Explain why you are rejecting this message."]').first().type('Reject for test')
        cy.contains('.approval_post_body > .rejection_actions_area > .rejection_buttons_area > .btn_approval_reject_confirm', 'Confirm Rejection').click()

    })
   
    it('Verify Pending- C2764', ()=>{

        cy.visit('https://sneaky.meetsoci.com/approve?group_id=36523&token=1649955458')
        cy.wait(4000)
        cy.get('.active > :nth-child(1) > .component_tab_text').should('be.visible')
        
    })

    it('Turn off CAG', ()=>{

        cy.visit('/admin/account/3854/group/36523/scheduler_dashboard/week?calendarId=942701&t__SuggestedContentTab=Suggested')
        cy.wait(5000)
        cy.get('.control_wrapper > .fa-thumbs-up').click()
        cy.wait(4000)
        cy.get('.require_approval_block > .label_check').click()
        cy.get('.secondary_button').click({force:true})

    })


})