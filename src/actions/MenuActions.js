import {
	FETCH_SCORES_SUCCESS,
	DISPLAYNAME_UPDATE
} from './types';
import firebase from 'firebase';

export const fetchScores = () => {
	return (dispatch) => {
		firebase.database().ref('scores')
			.orderByChild('score').limitToLast(10).on('value',function(snapshot){
				dispatch({
					type:FETCH_SCORES_SUCCESS,
					payload:snapshot.val()
				});
		});
	};
};

export const updateDisplayName = (value) => {
	return{
			type: DISPLAYNAME_UPDATE,
			payload:value
	};
};



export const clearUsername = () => {
	return{
			type: DISPLAYNAME_UPDATE,
			payload:''
	};
};
