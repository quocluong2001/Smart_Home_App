import axios from 'axios'

import { toggleOnOff } from '../actions/toggleDeviceStatus'

const updateDevicesValue = (roomId, deviceId) => async (dispatch, getState) => {

    dispatch(toggleOnOff(roomId, deviceId))

    const selectedRoom = getState().rooms.availableRooms.find(room => room.id === roomId)
    const selectedDevice = selectedRoom.devices.find(device => device.id === deviceId)

    console.log(selectedDevice)

    await axios.post(`http://192.168.1.100:5000/api/device/${deviceId}/data`, {
        "value": selectedDevice.type === 'light' && selectedDevice.payload.value === true
            ? 1
            : selectedDevice.type === 'light' && selectedDevice.payload.value === false
                ? 0
                : selectedDevice.type === 'fan' && selectedDevice.payload.value === true
                    ? 3
                    : selectedDevice.type === 'fan' && selectedDevice.payload.value === false
                        ? 2
                        : selectedDevice.type === 'door' && selectedDevice.payload.value === true
                            ? 5
                            : 4
    })
}

export default updateDevicesValue