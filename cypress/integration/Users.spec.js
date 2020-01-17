context("Users", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/users");
  });

  it("should add a test user", () => {
    cy.findByText("Add User").click();
    cy.findByLabelText("Name").type("TestName");
    cy.findByLabelText("Email").type("TestEmail@test.com");
    cy.findByText("Save").click();
  });
  it("should edit a test user", () => {
    cy.findByLabelText("Edit user TestName").click();
    cy.findByLabelText("Name")
      .clear()
      .type("TestName2");
    cy.findByLabelText("Email")
      .clear()
      .type("TestEmail2@test.com");
    cy.findByText("Save").click();
  });
  it("should delete a test user", () => {
    cy.findByLabelText("Delete user TestName2").click();
  });
});
