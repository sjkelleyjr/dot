import {
	PLAYER_LOST,
	SMALLER_DOT,
} from './types';
import firebase from 'firebase';


export const initGame = (finalScore) =>{
	return{
		type:PLAYER_LOST,
		payload:finalScore
	};
};

export const addNewHighScore = ({score, username}) => {
	return (dispatch) => {
		firebase.database().ref('scores').push({score,username})
			.then(() =>{
				dispatch({
					type:PLAYER_LOST,
					payload:score
				});
			});
	};
};


export const smallerDot = (dotSizes) => {
	return{
		type:SMALLER_DOT,
		payload:dotSizes
	};
};
