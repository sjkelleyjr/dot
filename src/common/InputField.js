import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';


const InputField = ({isPassword,placeholder,label, value, onChangeText, autoCap}) => {
	const {inputStyle, labelStyle,containerStyle} = styles;
	return (
		<View style = {containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				autoCapitalize = {autoCap}
				autoCorrect = {false}
				secureTextEntry={isPassword}
				placeholder={placeholder}
				style={inputStyle}
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
	);
};




const styles = StyleSheet.create({
	inputStyle:{
		color:'#000',
		paddingRight:5,
		paddingLeft:5,
		fontSize:18,
		lineHeight:23, //space between lines
		flex:2, //input takes up 2/3 of space of parent
	},
	labelStyle:{
		fontSize:18,
		paddingLeft:5,
		flex:1 //label takes of 1/3 of space of parent
	},
	containerStyle:{
		height:40,
		flex:1,
		flexDirection:'row', //make children next to one another
		alignItems:'center' //align vertically
	}
});


export {InputField};
