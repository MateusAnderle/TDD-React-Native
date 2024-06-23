import React from 'react';
import { test, describe, jest } from '@jest/globals';

import { render } from '@testing-library/react-native';
import { WeatherCurrent } from '.';

describe('WeatherCurrent component', () => {
  test('Should renders correctly', () => {
    const wrapper = render(<WeatherCurrent />);
    wrapper.getByTestId('weather-current');
  });
});
