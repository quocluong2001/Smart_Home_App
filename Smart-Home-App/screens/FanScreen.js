import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import DeviceScreen from "./DeviceScreen";
import CustomHeaderButton from "../components/CustomHeaderComponent";

const FanScreen = props => {
    const fansInfo = props.navigation.getParam('fansInfo')
    const fansData = fansInfo.map(device => {
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
            deviceImage={require('../assets/images/Fan.png')}
            backgroundImage={require('../assets/images/Background5.png')}
            numOfButtonsCard='3'
            cardButton0Title='On'
            cardButton1Title='Off'
            cardButton2Title='Set Timer'
            informationCard={true}
            informationTitle='Temperature'
            informationValue='32'
            informationUnit='Celsius'
            data={fansData}
        />
    )
}

FanScreen.navigationOptions = navData => {
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

export default FanScreen