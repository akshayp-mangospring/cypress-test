describe('Login into MangoApps', () => {
  it('Visits Login page of the app and tries to login with invalid details', () => {
    cy.visit('/');
    cy.get('#user_id').click().type('admin@riadomain.com');
    cy.get('#password').click().type('@123{enter}');
  });

  it('Checks if error is visible or not', () => {
    cy.get('#error_status').should('be.visible');
  });

  it('Visits Login page of the app and tries to login with valid details', () => {
    cy.visit('/');
    cy.get('#user_id').click().type('admin@riadomain.com');
    cy.get('#password').click().type('Mango@123');
    cy.get('#yui-gen0').click();
  });

  it('Checks color of the top header to be black', () => {
    cy.get('.ms-main-header-top')
      .should('have.css', 'background')
      .and(
        'eq',
        'rgb(51, 60, 73) none repeat scroll 0% 0% / auto padding-box border-box'
      );
  });
});
