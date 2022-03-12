import { React, useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import AppLoading from 'expo-app-loading';

import Header from './components/Header';
import fetchFonts from './utils/fetchFonts';
import DeviceButton from './components/DeviceButton';
import RoomButton from './components/RoomButton';
import NormalButton from './components/NormalButton';
import TwoButtonDeviceCard from './components/TwoButtonDeviceCard';

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
    <ImageBackground 
      source={require('./assets/images/Background1.png')}
      resizeMode='cover'
      style={styles.screen}
    >
      <View style={styles.content}>
        <Header>
          HOME
        </Header>
        <RoomButton source={require('./assets/images/Bathroom.png')} roomName='Bathroom' />
        <DeviceButton source={require('./assets/images/Light.png')} />
        <NormalButton buttonName='Login' buttonStyle={styles.button} buttonTextStyle={styles.buttonText} />
        <TwoButtonDeviceCard
          deviceType='Light'
          source={require('./assets/images/Light.png')}
          button1Name='On'
          button2Name='Off'
          button1Style={styles.button}
          button1TextStyle={styles.buttonText}
          button2Style={styles.button}
          button2TextStyle={styles.buttonText}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },

  button: {
    backgroundColor: '#CC3A3A',
  },

  buttonText: {
    color: '#FFFFFF',
  }
});