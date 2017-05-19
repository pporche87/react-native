import React from 'react'
import {
	Text,
	View,
	Image,
	Linking
} from 'react-native'
import {
	Card,
 	CardSection,
	Button } from './components'

const GymDetail = ({ business }) => {
	const {
		name,
		display_phone,
		image_url,
		url
	} = business

	const {
		headerContentStyle,
		headerTextStyle,
		imageStyle
	} = styles

	return (
		<Card>
			<CardSection>
				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{name}</Text>
					<Text>{display_phone}</Text>
				</View>
			</CardSection>

			<CardSection>
				<Image
					style={imageStyle}
					source={{ uri: image_url }}
				/>
			</CardSection>

			<CardSection>
				<Button onPress={() => Linking.openURL(url)}>
					Check out on Yelp!
				</Button>
			</CardSection>
		</Card>
	)
}

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around',
	},
	headerTextStyle : {
		fontSize: 18
	},
	imageStyle : {
		height: 300,
		flex: 1,
		width: null
	}
}

export default GymDetail
