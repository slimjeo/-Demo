import homeAction from "../pageObject/pageAction/homeAction";

const homepage = new homeAction();

Given("i navigate to ecommerce website", function () {
  homepage.navigateUrl;
});
