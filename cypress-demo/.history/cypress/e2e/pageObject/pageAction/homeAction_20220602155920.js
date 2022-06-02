/// <reference types = "cypress" />

import homeElement from "../pageElement/homeElement";

export default class homeAction {
  constructor() {
    globalThis.element = new homeElement();
  }

  navigateUrl() {
    cy.visit("/");
  }
  validateTitle() {
    return cy.title();
  }
  customerDetails(name, mail, password) {
    element.nameBox().type("name");
    element.emailBox().type("mail");
    element.passwordBox().type("password");
  }

  gender() {
    element.genderBox().select("Female");
  }
  employment() {
    element.employmentStatus().click();
  }
  submit() {
    element.submitButton().click();
  }

  cy.on('window:alert',(str)=> {
    expect (str).to.equal()
  }
}
