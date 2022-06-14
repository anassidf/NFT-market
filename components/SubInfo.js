import { View, Text, Image } from 'react-native';
import React from 'react';
import { RectButton } from './index';
import { useNavigation } from '@react-navigation/native';
const peopleImages = [
	require('../assets/images/person02.png'),
	require('../assets/images/person03.png'),
	require('../assets/images/person04.png'),
];

export const NFTTitle = ({ title, subTitle }) => {
	return (
		<View style={{ marginHorizontal: 20, marginVertical: 20 }}>
			<Text style={{ fontSize: 17, fontWeight: 'bold' }}>{title}</Text>
			<Text style={{ opacity: 0.6 }}>{subTitle}</Text>
		</View>
	);
};

export const EtherPrice = (props) => {
	const navigate = useNavigation();
	return (
		<View
			style={{
				marginHorizontal: 20,
				marginBottom: 10,
				flexDirection: 'row',
				justifyContent: 'space-between',
			}}>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Image
					resizeMode='contain'
					source={require('../assets/icons/eth.png')}
					style={{ width: 20, height: 20 }}
				/>
				<Text style={{ fontWeight: 'bold' }}>{props.price}</Text>
			</View>
			<RectButton
				showButton={props.showButton}
				handlePress={() => {
					navigate.navigate('Details', props.data);
				}}
			/>
		</View>
	);
};

export const ImageCmp = ({ imageURL, index }) => {
	return (
		<Image
			source={imageURL}
			style={{ width: 48, height: 48, marginLeft: index == 0 ? 0 : -10 }}
			resizeMode='contain'
		/>
	);
};

export const People = () => {
	return (
		<View style={{ flexDirection: 'row' }}>
			{peopleImages.map((image, index) => {
				return (
					<ImageCmp imageURL={image} index={index} key={`image-${index}`} />
				);
			})}
		</View>
	);
};

export const EndDate = () => {
	return (
		<View
			style={{
				backgroundColor: 'white',
				paddingHorizontal: 10,
				paddingVertical: 7,
				justifyContent: 'center',
				alignItems: 'center',
				shadowColor: '#000',
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.8,
				shadowRadius: 2,
				elevation: 1,
			}}>
			<Text style={{ opacity: 0.6 }}>Ending in</Text>
			<Text style={{ fontWeight: '800' }}>12h 50m</Text>
		</View>
	);
};

export const SubInfo = () => {
	return (
		<View
			style={{
				marginTop: -30,
				paddingHorizontal: 10,
				flexDirection: 'row',
				justifyContent: 'space-between',
			}}>
			<People />
			<EndDate />
		</View>
	);
};
