/// <reference types = "cypress" />

describe("My First Test", () => {
  it("login", () => {
    cy.visit("/");
    cy.get("#user_id").click().type("admin@riadomain.com{enter}");
    cy.get("#password").click().type("Mango@123{enter}");
    cy.get("#yui-gen0").click();
  });

  it("update", () => {
    
  });
});
