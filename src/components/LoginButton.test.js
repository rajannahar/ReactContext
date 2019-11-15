import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react'
import { getByTestId, queryByTestId, } from '@testing-library/dom'
import LoginButton from './LoginButton';

describe('login button smoke test', () => {
  it('should return true', () => {
    expect(true).toBeTruthy()
  })
})

test('should render login button', () => {
  const { queryByTestId } = render(<LoginButton />)
  expect(queryByTestId('loginButton')).toBeTruthy()
})

test('should have text "Login"', () => {
  const { getByTestId } = render(<LoginButton />)
  const button = getByTestId('loginButton')
  expect(button.innerHTML).toEqual('Login')
})