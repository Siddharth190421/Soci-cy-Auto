/// <reference types ="cypress"/>

import { unlink } from 'fs';

describe('My First Test', function()  {

  before(function()  {

    cy.fixture('example').then(function(data) {
      this.data=data
    })

  })

//   before('Clear downloads folder', () => {

//     cy.exec('rm /cypress/downloads/all-networks-group__2022-10-14__10-42-08-088__EuXZOoys.xlsx', { log: true, failOnNonZeroExit: false });
// })

it('Clear downloads folder', () => {

  cy.exec('del /q cypress\\downloads\\.', { log: true, failOnNonZeroExit: false });

})

    it.skip('Page Title', function() {
 

        cy.logout()
        cy.login(this.data.Email, this.data.password)
        // cy.get('.logout').click()
        cy.title().should('eq','SOCi - Social Media Management... Solved')

      expect(true).to.equal(true)

    })

    it.skip('Upload', ()=>{

      cy.visit('/admin/account/3854/office/0/project/320406/scheduler_dashboard/week?t__SuggestedContentTab=Create')
      cy.wait(5000)
      cy.get('.btn_postnow').click()
      cy.get('.btn_upload_video').selectFile('download.png')

    })

    it('Delete file', ()=>{

      cy.writeFile('Fileo.xlsx', 'Hello World Gunners\n')
      cy.writeFile('Fileo.xlsx', 'Hello World1 \n', {flag: 'a+'})
      cy.writeFile('Fileo.txt', 'Hello World \n', {flag: 'a+'})
      cy.writeFile('Fileo.csv', 'Hello World \n', {flag: 'a+'})
      cy.writeFile('Fileo.xlsx', 'Hello World2 \n', {flag: 'a+'})
      cy.writeFile('Fileo.xlsx', 'Hello World3 \n', {flag: 'a+'})
      cy.writeFile('Fileo.xlsx', 'Hello World4 \n', {flag: 'a+'})

      cy.readFile('Fileo.xlsx').should('contains', 'Hello World Gunners')

      console.log("Hello World")

      // fs.unlink('cypress/downloads/all-networks-group__2022-10-14__10-42-08-088__EuXZOoys.xlsx')

      // fs.unlink('D:/Web/SOCi/cypress/downloads/all-networks-group__2022-10-14__10-42-08-088__EuXZOoys.xlsx', (err) => {

      //   if (err) throw err;

      //   console.log('File was deleted');

      // });

      // cy.readFile('cypress/downloads/all-networks-group__2022-10-14__10-42-08-088__EuXZOoys.xlsx').then( $file=> {

      //     cy.wrap($file).unlink()

      // }) 

      



    })



    describe.only('Exception Handling In Cypress', () => {

      it('Navigate to webpage', () => {
  
          // Cypress.on('fail', (error, runnable) => {
  
          //     if (!error.message.includes('buttondoestexist')) {
  
          //         throw error
  
          //     }
  
          // })
  
          cy.visit('https://www.google.in');
  
          cy.get('#buttondoestexist')
  
      })
  
  })


  })