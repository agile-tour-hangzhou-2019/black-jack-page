Feature: Black Jack

    Scenario: open game hall page
        When I open game hall page
        Then I can see text 'Start Play Black Jack'
        And I can see 'Start' button
    
    Scenario: show cards
        Given server response data 'startgame' '[{"role_name":"banker","cards":["A1","A3"]},{"role_name":"player_1","cards":["A2","B2"]}]'
        When I start game
        Then I can see banker cards '🂡🂣'
        And I can see player cards '🂢🂲'
