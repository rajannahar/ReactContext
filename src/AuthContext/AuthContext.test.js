import React from 'react';
import { render } from '@testing-library/react'
import { getByTestId } from '@testing-library/dom'
import { AuthProvider, AuthContext } from './AuthContext'

test('smoke test', () => {
  expect(true).toBeTruthy()
})

// test('should render logout button', () => {
//   const { getByTestId } = render(<AuthContext.Provider>test</AuthContext.Provider>)
//   const authTestId = getByTestId('authContext')
//   expect(authTestId).toBeTruthy()
// })