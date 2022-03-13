import { React, useState } from 'react';
import { StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';

import fetchFonts from './utils/fetchFonts';
import TestScreen from './screens/TestScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const useFonts = async () => {
  await fetchFonts()
}

export default function App() {

  //! Load data
  const [isDataLoaded, setIsDataLoaded] = useState(false)

  //* Load font
  if (!isDataLoaded) {
    return (
      <AppLoading
        startAsync={useFonts}
        onFinish={() => setIsDataLoaded(true)}
        onError={(error) => console.log(error)}
      />
    )
  }
  //! Done load data

  return (
    <HomeScreen/>
  );
}

const styles = StyleSheet.create({

});