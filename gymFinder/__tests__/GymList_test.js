import 'react-native'
import React from 'react'
import GymList from '../app/GymList'

import renderer from 'react-test-renderer'

it.only('renders correctly', () => {
  const list = renderer.create(
    <GymList />
  ).toJSON()
	expect(list).toMatchSnapshot()
})
