import React from 'react';
import { StyleSheet, View } from 'react-native';

//the array syntaxs allows us to overwrite and containterStyles with passed in styles from the parent component
//ie always take the right most element and use that
const CardSection = (props) => {
	return (
		<View style = {[styles.containerStyle, props.style]}>
			{props.children}
		</View>
	);
};

const styles = StyleSheet.create({
	containerStyle:{
		borderBottomWidth: 1,
		padding:5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position:'relative'
	}
});

export { CardSection };

