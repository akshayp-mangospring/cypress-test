describe('Login into MangoApps', () => {
  it('Visits Login page of the app and tries to login', () => {
    cy.visit('/');
    cy.get('#user_id').click().type('admin@pages.com');
    cy.get('#password').click().type('temp1234');
    cy.get('#yui-gen0').click();
  });
});
