import React from 'react';
import {Scene, Router}  from 'react-native-router-flux';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {initGame} from './actions';
import Background from './Background';
import HighScores from './HighScores';

class RouterComponent extends React.Component{
	backToGame(){
		this.props.initGame();
		Actions.dot();
	}
	render(){
		return (
			<Router>
				<Scene key="game">
					<Scene key="dot"
						component={Background}
						hideNavBar={true}
						initial
					/>
					<Scene key='highscores'
						component = {HighScores}
						hideNavBar={false}
						title="High Scores"
						onBack={()=>{this.backToGame(); }}
					/>
				</Scene>
			</Router>
		);
	}
}

export default connect(null,{initGame})(RouterComponent);
