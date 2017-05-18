import React, { Component } from 'react'
import { StyleSheet, Image, View } from 'react-native'
import YelpApi from 'v3-yelp-api'
import config from '../config'
import { Button, Card, CardSection } from './components'

export default class PrimarySearch extends Component {
	static navigationOptions	 =  {
		title: 'Local Gym Finder'
	}

	state = {
		position: 'unknown'
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({position})
			},
			(error) => alert(error),
			{enableHighAccuracy: true, timeout: 2000, maximumAge: 1000}
		)
	}

	getData() {
		const credentials = {
			appId: config.consumer_key,
			appSecret: config.consumer_secret,
		}

		const yelp = new YelpApi(credentials)

		let lat = this.state.position.coords.latitude
		let lng = this.state.position.coords.longitude
		let latlng = String(lat) + ',' + String(lng)
		let params = {
			term: 'gym',
			location: latlng,
			limit: '5',
		}
		let nav = this.props.navigator

		return yelp.search(params)
			.then((searchResults) => {
				nav.push({
					ident: 'Results',
					data: searchResults
				})
			})
			.then(data => console.log(data))
			.catch(err => err)
	}

	render() {
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
					<Button>
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
