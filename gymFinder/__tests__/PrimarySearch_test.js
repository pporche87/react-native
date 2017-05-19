import 'react-native'
import React from 'react'
import AppNavigator from '../app/AppNavigator'

import renderer from 'react-test-renderer'

it.only('renders correctly', () => {
  const search = renderer.create(
    <PrimarySearch />
  ).toJSON()
	expect(search).toMatchSnapshot()
})
