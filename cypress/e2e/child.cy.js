describe('how to open a new window',()=>{
    it('child window approach 1',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.title().should('eq','The Internet')
        cy.get('.example>a').invoke('removeAttr','target').click()
        cy.url().should('include','/new')

        //go back to parent
        cy.go('back')
    })
})