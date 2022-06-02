import homeAction from "../pageObject/pageAction/homeAction";

const homepage = new homeAction();

Given("i navigate to ecommerce website", function () {
  homepage.navigateUrl();
});

And("i validate the page tittle", function () {
  homepage.validateTitle();
});

When("i fill the customers login details", function (datatable) {
  datatable.hashes().forEach((element) => {
    homepage.customerDetails(element.name, element.mail, element.password);
  });
});
