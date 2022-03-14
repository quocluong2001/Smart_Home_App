import { React, useState } from "react";
import {
    View,
    StyleSheet,
    ImageBackground,
    FlatList,
    Alert
} from 'react-native';

import Header from '../components/Header'
import TwoButtonDeviceCard from "../components/TwoButtonDeviceCard";
import ThreeButtonDeviceCard from "../components/ThreeButtonDeviceCard";
import Colors from "../constants/Colors";
import NormalButton from "../components/NormalButton";
import useForceUpdate from "../custom_hooks/useForceUpdate";
import AddNewDeviceModal from "../components/AddNewDeviceModal";

const DeviceScreen = props => {
    const [cards, setCards] = useState([])
    const [isAddMode, setIsAddMode] = useState(false)
    const activeStateText = props.activeStateText
    const inactiveStateText = props.inactiveStateText
    const numOfButtonsCard = props.numOfButtonsCard //! Accept '2' or '3' only

    const forceUpdate = useForceUpdate()

    const button0Handler = deviceType => {
        for (const deviceCard of cards) {
            if (deviceType === deviceCard.deviceType) {
                deviceCard.state = true
                deviceCard.visibleState = activeStateText
            }
        }
        forceUpdate()
    }

    const button1Handler = deviceType => {
        for (const deviceCard of cards) {
            if (deviceType === deviceCard.deviceType) {
                deviceCard.state = false
                deviceCard.visibleState = inactiveStateText
            }
        }
        forceUpdate()
    }

    const button2Handler = () => {
        
    }

    const openAddModeHandler = () => {
        setIsAddMode(true)
    }

    const addNewLightCardHandler = deviceInform => {
        for (const deviceCard of cards) {
            if (deviceCard.deviceType === deviceInform.deviceType) {
                Alert.alert(
                    'Duplicated device',
                    'This device had already been installed',
                    [{ text: 'OK', style: 'cancel' }]
                )
                return
            }
        }

        setCards([
            ...cards,
            {
                deviceType: deviceInform,
                visibleState: inactiveStateText,
                state: false
            }]
        )
        setIsAddMode(false)
    }

    const cancelAddNewLightCardHandler = () => {
        setIsAddMode(false)
    }

    const renderListItem = (
        deviceType,
        state,
        button0Handler,
        button1Handler,
        button2Handler
    ) => {
        if (numOfButtonsCard === '2') {
            return (
                <TwoButtonDeviceCard
                    deviceType={deviceType}
                    source={props.deviceImage}
                    state={state}
                    button0Name={props.cardButton0Title}
                    button1Name={props.cardButton1Title}
                    onPressButton0={button0Handler}
                    onPressButton1={button1Handler}
                    button0Style={styles.button0}
                    button0TextStyle={styles.buttonText}
                    button1Style={styles.button1}
                    button1TextStyle={styles.buttonText}
                    style={{marginVertical: 10}}
                />
            )
        }
        else if (numOfButtonsCard === '3') {
            return (
                <ThreeButtonDeviceCard
                    deviceType={deviceType}
                    source={props.deviceImage}
                    state={state}
                    button0Name={props.cardButton0Title}
                    button1Name={props.cardButton1Title}
                    button2Name={props.cardButton2Title}
                    onPressButton0={button0Handler}
                    onPressButton1={button1Handler}
                    onPressButton2={button2Handler}
                    button0Style={styles.button0}
                    button0TextStyle={styles.buttonText}
                    button1Style={styles.button1}
                    button1TextStyle={styles.buttonText}
                    button2Style={styles.button2}
                    button2TextStyle={styles.buttonText}
                    style={{marginVertical: 10}}
                />
            )
        }
    }

    return (
        <ImageBackground
            source={props.backgroundImage}
            resizeMode="cover"
            style={styles.backgroundImage}
        >
            <View style={styles.screen}>
                <Header>
                    {props.headerText}
                </Header>
                <View style={styles.listContainer}>
                    <FlatList
                        contentContainerStyle={styles.list}
                        data={cards}
                        renderItem={itemData => renderListItem(
                            itemData.item.deviceType,
                            itemData.item.visibleState,
                            () => button0Handler(itemData.item.deviceType),
                            () => button1Handler(itemData.item.deviceType),
                            () => button2Handler()
                        )}
                        keyExtractor={itemData => itemData.deviceType}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <NormalButton
                        buttonStyle={styles.addNewLightButton}
                        buttonTextStyle={styles.addNewLightButtonText}
                        buttonName='Add'
                        onPress={openAddModeHandler}
                    />
                    <NormalButton
                        buttonStyle={styles.addNewLightButton}
                        buttonTextStyle={styles.addNewLightButtonText}
                        buttonName='Remove'
                        onPress={() => { }} //TODO: Finish remove list of cards
                    />
                </View>
                <AddNewDeviceModal
                    visible={isAddMode}
                    onConfirm={addNewLightCardHandler}
                    onCancel={cancelAddNewLightCardHandler}
                />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%'
    },

    screen: {
        flex: 1,
        alignItems: "center",
    },

    listContainer: {
        flex: 1,
    },

    list: {
        flexGrow: 1,
        justifyContent: "flex-start",
    },

    button0: {
        backgroundColor: Colors.buttonColor2,
    },

    button1: {
        backgroundColor: Colors.buttonColor1,
    },

    button2: {
        backgroundColor: Colors.buttonColor3,
    },

    buttonText: {
        color: Colors.fontColor1
    },

    buttonContainer: {
        flexDirection: "row",
        width: '60%',
        justifyContent: "space-between"

    },

    addNewLightButton: {
        height: 70,
        width: 70,
        backgroundColor: Colors.backgroundColor1,
        marginBottom: 10,
        padding: 0,
    },

    addNewLightButtonText: {
        color: Colors.fontColor1
    }
})

export default DeviceScreen