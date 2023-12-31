﻿Feature: Edit Result Prediction Testing

@mytag
Scenario: Editing user result prediction
	Given the application is available for editing user result predictions
	When I send a PUT request to the edit result prediction endpoint with the following data:
	| PredictionId | HomeScore | AwayScore |
	| 2C18F9C3-A054-464F-91CF-975B4718A35C | 2 | 1 |
	Then the response status code should be 200 OK for editing user result predictions successfully