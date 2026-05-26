describe('Registration', () => {

 // beforeEach(() => {
  //  cy.visit("https://")
    // });
    it('Register', () => {
        

    cy.visit("https://parabank.parasoft.com/parabank/index.htm")
    cy.get('#loginPanel > :nth-child(3) > a').click();
    cy.get('input[id="customer.firstName"]').type('Joan');
    cy.get('input[id="customer.lastName"]').type('Sam');
    cy.get('input[id="customer.address.street"]').type('123 Main St');
    cy.get('input[id="customer.address.city"]').type('Anytown');
    cy.get('input[id="customer.address.state"]').type('CA');
    cy.get('input[id="customer.address.zipCode"]').type('12345');
    cy.get('input[id="customer.phoneNumber"]').type('555-123-4567');
    cy.get('input[id="customer.ssn"]').type('123-45-6789');
    cy.get('input[id="customer.username"]').type('joan.sam');
    cy.get('input[id="customer.password"]').type('password123');
    cy.get('input[id="repeatedPassword"]').type('password123');
    cy.get('input[value="Register"]').click();

     });
  });