import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import DeviceScreen from "./DeviceScreen";
import CustomHeaderButton from "../components/CustomHeaderComponent";

const DoorScreen = props => {
    const doorsInfo = props.navigation.getParam('doorsInfo')
    const doorsData = doorsInfo.map(device => {
        return {
            deviceType: device.name,
            visibleState: 'Closed',
            state: false,
        }
    })

    return (
        <DeviceScreen
            activeStateText='Opened'
            inactiveStateText='Closed'
            deviceImage={require('../assets/images/Door.png')}
            backgroundImage={require('../assets/images/Background2.png')}
            numOfButtonsCard='2'
            cardButton0Title='Open'
            cardButton1Title='Close'
            data={doorsData}
        />
    )
}

DoorScreen.navigationOptions = navData => {
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

export default DoorScreen