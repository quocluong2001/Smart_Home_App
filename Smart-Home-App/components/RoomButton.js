import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

import BodyText from "./BodyText";

const RoomButton = props => {
    return (
        <TouchableOpacity activeOpacity={0.5}>
            <View style={{...styles.imageContainer, ...props.buttonStyle}}>
                <Image
                    source={props.source}
                    resizeMode="cover"
                    style={styles.image}
                />
                <BodyText style={{ fontFamily: 'roboto-bold', ...props.buttonTextStyle}}>
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