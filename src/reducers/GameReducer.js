import {
	PLAYER_LOST,
	SMALLER_DOT,
	NEW_HIGH_SCORE,
	FETCH_SCORES_SUCCESS,
} from '../actions/types';


const INITIAL_STATE = {
	height:120,
	width:120,
	borderRadius:120,
	borderWidth:120,
	currentScore: 0,
	finalScore:0,
};

export default (state = INITIAL_STATE, action) =>{
	switch(action.type){
		case PLAYER_LOST:
			return {...INITIAL_STATE, finalScore:action.payload}; //return the ball back to it's original size
		case SMALLER_DOT:
			return { ...INITIAL_STATE, ...action.payload}; //set the ball equal to the size passed in (shrinking is done in the dot component)
		case NEW_HIGH_SCORE:
			return { ...INITIAL_STATE, finalScore: action.payload};
		case FETCH_SCORES_SUCCESS:
			return action.payload;
		default:
			return state;
	}
};
