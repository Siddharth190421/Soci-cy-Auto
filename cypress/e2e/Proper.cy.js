/// <reference types ="cypress"/>

describe.skip('My First Test', function()  {

  before(function()  {
    cy.fixture('example').then(function(data) {
      this.data=data
    })

  })

    it('Page Title', function() {


        cy.logout()
        cy.login(this.data.Email, this.data.password)
        // cy.get('.logout').click()
        cy.title().should('eq','SOCi - Social Media Management... Solved')

      expect(true).to.equal(true)

    })

    it('Upload', ()=>{

      cy.visit('/admin/account/3854/office/0/project/320406/scheduler_dashboard/week?t__SuggestedContentTab=Create')
      cy.wait(5000)
      cy.get('.btn_postnow').click()
      cy.get('.btn_upload_video').selectFile('download.png')

    })

  })