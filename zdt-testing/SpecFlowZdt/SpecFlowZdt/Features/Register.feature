﻿Feature: Register Testing

@mytag
Scenario: Registering a new user
    Given the application is available for registration
    When I send a POST request to the register endpoint with the following data:
      | Username | Email            | Password | ConfirmationPassword | PhoneNumber | Name | Surname |
      | testuser1 | test1@example.com | P@ssw0rd | P@ssw0rd             | 1234567890  | Test | Test     |
    Then the response status code should be 200 OK for registration