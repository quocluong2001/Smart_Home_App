import { TOGGLE_FAV } from "../actions/actionType"
import { TOGGLE_ON_OFF } from "../actions/actionType"
import { ROOMS } from "../../data/testData"
import Device from "../../models/device"
import Room from "../../models/room"

const initialState = {
    rooms: ROOMS,
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

const toggleOnOff = (state, action) => {
    const roomList = [...state.rooms]
    const updatedRooms = roomList.map(room => {
        if (room.id === action.payload.roomId) {
            const updatedDevices = room.devices.map(device => {
                if (device.id === action.payload.deviceId) {
                    return new Device(
                        device.id,
                        device.type,
                        device.name,
                        device.status ? false : true,
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
        rooms: updatedRooms,
    }
}

const roomReducers = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAV:
            return toggleFavorite(state, action)
        case TOGGLE_ON_OFF:
            return toggleOnOff(state, action)
        default:
            return state
    }
}

export default roomReducers