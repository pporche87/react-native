import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import {
	Header,
	Button,
	Spinner,
 	CardSection
} from './components/common'
import LoginForm from './components/LoginForm'


class App extends Component {
	state = { loggedIn: null }

	componentWillMount() {
		firebase.initializeApp({
    apiKey: 'AIzaSyALf_IalwqCX0BdHouj9SKs1ZMEu-xv1Mc',
    authDomain: 'auth-f8d3b.firebaseapp.com',
    databaseURL: 'https://auth-f8d3b.firebaseio.com',
    projectId: 'auth-f8d3b',
    storageBucket: 'auth-f8d3b.appspot.com',
    messagingSenderId: '652122877209'
	})

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true })
			} else {
				this.setState({ loggedIn: false })
			}
		})
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<Button onPress={() => firebase.auth().signOut()}
						Log Out
					</Button>
				)
			case false:
				return <LoginForm />
			default:
				return <Spinner size='large' />
		}
	}

	render() {
		return (
			<View>
				<Header headerText='Authentication' />
				{this.renderContent()}
			</View>
		)
	}
}


export default App
