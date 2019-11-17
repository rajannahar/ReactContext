import React from 'react';
import { render } from '@testing-library/react'
import { getByTestId, getByText } from '@testing-library/dom'
import LoginButton from './LoginButton';

test('should render login button', () => {
  const { getByTestId } = render(<LoginButton />)
  expect(getByTestId('loginButton')).toBeTruthy()
})

test('should have text "Login"', () => {
  const { getByText } = render(<LoginButton />)
  const button = getByText('Login')
  expect(button.innerHTML).toEqual('Login')
})

it("matches snapshot", () => {
  const { asFragment } = render(<LoginButton />);
  expect(asFragment()).toMatchSnapshot();
});