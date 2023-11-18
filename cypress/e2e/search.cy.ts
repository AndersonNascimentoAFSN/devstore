describe('search products', () => {
  it('should be able to search for products', () => {
    // cy.visit('/')
    // cy.get('input[name=q]').type('moletom').parent('form').submit()
    cy.searchByQuery('moletom')

    cy.location('pathname').should('include', '/search')
    cy.location('search').should('include', 'q=moletom')

    cy.get('a[href^="/product"]').should('have.length.gte', 1)
    cy.get('a[href^="/product"]').first().click()
  })

  it('should not be able to visit search page without a search query', () => {
    cy.on('uncaught:exception', () => {
      return false
    })

    cy.visit('/search')
    cy.location('pathname').should('eq', '/')
    cy.location('pathname').should('not.include', '/search')
  })
})
