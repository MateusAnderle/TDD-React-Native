import React from 'react';
import { test, describe, jest } from '@jest/globals';

import { render } from '@testing-library/react-native';
import { WeatherCoordinates } from '.';

describe('WeatherCoordinates component', () => {
  test('Should renders correctly', () => {
    const wrapper = render(<WeatherCoordinates />);
    wrapper.getByTestId('weather-coordinates');
  });
});
