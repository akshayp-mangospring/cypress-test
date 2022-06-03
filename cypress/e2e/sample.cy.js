describe('My First Test', () => {
  it('Visits Google and searches Hello World!', () => {
    cy.visit('https://www.google.com');
    cy.get(`input[name="q"]`)
      .click()
      .type(`${Cypress.env('google').query}{enter}`);
  });
});
