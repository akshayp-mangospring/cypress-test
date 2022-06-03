describe('Login into MangoApps', () => {
  it('Visits Login page of the app and tries to login', () => {
    cy.visit('/');
    cy.get('#user_id').click().type('admin@riadomain.com');
    cy.get('#password').click().type('Mango@123');
    cy.get('#yui-gen0').click();
  });
});
