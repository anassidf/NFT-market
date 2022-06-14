import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export const CircleButton = (props) => {
	return (
		<TouchableOpacity
			style={{
				width: 40,
				height: 40,
				backgroundColor: 'white',
				position: 'absolute',
				borderRadius: 50,
				alignItems: 'center',
				justifyContent: 'center',
				...props,
			}}
			onPress={props.handlePress}>
			<Image
				source={props.imageURL}
				resizeMode='contain'
				style={{ width: 23, height: 23 }}
			/>
		</TouchableOpacity>
	);
};

export const RectButton = (props) => {
	return (
		<TouchableOpacity
			onPress={props.handlePress}
			style={{
				display: props.showButton ? 'flex' : 'none',
				backgroundColor: '#042940',
				paddingHorizontal: 20,
				paddingVertical: 10,
				borderRadius: 20,
				justifyContent: 'center',
				alignItems: 'center',
				...props,
			}}>
			<Text style={{ color: 'white', fontWeight: 'bold' }}>Place a bid</Text>
		</TouchableOpacity>
	);
};
