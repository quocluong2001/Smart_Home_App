import React, { useState, useEffect } from "react";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { Provider, useDispatch } from "react-redux";

// import { configureStore } from "./store/store";
import store from "./store/store";
import fetchFonts from "./utils/fetchFonts";
// import MainNavigator from "./navigations/MainNavigator";
import MainNavigator from "./navigations/6.x/MainNavigator";
import getAllRooms from "./store/thunk-functions/getAllRooms";
import { socket, SocketContext } from "./utils/socket";

enableScreens();

const useFonts = async () => {
  await fetchFonts();
};

// const store = configureStore();

export default AppWrapper = () => {
  return (
    <SocketContext.Provider value={socket}>
      <Provider store={store}>
        <App />
      </Provider>
    </SocketContext.Provider>
  );
};

const App = () => {
  const dispatch = useDispatch();

  //! Load data
  const [isFontsLoaded, setIsFontsLoaded] = useState(false);

  useEffect(() => {
    dispatch(getAllRooms());
  }, []);

  //* Load font
  if (!isFontsLoaded) {
    return (
      <AppLoading
        startAsync={useFonts}
        onFinish={() => setIsFontsLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }
  //! Done load data

  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};
