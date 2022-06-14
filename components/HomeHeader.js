import { View, Text, Image, TextInput } from 'react-native';
import React from 'react';

const HomeHeader = ({ handleSearch }) => {
	return (
		<View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					marginHorizontal: 20,
					marginBottom: 60,
					marginTop: 20,
				}}>
				<View>
					<Image
						resizeMode='contain'
						source={require('../assets/images/logo.png')}
						style={{ width: 50, height: 50 }}
					/>
				</View>
				<View style={{ position: 'relative' }}>
					<Image
						resizeMode='contain'
						source={require('../assets/images/person01.png')}
						style={{ width: 50, height: 50 }}
					/>

					<Image
						resizeMode='contain'
						source={require('../assets/icons/badge.png')}
						style={{
							width: 20,
							height: 20,
							marginTop: -20,
							alignSelf: 'flex-end',
						}}
					/>
				</View>
			</View>

			<View
				style={{
					marginHorizontal: 20,
					flexDirection: 'row',
					backgroundColor: '#D9D9D9',
					alignItems: 'center',
					paddingHorizontal: 10,
					height: 50,
					borderRadius: 20,
				}}>
				<Image
					resizeMode='contain'
					source={require('../assets/icons/search.png')}
					style={{ width: 20, height: 20, marginRight: 10 }}
				/>
				<TextInput
					placeholder='Search..'
					style={{ flex: 1, paddingVertical: 10 }}
					onChangeText={(text) => {
						handleSearch(text);
					}}
				/>
			</View>
		</View>
	);
};

export default HomeHeader;
