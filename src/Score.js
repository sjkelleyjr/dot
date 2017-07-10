import React from 'react';
import { Text, View } from 'react-native';
import { CardSection } from './common';


class Score extends React.Component{
	render(){
		const {username, score} = this.props.scoreObj;
		return(
			<View>
				<CardSection>
					<Text style = {styles.usernameStyle} >
						{username}
					</Text>
					<Text style = {styles.scoreStyle} >
						{score}
					</Text>
				</CardSection>
			</View>
		);
	}
}

const styles = {
	usernameStyle:{
		fontSize:18,
		paddingLeft:15,
		flex:1
	},
	scoreStyle:{
		fontSize:18,
		paddingRight:15
	}
};

export default Score;
