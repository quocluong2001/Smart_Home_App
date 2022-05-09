import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { updateDevicesValueToStore } from "../actions/updateDevicesValueToStore";
import formatData from "../../utils/formatData";

// const updateDevicesValue = (roomId, deviceId) => async (dispatch, getState) => {
//   const selectedRoom = getState().rooms.availableRooms.find(
//     (room) => room.id === roomId
//   );
//   const selectedDevice = selectedRoom.devices.find(
//     (device) => device.id === deviceId
//   );

//   const body = {
//     value:
//       selectedDevice.type === "light" && selectedDevice.payload.value === true
//         ? 0
//         : selectedDevice.type === "light" &&
//           selectedDevice.payload.value === false
//         ? 1
//         : selectedDevice.type === "fan" && selectedDevice.payload.value === true
//         ? 2
//         : selectedDevice.type === "fan" &&
//           selectedDevice.payload.value === false
//         ? 3
//         : selectedDevice.type === "door" &&
//           selectedDevice.payload.value === true
//         ? 4
//         : 5,
//   };

//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   await axios
//     .post(`http://192.168.1.100:5000/api/device/${deviceId}/data`, body, config)
//     .then((response) => {
//       const updatedValue = formatData(selectedDevice.type, response.data);

//       dispatch(updateDevicesValueToStore(roomId, deviceId, updatedValue));
//     })
//     .catch((error) => {
//       console.log(error);
//       dispatch(
//         updateDevicesValueToStore(
//           roomId,
//           deviceId,
//           selectedDevice.payload.value
//         )
//       );
//     });
// };

const updateDevicesValue = createAsyncThunk(
  "UPDATE_DEVICES_VALUE",
  async (arg, thunkAPI) => {
    const selectedRoom = thunkAPI
      .getState()
      .rooms.availableRooms.find((room) => room.id === arg.roomId);

    const selectedDevice = selectedRoom.devices.find(
      (device) => device.id === arg.deviceId
    );

    const body = {
      value:
        selectedDevice.type === "light" && selectedDevice.payload.value === true
          ? 0
          : selectedDevice.type === "light" &&
            selectedDevice.payload.value === false
          ? 1
          : selectedDevice.type === "fan" &&
            selectedDevice.payload.value === true
          ? 2
          : selectedDevice.type === "fan" &&
            selectedDevice.payload.value === false
          ? 3
          : selectedDevice.type === "door" &&
            selectedDevice.payload.value === true
          ? 4
          : 5,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    return await axios
      .post(
        `http://192.168.1.100:5000/api/device/${arg.deviceId}/data`,
        body,
        config
      )
      .then((response) => {
        const updatedValue = formatData(selectedDevice.type, response.data);

        return thunkAPI.fulfillWithValue({
          roomId: arg.roomId,
          deviceId: arg.deviceId,
          value: updatedValue,
        });
      })
      .catch((error) => {
        return thunkAPI.rejectWithValue({
          roomId: arg.roomId,
          deviceId: arg.deviceId,
          value: selectedDevice.payload.value,
          error: error,
        });
      });
  }
);

export default updateDevicesValue;
