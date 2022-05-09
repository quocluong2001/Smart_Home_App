import { createAction } from "@reduxjs/toolkit";

// import { TOGGLE_FAV } from "./actionType";

// export const toggleFav = (roomId) => {
//   return {
//     type: TOGGLE_FAV,
//     payload: roomId,
//   };
// };

export const toggleFav = createAction("TOGGLE_FAV", (roomId) => {
  return {
    payload: roomId,
  };
});
