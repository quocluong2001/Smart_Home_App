import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

import BodyText from "./BodyText";
import Loading from "./Loading";

const RoomButton = props => {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={props.onPress}
        >
            <View style={{ ...styles.imageContainer, ...props.buttonStyle }}>
                <Loading
                    visible={isLoading}
                />
                <Image
                    source={{uri: props.source}}
                    resizeMode="cover"
                    style={styles.image}
                    onLoadStart={() => setIsLoading(true)}
                    onLoadEnd={() => setIsLoading(false)}
                />
                <BodyText style={{ fontFamily: 'roboto-bold', ...props.buttonTextStyle }}>
                    {props.roomName}
                </BodyText>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: 150,
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#FFFFFF',
        borderColor: '#000000',
        borderRadius: 5,
        borderWidth: 1,
        padding: 30,
    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },

    roomName: {
        color: 'black',
        marginTop: 10,
        textAlign: "center",
    }
})

export default RoomButton