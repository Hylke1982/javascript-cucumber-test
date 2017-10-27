Feature: Do a some call
  As a ACTOR want to do a successful call. (This is a high level example of a
  functional/acceptance test)


  @happy
  Scenario: With correct input ACTOR expect a correct result
    Given All tools available and ACTOR is on the right location
    When ACTOR does a correct request
    Then ACTOR expects a correct result

  @unhappy
  Scenario: With incorrect input ACTOR expect a failure result
    Given All tools available and ACTOR is on the right location
    When ACTOR does a incorrect request
    Then ACTOR expect a incorrect result


