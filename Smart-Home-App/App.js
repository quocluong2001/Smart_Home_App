import { React, useState } from 'react';
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens'

import fetchFonts from './utils/fetchFonts';
import MainNavigator from './navigations/MainNavigator'

enableScreens()

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
    <MainNavigator/>
  );
}
