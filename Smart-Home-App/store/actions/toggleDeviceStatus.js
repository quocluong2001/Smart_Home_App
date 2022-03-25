import { TOGGLE_ON_OFF } from "./actionType";

export const toggleOnOff = (roomId, deviceId) => {
    return {
        type: TOGGLE_ON_OFF,
        payload: {
            roomId: roomId,
            deviceId: deviceId,
        },
    }
}