import React from 'react';
import {Text, View, Modal} from 'react-native';
import {CardSection, Button, InputField } from './common';
import {connect} from 'react-redux';
import {updateDisplayName, addNewHighScore, clearUsername} from './actions';
import {Actions} from 'react-native-router-flux';

class UserInputModal extends React.Component{
	state = {
		visible:true
	}
	onSubmit(){
		const {username, finalScore} = this.props;
		this.props.addNewHighScore({username,score:finalScore});
		this.props.clearUsername();
		this.setState({
			visible:false
		});
		Actions.highscores();
	}
	render(){
		const {containerStyle, textStyle, cardSectionStyle} = styles;
		return(
			<Modal
				visible={this.props.visible && this.state.visible}
				transparent
				animationType="slide"
				onRequestClose={() => {}}
			>
				<View style={containerStyle}>
					<CardSection style={cardSectionStyle}>
						<Text style={textStyle}>
							Congratulations! {this.props.finalScore} is a new high score!
						</Text>
					</CardSection>
					<CardSection>
						<InputField
							placeholder='johnnyappleseed79'
							label='username'
							value ={this.props.username}
							onChangeText={(value)=>{
								this.props.updateDisplayName(value);
							}}
							autoCap = "none"
						/>
					</CardSection>
					<CardSection>
						<Button onPress={this.onSubmit.bind(this)}> Submit </Button>
					</CardSection>
				</View>
			</Modal>
		);
	}
}

const styles = {
	cardSectionStyle:{
		justifyContent:'center'
	},
	textStyle:{
		flex:1,
		fontSize:18,
		textAlign: 'center',
		lineHeight:40
	},
	containerStyle:{
		backgroundColor:'rgba(0,0,0,0.75)',
		position: 'relative',
		flex:1,
		justifyContent:'center',
		paddingBottom: 59
	}
};

const mapStateToProps = (state) => {
	const {username} = state.menuState;
	const {showUsernameModal} = state.gameState;
	return {showUsernameModal,username};
};

export default connect(mapStateToProps,{updateDisplayName, addNewHighScore, clearUsername})(UserInputModal);
