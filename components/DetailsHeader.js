import { View, Text, Image, StatusBar } from 'react-native';
import React from 'react';
import { CircleButton } from './index';
import { SubInfo } from './SubInfo';
import { DetailsDesc } from './index';
export default function DetailsHeader({ image, navigation, data }) {
	return (
		<View>
			<View
				style={{
					marginTop: 50,
					width: '100%',
					height: 300,
				}}>
				<Image
					source={image}
					resizeMode='cover'
					style={{ width: '100%', height: '100%' }}
				/>
				<CircleButton
					top={10}
					left={10}
					imageURL={require('../assets/icons/left.png')}
					handlePress={() => {
						navigation.goBack();
					}}
				/>
				<CircleButton
					top={10}
					right={10}
					imageURL={require('../assets/icons/heart.png')}
				/>
			</View>

			<SubInfo />
			<DetailsDesc data={data} />
			<Text
				style={{
					marginHorizontal: 20,
					fontWeight: 'bold',
					marginVertical: 20,
				}}>
				Current Bid
			</Text>
		</View>
	);
}
