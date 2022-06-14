import { View, Text, FlatList, Button, SafeAreaView, scr } from 'react-native';
import React, { useState } from 'react';
import { HomeHeader, NFTCard, FocusedStatus } from '../components/index';

NFTs = [
	{
		id: '0x0',
		name: 'Randomness',
		creator: 'SitiNurhaliza',
		price: 6.25,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos est atque nam molestiae incidunt commodi magnam dolores vitae? Dolores debitis in dolorem voluptatem quaerat perferendis sit laborum expedita molestiae reprehenderit. ',
		image: require('../assets/images/nft01.png'),
		subTitle: 'subTitle',
		bids: [
			{
				name: 'SitiNurhaliza',
				price: 6.25,
				id: '0x0',
				image: require('../assets/images/person01.png'),
				date: '2020-01-01',
			},
			{
				name: 'SitiNurhaliza',
				price: 6.25,
				id: '0x1',
				image: require('../assets/images/person02.png'),
				date: '2020-01-01',
			},
		],
	},
	{
		id: '0x01',
		name: 'green coins',
		creator: 'SitiNurhaliza',
		price: 7.25,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos est atque nam molestiae incidunt commodi magnam dolores vitae? Dolores debitis in dolorem voluptatem quaerat perferendis sit laborum expedita molestiae reprehenderit. ',
		image: require('../assets/images/nft02.jpeg'),
		subTitle: 'subTitle',
		bids: [
			{
				name: 'SitiNurhaliza',
				price: 6.25,
				id: '0x0',
				image: require('../assets/images/person01.png'),
				date: '2020-01-01',
			},
			{
				name: 'SitiNurhaliza',
				price: 6.25,
				id: '0x1',
				image: require('../assets/images/person02.png'),
				date: '2020-01-01',
			},
		],
	},
	{
		id: '0x02',
		name: 'Blue Bitcoin',
		creator: 'SitiNurhaliza',
		price: 1.5,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos est atque nam molestiae incidunt commodi magnam dolores vitae? Dolores debitis in dolorem voluptatem quaerat perferendis sit laborum expedita molestiae reprehenderit. ',
		image: require('../assets/images/nft03.jpeg'),
		subTitle: 'subTitle',
		bids: [
			{
				name: 'SitiNurhaliza',
				price: 6.25,
				id: '0x0',
				image: require('../assets/images/person01.png'),
				date: '2020-01-01',
			},
			{
				name: 'SitiNurhaliza',
				price: 6.25,
				id: '0x1',
				image: require('../assets/images/person02.png'),
				date: '2020-01-01',
			},
		],
	},
	{
		id: '0x03',
		name: 'Layers',
		creator: 'SitiNurhaliza',
		price: 3,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos est atque nam molestiae incidunt commodi magnam dolores vitae? Dolores debitis in dolorem voluptatem quaerat perferendis sit laborum expedita molestiae reprehenderit. ',
		image: require('../assets/images/nft04.jpeg'),
		subTitle: 'subTitle',
		bids: [
			{
				name: 'SitiNurhaliza',
				price: 6.25,
				id: '0x0',
				image: require('../assets/images/person01.png'),
				date: '2020-01-01',
			},
			{
				name: 'SitiNurhaliza',
				price: 6.25,
				id: '0x1',
				image: require('../assets/images/person02.png'),
				date: '2020-01-01',
			},
		],
	},
	{
		id: '0x04',
		name: 'Planet',
		creator: 'SitiNurhaliza',
		price: 0.1,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos est atque nam molestiae incidunt commodi magnam dolores vitae? Dolores debitis in dolorem voluptatem quaerat perferendis sit laborum expedita molestiae reprehenderit. ',
		image: require('../assets/images/nft05.jpeg'),
		subTitle: 'subTitle',
		bids: [
			{
				name: 'SitiNurhaliza',
				price: 6.25,
				id: '0x0',
				image: require('../assets/images/person01.png'),
				date: '2020-01-01',
			},
			{
				name: 'SitiNurhaliza',
				price: 6.25,
				id: '0x1',
				image: require('../assets/images/person02.png'),
				date: '2020-01-01',
			},
		],
	},
	{
		id: '0x05',
		name: 'Cuby',
		creator: 'SitiNurhaliza',
		price: 3.4,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos est atque nam molestiae incidunt commodi magnam dolores vitae? Dolores debitis in dolorem voluptatem quaerat perferendis sit laborum expedita molestiae reprehenderit. ',
		image: require('../assets/images/nft06.jpeg'),
		subTitle: 'subTitle',
		bids: [
			{
				name: 'SitiNurhaliza',
				price: 6.25,
				id: '0x0',
				image: require('../assets/images/person01.png'),
				date: '2020-01-01',
			},
			{
				name: 'SitiNurhaliza',
				price: 6.25,
				id: '0x1',
				image: require('../assets/images/person02.png'),
				date: '2020-01-01',
			},
		],
	},
	{
		id: '0x06',
		name: 'Ether Top',
		creator: 'SitiNurhaliza',
		price: 2.5,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos est atque nam molestiae incidunt commodi magnam dolores vitae? Dolores debitis in dolorem voluptatem quaerat perferendis sit laborum expedita molestiae reprehenderit. ',
		image: require('../assets/images/nft07.jpeg'),
		subTitle: 'subTitle',
		bids: [
			{
				name: 'SitiNurhaliza',
				price: 6.25,
				id: '0x0',
				image: require('../assets/images/person01.png'),

				date: '2020-01-01',
			},
			{
				name: 'SitiNurhaliza',
				price: 6.25,
				id: '0x1',
				image: require('../assets/images/person02.png'),
				date: '2020-01-01',
			},
		],
	},
	{
		id: '0x7',
		name: 'Catler',
		creator: 'SitiNurhaliza',
		price: 6.25,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos est atque nam molestiae incidunt commodi magnam dolores vitae? Dolores debitis in dolorem voluptatem quaerat perferendis sit laborum expedita molestiae reprehenderit. ',
		image: require('../assets/images/nft08.png'),
		subTitle: 'subTitle',
		bids: [
			{
				name: 'SitiNurhaliza',
				price: 6.25,
				id: '0x0',
				image: require('../assets/images/person01.png'),
				date: '2020-01-01',
			},
			{
				name: 'SitiNurhaliza',
				price: 6.25,
				id: '0x1',
				image: require('../assets/images/person02.png'),
				date: '2020-01-01',
			},
		],
	},
];

export default function HomeScreen() {
	const [NFTData, setNFTData] = useState(NFTs);
	const handleSearch = (search) => {
		if (!search.length) return setNFTData(NFTs);

		const filterdData = NFTs.filter((item) => {
			return item.name.toLowerCase().includes(search.toLowerCase());
		});
		if (filterdData.length) {
			setNFTData(filterdData);
		} else {
			setNFTData(NFTData);
		}
	};

	return (
		<SafeAreaView>
			<FocusedStatus />
			<View>
				<View>
					<FlatList
						data={NFTData}
						renderItem={({ item }) => <NFTCard data={item} />}
						keyExtractor={(item) => item.id}
						showsVerticalScrollIndicator={false}
						ListHeaderComponent={<HomeHeader handleSearch={handleSearch} />}
					/>
				</View>
				<View
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						zIndex: -1,
					}}>
					<View style={{ height: 300, backgroundColor: '#042940' }} />
					{/* <View style={{ flex: 1, backgroundColor: 'white' }} /> */}
				</View>
			</View>
		</SafeAreaView>
	);
}
