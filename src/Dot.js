import React from 'react';
import {TouchableOpacity} from 'react-native';
import {smallerDot} from './actions';
import {connect} from 'react-redux';

class Dot extends React.Component{
	onDotPress(){
		const {height, width, borderRadius, borderWidth, currentScore} = this.props;
		this.props.smallerDot({
			height:height - 10,
			width:width - 10,
			borderRadius:borderRadius - 10,
			borderWidth:borderWidth - 10,
			currentScore: currentScore + 100
		});
	}
	render(){
		return (
			<TouchableOpacity style={{
					height:this.props.height,
					width:this.props.width,
					borderRadius:this.props.borderRadius,
					borderWidth:this.props.borderWidth,
					borderColor:'lightsalmon'
				}}
				onPress = {this.onDotPress.bind(this)}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	const {height,width,borderRadius, borderWidth,currentScore} = state.gameState;
	return {height,width,borderRadius, borderWidth,currentScore};
};

export default connect(mapStateToProps,{smallerDot})(Dot);
