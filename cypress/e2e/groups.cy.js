

let Urltoshort = "https://sneaky.meetsoci.com/admin/account/3854/group/36523/scheduler_dashboard/week?t__SuggestedContentTab=Suggested"

describe('Groups', ()=>{

    beforeEach(() => {

        Cypress.on('uncaught:exception', (err, runnable) => {   

            return false

        })

        cy.intercept('GET', '/admin/account/3854').as('acc')
        cy.intercept('GET', '/api/account/3854/get_groups?*').as('groups')
        cy.intercept('GET', '/api/account/3854/get_projects_list?*').as('groupsList')
        cy.intercept('GET', '**/get_members?*').as('member')
        cy.intercept('POST','**/delete?*').as('del')

        cy.intercept('GET', '**/group/36523/dashboard').as('April-14')
        cy.intercept('GET', '/api/group/36523/get?*').as('edit')
        cy.intercept('POST', '/api/group/36523/rename?*').as('rename')

        cy.intercept('POST', '/api/admin/139546/update_meta?*').as('updateMeta')

        cy.intercept('GET', '/api/account/3854/get?*').as('post')
        cy.intercept('GET', '/api/files/0/get_files?*').as('imgLib')

        cy.intercept('POST',  '/api/group/36523/schedule?*').as('after')
        
      
    })

    it('Create a group & Add Locations to Group - C2746,47', ()=>{


        cy.visit('/admin/account/3854')
        // cy.wait('@acc')
        cy.get('[data-href="groups"]').click()
        cy.wait('@groups')
        cy.get('.control_wrapper > .icon_button').click()
        cy.get('.name').type('AAAuto-Group-to-D')
        cy.get('.primary_button').click()
        cy.wait('@groupsList')
        cy.get(':nth-child(3) > .action_buttons > .white_button').click()
        cy.get(':nth-child(4) > .action_buttons > .white_button').click()
        cy.get(':nth-child(5) > .action_buttons > .white_button').click()
        cy.get('.secondary_button').click()


    })

    it('Remove Locations from Group - C2748', ()=>{


          cy.contains('Locations').click()
          cy.wait('@member')
          cy.get('[class="icon_button fa fa-trash btn_delete"][title="Delete"]').first().click()
          cy.get('.primary_button').click()


    })

    it('Delete group - C2767',()=>{

        cy.get('.account_crumb').click()
        // cy.wait('@acc')
        cy.contains('Groups').click()
        cy.wait('@groups')
        cy.get('[class="icon_button fa fa-trash btn_delete"][title="Delete"]').first().click()
        cy.wait(4000)
        cy.get('#confirmation_input').type('DELETE')
        // cy.wait(4000)
        cy.get('.primary_button').click({force:true})
        cy.wait('@del')

    })

    it('Edit Group - C2749', ()=>{

        Cypress.on('uncaught:exception', (err, runnable) => {
        
            return false

          })


        cy.visit('/admin/account/3854/group/36523/dashboard')
        cy.wait('@April-14')
        cy.get('.btn_group_edit > .fa').click({force:true})
        cy.wait('@edit')
        cy.get(".editgroup_input_name").click().type('E')
        cy.get('.primary_button').click({force:true})
        cy.wait('@rename')

        //Going back

        cy.get('.btn_group_edit > .fa').click({force:true})
        cy.wait('@edit')
        cy.get(".editgroup_input_name").type('{backspace}')
        // cy.wait(5000)
        cy.get('.primary_button').click({force:true})
        cy.wait('@rename')


    })

    it('Post Image on group -C2750', ()=>{

        cy.visit('/admin/account/3854/group/36523/scheduler_dashboard/week?t__SuggestedContentTab=Suggested')
        cy.wait('@updateMeta')
        cy.wait('@edit')
        cy.get('.btn_postnow').click()
        cy.wait('@post')
        // cy.get('.message_editable').type('Group-Post')
        cy.wait(4000)
        cy.get('.bbm-modal__section').find('.message_editable').type('Group-Post')
        // cy.get('.ComponentMessageEditor').find('.message_editable').type('Group-Post')
        cy.get('.btn_choose_image').click()
        cy.wait('@imgLib')
        cy.get('.visual_container').first().click()
        // cy.wait('@after')
        cy.get('.gray_button').click()


    })

    it('shorten URL - C2753', ()=>{

        cy.visit('/admin/account/3854/group/36523/scheduler_dashboard/week?t__SuggestedContentTab=Suggested')
        cy.wait(5000)
        cy.get('.btn_postnow').click()
        cy.wait(5000)
        cy.get('.btn_bitly').click()
        cy.get('.bbm-modal__section > input').type(Urltoshort)
        cy.get('.DlgUtilityInput > .bbm-modal > .bbm-modal__bottombar > .primary_button').click({force:true})
        cy.wait(7000)
        cy.get('.gray_button').click({force:true})

    })

    it('Choose a Message- C2754,55', ()=>{

        cy.visit('/admin/account/3854/group/36523/scheduler_dashboard/week?t__SuggestedContentTab=Suggested')
        cy.wait(5000)
        cy.get('.btn_postnow').click()
        cy.get('.btn_message_select').click()
        cy.wait(7000)
        cy.contains('.component_tab_text', '___Loc-level-lib').click()
        cy.wait(7000)
        cy.get(' .upcoming > .message').first().click()
        cy.wait(5000)
        cy.get('.gray_button').click({force:true})

    })

    it('Meta fields- C2756', ()=>{

        cy.visit('/admin/account/3854/group/36523/scheduler_dashboard/week?t__SuggestedContentTab=Suggested')
        cy.wait(5000)
        cy.get('.btn_postnow').click()
        cy.wait(4000)
        cy.get('.ComponentMessageEditor').type('{%Name}'+ '\n' +'{%Website URL}', { parseSpecialCharSequences: false })
        cy.get('.network_selection > .instagram').click()
        cy.get('.gray_button').click({force:true})


    })

    it('Future Post - C2757', ()=>{

        cy.visit('/admin/account/3854/group/36523/scheduler_dashboard/week?t__SuggestedContentTab=Suggested')
        cy.wait(5000)
        cy.get('.fa-angle-right').click()
        cy.wait(5000)
        cy.get('[data-hour="23"]').last().click()
        cy.wait(5000)
        cy.get('.ComponentMessageEditor').type('Future Post')
        cy.get('.btn_choose_image').click({force:true})
        cy.wait(5000)
        cy.get('.visual_container').first().click()
        cy.wait(5000)
        cy.get('.gray_button').click()

       
    })

    it('Edit future -C2758', ()=>{

        cy.get('[data-hour="23"]').last().click()
        cy.wait(5000)
        cy.get('.ComponentMessageEditor').type('Edit Future Post')
        cy.get('.gray_button').click()

    })


    it('Post Plan - C2765', ()=>{

        cy.visit('/admin/account/3854/group/36523/scheduler_dashboard/week?t__SuggestedContentTab=Suggested')
        cy.wait(5000)
        cy.get('.btn_plans').click()
        cy.wait(5000)
        cy.get('.btn_new_plan').click()
        cy.get('.title').type('Group Post Plan')
        cy.get('.label_check').children('input').check({force: true})
        cy.contains('.select2-chosen', 'All libraries').click()
        cy.wait(5000)
        cy.get('.select2-input').last().type('___Loc-level-lib')
        cy.wait(5000)
        cy.get('.content_selector_element').click()
        cy.get('.btn_next').click()
     

    })

    it('Delete Post Plan - C2766', ()=>{

        cy.visit('/admin/account/3854/group/36523/scheduler_dashboard/week?calendarId=942701&t__SuggestedContentTab=Suggested')
        cy.wait(4000)
        cy.get('.btn_plans').click()
        cy.wait(5000)
        cy.contains('.gray_button', 'Delete').click()
        cy.contains('.primary_button', 'Delete').click()

    })

    it.skip('Reschedule Post(Drag-transfer) - C2759',()=>{

        const dataTransfer = new DataTransfer(); 

        cy.visit('/admin/account/3854/group/36523/scheduler_dashboard/week?t__SuggestedContentTab=Suggested')
        cy.get('.fa-angle-right').click()
        cy.get('.fa-facebook-square').trigger('dragstart', {

           dataTransfer

        })

        cy.get('[data-hour="21"]').first().trigger('drop',{
            
            dataTransfer
        })

})

})