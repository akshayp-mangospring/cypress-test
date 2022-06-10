describe("Login in the app", () => {
  it("Login with invalid details", () => {
    cy.visit("/");
    cy.get("#user_id").click().type("admin@riadomain.com");
    cy.get("#password").click().type("Mango");
    cy.get("#yui-gen0").click();
    cy.get("#error_status").should("be.visible"); // validate error
  });

  it("Login with valid details", () => {
    cy.visit("/"); // visit domain
    cy.url().should("include", "riadomain"); //verify domain
    cy.get("#user_id").click().type("admin@riadomain.com"); //username
    cy.get("#password").click().type("Mango@123"); //password
    cy.get("#yui-gen0").click(); //login
  });
});
