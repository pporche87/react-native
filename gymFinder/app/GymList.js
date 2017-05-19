import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import axios from 'axios'
import GymDetail from './GymDetail'

const customHeader = {
	headers: { 'Authorization': 'bearer m-WMwsZfIQPmgPFiBHOGFAlLZ5Rb6zNu0BfXPDEenRX-WX4EW1aXpE9ZiBIU4f1wcueIbfqJbNNIfbJ366hKVIxSg6CawC914ePZPUHTBxQDeAcrBNMqLUjMFDEaWXYx' }
}

export default class GymList extends Component {
	static navigationOptions	 =  {
		title: 'Closest Gyms Near You!'
	}

	constructor(props) {
		super(props)
		this.state = {
			gyms: []
		}
	}


	componentWillMount() {
		axios.get('https://api.yelp.com/v3/businesses/search?term=gyms&location=San+Francisco', customHeader)
			.then(response => {
				console.log('WORDS',response);
				this.setState({ gyms: response.data.businesses })
			})
	}

	renderGyms() {
		console.log('state of gyms before return', this.state.gyms)
		return this.state.gyms.map(business =>
			<GymDetail key={business.id} business={business} />
		)
	}

	render() {
		return (
			<ScrollView>
				{this.renderGyms()}
			</ScrollView>
		)
	}
}
