import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import Card from "./Card";

const DeviceButton = props => {
    return (
        <TouchableOpacity activeOpacity={0.5}>
            <Card style={{...styles.imageContainer, ...props.buttonStyle}}>
                <Image
                    source={props.source}
                    resizeMode="cover"
                    style={styles.image}
                />
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: 150,
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(62, 64, 91, 0.8)',
    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    }
})

export default DeviceButton