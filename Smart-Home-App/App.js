import { React, useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import AppLoading from 'expo-app-loading';

import Header from './components/Header';
import fetchFonts from './utils/fetchFonts';
import DeviceButton from './components/DeviceButton';
import RoomButton from './components/RoomButton';
import NormalButton from './components/NormalButton';
import TwoButtonDeviceCard from './components/TwoButtonDeviceCard';
import ThreeButtonDeviceCard from './components/ThreeButtonDeviceCard';
import Colors from './constants/Colors';
import InputField from './components/InputField';
import LoginCard from './components/LoginCard';

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
      opacity={0.7}
    >
      <View style={styles.content}>
        <Header>
          HOME
        </Header>
        {/* <RoomButton source={require('./assets/images/Bathroom.png')} roomName='Bathroom' />
        <DeviceButton source={require('./assets/images/Light.png')} />
        <NormalButton buttonName='Login' buttonStyle={styles.button} buttonTextStyle={styles.buttonText} /> */}
        <ThreeButtonDeviceCard
          deviceType='Light'
          source={require('./assets/images/Fan.png')}
          button0Name='On'
          button1Name='Off'
          button2Name='Set Timer'
          button0Style={styles.button1}
          button0TextStyle={styles.buttonText}
          button1Style={styles.button2}
          button1TextStyle={styles.buttonText}
          button2Style={styles.button3}
          button2TextStyle={styles.buttonText}
          state='Working'
        />
        <LoginCard/>
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

  button1: {
    backgroundColor: Colors.buttonColor0,
  },

  button2: {
    backgroundColor: Colors.buttonColor1,
  },

  button3: {
    backgroundColor: Colors.buttonColor3,
  },

  buttonText: {
    color: '#FFFFFF',
  }
});