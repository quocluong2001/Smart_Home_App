import { React, useState } from 'react';
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';

import fetchFonts from './utils/fetchFonts';
import MainNavigator from './navigations/MainNavigator'
import roomReducers from './store/reducers/room';

enableScreens()

const useFonts = async () => {
  await fetchFonts()
}

const rootReducer = combineReducers({
  rooms: roomReducers,
})

const store = createStore(rootReducer)

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
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
