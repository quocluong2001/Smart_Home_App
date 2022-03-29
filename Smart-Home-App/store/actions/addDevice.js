import { ADD_DEVICE } from "./actionType";

export const addDevice = (roomId, deviceId) => {
    return {
        type: ADD_DEVICE,
        payload: {
            roomId: roomId,
            deviceId: deviceId
        }
    }
}