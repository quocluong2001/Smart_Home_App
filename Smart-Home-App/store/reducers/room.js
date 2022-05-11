import { createReducer } from "@reduxjs/toolkit";

import { addDevice } from "../actions/addDevice";
import { removeDevice } from "../actions/removeDevice";
import { toggleFav } from "../actions/toggleFavRoom";
import getAllDevices from "../thunk-functions/getAllDevices";
import getAllRooms from "../thunk-functions/getAllRooms";
import updateDevicesValue from "../thunk-functions/updateDevicesValue";
import { updateDevicesValueToStore } from "../actions/updateDevicesValueToStore";

import Room from "../../models/room";

const initialState = {
  availableRooms: [],
  rooms: [],
  favoriteRooms: [],
};

// const removeFavoriteRoom = (favoriteRooms, item) => {
//   return favoriteRooms.filter((room) => room.id != item.id);
// };

// const addFavoriteRoom = (favoriteRooms, item) => {
//   const updatedArray = [...favoriteRooms];
//   updatedArray.unshift(item);
//   return updatedArray;
// };

const updateDataHandler = (state, action) => {
  //   return {
  //     ...state,
  //     availableRooms: action.payload,
  //     rooms: action.payload,
  //     favoriteRooms: [],
  //   };
  state.availableRooms = action.payload;
  state.rooms = action.payload;
  state.favoriteRooms = [];
};

const toggleFavoriteHandler = (state, action) => {
  const favoriteRoom = state.favoriteRooms.find(
    (room) => room.id === action.payload
  );

  if (favoriteRoom != undefined) {
    state.favoriteRooms = state.favoriteRooms.filter(
      (room) => room.id != action.payload
    );
  } else {
    const room = state.rooms.find((room) => room.id === action.payload);
    state.favoriteRooms.unshift(room);
  }
};

const updateDevicesValueHandler = (state, action) => {
  //   let updatedRooms = [...state.availableRooms];
  //   updatedRooms = updatedRooms.map((room) => {
  //     if (room.id === action.payload.roomId) {
  //       const updatedDevices = room.devices.map((device) => {
  //         if (device.id === action.payload.deviceId) {
  //           return new Device(device.id, device.type, device.name, {
  //             ...device.payload,
  //             value: action.payload.value,
  //           });
  //         }
  //         return device;
  //       });
  //       return new Room(room.id, room.name, room.imageSource, updatedDevices);
  //     }
  //     return room;
  //   });

  //   return {
  //     ...state,
  //     availableRooms: updatedRooms,
  //     rooms: updatedRooms,
  //   };
  state.availableRooms.forEach((room) => {
    if (room.id === action.payload.roomId) {
      room.devices.forEach((device) => {
        if (device.id === action.payload.deviceId) {
          device.payload.value = action.payload.value;
        }
      });
    }
  });
};

const findRoom = (rooms, roomId) => {
  return rooms.find((room) => room.id === roomId);
};

const findDevice = (devices, deviceId) => {
  return devices.find((device) => device.id === deviceId);
};

const addDeviceHandler = (state, action) => {
  const availableRoom = findRoom(state.availableRooms, action.payload.roomId);
  const availableDevice = findDevice(
    availableRoom.devices,
    action.payload.deviceId
  );

  state.rooms = state.rooms.map((room) => {
    if (room.id === action.payload.roomId) {
      room.devices.push(availableDevice);

      return room;
    }
    return room;
  });

  //   let updatedRooms = [...state.rooms];
  //   updatedRooms = updatedRooms.map((room) => {
  //     if (room.id === action.payload.roomId) {
  //       const updatedDevices = [...room.devices];
  //       updatedDevices.push(selectedDevice);
  //       return new Room(room.id, room.name, room.imageSource, availableDevice);
  //     }
  //     return room;
  //   });

  //   return {
  //     ...state,
  //     rooms: updatedRooms,
  //   };
};

const removeDeviceHandler = (state, action) => {
  state.rooms = state.rooms.map((room) => {
    if (room.id === action.payload.roomId) {
      const updatedDevices = room.devices.filter(
        (device) => device.id != action.payload.deviceId
      );
      return new Room(room.id, room.name, room.imageSource, updatedDevices);
    }
    return room;
  });
};

// const roomReducers = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_DATA:
//       return updateDataHandler(state, action);
//     case TOGGLE_FAV:
//       return toggleFavoriteHandler(state, action);
//     case UPDATE_DEVICE_VALUE_TO_STORE:
//       return updateDevicesValue(state, action);
//     case REMOVE_DEVICE:
//       return removeDevice(state, action);
//     case ADD_DEVICE:
//       return addDevice(state, action);
//     default:
//       return state;
//   }
// };

const roomReducers = createReducer(initialState, (builder) => {
  builder
    .addCase(toggleFav, (state, action) => {
      toggleFavoriteHandler(state, action);
    })
    .addCase(addDevice, (state, action) => {
      addDeviceHandler(state, action);
    })
    .addCase(removeDevice, (state, action) => {
      removeDeviceHandler(state, action);
    })
    .addCase(getAllDevices.fulfilled, (state, action) => {
      updateDataHandler(state, action);
    })
    .addCase(getAllRooms.fulfilled, (state, action) => {
      updateDataHandler(state, action);
    })
    .addCase(updateDevicesValueToStore, (state, action) => {
      updateDevicesValueHandler(state, action);
    })
    .addCase(updateDevicesValue.fulfilled, (state, action) => {
      updateDevicesValueHandler(state, action);
    });
});

export default roomReducers;
