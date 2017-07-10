import {
	DISPLAYNAME_UPDATE
} from '../actions/types';


const INITIAL_STATE = {
	username:''
};

export default (state = INITIAL_STATE, action) =>{
	switch(action.type){
		case DISPLAYNAME_UPDATE:
			return {username:action.payload};
		default:
			return state;
	}
};
