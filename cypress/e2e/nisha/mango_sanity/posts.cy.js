describe("Shares a Post", () => {
  it("Login with valid details", () => {
    cy.visit("/u");
    cy.get("#user_id").click();
    cy.get("#user_id").type("admin@riadomain.com");
    cy.get("#password").click();
    cy.get("#password").type("Mango@123");
    cy.get("#yui-gen0").click();
    Cypress.Cookies.preserveOnce("_felix_session_id");
  });

  it("Shares post in a group, along with an attached file", () => {
    const postTitle = `Automated - ${new Date().toUTCString()}`;
    cy.get(".fa-pen-to-square").click();
    cy.get(".active .block").click();
    cy.get("#global-composebox-item-post > .block").click();
    cy.wait(2000);
    cy.get("#token-input-mypostTeams").click().type("All Users");
    cy.wait(4000);
    cy.get(".token-input-selected-dropdown-item-facebook").click();
    cy.wait(2000);
    cy.get(".loading_text  .translation_missing").click();
    cy.wait(2000);
    cy.get(".post-edit-title-box").click();
    cy.get(".post-edit-title-box").clear();
    cy.get(".post-edit-title-box").type(postTitle);
    cy.window().then((win) => {
      win.eval(
        'CKEDITOR.instances["post_description"].setData("<p>Hello World!</p>");'
      );
      cy.wait(2000);
      cy.get(".newAttachContainer .is_actionbutton").click();
      cy.get("#fileupload").attachFile("sample.jpeg");
      cy.wait(2000);
      cy.get("#btn_file_upload").click();
      cy.wait(1000);
      cy.get("#preview_post_btn > span > span").click();
      cy.wait(2000);
      cy.get("#publish_post").click();
      cy.get(".pv-tmln--clmn-szr + .pv-tmln-itm").contains(postTitle);
    });
  });
});
