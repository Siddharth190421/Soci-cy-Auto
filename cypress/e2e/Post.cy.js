
// import cypress from 'cypress';
// import 'cypress-file-upload';
require('cypress-xpath')

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
  const xMen = [
    'professorX',
    'beast',
    'colossus',
    'cyclops',
    'iceman',
    'wolverine',
    ];
  
let Loc = "admin/account/3854/office/0/project/320406/"

let CompleteURL = 'https://sneaky.meetsoci.com/' + Loc + ' /scheduler_dashboard/week?t__SuggestedContentTab=Create'

let Smoke22CAG = 'https://sneaky.meetsoci.com/approve?id=320512&token=1634890002'

let Pic = "walk.jpg"

//   console.log(makeid());

describe('Locations/Social', ()=>{

  beforeEach(() => {

    Cypress.on('uncaught:exception', (err, runnable) => {    

        return false

    })

    // Cypress.on('fail', (error, runnable) => {

    //   return false
      
    // })

  
})


    it('login' , function(){

  
    cy.visit('/')
    // cy.login('santosh')


    // cy.get('#password_login > :nth-child(2) > .input_email').type('skakade@meetsoci.com')
    // cy.get('.input_password').type('Logitech@2').type('{enter}')
    // cy.wait(5000)
    cy.url().should('include', '3854')
    cy.get('.admin_logo').should('be.visible')
    cy.title().should('eq','SOCi - Social Media Management... Solved')

    // cy.wait(6000)
    // cy.get('#select2-chosen-4').click()
    // cy.contains('A-zone').click()
    // cy.wait(5000)
    
                                                        
})


beforeEach(() => {
    cy.intercept('api/admin/*/get\\?*').as('getpublisher');
    cy.intercept('api/account/*/get\\?*' ).as('getAccountData');
    cy.intercept('api/project/*/get_defaults.json\\?*').as('getDefaults');
    cy.intercept('api/account/*/get_projects_list\\?*',).as('getProjectsList');
    cy.intercept('api/reports/*/get_all\\?*' ).as('getAll');
    cy.intercept('api/admin/*/get_containers_accessible\\?*').as('getContainersAccessible');
    cy.intercept('POST', 'api/admin/*/update_meta\\?*').as('updateMeta');
    cy.intercept('api/group/*/get_members\\?*').as('getMembers');
    cy.intercept('api/project_networks/0/definitions\\?*').as('fetchNetworkDefinitions');

    cy.intercept('GET', '/admin/account/3854/office/0/project/320406/social_hub?no_sidebar=1&no_layout=11').as('Publisher')
    cy.intercept('GET', '/admin/account/3854/office/0/project/320512/social_hub_fb_feed?*').as('Published') 



});

it(' Publisher Status Check', ()=>{

  cy.visit('/admin/account/3854/office/0/project/320406/social_hub#514735/feed')
  cy.wait('@Publisher')
  cy.request('/admin/account/3854/office/0/project/320406/social_hub?no_sidebar=1&no_layout=11').as('Publisher1')
  cy.get('@Publisher1').should('have.property', 'status', 200)

})


it('Create Location & Switch to Location - C2768, 69', ()=>{

  cy.visit('/admin/account/3854/locations')
  cy.get('.control_wrapper > .icon_button').click()
  cy.get('.location_name > .FormFieldView > .field_container > .input_container > .SingleLineInputView > input').type('AAAuto-Loc-to-D')
  cy.get('.primary_button').click({force:true})
  cy.wait(5000)
  cy.get('.manage_networks_buttons > .gray_button').click()


})

it('Edit Location - C2770', ()=>{


  cy.visit('/admin/account/3854/office/0/project/321267')
  cy.wait(5000)
  cy.get('.project_details_button > .fa').click()
  cy.wait(5000)
  cy.get('.listings_name > .FormFieldView > .field_container > .input_container > .NetworkSingleLineInputView > :nth-child(1) > .network_container > :nth-child(1) > input').type('Edit')
  // cy.get('.listings_name > .FormFieldView > .field_container > .input_container > .NetworkSingleLineInputView > :nth-child(1) > .network_container > :nth-child(1) > input[placeholder="No data"]').type('Edit')
  cy.get('.btn_save').click()

  //Clearing the Earlier step (Going back)
  
  cy.get('.project_details_button > .fa').click()
  cy.wait(5000)
  cy.get('.listings_name > .FormFieldView > .field_container > .input_container > .NetworkSingleLineInputView > :nth-child(1) > .network_container > :nth-child(1) > input').type('Edit').type('{selectAll}{backspace}')
  cy.get('.btn_save').click()



})

it('Delete Location - C2771', ()=>{

  cy.visit('/admin/account/3854')
  cy.wait(5000)
  cy.get('#select2-chosen-4').click()
  // cy.get('[class="select2-results"][id="select2-results-4"]').scrollTo('bottom')
  cy.contains('AAAuto-Loc-to-D').click()
  cy.wait(4000)
  cy.get('.project_details_button > .fa').click()
  cy.wait(5000)
  cy.get('.btn_delete').click()
  cy.get('.ui-dialog-buttonset > .primary_button').click()
  cy.wait(4000)


})

it('UnCheck CAG', ()=>{

  cy.visit('/admin/account/3854/office/0/project/320512/scheduler_dashboard/week?t__SuggestedContentTab=Create')
  cy.wait(5000)
  cy.get('.control_wrapper > .fa-thumbs-up').click()
    cy.wait(4000)
    cy.get('.require_approval_block > .label_check').children('input').check({force: true})
    cy.wait(4000)
    cy.contains('.label_check', 'Require Client Approval of future outgoing posts').click()
    cy.get('.secondary_button').click()

})


  it('Social - C2773', function(){

    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
        });

    cy.visit('/admin/account/3854/office/0/project/320512/scheduler_dashboard/week?t__SuggestedContentTab=Create')
    cy.wait(5000)
    cy.get('@getpublisher')
    cy.contains('Social').click()
    // cy.wait(5000)
    cy.get('.btn_postnow').click()
    // cy.wait(7000)
    cy.get('.EditPostView')
    cy.wait(5000)
    cy.get('.ComponentMessageEditor').type(xMen[Math.floor(Math.random() * 6)])
    // cy.wait(4000)
    cy.get('.instagramNetwork').click()
    // cy.get('.schedule > .label_check').click()
    cy.get('.gray_button').click()
    cy.wait(5000)
   


})

it('Check Instagram', ()=>{


    // Going Back
    cy.get('.btn_postnow').click()
    cy.wait(4000)
    cy.get('.instagramNetwork').click()

})

  it('Post dynamic text on meta fields - C2775', ()=>{

  Cypress.on('uncaught:exception', (err, runnable) => {

    return false 
    });


  cy.visit('/admin/account/3854/office/0/project/320406/scheduler_dashboard/week?t__SuggestedContentTab=Create')
  cy.wait(5000)
  cy.get('.btn_postnow').click()
  cy.wait(4000)
  cy.get('.ComponentMessageEditor').type('{%Name}'+ '\n' +'{%Website URL}', { parseSpecialCharSequences: false })
  cy.get('.instagramNetwork').click()
  cy.get('.gray_button').click()



})

it('Schedule a Post - C2777', ()=>{

  cy.visit('/admin/account/3854/office/0/project/320406/scheduler_dashboard/week?t__SuggestedContentTab=Create')
  cy.wait(6000)
  cy.get('.btn_postnow').click()
  cy.wait(4000)
  cy.get('.ComponentMessageEditor > .message_editable').type('Schedule Post')
  cy.wait(4000)
  cy.get('.btn_choose_image').click()
  cy.wait(4000)
  cy.get('.visual_container').first().click()
  cy.wait(4000)
  cy.get('.schedule > .label_check').children('input').check({force:true})
  cy.wait(3000)
  cy.get('.gray_button').click()


})

it('Post Upload image', ()=>{

  const filepath = 'tesla.jpg'
  cy.visit('/admin/account/3854/office/0/project/320512/scheduler_dashboard/week?t__SuggestedContentTab=Create')
  cy.wait(5000)
  cy.contains('Social').click()
  cy.wait(5000)
  cy.get('.btn_postnow').click()
  cy.wait(5000)
  cy.get('.ComponentMessageEditor').type('Upload test- tesla')
  cy.wait(4000)
  cy.get('input[type="file"]').eq(1).attachFile(filepath)
  cy.contains('.gray_button', 'Post Now').click()



})



it('Post with Image - C2774' , ()=> {

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });

  cy.visit('/admin/account/3854/office/0/project/320512/scheduler_dashboard/week?t__SuggestedContentTab=Create')
  cy.wait(5000)
  cy.contains('Social').click()
  cy.wait(5000)
  cy.url().should('include', 'scheduler')
  cy.get('.btn_postnow').click()
  cy.get('.btn_choose_image').click()
  cy.get('[data-id="22603673"] > .visual_container').click()
  cy.get('.ComponentMessageEditor').type('textwithImg')
  cy.get('.schedule > .label_check').click()
  cy.get('.gray_button').click()
  cy.wait(5000)



})

it('Delete Published - C2782',()=>{

  cy.visit('/admin/account/3854/office/0/project/321267/scheduler_dashboard/week?t__SuggestedContentTab=Create')
  cy.wait(6000)
  cy.get('.btn_postnow').click()
  cy.wait(4000)
  cy.get('.ComponentMessageEditor').type('Post to delete')
  cy.wait(5000)
  cy.get('.instagramNetwork').click()
  cy.get('.gray_button').click()
  cy.wait(6000)
  cy.visit('/admin/account/3854/office/0/project/321267/scheduler_dashboard/week?t__SuggestedContentTab=Create')
  cy.wait(6000)
  cy.get('.facebook > .msg_container > .message_main').first().click()
  cy.wait(4000)
  cy.get('.edit_buttons > .warning_button').click()
  // cy.get('[class="icon_button warning_button btn_del_message"][title="Unpublish"]').click()
  cy.wait(4000)
  // cy.contains('primary_button gray_button btn_submit', 'Unpublish').click()
  // cy.get('.DlgUtilityConfirm > .bbm-modal > .bbm-modal__bottombar > .primary_button').click({force:true})
  // cy.get('.DlgUtilityConfirm > .bbm-modal > .bbm-modal__bottombar').find('.primary_button').click({force:true})
  cy.contains('.DlgUtilityConfirm > .bbm-modal > .bbm-modal__bottombar > .primary_button','Unpublish').click({force:true})

})

  it('URL shortner-C2785', ()=>{

      Cypress.on('uncaught:exception', (err, runnable) => {
    
          return false

      })

  cy.visit('/admin/account/3854/office/0/project/321267/scheduler_dashboard/week?t__SuggestedContentTab=Create')
  cy.wait(6000)
  cy.get('.btn_postnow').click()
  cy.get('.btn_bitly').click()
  cy.get('.bbm-modal__section > input').type(CompleteURL)
  cy.get('.DlgUtilityInput > .bbm-modal > .bbm-modal__bottombar > .primary_button').click()
  cy.wait(7000)
  cy.get('.schedule > .label_check').click()
  cy.get('.ComponentMessageEditor').contains('bit.ly')
  cy.get('.gray_button').click()

})

//raw and unfinished
// it('Image upload', ()=>{

//   Cypress.on('uncaught:exception', (err, runnable) => {
//     // returning false here prevents Cypress from
//     // failing the test       
//     return false
// })

//   cy.visit('/admin/account/3854/office/0/project/320406')
//   cy.wait(5000)
//   cy.contains('Social').click()
//   cy.wait(5000)
//   cy.url().should('include', 'scheduler')
//   cy.get('.btn_postnow').click()
//   cy.wait(4000)
//   cy.get('.gmbNetwork').click()
//   // cy.get('.ComponentMessageEditor').type(xMen[Math.floor(Math.random() * 6)])

//   // cy.fixture('walk.jpg').then((user)=>{
//   //   cy.get('.btn_upload_image').selectFile(user)
//   // })

//   // cy.get('.message_editable').type('Test message')
//   const filepath = '/walk.jpg'
//   cy.get('.btn_upload_image').attachFile(filepath)
//   // cy.get('.gray_button').click()
//   // cy.get('#uploaded-files').contains('evening.png')
  
//   // cy.get('.btn_upload_image').selectFile(Pic);
//   // cy.get('.gray_button').click()

// })

  it.skip('CAG', ()=>{

  let CAGLink = 'https://sneaky.meetsoci.com/approve?id=320406&token=1634799451'

    cy.visit('/admin/account/3854/office/0/project/320406/scheduler_dashboard/week?t__SuggestedContentTab=Create')
    cy.wait(5000)
    cy.get('.control_wrapper > .fa-thumbs-up').click()
    cy.get('.require_approval_block > .label_check').click()
    cy.get('.input_approval_url').type('{selectAll}')
    cy.get('.secondary_button').click() 

    //  .then( newWin=>{

    //     cy.wrap(newWin).type({ctrl}+{c})
    //     cy.visit({ctrl}+{v}, {failOnStatusCode: false})
        
    // })

    cy.get('.btn_postnow').click()
    // cy.get('[data-hour="5"] > .day_6').click()
    cy.get('.btn_choose_image').click()
    cy.get('[data-id="22603673"] > .visual_container').click()
    cy.get('.ComponentMessageEditor').type('textwithImg')
    cy.get('.schedule > .label_check').click()
    cy.get('.gray_button').click()

    cy.visit(CAGLink)

})

  it('Future Post & Edit - C2778', ()=>{

    cy.visit('/admin/account/3854/office/0/project/320512/scheduler_dashboard/week?t__SuggestedContentTab=Create')
    cy.wait(5000)
    cy.get('.control_wrapper > .fa-thumbs-up').click()
    cy.wait(4000)
    cy.get('.require_approval_block > .label_check').children('input').check({force: true})
    cy.get('.secondary_button').click()
    cy.wait(5000)

    for (let i = 0; i < 9; i++) {
      
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

    //to edit
    // cy.get('[data-hour="20"]').last().click()
    cy.log('Editing now')
    cy.get('.facebook > .msg_container > .message_main').click()
    cy.wait(4000)
    cy.get('.message_editable').type('Edited')
    cy.get('.gray_button').click({force:true})
    cy.wait(5000)


  } )

  it('Reschedule Future Post - C2779,80', ()=>{

    cy.get('.facebook > .msg_container > .message_main').click()
    cy.wait(4000)
    cy.get('.check_schedule_data > .first').click()
    cy.wait(3000)
    cy.get('.peak_and_add_container > .white_button').click()
    cy.get('.gray_button').click()
    cy.wait(5000)


  })

  it('Delete a future Post - C2781', ()=>{

    cy.get('.facebook > .msg_container > .message_main').click()
    cy.wait(4000)
    cy.get('.btn_delete').click()
    cy.wait(4000)
    cy.get('.DlgUtilityConfirm > .bbm-modal > .bbm-modal__bottombar > .primary_button').click({force:true})

  })



    it('Approve a Post - C2783', ()=>{

      cy.visit(Smoke22CAG)
      cy.wait(4000)
        cy.contains('.approval_post_body > .approval_actions_area > .btn_approval_approve','Approve').first().click()
    })

    it('Reject a Post - C2784', ()=>{

      cy.visit(Smoke22CAG)
      // cy.wait(4000)
      cy.wait(5000)
      cy.contains('.approval_post_body > .approval_actions_area > .btn_approval_reject','Reject').first().click()
      // #post_49343982 > .approval_post_body > .rejection_actions_area > .rejection_textarea_container > .rejection_textarea
      cy.get('[class="rejection_textarea"][name="reject_reason"][placeholder="Explain why you are rejecting this message."]').first().type('Reject for test')
      cy.contains('.approval_post_body > .rejection_actions_area > .rejection_buttons_area > .btn_approval_reject_confirm', 'Confirm Rejection').click()
   
    })



  it('Create Post Plans - C2786', ()=>{

  
    cy.visit('/admin/account/3854/office/0/project/320512/scheduler_dashboard/week?t__SuggestedContentTab=Create')
    cy.wait(5000)
    cy.get('.btn_plans').click()
    cy.get('.primary_button').click()
    cy.get('.title').type('Post Planz')
    cy.get(':nth-child(4) > .label_check').click()
    cy.get(':nth-child(5) > .label_check').click()
    cy.get('div.allow_duplicates > .label_check').click()
    cy.contains('.select2-chosen', 'All libraries').click()
    cy.wait(4000)
    // cy.get('[class="select2-input"][role="combobox"]').last().click()
    // cy.get('.select2-input').last().type('___Loc-level-lib') //working css selectors path
    cy.xpath('/descendant::input[starts-with(@id,"s2id_autogen")][32]').type('___Loc-level-lib')
    cy.wait(5000)
    cy.get('.content_selector_element').click()
    cy.wait(5000)
    cy.get('.btn_next').click()
    cy.wait(5000)


})



  it('Delete Post Plans - C2787', ()=>{

  cy.visit('/admin/account/3854/office/0/project/320512/scheduler_dashboard/week?t__SuggestedContentTab=Create')
  cy.wait(5000)
  cy.get('.btn_plans').click()
  cy.wait(4000)
  cy.get(':nth-child(1) > .type_recurring > .plan_actions > .gray_button').click()
  cy.get('.DlgUtilityConfirm > .bbm-modal > .bbm-modal__bottombar > .primary_button').click({force:true})
  cy.get('.bbm-modal__bottombar > .btn_cancel').click()
  
})

it('Dicovery Page - C2788', ()=>{

  cy.visit('/admin/account/3854/office/0/project/320406/digger/rss')
  cy.wait(6000)
  cy.get('#plan_bar').should('be.visible')

})

it('Queued Post - C2789',()=>{

  cy.visit('/admin/account/3854/upcoming')
  cy.wait(5000)
  cy.get('.message_inner').first().should('be.visible')


})

it('Published Posts - C2790',()=>{

  cy.visit('/admin/account/3854/office/0/project/320512/social_hub#513749/feed')
  cy.wait('@Published')
  // cy.wait(6000)
  cy.get('.message_inner').first().should('be.visible')

})


})





