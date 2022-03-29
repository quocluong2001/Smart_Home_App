import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native'
import { useSelector } from 'react-redux';

import RoomList from '../components/RoomList';

const FavoriteRoomScreen = props => {
    const favRooms = useSelector(state => state.rooms.favoriteRooms)

    return (
        <ImageBackground
            source={require('../assets/images/Background6.png')}
            resizeMode="cover"
            style={styles.backgroundImage}
            blurRadius={1}
        >
            <View style={styles.screen}>
                <RoomList
                    listData={favRooms}
                    navigation={props.navigation}
                />
            </View>
        </ImageBackground>
    )
}

FavoriteRoomScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Favorite Rooms'
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%',
    },
    screen: {
        flex: 1,
        alignItems: "center",
    },
})

export default FavoriteRoomScreen