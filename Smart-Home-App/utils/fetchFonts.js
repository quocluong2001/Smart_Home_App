import * as Font from "expo-font";

const fetchFonts = async () => {
  await Font.loadAsync({
    "r-flex": require("../assets/fonts/RFlexRegular-JRJ8j.ttf"),
    "r-flex-bold": require("../assets/fonts/RFlexBold-VGzLZ.ttf"),
    "r-flex-italic": require("../assets/fonts/RFlexRegularItalic-qZo1r.ttf"),
    "r-flex-bolditalic": require("../assets/fonts/RFlexBoldItalic-ALGjM.ttf"),
    "roboto": require("../assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "roboto-italic": require("../assets/fonts/Roboto-Italic.ttf"),
    "roboto-bolditalic": require("../assets/fonts/Roboto-BoldItalic.ttf"),
  });
};

export default fetchFonts;
