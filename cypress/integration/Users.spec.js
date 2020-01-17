context("Users", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/users");
  });

  it("should delete user Cory when delete is clicked.", () => {
    cy.findByLabelText("Delete user Cory");
  });
});
