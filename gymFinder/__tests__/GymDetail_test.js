import 'react-native'
import React from 'react'
import GymDetail from '../app/GymDetail'

import renderer from 'react-test-renderer'

it.only('renders correctly', () => {
  const detail = renderer.create(
    <GymDetail />
  ).toJSON()
	expect(detail).toMatchSnapshot()
})
