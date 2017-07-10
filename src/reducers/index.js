import {combineReducers} from 'redux';
import GameReducer from './GameReducer';
import MenuReducer from './MenuReducer';
import ScoresReducer from './ScoresReducer';

export default combineReducers({
	gameState:GameReducer,
	menuState:MenuReducer,
	scores:ScoresReducer
});

