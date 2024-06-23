import React from 'react';
import { test, describe, beforeEach, afterEach, jest } from '@jest/globals';

import { render } from '@testing-library/react-native';
import { Home } from '.';

describe('Home', () => {
  test('Should renders correctly', () => {
    const wrapper = render(<Home />);
    wrapper.getByTestId('home');
  });

  describe('Title section', () => {
    beforeEach(() => {
      jest.useFakeTimers();
      jest.setSystemTime(946684800000);
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    test('Should contain current date', () => {
      const wrapper = render(<Home />);
      wrapper.getByText('Dec 31, 1999');
    });

    test('Should contain current day', () => {
      const wrapper = render(<Home />);
      wrapper.getByText('Friday');
    });
  });
});
