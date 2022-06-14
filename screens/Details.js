import {
	View,
	Text,
	Image,
	SafeAreaView,
	StatusBar,
	FlatList,
} from 'react-native';
import React from 'react';

import {
	DetailsBid,
	FocusedStatus,
	RectButton,
	DetailsHeader,
	DetailsDesc,
} from '../components';

export default function Details({ route, navigation }) {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FocusedStatus
				backgroundColor='transparent'
				translucent={true}
				barStyle='dark-content'
			/>
			<View
				style={{
					position: 'absolute',
					bottom: 0,
					alignItems: 'center',
					width: '100%',
					marginVertical: 20,
				}}>
				<RectButton showButton={true} width='50%' marginTop={100} />
			</View>

			<FlatList
				data={route.params.bids}
				keyExtractor={(item) => `bid-${item.id}`}
				renderItem={({ item }) => {
					return (
						<View>
							<DetailsBid data={item} />
						</View>
					);
				}}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={() => (
					<DetailsHeader
						image={route.params.image}
						navigation={navigation}
						data={route.params}
					/>
				)}
			/>
			<View style={{ height: 100 }}></View>
		</SafeAreaView>
	);
}
