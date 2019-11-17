import React from 'react';
import { render } from '@testing-library/react'
import { getByTestId } from '@testing-library/dom'
import LoginStatus from './LoginStatus';

test('should render login status', () => {
  const { getByTestId } = render(<LoginStatus />)
  expect(getByTestId('loginStatus')).toBeTruthy()
})

test('should have text "Login status: Logged out"', () => {
  const { getByTestId } = render(<LoginStatus />)
  const heading = getByTestId('loginStatus')
  expect(heading.innerHTML).toEqual('Login status: Logged out')
})

it("matches snapshot", () => {
  const { asFragment } = render(<LoginStatus />);
  expect(asFragment()).toMatchSnapshot();
});
