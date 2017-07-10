
//GAMEPLAY ACTIONS
export const PLAYER_LOST = 'player_lost'; //player lost, check their score, is it a highscore? reset dot size
export const SMALLER_DOT = 'smaller_dot'; //player won, decrease dot size and increase dot speed variability
export const NEW_HIGH_SCORE = 'new_highscore'; //a new high score has been set

//MENU ACTIONS
export const FETCH_SCORES_SUCCESS = 'fetch_scores_success'; //got all the highscores to display successfully
export const DISPLAYNAME_UPDATE = 'displayname_update'; //updater for input form
