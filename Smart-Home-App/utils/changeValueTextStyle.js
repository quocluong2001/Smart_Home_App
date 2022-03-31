import Colors from "../constants/Colors"

export const changeValueTextStyle = (valueType, value) => {
    //* Temperature
    if (valueType === 'Temperature') {
        const temp = parseInt(value)
        if (temp >= 33) {
            return {color: Colors.fontColor7}
        }
        else if (temp >= 28 && temp < 33) {
           return {color: Colors.fontColor5}
        }
        else {
            return {color: Colors.fontColor6}
        }
    }
    return
}