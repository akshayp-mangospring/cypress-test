import { loginTests } from './tests/login';

describe('Checks if the site width is 1200', () => {
  loginTests();

  it('Checks if the site width is 1200', () => {
    cy.get('.body').should('have.css', 'width').and('eq', '1200px');
  });
});
