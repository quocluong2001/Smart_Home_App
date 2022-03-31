import { REMOVE_DEVICE } from "./actionType";

export const removeDevice = (roomId, deviceId) => {
    return {
        type: REMOVE_DEVICE,
        payload: {
            roomId: roomId,
            deviceId: deviceId
        }
    }
}