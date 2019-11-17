import React, { useContext } from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'
import { getByTestId, queryByTestId, getByText, waitForElement } from '@testing-library/dom'
import { AuthContext, AuthProvider } from './AuthContext/AuthContext';
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import LoginStatus from './components/LoginStatus'

import App from './App'

afterEach(cleanup)

test('should render login button', () => {
  const { getByTestId } = render(<App />)
  const loginButton = getByTestId('loginButton')
  expect(loginButton).toBeTruthy()
})

test('should render logout button', () => {
  const { getByTestId } = render(<App />)
  const logoutButton = getByTestId('logoutButton')
  expect(logoutButton).toBeTruthy()
})

test('should render login status', () => {
  const { getByTestId } = render(<App />)
  const heading = getByTestId('loginStatus')
  expect(heading.innerHTML).toBe('Login status: Logged out')
})

test('click login button should update text', async () => {
  const { getByTestId, getByText } = render(<App />)

  const headingInitial = getByTestId('loginStatus')
  const loginButton = getByText('Login')
  expect(headingInitial.innerHTML).toEqual('Login status: Logged out')

  fireEvent.click(loginButton)

  const headingLogin = await waitForElement(() => getByTestId('loginStatus'))
  expect(headingLogin.innerHTML).toEqual('Login status: Logged in')
})

it("matches snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});