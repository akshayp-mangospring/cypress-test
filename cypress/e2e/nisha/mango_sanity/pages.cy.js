describe("Create, Edit and Validate Modern page", () => {
  it("Login with valid details", () => {
    cy.visit("/u");
    cy.get("#user_id").click();
    cy.get("#user_id").type("admin@riadomain.com");
    cy.get("#password").click();
    cy.get("#password").type("Mango@123");
    cy.get("#yui-gen0").click();
    Cypress.Cookies.preserveOnce("_felix_session_id");
  });

  it("Create, Edit, Validate & Delete Modern page", () => {
    const pageTitle = `Automated - ${new Date().toUTCString()}`;
    cy.wait(2000);
    cy.get("#Company").click();
    cy.wait(4000);
    cy.get("#drop_down_label").click({ force: true });
    cy.get(".actionblue > .tools_setting_icon").click();
    cy.get(".open-site-new-page-fancybox").click();
    cy.get(
      ".template-contr:nth-child(1) > .dynamic-added-image-wrap > img"
    ).click();
    cy.get("#new_page_template_selection .loading_text").click();
    cy.url().should(
      "contains",
      "/sites/site_pages/new"
    );
    cy.get("#site_page_name").click();
    cy.get("#site_page_name").clear();
    cy.get("#site_page_name").type(pageTitle);
    cy.get(".fa-th-large").click();
    cy.get(
      "#fancybox-content > div > div:nth-of-type(2) > div > div:nth-of-type(2) > a:nth-of-type(2)"
    ).click();
    cy.get("#fancybox-content > div > div.dialog_actions.right > a").click();
    cy.wait(2000);
    cy.get(".wizard_publish_continue.hide_on_last").click();
    cy.wait(2000);
    cy.get(".wizard_publish_continue.hide_on_last").click();
    cy.wait(2000);
    cy.get(".wizard_publish_continue.hide_on_last").click();
    cy.wait(2000);
    cy.get("#site_page_save").click();
    cy.wait(3000);
    cy.get("#mango_page_tools .label .tools_setting_icon").click({
      force: true,
    });
    cy.get("#page_tools_li > li:nth-child(5) > a").click({ force: true });
    cy.wait(2000);
    cy.get("#internal_page_create_footer > div:first-of-type > a").click(); // prevoius button
    cy.get("#site_page_name").type("Edited");
    cy.wait(2000);
    cy.get("#site_page_save").click();
    cy.get("#save_publish").click();
    cy.wait(2000);
    cy.get("#mango_page_tools .label .tools_setting_icon").click({
      force: true,
    });
    cy.get(".delete_post").click({ force: true });
    cy.get("#delete_confirm").click().type("DELETE");
    cy.get("#submit_deleteSitePage >span>span").click();
  });
});
