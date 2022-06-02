/// <reference types="cypress" />

export default class homeElement {
  nameBox() {
    return cy.get("body > app-root > form-comp > div > form > div:nth-child(1) > input");
  }
  emailBox() {
    return cy.get("body > app-root > form-comp > div > form > div:nth-child(2) > input");
  }
  passwordBox() {
    return cy.get("#exampleInputPassword1");
  }
  genderBox() {
    return cy.get("#exampleFormControlSelect1");
  }
  employmentStatus() {
    return cy.get("body > app-root > form-comp > div > form > div:nth-child(7) > div:nth-child(3) > label");
  }
  submitButton() {
    return cy.get("body > app-root > form-comp > div > form > input");
  }
}
