import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react'
import { getByTestId, queryByTestId, } from '@testing-library/dom'
import { AuthProvider, AuthContext } from './AuthContext'


test('smoke test true', () => {
  expect(true).toBeTruthy()
})

test('smoke test false', () => {
  expect(false).toBeFalsy()
})



// describe("AuthContext", () => {

//   it("<AuthProvider /> loads", () => {
//     const {queryByTestId} = render(<AuthProvider />);
//     // expect(queryByTestId('authContext')).toBeTruthy()
//   });

// });