import { createSelector } from "reselect"

export const selectDevicesInfoByType = (roomId, deviceType) => createSelector(
    //* input selector
    state => state.rooms.rooms,
    //* output selector
    rooms => {
        const selectedRoom = rooms.find(room => room.id === roomId)
        return selectedRoom.devices.filter(device => device.type === deviceType)
    }
)

export const selectDeviceInfoByDeviceId = (roomId, deviceId) => createSelector(
    //*input selector
    state => state.rooms.rooms,
    //*output selector
    rooms => {
        const selectedRoom = rooms.find(room => room.id === roomId)
        return selectedRoom.devices.find(device => device.id === deviceId)
    }
)