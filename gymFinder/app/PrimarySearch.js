import React, { Component } from 'react'
import { StyleSheet, Image, View } from 'react-native'
import YelpApi from 'v3-yelp-api'
import config from '../config'
import { Button, Card, CardSection } from './components'

export default class PrimarySearch extends Component {
	static navigationOptions	 =  {
		title: 'Local Gym Finder'
	}

	render() {
		const { navigate } = this.props.navigation
		return (
			<Card style={styles.container}>
				<CardSection>
					<Image source={require('./images/gym.jpg')}
						style={{
							height: 300,
							flex: 1,
							width: null
						}}
					/>
				</CardSection>

				<CardSection>
					<Button onPress={() => navigate('GymList')}>
						Find Gyms Near You!
					</Button>
				</CardSection>
			</Card>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent',
	}
})
