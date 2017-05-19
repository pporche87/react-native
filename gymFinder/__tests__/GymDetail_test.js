import 'react-native'
import React from 'react'
import GymDetail from '../app/GymDetail'
import axios from 'axios'

import renderer from 'react-test-renderer'

const customHeader = {
	headers: { 'Authorization': 'bearer m-WMwsZfIQPmgPFiBHOGFAlLZ5Rb6zNu0BfXPDEenRX-WX4EW1aXpE9ZiBIU4f1wcueIbfqJbNNIfbJ366hKVIxSg6CawC914ePZPUHTBxQDeAcrBNMqLUjMFDEaWXYx' }
}

it.only('renders correctly', () => {
	axios.get('https://api.yelp.com/v3/businesses/search?term=gyms&location=San+Francisco', customHeader)
		.then(response => {
			const detail = renderer.create(
			 <GymDetail key={response.data.businesses.id[0]} business={response.data.businesses[0]} />
		 ).toJSON()
		 expect(detail).toMatchSnapshot()
	 })
	})
