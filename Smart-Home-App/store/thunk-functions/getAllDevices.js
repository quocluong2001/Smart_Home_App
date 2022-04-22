import axios from "axios";

import { Device } from "../../models/device";
import { fetchData } from "../actions/fetchData";

const getAllDevices = () => async (dispatch, getState) => {
  const roomsInfo = getState().rooms.availableRooms;
  for (room of roomsInfo) {
    const devicesPromise = await axios.get(
      `http://192.168.1.100:5000/api/room/${room.id}/devices`
    );

    const devicesData = devicesPromise.data.map((device) => {
      return new Device(device.device_id, device.description, device.name, {
        ...device.data[0],
        unit:
          device.description === "temp sensor"
            ? "Celsius"
            : device.description === "light sensor"
            ? "Lux"
            : "",
        value:
          device.description === "temp sensor" ||
          device.description === "light sensor"
            ? device.data[0].value
            : (device.description === "light" &&
                device.data[0].value === "0") ||
              (device.description === "fan" && device.data[0].value === "2") ||
              (device.description === "door" && device.data[0].value === "4")
            ? false
            : true,
      });
    });
    room.devices = devicesData;

    //! for test only
    break;
  }

  dispatch(fetchData(roomsInfo));

  console.log("Get rooms data successfully");
};

export default getAllDevices;
