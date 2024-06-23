import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../utils/constants';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import { WeatherCurrent } from '../../components/weather-current';
import { WeatherCoordinates } from '../../components/weather-coordinates';

export function Home() {
  const now = moment(new Date());

  return (
    <LinearGradient
      testID="home"
      colors={[Colors.LIGHT_GRAY, Colors.DARK_GRAY]}
      style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.date}>{now.format('MMM DD, YYYY')}</Text>
        <Text style={styles.day}>{now.format('dddd')}</Text>
      </View>

      <WeatherCurrent />

      <Text testID="home-divider" style={styles.divider}>
        Or
      </Text>

      <WeatherCoordinates />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    alignContent: 'space-between',
    justifyContent: 'space-evenly',
  },
  title: {
    justifyContent: 'flex-end',
  },
  date: {
    fontSize: 13,
    color: Colors.GRAY,
  },
  day: {
    fontSize: 21,
    color: Colors.WHITE,
  },
  divider: {
    color: Colors.WHITE,
    textAlign: 'center',
  },
});
