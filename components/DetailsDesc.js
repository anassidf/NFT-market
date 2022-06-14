import { View, Text } from 'react-native';
import React from 'react';
import { NFTTitle, EtherPrice } from './SubInfo';
export default function DetailsDesc({ data }) {
	const [text, setText] = React.useState(
		data.description.length > 100
			? data.description.slice(0, 100)
			: data.description
	);
	const [showMore, setShowMore] = React.useState(
		data.description.length > 100 ? true : false
	);

	return (
		<View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}>
				<NFTTitle title={data.name} subTitle='subTitle' />
				<EtherPrice title={data.name} price={data.price} showButton={false} />
			</View>

			<Text style={{ marginHorizontal: 20, fontWeight: 'bold' }}>
				Description
			</Text>
			<Text style={{ marginHorizontal: 20, marginVertical: 10 }}>
				{text}
				<Text
					style={{ fontWeight: 'bold' }}
					onPress={() => {
						if (text.length > 100) {
							setText(data.description.slice(0, 100));
							setShowMore(true);
						} else if (text.length <= 100) {
							setText(data.description);
							setShowMore(false);
						}
					}}>
					{showMore ? '...Show More' : 'Show Less'}
				</Text>
			</Text>
		</View>
	);
}
