import { getEnvData, getHomePageLink } from '../../data_utils';

export function loginTests() {
  const env = 'qa';
  const homePageLink = getHomePageLink(env);
  const envData = getEnvData(env);

  it('Visits Login page of the app and tries to login with invalid details', () => {
    cy.visit(homePageLink);
    cy.get('#user_id').click().type(envData.user_email);
    cy.get('#password').click().type('@123{enter}');
  });

  it('Checks if error is visible or not', () => {
    cy.get('#error_status').should('be.visible');
  });

  it('Visits Login page of the app and tries to login with valid details', () => {
    cy.visit(homePageLink);
    cy.get('#user_id').click().type(envData.user_email);
    cy.get('#password').click().type(envData.user_pass);
    cy.get('#yui-gen0').click();
  });
}
