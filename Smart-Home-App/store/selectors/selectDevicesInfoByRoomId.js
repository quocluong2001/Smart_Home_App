import { createSelector } from "reselect";

const findRoom = (rooms, roomId) => {
  return rooms.find((room) => room.id === roomId);
};

const filterDevicesByType = (devices, type) => {
  return devices.filter((device) => device.type === type);
};

export const selectDevicesInfoByType = (roomId, deviceType) =>
  createSelector(
    //* input selector
    (state) => state.rooms.rooms,
    //* output selector
    (rooms) => {
      const selectedRoom = findRoom(rooms, roomId);
      return filterDevicesByType(selectedRoom.devices, deviceType);
    }
  );

export const selectDeviceInfoByDeviceId = (roomId, deviceId) =>
  createSelector(
    //*input selector
    (state) => state.rooms.rooms,
    //*output selector
    (rooms) => {
      const selectedRoom = rooms.find((room) => room.id === roomId);
      return selectedRoom.devices.find((device) => device.id === deviceId);
    }
  );

export const selectNonDisplayedDevicesInfoByType = (roomId, deviceType) =>
  createSelector(
    //* input selector
    (state) => state.rooms.availableRooms,
    (state) => state.rooms.rooms,
    //* output selector
    (availableRooms, rooms) => {
      //* find room
      const selectedAvailableRoom = findRoom(availableRooms, roomId);
      const selectedRoom = findRoom(rooms, roomId);

      //* filter devices' type
      const selectedAvailableDevicesInfo = filterDevicesByType(
        selectedAvailableRoom.devices,
        deviceType
      );
      const selectedDevicesInfo = filterDevicesByType(
        selectedRoom.devices,
        deviceType
      );

      //* filter devices which are not displayed
      return selectedAvailableDevicesInfo.filter((availableDevice) => {
        const isAdded = selectedDevicesInfo.some(
          (device) => device.id === availableDevice.id
        );
        return !isAdded;
      });
    }
  );
