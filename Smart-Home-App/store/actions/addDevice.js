import { createAction } from "@reduxjs/toolkit";

// import { ADD_DEVICE } from "./actionType";

// export const addDevice = (roomId, deviceId) => {
//   return {
//     type: ADD_DEVICE,
//     payload: {
//       roomId: roomId,
//       deviceId: deviceId,
//     },
//   };
// };

export const addDevice = createAction("ADD_DEVICE", (roomId, deviceId) => {
  return {
    payload: {
      roomId: roomId,
      deviceId: deviceId,
    },
  };
});
