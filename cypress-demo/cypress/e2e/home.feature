Feature: ecommerce web-page

    I want to automate the home page of an ecommerce webpage

    Scenario: customers details

      Given i navigate to ecommerce website
      And  i validate the page tittle
      When i fill the customers login details
              | Name | Email  | Password |
              | olu  | poplat | lagos    |

      And  i select the gender
      And  i choose the employment status
      And  i submit the form  
      Then i validate the confirmation button
