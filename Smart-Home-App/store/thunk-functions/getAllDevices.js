import axios from "axios";

import { Device } from "../../models/device";
import { fetchData } from "../actions/fetchData";

const getAllDevices = () => async (dispatch, getState) => {
    const roomsInfo = getState().rooms.availableRooms
    for (room of roomsInfo) {
        const devicesPromise = await axios.get(
            `http://192.168.1.100:5000/api/room/${room.id}/devices`
        )

        const devicesData = devicesPromise.data.map(
            device => {
                return new Device(
                    device.device_id,
                    device.description,
                    device.name,
                    {
                        ...device.data[device.data.length - 1],
                        unit:
                            device.description === 'temp sensor'
                                ? 'Celsius'
                                : device.description === 'light sensor'
                                    ? 'Lux'
                                    : '',
                        value:
                            (
                                device.description === 'temp sensor' ||
                                device.description === 'light sensor'
                            )
                                ? device.data[device.data.length - 1].value
                                :
                                (
                                    (device.description === 'light' &&
                                        device.data[device.data.length - 1].value === "0") ||
                                    (device.description === 'fan' &&
                                        device.data[device.data.length - 1].value === "2") ||
                                    (device.description === 'door' &&
                                        device.data[device.data.length - 1].value === "4")
                                )
                                    ? false
                                    : true
                    }
                )
            }
        )
        room.devices = devicesData

        //! for test only
        break
    }

    dispatch(fetchData(roomsInfo))

    //* Logs all rooms' data after logged in
    console.log('All rooms data:')
    console.log(getState().rooms.availableRooms)
}

export default getAllDevices