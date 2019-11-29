Feature: Black Jack

    Scenario: open game hall page
        When I open game hall page
        Then I can see text 'Start Play Black Jack'
        And I can see 'Start' button
    
    Scenario: show cards
        Given server response data 'card' '["A1","A2"]'
        When I start game
        Then I can see cards '🂡🂢'
