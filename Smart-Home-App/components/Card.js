import React from "react";
import { View, StyleSheet } from 'react-native'

const Card = props => {
    return (
        <View
            {...props}
            style={{ ...styles.card, ...props.style }}
        >
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        borderRadius: 24,
        elevation: 5,
    }
})

export default Card