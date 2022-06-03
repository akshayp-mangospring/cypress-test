

describe("Feeds", () => {

 it("create feed", () => {
    cy.visit("/");
//  cy.url().should("include", "riadomain");
//  cy.fixture('example.json').then(data => {
    cy.get("#user_id").click().type("admin@riadomain.com");
    cy.get("#password").click().type("Mango@123");
    cy.get("#yui-gen0").click();
    cy.get(".ico_arrow_main").click();                                                                               //click menu option
    cy.get("#lhs_container > li.master-lhs.lhs-dd-parent.active.inbox > a > span:nth-child(2)").click();               // click news feed
    cy.get(".post-in-team.ma-s-theme").should("be.visible").click();
    cy.get("#token-input-myTeams").click();

    //Radio buttons(share with)
//   cy.get("#labelTypeCustom").should("be.visible").should("be.checked");                   //all teams
    cy.get("#allMyFollowers").should("be.visible").should("not.be.checked").click();        // followers
    cy.get("#project_status_update").type("test automation");
    cy.get("#ms-feed-btn > span > span").click();                                                        //share
    });
});
