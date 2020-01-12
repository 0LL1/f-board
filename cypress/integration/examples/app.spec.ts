describe('User', function() {
  it('can open and close menu', function() {
    cy.visit('/')
    cy.contains('guitar').should('not.exist')
    cy.get('[data-test=menu-button]').click()
    cy.contains('guitar')
    cy.get('[data-test=menu-button]').click()
    cy.contains('guitar').should('not.exist')
  })

  it('can add and remove strings', function() {
    // ...
  })
})
