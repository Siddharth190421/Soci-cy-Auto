

describe('Superadmin/ Admin/ User', ()=>{

    beforeEach(() => {

        Cypress.on('uncaught:exception', (err, runnable) => {    
    
            return false
    
        })
      
        cy.intercept('GET', '/admin/account/3854').as('acc')
        
    })


    it.only('superAdmin can access Back Office - C2739', ()=>{

        cy.visit('https://sneaky.meetsoci.com/admin/login')
        cy.get('#password_login > :nth-child(2) > .input_email').type('skakade@meetsoci.com')
        cy.get('.input_password').type('Logitech@2')
        cy.contains('.gray_button','Sign In').click()
        
        cy.visit('/admin/account/3854')
        cy.wait('@acc')
        cy.get('.back_office').click({force:true})

        cy.get('.crumbs_inner').find('.crumbs_stack_left > .translated').should('have.text','Back Office')
      
    })

    it('Superadmin edit Back office - C2740', ()=>{

        cy.get('[data-tab="demo"]').click()
        cy.get('.account_search').type('Santosh').type('{enter}')
        cy.wait(7000)
        cy.get('.AccountListView').find('[data-id="3854"]').trigger('mouseover').find('[class="gray_button btn_details translated"]').click({force: true})
        cy.wait(4000)
        // cy.contains('.gray_button btn_details translated','Edit').click({force:true})
        cy.get('.primary_button').click({force:true})

    })

    it('Edit Account - C2741', ()=>{

        cy.visit('/')
        cy.wait('@acc')
        cy.get('.project_controls > .icon_button').click({force:true})
        cy.wait(6000)
        cy.wait(5000)
        cy.get('.btn_enable_all_listings').click()
        cy.get('.DlgUtilityConfirm > .bbm-modal > .bbm-modal__bottombar > .primary_button').click()
        cy.get('[data-cy="toast_message"]').should('have.text','\n\t\tListings successfully enabled for all locations.\n\t\t\n\t')
    })


    it.only('Superadmin can create a user - C2742', ()=>{

        cy.visit('/admin/account/3854')
        cy.wait('@acc')
        cy.get('[data-href="users"]').click()
        cy.get('.btn_add_user').click()
        cy.get('.bbm-modal__section').find('input').first().type('Anthony')
        cy.get('.bbm-modal__section').find('input').eq(1).type('Kiedis')
        cy.get('.bbm-modal__section').find('input').eq(2).type('AntKi@meetsoci.com')
        cy.get('.bbm-modal__section').find('.select2-choice').click()
        cy.get('.bbm-modal__bottombar').find('.primary_button').click()

        cy.get('[data-cy="toast_message"]').should('have.text','\n\t\tNew user created successfully!\n\t\t\n\t')


    })

    it.only('Edit a User - C2743', ()=>{

        cy.reload()
        
        cy.get('td [class="col_name"]').first().click({force:true})
        cy.get('.bbm-modal__section').find('input').first().type('1')
        cy.get('.bbm-modal__bottombar').find('.primary_button').click()


    })

    it.only('Login as Admin/User - C2744', ()=>{


        Cypress.on('fail', (error, runnable) => {

            return false
            
          })

        cy.reload()
        
        // cy.get('td [class="col_name"]').eq(1).click({force:true})
        // cy.wait(5000)
        // cy.contains('.user_edit_form_buttons > :nth-child(3) > .gray_button',' Login as admin').click()
        // cy.wait(9000)
        // cy.contains('Social').click()


        cy.get('[data-href="users"]').click()
       cy.wait(7000)
       cy.contains('[class="col_role"]','Manager').click()
       cy.get('.user_edit_form_buttons > :nth-child(3) > .gray_button').click()
       cy.get('.bbm-modal__bottombar').find('.primary_button').click()
       cy.visit('/admin/account/3854/office/0/project/445429')


    })

    it.only('Admin/user cannot access Back office - C2745', ()=>{

        cy.get('.nav_header').then( $el => {

            expect($el).to.not.have.class('back_office translated')
        })

        cy.contains('.stop_impersonation','Back to Your User').click()



    })

    it.only('User/Admin only sees "management" option under Ads PLUS- C2786', ()=>{

        cy.get('[data-href="ads"]').click()
        cy.wait(4000)
        cy.get('.subsection active').then( $el =>{

            expect($el).to.not.have('[data-href="ads_audiences"]')
        })
    })

    it.only('User/Admin only sees "management" option under Boost PLUS- C2787', ()=>{

        cy.get('[data-href="boost_management"]').click()
        cy.wait(4000)
        cy.get('.subsection active').then( $el =>{

            expect($el).to.not.have('[data-href="boost_audiences"]')

        })

    })



})