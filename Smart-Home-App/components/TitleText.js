import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TitleText = props => {
    return (
        <Text
            {...props}
            style={{ ...styles.titleText, ...props.style }}
        >
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontFamily: 'r-flex-bold',
        fontSize: 20,
    }
})

export default TitleText