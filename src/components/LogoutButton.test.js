import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react'
import { getByTestId } from '@testing-library/dom'
import LogoutButton from './LogoutButton';

test('should render logout button', () => {
  const { getByTestId } = render(<LogoutButton />)
  expect(getByTestId('logoutButton')).toBeTruthy()
})

test('should have text "Logout"', () => {
  const { getByTestId } = render(<LogoutButton />)
  const button = getByTestId('logoutButton')
  expect(button.innerHTML).toEqual('Logout')
})
