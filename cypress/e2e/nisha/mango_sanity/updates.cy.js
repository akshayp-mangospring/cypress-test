describe("Shares an Update", () => {
  it("Login with valid details", () => {
    cy.visit("/u");
    cy.get("#user_id").click();
    cy.get("#user_id").type("admin@riadomain.com");
    cy.get("#password").click();
    cy.get("#password").type("Mango@123");
    cy.get("#yui-gen0").click();
    Cypress.Cookies.preserveOnce("_felix_session_id");
  });

  it("Shares an update in group, with attached file", () => {
    cy.wait(2000);
    const feedContent = `Automated - ${new Date().toUTCString()}`;
    cy.get(".fa-pen-to-square").click();
    cy.get(".active .block").click();
    cy.get("#global-composebox-item-update > .block").click();
    cy.wait(2000);
    cy.get("#select-group-to-status-wrap").click().type("All Users");
    cy.wait(2000);
    cy.get(".token-input-selected-dropdown-item-facebook").click();
    cy.wait(2000);
    cy.get("#project_status_update_team").type(feedContent);
    cy.get(".attachLinkonDialog").click();
    cy.get("#fileupload").attachFile("sample.jpeg");
    cy.wait(2000);
    cy.get("#btn_file_upload").click();
    cy.wait(1000);
    cy.get("#ms-feed-btn").click();
    cy.wait(10000);
    cy.get("#primary_tab ").click();
    cy.wait(2000);
    cy.get(
      "#message-list .thread-list-item:first-of-type .mangostream-body span"
    ).contains(feedContent);
  });
});
