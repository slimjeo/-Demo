Feature: ecommerce web-page

    I want to automate the home page of an ecommerce webpage

    Scenario: customers details

      Given i navigate to ecommerce website
      And i validate the page tittle
      When i fill the customers login details
              | Name | Email | Password |
              | olu  | popat | any      |

      And  i select the gender
      And i choose the employment status
      Then i submit the form  
