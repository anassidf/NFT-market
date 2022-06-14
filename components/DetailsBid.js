import { View, Text, Image } from 'react-native';
import React from 'react';
import { EtherPrice } from './SubInfo';
export default function DetailsBid(props) {
	return (
		<View
			style={{
				marginHorizontal: 20,
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}>
			<Image
				source={props.data.image}
				resizeMode='contain'
				style={{ width: 50, height: 50, marginVertical: 10 }}
			/>
			<View style={{ alignItems: 'center' }}>
				<Text style={{ fontWeight: 'bold' }}>
					Bid placed By {props.data.name}
				</Text>
				<Text style={{ opacity: 0.6 }}>{props.data.date}</Text>
			</View>

			<EtherPrice price={props.data.price} />
		</View>
	);
}
