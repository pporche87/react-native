import { StackNavigator } from 'react-navigation'
import PrimarySearch from './PrimarySearch'
import Results from './Results'

const gymFinderApp = StackNavigator({
	PrimarySearch: {
		screen: PrimarySearch
	},
	Results: {
		screen: Results
	}
})

export default gymFinderApp
