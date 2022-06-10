describe("Feeds", () => {
  it("create feed", () => {
    cy.visit("/");
    cy.url().should("include", "riadomain");
    cy.get("#user_id").click().type("admin@riadomain.com");
    cy.get("#password").click().type("Mango@123");
    cy.get("#yui-gen0").click();
    cy.get(".ico_arrow_main").click(); //click menu option
    cy.get(
      "#lhs_container > li.master-lhs.lhs-dd-parent.active.inbox > a > span:nth-child(2)"
    ).click(); // click news feed
    cy.get(".post-in-team.ma-s-theme").should("be.visible").click();
    cy.wait(2000);
    cy.get("#token-input-myTeams").click();

    //Radio buttons(share with followers)
    cy.get("#allMyFollowers")
      .should("be.visible")
      .should("not.be.checked")
      .click(); // followers
    cy.get("#project_status_update").type("rec1");
    cy.get("#ms-feed-btn > span > span").click(); //share
    // cy.get("primary_tab").click();
    cy.get(".input-txt").should("have.value", "rec1");
    cy.get(".message-body> div> span").each(($elm, i) => {
      cy.get($elm)
        .invoke("text")
        .then((text) => {
          if (text === "rec1") {
            expect(text.trim()).equal("rec1").click();
            cy.log(text);
          }
        });
    });

    // Radio buttons(share with teams)
    cy.get("#ms-feed-btn > span > span").click(); //share
    cy.wait(2000);
    cy.get(
      ".questions-token-input-list .token-input-dropdown-facebook li:nth-child(1)"
    ).click();
    cy.wait(2000);
    cy.get("#project_status_update").type("test automation");
    cy.get("#ms-feed-btn > span > span").click();
  });
});
