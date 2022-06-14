import { View, Text, Image } from 'react-native';
import React from 'react';
import { CircleButton } from './index';
import { SubInfo, NFTTitle, EtherPrice } from './SubInfo';
const NFTCard = (props) => {
	return (
		<View
			style={{
				margin: 20,
				backgroundColor: 'white',
				borderRadius: 10,
			}}>
			<View style={{ height: 250, width: '100%' }}>
				<Image
					source={props.data.image}
					style={{
						height: '100%',
						width: '100%',
						borderTopRightRadius: 10,
						borderTopLeftRadius: 10,
					}}
					resizeMode='cover'
				/>
				<CircleButton
					imageURL={require('../assets/icons/heart.png')}
					top={10}
					right={10}
				/>
			</View>
			<SubInfo />

			<NFTTitle title={props.data.name} subTitle={props.data.subTitle} />
			<EtherPrice
				showButton={true}
				price={props.data.price}
				data={props.data}
			/>
		</View>
	);
};

export default NFTCard;
