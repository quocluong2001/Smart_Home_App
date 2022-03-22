import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import DeviceScreen from "./DeviceScreen";
import CustomHeaderButton from "../components/CustomHeaderComponent";

const LightScreen = props => {
    const lightsInfo = props.navigation.getParam('lightsInfo')
    const lightsData = lightsInfo.map(device => {
        return {
            deviceType: device.name,
            visibleState: 'Off',
            state: false,
        }
    })

    return (
        <DeviceScreen
            activeStateText='On'
            inactiveStateText='Off'
            deviceImage={require('../assets/images/Light.png')}
            backgroundImage={require('../assets/images/Background1.png')}
            numOfButtonsCard='2'
            cardButton0Title='On'
            cardButton1Title='Off'
            data={lightsData}
        />
    )
}

LightScreen.navigationOptions = navData => {
    return {
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title="Favorite"
                        iconName="ios-star"
                        onPress={() => { }}
                    />
                </HeaderButtons>
            )
        }
    }
}

export default LightScreen