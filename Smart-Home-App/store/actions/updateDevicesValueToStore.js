import { UPDATE_DEVICE_VALUE_TO_STORE } from "./actionType";

export const updateDevicesValueToStore = (roomId, deviceId, value) => {
    return {
        type: UPDATE_DEVICE_VALUE_TO_STORE,
        payload: {
            roomId: roomId,
            deviceId: deviceId,
            value: value,
        },
    }
}