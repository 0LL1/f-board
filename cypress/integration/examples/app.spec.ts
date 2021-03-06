describe("User", function () {
  this.beforeEach(function () {
    cy.visit("/");
  });

  it("can open and close menu", function () {
    cy.contains("guitar").should("not.exist");
    cy.get("[data-test=menu-button]").click();
    cy.contains("guitar");
    cy.get("[data-test=menu-button]").click();
    cy.contains("guitar").should("not.exist");
  });

  it("can add and remove strings", function () {
    cy.get("[data-test=fingerboard]").children().should("have.length", 6);
    cy.get("[data-test=add-low-string]").click();
    cy.get("[data-test=add-low-string]").click();
    cy.get("[data-test=fingerboard]").children().should("have.length", 8);
    cy.get("[data-test=remove-low-string]").click();
    cy.get("[data-test=remove-low-string]").click();
    cy.get("[data-test=remove-high-string]").click();
    cy.get("[data-test=remove-high-string]").click();
    cy.get("[data-test=remove-high-string]").click();
    cy.get("[data-test=remove-high-string]").click();
    cy.get("[data-test=fingerboard]").children().should("have.length", 2);
    cy.get("[data-test=add-high-string]").click();
    cy.get("[data-test=add-high-string]").click();
    cy.get("[data-test=fingerboard]").children().should("have.length", 4);
  });

  it("can change instrument", function () {
    cy.get("[data-test=menu-button]").click();
    cy.contains("guitar").click();
    cy.get("[data-test=menu-button]").click();
    cy.get("[data-test=fingerboard]").children().should("have.length", 6);
  });

  it("can change tuning", function () {
    cy.get("[data-test=string-1]").first().contains("E");
    cy.get("[data-test=sharpen-1]").click();
    cy.get("[data-test=string-1]").first().contains("F");
    cy.get("[data-test=flatten-1]").click();
    cy.get("[data-test=flatten-1]").click();
    cy.get("[data-test=string-1]").first().contains("D#");
  });

  it("can change from sharps to flats", function () {
    cy.get("[data-test=menu-button]").click();
    cy.get("[data-test=accidental-toggle]").click();
    cy.get("[data-test=menu-button]").click();
    cy.get("[data-test=string-1]").first().contains("Eb");
  });

  it("can select and unselect notes", function () {
    cy.get("[data-test=selected]").should("have.length", 0);
    cy.get("[data-test=string-6]").first().click();
    cy.get("[data-test=selected]").should("have.length", 14);
    cy.get("[data-test=string-5]").first().click();
    cy.get("[data-test=selected]").should("have.length", 27);
    cy.get("[data-test=string-6]").first().click();
    cy.get("[data-test=selected]").should("have.length", 13);
    cy.get("[data-test=string-5]").first().click();
    cy.get("[data-test=selected]").should("have.length", 0);
  });
});
