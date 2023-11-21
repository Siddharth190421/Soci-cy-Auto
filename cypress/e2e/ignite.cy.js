
import 'cypress-iframe'

import {hosted} from "../support/page_objects/hosted.js"

const Hosted = new hosted()




describe('Ignite', () => {

    beforeEach(() => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false

        })

})


// it('Ignite', ()=>{
    
//     cy.visit('ignite.where2stageit.com')
//     cy.wait(4000)
//     cy.contains('Accept').click()
//     cy.wait(4000)
//     cy.get('#loginid').type('skakade')
//     cy.get('#password').type('Sandeep*141#')
//     cy.get('.login-button > input').click()
//     cy.wait(8000)
//     cy.get('#where2getit > .btn').click()
//     cy.wait(8000)


// })


it('Locator True value prod', ()=>{

    cy.visit('https://storelocator.truevalue.com/index2015.new.html')
    cy.wait(5000)
    cy.get('#inputaddress').type(50266)
    cy.wait(5000)
    cy.get('#submit-button').click()
    cy.wait(6000)
    cy.get('[data-id="0"] > .poi_items_row').should('be.visible')
    cy.get('#inputaddress').clear()
    cy.get('#inputaddress').type('Santa clara')
    cy.wait(6000)
    cy.get('#submit-button').click()

})

it('Chamberlain', ()=>{

    cy.visit('https://hosted.where2stageit.com/chamberlain/index.html')
    cy.wait(5000)
    cy.get('#address_input').type(50266)
    cy.wait(5000)
    cy.get('#search-button').click()
    cy.get('.poi_wrapper > .dealer-card > .info').should('be.visible')
    cy.get('#address_input').clear()
    cy.get('#address_input').type('santa clara')
    cy.get('#search-button').click()
    cy.wait(5000)
    cy.get('.poi_wrapper > .dealer-card > .info').should('be.visible')


})


it('foremost', ()=>{

    cy.visit('https://hosted.where2getit.com/foremost/')
    cy.wait(5000)
    cy.contains('Close').click()
    cy.get('#search_input').type(50266)
    // cy.get('#productlist').click()
    // cy.contains('Home').click()
    cy.get('.button-search').click()
    cy.get('[data-id="0"]').should('be.visible')
    cy.get('#search_input').clear()
    cy.get('#search_input').type('santa clara')
    cy.get('[data-id="0"]').should('be.visible')


})

it('garage', ()=>{

    cy.visit('https://hosted.where2stageit.com/officedepot/consumertest.html')
    cy.wait(4000)
    cy.get('#inputaddress1').type(50266)
    cy.get('#btnALL').click()
    cy.get(':nth-child(1) > li.poi-item > .div_row').should('be.visible')
    cy.get('#inputaddress1').clear()
    cy.get('#inputaddress1').type('santa clara')

})


it('Michaels', ()=>{

    cy.visit('https://hosted.where2stageit.com/michaels/storelocator.html')
    cy.wait(7000)
    cy.get('#search_input').type(50266)
    cy.get('#search_button').click()
    cy.get('.poi-item > .cd-store-wrap').should('be.visible')
    cy.get('#search_input').clear()
    cy.get('#search_input').type('santa clara')
    cy.get('#search_button').click()
    cy.get('.poi-item > .cd-store-wrap').should('be.visible')
    cy.get('#bubble-btn-1').click()


})


it('HP', ()=>{

    cy.visit('https://hosted.where2stageit.com/hp/aruba.html')
    cy.wait(7000)
    cy.get('#ctDrop').click()
    cy.wait(4000)
    cy.get('#ctOptions').scrollTo('bottom')
    cy.contains('United States Of America').click({force:true})
    cy.wait(4000)
    cy.get('#input-location').clear()
    cy.wait(4000)
    cy.get('#input-location').type(50266)
    cy.get('#select-partner-type').select('Find a Reseller Partner')
    cy.wait(7000)
    cy.get('#search-partner-results').click()
    


})


it('Daltile', ()=>{

    cy.visit('https://hosted.where2stageit.com/daltile/')
    cy.wait(5000)
    cy.get('.overlay').click()
    cy.wait(5000)
    cy.get('#search_input').type(50266)
    cy.get('.button-search').click()
    cy.get(':nth-child(1) > .store-name-click-listing > .upper-col-right').should('be.visible')
    cy.wait(4000)
    cy.get('#search_input').clear()
    cy.get('#search_input').type('Santa clara')
    
    cy.get('#searchradius').select('50 Miles')

    cy.get('.button-search').click()
    cy.get(':nth-child(1) > .store-name-click-listing > .upper-col-right').should('be.visible')


})


it('Family dollar store', ()=>{

    cy.visit('https://hosted.where2stageit.com/familydollarstore/index.test.html')
    cy.wait(5000)
    cy.get('#inputaddress').type(50266)
    cy.get('#search_button').click()
    cy.get('[data-id="0"]').should('be.visible')
    cy.get('#inputaddress').clear()
    cy.get('#inputaddress').type('santa clara')
    cy.get('#search_button').click()
    cy.get('[data-id="0"]').should('be.visible')

})

it('Dollar Tree', ()=>{

    cy.visit('https://hosted.where2stageit.com/dollartree/change-store.html')
    cy.wait(7000)
    cy.get('#modalPop').find('.closeBtn').click()
    cy.get('.addressentry').type(50266)
    cy.get('#search_button').click()
    cy.get('[data-id="0"]').should('be.visible')
// Clearing and trying with text address
    cy.get('.addressentry').clear()
    cy.get('.addressentry').type('santa clara')
    cy.get('#searchradius').select('50 miles')
    cy.get('#search_button').click()
    cy.get('[data-id="0"]').should('be.visible')


})

it('Joann', ()=>{

    cy.visit('https://hosted.where2stageit.com/joann/mystore/locator-0811.html')
    cy.wait(5000)
    cy.get('#inputaddress').type(50266)
    cy.get('#pseudoBtn').click()
    cy.wait(4000)
    cy.get('[data-clientkey="1653"] > td').should('be.visible')

    
})

describe.only('Prod', ()=>{


    it('attnew',()=>{

        cy.visit('https://www.att.com/stores/new-jersey/westfield/215721')
        cy.wait(7000)

        cy.get(".Text.attgn-page.w2gi-backbone").then(($obj) =>{


            if($obj.find(".fsrInvite").length > 0){

                cy.contains('.fsrButton__inviteDecline', 'No thanks').click()

            }else {

                cy.get('#search_input').clear({force:true})

            }

        })

                cy.get('#search_input').type('50131')
                cy.wait(4000)
                cy.get('#search_button').click()



    })



    it.skip('att',()=>{

        cy.visit('https://www.att.com/stores/new-jersey/westfield/215721')
        cy.wait(9000)

        cy.get('#fsrFullScreenContainer').then((main) =>{

            console.log(main.find(".fsrInvite") )



            // if(main.find("No thanks").length > 0  ){

            //     cy.contains('No thanks').click()
            // }

            

        })









        // jquery text approach

        // cy.contains('.fsrButton__inviteDecline', 'No thanks').click()

        // cy.get('#main').then(($main) =>{

        //     if($main.text().includes('No thanks')) {

        //         cy.contains('.fsrButton__inviteDecline', 'No thanks').click()

        //     }else{

        //         cy.get('#search_input').clear({force:true})
        //     }


        // })


        // storing in variable 

        // const nothanks = cy.contains('.fsrButton__inviteDecline', 'No thanks').should('exist')


        // if(nothanks){

        //     nothanks.click()

        // }else
        // {
        //     cy.get('#search_input')
        // }


// whole element 



        // cy.contains('.fsrButton__inviteDecline', 'No thanks').should('exist').then(($el)=>{

        //     if($el){

        //         cy.contains('.fsrButton__inviteDecline', 'No thanks').click()

        //     }else{

        //         cy.get('#search_input').clear()
        //     }
        // })



        // cy.wait(4000)
        // cy.get('.ButtonRedesign--primary').click()
        // cy.contains('Decline optional cookies').shadow().click({force:true})
        // cy.get('#gpc-banner-container').shadow().contains('Decline optional cookies').click()
         
        // cy.wait(8000)
        // cy.get('.Banner-wrapper').should('be.visible')
        // cy.get('.LocationPage').should('be.visible')
        // cy.get('.ButtonRedesign--primary').should('be.visible')
        // cy.get('#directionsBTN > .c-get-directions-button-wrapper > .c-get-directions-button').should('be.visible')

        // cy.get('#search_input').type('50131')
        // cy.get('#search_button').click()
        // // cy.get('[data-id="1"]').should('be.visible')
        // // cy.get('.LocationPage > :nth-child(3)').should('be.visible') 

    })


    it('NorthFace', ()=>{

        cy.visit('https://locations.thenorthface.com')
        cy.wait(5000)
        cy.get('#search_input').type('50266')
        cy.get('.button-search').click()
        // cy.get(':nth-child(1) > .lblfilter > span').click()
        cy.get(':nth-child(1) > .poi-item > .poi_box').should('be.visible')
        cy.get(':nth-child(2) > .poi-item > .poi_box').should('be.visible')

        cy.get('#search_input').clear()
        cy.get('#search_input').type('50131')
        cy.get('.button-search').click()
        cy.get(':nth-child(1) > .poi-item > .poi_box').should('be.visible')
        cy.get(':nth-child(2) > .poi-item > .poi_box').should('be.visible')

        cy.get('#search_input').clear()
        cy.get('#search_input').type('Santa Clara')
        cy.get('.button-search').click()
        cy.wait(5000)
        cy.get(':nth-child(1) > .poi-item > .poi_box').should('be.visible')
        cy.get(':nth-child(2) > .poi-item > .poi_box').should('be.visible')

        // cy.get('.address-wrapper').eq(0).should('have.text', '\n                                        2855 stevens creek boulevard, santa clara, CA 95050\n                                    ')
        
        cy.get(':nth-child(1) > .poi-item > .poi_box > .address-wrapper').then( function (e){

            const t = e.text()
            expect(t).to.contains('santa clara')

        })

        cy.get('.filter-toggle').click()
        cy.get(':nth-child(1) > .lblfilter').click()
        cy.get(':nth-child(2) > .lblfilter').click()

        cy.get('.filter-toggle').click()
        cy.wait(4000)
        cy.get(':nth-child(1) > .poi-item > .poi_box').should('be.visible')


    })


    it('DSG', ()=>{


        cy.visit('https://storelocator.dickssportinggoods.com')
        cy.wait(7000)
        cy.reload()
        cy.wait(7000)

        cy.get('#search_address').type('50266')
        cy.get('#search_button').click()
        cy.wait(6000)
        cy.get('tr[recnum="1"] > :nth-child(1) > .location_row').should('be.visible')

        cy.get('tr[recnum="1"] > :nth-child(1) > .location_row').click()

        cy.get('tr[recnum="1"] > :nth-child(1) > .location_row > .col_4 > .actions > .get_directions > a > span.ga_w2gi_loc').click()

        cy.get('[style="width: 330px; height: 270px; position: relative;"] > .mainbubblecontent > .mainbubbletabcontent > .activetabcontent > .bubble_directions > .bubble_form_2 > .bubble_input').type('50266')
        // cy.get('.bubble_form_2 > .bubble_input[name="addressline"]').type('50266')
        // cy.contains('.bubble_form_2 > .bubble_go ga_w2gi_loc',  'SUMBIT').click({force:true})
        // cy.get('input[class="bubble_go ga_w2gi_loc"]').click({force: true})
        // cy.xpath("/descendant::form[contains(@onsubmit,'return')][2]//input[contains(@class,'bubble_go')]").click()
        cy.get('[style="width: 330px; height: 270px; position: relative;"] > .mainbubblecontent > .mainbubbletabcontent > .activetabcontent > .bubble_directions > .bubble_form_2 > .bubble_go').click()
        cy.contains('.address_line1', '50266').should('be.visible')

    })


    it('Vans', ()=>{


        cy.visit('https://locations.vans.com/')
        cy.wait(5000)
        cy.get('#search_address').clear()
        cy.get('#search_address').type('50266')
        // cy.get('select').click()
        // cy.get('#searchBtn').click()
        cy.get('#collection_poi > ul > :nth-child(1) > .cd-store-wrap > .cd-store-content > .store-contact-location > .map-mark').click()
        cy.get('[style="width: 276px; height: 245px; position: relative;"] > .mainbubblecontent > .mainbubbletabcontent > .activetabcontent > [style="padding-top: 0.7em;"] > form > #bubble-input').type('50266')
        cy.get('[style="width: 276px; height: 245px; position: relative;"] > .mainbubblecontent > .mainbubbletabcontent > .activetabcontent > [style="padding-top: 0.7em;"] > form > [type="submit"]').click()
        

    })


    it('Office Depot', ()=>{

        cy.visit('https://hosted.where2getit.com/officedepotprinting/index.html')
        cy.wait(5000)
        // cy.get('#search_country').click()
        cy.get('#search_input').type('50266')
        cy.get('.button-search').click()
        cy.get('#poi').should('be.visible')
        cy.get(':nth-child(1) > .poi-item > .sub_poi_wrapper > .poi_box').should('be.visible')

        //select the search results 
        cy.get(':nth-child(1) > .poi-item > .sub_poi_wrapper > .poi_box').click()
        //entering for get direction & get direction
        cy.get('#input_moreinfo').type('50131')
        cy.get('#button_moreinfo > img').click()

        cy.get('.content-list').should('be.visible')

        //back to search results
        cy.get('#search_return').click()


    })

    it('New One', ()=>{

        cy.visit('http://hosted.where2getit.com/officedepottech/index.html')
        cy.wait(5000)
        cy.get('#search_input').type('50266')
        cy.get('.button-search').click()

        cy.get('#poi').should('be.visible')
        cy.get(':nth-child(1) > .poi-item > .sub_poi_wrapper > .poi_box').should('be.visible')

        //select the search results 
        cy.get(':nth-child(1) > .poi-item > .sub_poi_wrapper > .poi_box').click()
        //entering for get direction & get direction
        cy.get('#input_moreinfo').type('50131')
        cy.get('#button_moreinfo > img').click()

        cy.get('.content-list').should('be.visible')

        //back to search results
        cy.get('#search_return').click()


    })

    it('Cheesecake', ()=>{

        cy.visit('http://hosted.where2getit.com/cheesecaketest/index.html')
        cy.wait(5000)
        cy.get('.zmdi').click()
        cy.get('.search-box').type('50266')
        cy.get('#search_button').click()
        cy.get('.poi-item').should('be.visible')

        //Filters 

        cy.reload()
        cy.wait(5000)
        cy.get('.zmdi').click()
        cy.get('.filterToggle').click()
        cy.get('#show-stores-checkbox').click({force:true})
        cy.get('#show-stores-checkbox1').click({force:true})
        cy.get('#show-stores-checkbox2').click({force:true})
        cy.get('#show-stores-checkbox3').click({force:true})
        

    })


    it('Burlingtondemo', ()=>{

        cy.visit('http://hosted.where2getit.com/burlingtondemo/index.html')
        cy.wait(5000)
        cy.get('#search_input').type('50266')
        cy.get('.button-search').click()
        cy.get('.sub_poi_wrapper').should('be.visible')
        cy.get('.sub_poi_wrapper').click()

        //Get Directions
        cy.get('#input_moreinfo').type('50131')
        cy.get('#button_moreinfo > img').click()
        cy.get('#poi').should('be.visible')
        cy.get('.wrapper').should('be.visible')
        cy.get('#search_return').click()

    })

    it('TraderJoes',()=>{

        cy.visit('http://hosted.where2getit.com/testtraderjoestest/index.html')
        cy.wait(5000)
        cy.get('.zmdi').click()
        cy.get('.search-box').type('50266')
        cy.get('#search_button').click()
        cy.get('.poi-item').should('be.visible')

        cy.get('.poi_address > :nth-child(1) > a').click()
        cy.get('.direction_address').type('50131')
        cy.get('.search_arrow').click()
        cy.get('.content-list').should('be.visible')

        cy.get('.searchagain').click()



    })

    it('Verify Home Page', () => {

        cy.visit('https://benjerry.where2getit.com/')
        cy.wait(5000)
        cy.get('span:contains("Address or Postcode")').should('be.visible');
        cy.get('input#inputaddress').should('be.visible');
        cy.get('select#search_country').should('be.visible');
        cy.get('input#search_button').should('be.visible');
        cy.get('span:contains("Offers Catering")').should('be.visible');
        cy.get('input#CATERING').should('be.visible');
        cy.get('span:contains("Offers Ice Cream Cakes")').should('be.visible');
        cy.get('input#CAKESFORSALE').should('be.visible');
    });


    it('culvers', ()=>{

        cy.visit('https://hosted.where2getit.com/culvers/index.2019.html')
        cy.wait(5000)
        cy.get('#search_input').type('50266')
        cy.get('.locator-search__bar > .button-search').click()
        cy.wait(5000)
        cy.get('[data-id="0"]').should('be.visible')

        // cy.get('[data-id="0"] > .col_cont > .column_two > .desktop_hours > .buttons > .button-desktop').click()
        cy.get('[data-id="0"] > .col_cont > .column_one').click()

        cy.get(':nth-child(12) > .input-custom').click()
        cy.get(':nth-child(13) > .input-custom').click()
        cy.get('[style="margin-top:15px;"] > .input-custom').click()
    })

    it('samashmusic', ()=>{

        //SEARCH
        cy.visit('http://hosted.where2getit.com/samashmusic/index.html')
        cy.wait(5000)
        cy.get('.search-btn-wrapper > button.ga_w2gi_loc > .ga_w2gi_loc').click()
        cy.get('#search_input').type('90046')
        cy.get('.button-search-wrapper > .button-search').click()

        //BY STATE
        cy.get('.close-searchbox').click()
        cy.get('.state-btn-wrapper > button.ga_w2gi_loc > .ga_w2gi_loc').click()
        cy.get('#state_pulldown').select('Arizona (1)')

        // FILTERS
        cy.get('.close-state_select').click()
        cy.get('.filter-btn-wrapper > button.ga_w2gi_loc > .ga_w2gi_loc').click()
        cy.get('[tabindex="11"] > .ga_w2gi_loc').click()
        cy.get('[tabindex="12"] > .ga_w2gi_loc').click()
        cy.get('[tabindex="13"] > .ga_w2gi_loc').click()
        cy.get('#filters > :nth-child(4) > .ga_w2gi_loc').click()
        cy.get(':nth-child(5) > .ga_w2gi_loc').click()
        cy.get(':nth-child(6) > .ga_w2gi_loc').click()
        cy.get(':nth-child(7) > .ga_w2gi_loc').click()


    })

    it('Golf galaxy', ()=>{

        cy.visit('https://storelocator.golfgalaxy.com/index.html')
        cy.wait(4000)
        cy.reload()
        cy.wait(6000)
        cy.get('#search_input').type('50131')
        cy.get('.button-search').click()
        cy.wait(5000)
       

        cy.get('#search_input').clear()
        cy.get('#search_input').type('50266')
        cy.get('.button-search').click()



    })

    it('Labcorp', ()=>{

        cy.visit('http://hosted.where2getit.com/labcorp/index.html')
        cy.wait(5000)
        cy.get('.zmdi').click()
        cy.get('.search-box').type('50266')
        cy.get('#search_button').click()
        cy.get('[data-id="0"]').should('be.visible')
        cy.get('.search-box').clear()
        cy.get('.search-box').type('550131')

        cy.get('#search_button').click()
        cy.get('[data-id="0"]').should('be.visible')


    })

    it('rossdressforless', ()=>{

        cy.visit('http://hosted.where2getit.com/testrossdressforlesstest/index.html')
        cy.wait(5000)
        cy.get('.zmdi').click()
        cy.get('.search-box').type('50266')
        cy.get('#search_button').click()
        cy.get('[data-id="0"]').should('be.visible')

    })

    it('skecherscz', ()=>{

        cy.visit('http://hosted.where2getit.com/skecherscz/index.html')
        Hosted.search()
        Hosted.selectFilters()
        
    })

    it('skechersde', ()=>{

        cy.visit('http://hosted.where2getit.com/skechersde/index.html')
        Hosted.search()
        Hosted.selectFilters()
        
    })

    it('skechersfr', ()=>{

        cy.visit('http://hosted.where2getit.com/skechersfr/index.html')
        Hosted.search()
        Hosted.selectFilters()
        

    })

    it('skechershu', ()=>{

        cy.visit('http://hosted.where2getit.com/skechershu/index.html')
        Hosted.search()
        Hosted.selectFilters()
        

    })

    it('skechersit', ()=>{

        cy.visit('http://hosted.where2getit.com/skechersit/index.html')
        Hosted.search()
        Hosted.selectFilters()
        

    })

    it('skechersjp', ()=>{

        cy.visit('http://hosted.where2getit.com/skechersjp/index.html')
        Hosted.search()
        Hosted.selectFilters()
        

    })

    it('skechersla', ()=>{

        cy.visit('http://hosted.where2getit.com/skechersla/index.html')
        Hosted.search()
        Hosted.selectFilters()
        

    })

    it('skechersnl', ()=>{

        cy.visit('http://hosted.where2getit.com/skechersnl/index.html')
        cy.wait(4000)
        Hosted.search()
        Hosted.selectFilters()
    
    })


    it('amazon', ()=>{

        cy.visit('https://hosted.meetsoci.com/amazonfreshfc/index.html')
        cy.wait(5000)
        Hosted.search()
        cy.get('#filter_button > img').click()
        cy.get('#filter1').click()
        cy.get('#filter2').click()
        cy.get('#filter3').click()
        cy.get('#filter4').click()
        cy.get('.closeFilters').click()

       
    })

    it('amazon fresh', ()=>{

        cy.visit('https://hosted.where2getit.com/amazonfresh/index.html')
        cy.wait(4000)
        Hosted.search()
        cy.get('#filter_button').click()
        cy.get(':nth-child(2) > .filter_unselected').click()
        cy.get(':nth-child(3) > .filter_unselected').click()
        cy.get(':nth-child(4) > .filter_unselected').click()
        cy.get(':nth-child(5) > .filter_unselected').click()
        
        cy.get('#apply_button').click()


    })

    it('baseettfurniture', ()=>{

        cy.visit('http://hosted.where2getit.com/bassettfurniture/index.html')
        cy.wait(5000)
        cy.get('.filter_btn').click()
        cy.get(':nth-child(1) > label').click()
        cy.get('ul > :nth-child(2) > label').click()
        cy.get(':nth-child(3) > label').click()
        cy.get(':nth-child(4) > label').click()
        cy.get(':nth-child(5) > label').click()
        cy.get(':nth-child(6) > label').click()
        cy.get(':nth-child(7) > label').click()
        cy.get(':nth-child(8) > label').click()
        cy.get('.filter_btn').click()

        cy.get('#search_input').clear()
        cy.get('#search_input').type('90046 {enter}')
        cy.wait(5000)
        cy.get('.poi-item').first().should('be.visible')


        cy.get('#search_input').clear()
        cy.get('#search_input').type('santa clara {enter}')
        cy.wait(5000)
        cy.get('.poi-item').first().should('be.visible')

    
    })


})




})






