﻿# Soci-Automation
Here’s a complete guide that includes all steps from setting up your environment to running your first Cypress test.

1. Set Up Your Environment
Install Node.js
First, you need to install Node.js. Visit the official Node.js website and download the installer for your operating system. Follow the installation instructions provided.

Initialize Your Project
Create a new directory for your project and navigate into it:

bash
Copy code
mkdir my-cypress-project
cd my-cypress-project
Initialize a new npm project:

bash
Copy code
npm init -y
This will create a package.json file with default settings.

2. Install Cypress
Now that you have Node.js and an initialized npm project, you can install Cypress.

bash
Copy code
npm install cypress --save-dev

3. Open Cypress
After installation, open Cypress using the following command:

bash
Copy code
npx cypress open
This command will open the Cypress Test Runner and set up the necessary folder structure.

4. Create Your First Test
Cypress will create a default folder structure in your project directory. You should see a cypress folder with subfolders like fixtures, integration, plugins, and support.

Create a new test file inside the cypress/integration folder. For example, create a file called firstTest.spec.js.

5. Write a Simple Test
Open the firstTest.spec.js file and write a basic test:

javascript
Copy code
describe('My First Test', () => {
  it('Visits the Cypress documentation page', () => {
    cy.visit('https://docs.cypress.io')
    cy.contains('Getting Started').click()
    cy.url().should('include', '/getting-started')
  })
})
6. Run Your Test
Open the Cypress Test Runner again if it's not already open by running:

bash
Copy code
npx cypress open
In the Test Runner window, you should see your test file firstTest.spec.js. Click on it to run the test.

Explanation of the Test Code
describe('My First Test', () => { ... }): This is a test suite named "My First Test".
it('Visits the Cypress documentation page', () => { ... }): This is an individual test case within the suite.
cy.visit('https://docs.cypress.io'): This command navigates to the specified URL.
cy.contains('Getting Started').click(): This finds a link or button with the text "Getting Started" and clicks it.
cy.url().should('include', '/getting-started'): This asserts that the URL includes the path /getting-started.
By following these steps, you've set up your environment, installed Cypress, written a basic test, and executed it successfully.
