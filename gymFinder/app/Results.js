import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Results extends Component {
	static navigationOptions	 =  {
		title: 'Closest Gyms Near You!'
	}

	render() {
		return (
			<View>
				<Text>This is the Results page</Text>
			</View>
		)
	}
}
