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

  And("i select the gender", function () {
    homepage.gender();
  });

  And("i choose the employment status", function () {
    homepage.employment();
  });

  And("i submit the form", function () {
    homepage.submit();
  });
  Then("i validate the confirmation message", function () {
    homepage.windowAlert();
  });
});
