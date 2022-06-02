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

  name() {
    element.nameBox().type("olu");
  }

  mail() {
    element.emailBox().type("popoola");
  }

  password() {
    element.passwordBox().type("jelili");
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
}
