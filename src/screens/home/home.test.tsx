import React from 'react';
import { test, describe } from '@jest/globals';
import { render } from '@testing-library/react-native';
import { Home } from '.';

describe('Home', () => {
  test('Should renders correctly', () => {
    const wrapper = render(<Home />);
    wrapper.getByTestId('home');
  });
});
