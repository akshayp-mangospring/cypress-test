describe("Creates, edits and validates a Wiki", () => {
  it("Login with valid details", () => {
    cy.visit("/u");
    cy.get("#user_id").click();
    cy.get("#user_id").type("admin@riadomain.com");
    cy.get("#password").click();
    cy.get("#password").type("Mango@123");
    cy.get("#yui-gen0").click();
    Cypress.Cookies.preserveOnce("_felix_session_id");
  });

  it("Create and Edit Wiki", () => {
    cy.wait(2000);
    const wikiTitle = `Automated - ${new Date().toUTCString()}`;
    cy.get(".fa-pen-to-square").click();
    cy.get(
      "#ms-top-def-nav > li > ul > div > ul > li.compose-tab-list.active > div > div > p"
    ).click();
    cy.get("#global-composebox-item-wiki > .block").click({ force: true });
    cy.get("#wiki_title").click();
    cy.get("#wiki_title").type(wikiTitle);
    cy.get("#token-input-myTeams").click().type("All Users");
    cy.wait(4000);
    cy.get(".token-input-selected-dropdown-item-facebook").click();
    cy.wait(2000);
    cy.get(".wikiSubmitButton .loading_text").click();
    cy.get("#yui-gen1").submit();
    cy.wait(2000);
    cy.window().then((win) => {
      win.eval(
        'CKEDITOR.instances["wiki_description"].setData("<p>Test script!</p>");'
      );
    });
    cy.get(".action-button-container > #wiki_save_button").click();
    cy.url().should("contains", "/user/wikis/list?loc=T");
    cy.get(".edit_wiki_links:nth-child(3)").click();
    cy.wait(2000);
    cy.window().then((win) => {
      win.eval(
        'CKEDITOR.instances["wiki_description"].setData("<p>Test script edited!</p>");'
      );
    });
    cy.get(".action-button-container > #wiki_save_button").click();
    cy.get("#save_publish > span > span").click();
    cy.get(".fullscreen_btn_style > .smallbutton").click({ force: true });
    cy.get("#wkRecentWikis .wk-lnr-lst:first-of-type > :first-child").contains(
      wikiTitle
    );
  });
});
