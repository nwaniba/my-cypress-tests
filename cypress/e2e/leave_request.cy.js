describe('Leave Request', () => {

  beforeEach(() => {
    cy.visit("https://internal.sdsd.com/login")
  });

  it('Login to the application', () => {
    // Load credentials from the fixture file
    cy.fixture('credentials').then((credentials) => {
      // Use the loaded credentials to fill in the login form
      cy.get('input[name="Username"]')
        .type(credentials.DB_USERNAME);

      cy.get('#Password')
      .type(credentials.DB_PASSWORD, { log: false });

      cy.get(':nth-child(4) > td > .btn').click();
      cy.get('img[alt="HRMS"]').should('be.visible').click();
      cy.get('.submenu > li > a').contains('Leave Request').click();
      cy.get('#idGridNewRecord').click();
    });
  });
      
});