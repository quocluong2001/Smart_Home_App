import { TOGGLE_FAV } from "../actions/actionType"
import { UPDATE_DEVICE_VALUE_TO_STORE } from "../actions/actionType"
import { REMOVE_DEVICE } from "../actions/actionType"
import { ADD_DEVICE } from "../actions/actionType"
import { FETCH_DATA } from "../actions/actionType"
import { Device } from "../../models/device"
import Room from "../../models/room"

const initialState = {
    availableRooms: [],
    rooms: [],
    favoriteRooms: []
}

const removeFavoriteRoom = (favoriteRooms, item) => {
    return favoriteRooms.filter(
        room => room.id != item.id
    )
}

const addFavoriteRoom = (favoriteRooms, item) => {
    const updatedArray = [...favoriteRooms]
    updatedArray.unshift(item)
    return updatedArray
}

const updateData = (state, action) => {
    return {
        ...state,
        availableRooms: action.payload,
        rooms: action.payload,
        favoriteRooms: []
    }
}

const toggleFavorite = (state, action) => {
    const favoriteRoom = state.favoriteRooms.find(
        room => room.id === action.payload
    )

    if (favoriteRoom != undefined) {
        return {
            ...state,
            favoriteRooms: removeFavoriteRoom(state.favoriteRooms, favoriteRoom)
        }
    }
    else {
        const room = state.rooms.find(
            room => room.id === action.payload
        )
        return {
            ...state,
            favoriteRooms: addFavoriteRoom(state.favoriteRooms, room)
        }
    }
}

const updateDevicesValue = (state, action) => {
    let updatedRooms = [...state.availableRooms]
    updatedRooms = updatedRooms.map(room => {
        if (room.id === action.payload.roomId) {
            const updatedDevices = room.devices.map(device => {
                if (device.id === action.payload.deviceId) {
                    return new Device(
                        device.id,
                        device.type,
                        device.name,
                        {
                            ...device.payload,
                            value: action.payload.value,
                        },
                    )
                }
                return device
            })
            return new Room(
                room.id,
                room.name,
                room.imageSource,
                updatedDevices,
            )
        }
        return room
    })

    return {
        ...state,
        availableRooms: updatedRooms,
        rooms: updatedRooms,
    }
}

const findRoom = (rooms, roomId) => {
    return rooms.find(room => room.id === roomId)
}

const findDevice = (devices, deviceId) => {
    return devices.find(device => device.id === deviceId)
}

const addDevice = (state, action) => {
    const selectedRoom = findRoom(state.availableRooms, action.payload.roomId)
    const selectedDevice = findDevice(selectedRoom.devices, action.payload.deviceId)

    let updatedRooms = [...state.rooms]
    updatedRooms = updatedRooms.map(room => {
        if (room.id === action.payload.roomId) {
            const updatedDevices = [...room.devices]
            updatedDevices.push(selectedDevice)
            return new Room(
                room.id,
                room.name,
                room.imageSource,
                updatedDevices
            )
        }
        return room
    })

    return {
        ...state,
        rooms: updatedRooms
    }
}

const removeDevice = (state, action) => {
    let updatedRooms = [...state.rooms]
    updatedRooms = updatedRooms.map(room => {
        if (room.id === action.payload.roomId) {
            const updatedDevices = room.devices.filter(device =>
                device.id != action.payload.deviceId
            )
            return new Room(
                room.id,
                room.name,
                room.imageSource,
                updatedDevices
            )
        }
        return room
    })

    return {
        ...state,
        rooms: updatedRooms
    }
}

const roomReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return updateData(state, action)
        case TOGGLE_FAV:
            return toggleFavorite(state, action)
        case UPDATE_DEVICE_VALUE_TO_STORE:
            return updateDevicesValue(state, action)
        case REMOVE_DEVICE:
            return removeDevice(state, action)
        case ADD_DEVICE:
            return addDevice(state, action)
        default:
            return state
    }
}

export default roomReducers