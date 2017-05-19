/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

// stack navigation 
import AppNavigator from './app/navigation/AppNavigator'

export default class PhoMeCrazy extends Component {
  render() {
    return (
      <AppNavigator initialRoute={{ident: 'PrimarySearch'}} />
    )
  }
}

AppRegistry.registerComponent('PhoMeCrazy', () => PhoMeCrazy);
