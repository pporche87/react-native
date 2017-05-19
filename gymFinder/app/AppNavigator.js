import { StackNavigator } from 'react-navigation'
import PrimarySearch from './PrimarySearch'
import GymList from './GymList'

const gymFinderApp = StackNavigator({
	PrimarySearch: {
		screen: PrimarySearch
	},
	GymList: {
		screen: GymList
	}
})

export default gymFinderApp
