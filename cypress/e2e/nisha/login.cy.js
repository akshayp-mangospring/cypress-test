/// <reference types = "cypress" />

describe("login", () => {
  it("login with valid details", () => {
    cy.visit("/");                                                    // visit domain
    cy.url().should("include","riadomain")                            //verify doain
    cy.get("#user_id").click().type("admin@riadomain.com");           //username
    cy.get("#password").click().type("Mango@123");                    //password
    cy.get("#yui-gen0").click();                                      //login
  });

  it("login wiht invalid details", () => {
    cy.visit("/");
    cy.get("#user_id").click().type("admin@riadomain.com");
    cy.get("#password").click().type("Mango");
    cy.get("#yui-gen0").click();
    cy.get("#error_status").should("be.visible");                // validate error
    
    });

  it("create feed", () => {
    cy.visit("/");
    cy.url().should("include", "riadomain"); 
    cy.get("#user_id").click().type("admin@riadomain.com"); 
    cy.get("#password").click().type("Mango@123"); 
    cy.get("#yui-gen0").click();
    cy.get(".ico_arrow_main").click();                                                  //click menu option
    cy.get("#lhs_container > li.master-lhs.lhs-dd-parent.active.inbox > a").click();   // click news feed
    cy.get(".post-in-team.ma-s-theme")
      .should("be.visible").click();
   // cy.get("#project_status_update_team").type("test automation");  
   



   });

  });



