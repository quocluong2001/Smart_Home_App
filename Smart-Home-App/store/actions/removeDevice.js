import { createAction } from "@reduxjs/toolkit";

// import { REMOVE_DEVICE } from "./actionType";

// export const removeDevice = (roomId, deviceId) => {
//   return {
//     type: REMOVE_DEVICE,
//     payload: {
//       roomId: roomId,
//       deviceId: deviceId,
//     },
//   };
// };

export const removeDevice = createAction(
  "REMOVE_DEVICE",
  (roomId, deviceId) => {
    return {
      payload: {
        roomId: roomId,
        deviceId: deviceId,
      },
    };
  }
);
