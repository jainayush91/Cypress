describe('hooks and tags',()=>{

    before(()=>{

        cy.log('*****open the app*****')
    })

   after(()=>{
    cy.log('******close the app*****')
   }) 

   beforeEach(()=>{
    cy.log('*******login into the app******')
   })

   afterEach(()=>{
    cy.log('******logout the app******')
   })

   it('search',()=>{
    cy.log('****search****')

   })

   it('Advanced search',()=>{
    cy.log('****search****')
   })

   it('Super advanced search',()=>{
    cy.log('****adding a text****')
   })
})