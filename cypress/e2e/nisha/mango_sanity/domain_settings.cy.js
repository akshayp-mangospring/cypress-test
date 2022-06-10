describe("Domain Settings", () => {
  it("Login", () => {
    cy.visit("/admin/domain/home_link");
    cy.url().should("include", "riadomain");
    cy.get("#user_id").click().type("admin@riadomain.com");
    cy.get("#password").click().type("Mango@123");
    cy.get("#yui-gen0").click();
    Cypress.Cookies.preserveOnce("_felix_session_id");
  });

  it("Set landing page of domain", () => {
    cy.get(".default-network-users-nav #three_dot_icon").click();
    cy.get(".default-network-users-nav .edit_domain_navigation_li").click();
    cy.get("#domain_navigation_landing_page").select("Departments");
    cy.get(".actionbutton:nth-child(2) .loading_text").click();
    Cypress.Cookies.preserveOnce("_felix_session_id");
  });

  it("Revert landing page of domain", () => {
    cy.get(".default-network-users-nav #three_dot_icon").click();
    cy.get(".default-network-users-nav .edit_domain_navigation_li").click();
    cy.get("#domain_navigation_landing_page").select("News Feed");
    cy.get(".actionbutton:nth-child(2) .loading_text").click();
  });
});
