/// <reference types="cypress"/>

describe('Flight Booking system', () => {
  beforeEach(()=>{
    cy.fixture('example.json').then((data)=>{
      cy.visit(data.url)

    })
  })
  

  it('TC1', () => {

    cy.title().should('eq','Dummy ticket for applying visa - Verifiable flight reservation for embassy')
    cy.url().should('include','dummy-ticket-for-visa-application') //verify url
    cy.get('#product_549').should('be.visible').click() // select a radio button
    cy.get('#travname').type('Ayush') //Enter first name
    cy.get('#travname').should('have.value','Ayush')
    cy.get('#dob').click()
    cy.get('.ui-datepicker-year').select('1991')
    cy.get('.ui-datepicker-year').should('have.value','1991')
    cy.contains('[data-handler="selectDay"] a','25').click()
    cy.get('input[id="sex_1"]').click()
    cy.get('#addmorepax').click()
    cy.get('#select2-addpaxno-container').should('be.visible')
    cy.get('#select2-addpaxno-container').click()
    cy.get('.select2-search__field').type('traveler{enter}')
    cy.get('#select2-addpaxno-container').contains('traveler')

    cy.get('#traveltype_1').click()
    cy.get('#fromcity').type('London')
    cy.get('#tocity').type('Delhi')

    cy.get('#departon').click()
    cy.get('.ui-datepicker-month').select('Apr')
    cy.get('.ui-datepicker-month').should('have.value','3')
    cy.contains('[data-handler="selectDay"] a','27').click()

    //billing details

    cy.get('#billing_phone').type('987654321')
    cy.get('#billing_email').type('lomugepu@ema-sofia.eu')
    cy.get('#billing_address_1').type('21 Baker street')
    cy.get('#billing_city').type('London')
    cy.get('#billing_postcode').type('LE20PE')
    cy.get('.order-total>th').should('be.visible')

    //select debit cart as payment option
    cy.get('#payment_method_stripe').click()
    //cy.get('#payment_box payment_method_stripe').should('be.visible')



    //place order
    //cy.get('#place_order').click()


    
    
  })
})