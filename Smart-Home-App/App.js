import { React, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AppLoading from 'expo-app-loading';

import Header from './components/Header';
import fetchFonts from './utils/fetchFonts';
import DeviceButton from './components/DeviceButton';
import RoomButton from './components/RoomButton';
import NormalButton from './components/NormalButton';

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
    <View style={styles.screen}>
      <Header>
        HOME
      </Header>
      <RoomButton source={require('./assets/sloth.jpg')} roomName='Bathroom' />
      <DeviceButton source={require('./assets/sloth.jpg')} />
      <NormalButton buttonName='Login' buttonStyle={styles.button} buttonTextStyle={styles.buttonText}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  
  button: {
    backgroundColor: '#CC3A3A',
  },

  buttonText: {
    color: '#FFFFFF',
  }
});