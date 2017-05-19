import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import GymDetail from './GymDetail'
import { customHeader } from '../config'
import axios from 'axios'

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
				this.setState({ gyms: response.data.businesses })
		})
	}

	renderGyms() {
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
