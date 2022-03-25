import { TOGGLE_FAV } from "./actionType"

export const toggleFav = roomId => {
    return {
        type: TOGGLE_FAV,
        payload: roomId
    }
}