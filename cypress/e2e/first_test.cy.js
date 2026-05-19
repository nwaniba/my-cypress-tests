describe('Launch Application', () => {

  beforeEach(() => {

    cy.visit('https://parabank.parasoft.com/parabank/index.htm')

  })

  it('launch the test application', () => {

    cy.title().should('contain', 'ParaBank')

  })

  it('Test Login Button (Get Method)', () => {

    cy.get("input[name='username']").type('help')

    cy.get("input[name='password']").type('1234')

    cy.get("input[type='submit']").click()

  })

})