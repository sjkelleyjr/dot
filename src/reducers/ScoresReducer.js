import {
	FETCH_SCORES_SUCCESS
} from '../actions/types';


const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) =>{
	switch(action.type){
		case FETCH_SCORES_SUCCESS:
			return action.payload;
		default:
			return state;
	}
};
