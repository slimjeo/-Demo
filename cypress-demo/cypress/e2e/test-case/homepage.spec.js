/// <reference types= "cypress" />

import homeAction from "../pageObject/pageAction/homeAction";

const Home = new homeAction();

describe("ecommerce Demo", function () {
  beforeEach(() => {
    Home.navigateUrl();
  });

  it("title validation", function () {
    Home.validateTitle().should("eq", "ProtoCommerce");
  });

  it("ecommerce homePage automation", function () {
    Home.name();
    Home.mail();
    Home.password();
    Home.gender();
    Home.employment();
    Home.submit();
  });
});
