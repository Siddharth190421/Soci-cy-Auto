

describe('Ignite', () => {

    beforeEach(() => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false

        })

})


it('Ignite', ()=>{
    
    cy.visit('ignite.where2stageit.com')
    cy.wait(4000)
    cy.contains('Accept').click()
    cy.wait(4000)
    cy.get('#loginid').type('skakade')
    cy.get('#password').type('Sandeep*141#')
    cy.get('.login-button > input').click()
    cy.wait(8000)
    cy.get('#where2getit > .btn').click()
    cy.wait(8000)


})

it('html', ()=>{

    cy.visit('https://ignite.where2stageit.com//locationmanager.html')
    cy.wait(5000)
})


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

describe.only('VPN', ()=>{

    
    it('VPN logo and cards visible', ()=>{
        
        cy.visit('https://www.expressvpn.com/order')

        cy.wait(5000)
        cy.get('.nav-logo').should('be.visible')
        cy.get('#package_1 > .desktop > .plan-box-wrapper > .plan-box').should('be.visible')
        
        cy.get('#package_1 > .desktop > .plan-box-wrapper > .plan-box > .plan-name').contains('1 Month')
        
        cy.get('#package_3 > .desktop > .plan-box-wrapper > .plan-box').should('be.visible')
        
        cy.get('#package_3 > .desktop > .plan-box-wrapper > .plan-box > .plan-name').contains('12 Months')
        
        cy.get('#package_2 > .desktop > .plan-box-wrapper > .plan-box').should('be.visible')
        
        cy.get('#package_2 > .desktop > .plan-box-wrapper > .plan-box > .plan-name').contains('6 Months')
        
        cy.get('h1.txt-center').should('have.text','Get ExpressVPN in 3 easy steps')

    })
        
        
    it('Clicking Cards ', ()=>{

    cy.get('#package_1 > .desktop > .plan-box-wrapper > .plan-box').click()
        cy.wait(4000)
    cy.get('#package_2 > .desktop > .plan-box-wrapper > .plan-box').click()
        cy.wait(4000)
    cy.get('#package_3 > .desktop > .plan-box-wrapper > .plan-box').click()

})

    it('Email', ()=>{

        cy.get('#signup_email').type('subodh@testriq.com')

    })


    it.only('vvv',()=>{

        cy.visit('www.expressvpn.com/')
        cy.get('.nav-menu-item.js-cta-get-started > .button-group > .btn').click()
    })







})

})






