import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import RoomButton from "./RoomButton";

const RoomList = (props) => {
  const navigation = useNavigation();

  const renderRoomItems = (itemData) => {
    return (
      <RoomButton
        buttonStyle={styles.roomItem}
        source={itemData.item.imageSource}
        roomName={itemData.item.name}
        onPress={() => {
          if (navigation.getParent("MainStackNavigator")) {
            //* Pass data into nested navigator
            navigation.navigate("MainStack_Room", {
              screen: "RoomStack_Room",
              params: {
                roomName: itemData.item.name,
                roomId: itemData.item.id,
              },
            });
          } else if (navigation.getParent("FavRoomStackNavigator")) {
            //* Pass data into nested navigator
            navigation.navigate("FavRoomStack_Room", {
              screen: "RoomStack_Room",
              params: {
                roomName: itemData.item.name,
                roomId: itemData.item.id,
              },
            });
          }
        }}
      />
    );
  };

  return (
    <View style={styles.listContainer}>
      <FlatList
        contentContainerStyle={styles.list}
        numColumns={2}
        data={props.listData}
        renderItem={(itemData) => renderRoomItems(itemData)}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginTop: 50,
  },

  list: {
    flexGrow: 1,
  },

  roomItem: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

export default RoomList;
