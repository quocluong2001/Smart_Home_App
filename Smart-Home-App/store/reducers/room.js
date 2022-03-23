import { TOGGLE_FAV } from "../actions/actionType"
import { ROOMS } from "../../data/testData"

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

const roomReducers = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAV:
            return toggleFavorite(state, action)
        default:
            return state
    }
}

export default roomReducers