export class survey{

    createCampaign(){

        cy.wait(3000)
        cy.get('.ActionButtonsColumn > .white_button').first().click({force:true})
        // :nth-child(1) > :nth-child(7) > .ActionButtonsColumn > .white_button
        // :nth-child(1) > :nth-child(7) > .ActionButtonsColumn > .white_button
        cy.get('.survey_fields > :nth-child(1) > input').type('Camp-27 Today')
        cy.get('.to_email').type('skakade@meetsoci.com')
        cy.contains('.bbm-modal__bottombar > .primary_button','Send').click({force:true})
    }
}