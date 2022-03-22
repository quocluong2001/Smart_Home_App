import React from 'react';
import { View, StyleSheet } from 'react-native'

import BodyText from '../components/BodyText';

const FavoriteDeviceScreen = props => {
    return (
        <View style={styles.screen}>
            <BodyText>Hello from favorite screen</BodyText>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default FavoriteDeviceScreen