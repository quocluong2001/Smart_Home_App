import React from "react";
import { View, StyleSheet } from "react-native"

import BodyText from "./BodyText";

const Loading = props => {
 if (props.visible) {
     return (
         <View style={styles.screen}>
             <BodyText>
                 Loading...
             </BodyText>
         </View>
     )
 }
 return null
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
})

export default Loading