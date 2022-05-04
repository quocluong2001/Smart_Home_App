import axios from "axios";

import Room from "../../models/room";
import { Device } from "../../models/device";
import { fetchData } from "../actions/fetchData";

const getAllRooms = () => async (dispatch, getState) => {
  const roomsPromise = await axios.get("http://192.168.1.100:5000/api/rooms");
  const rooms = roomsPromise.data.map((room) => {
    return new Room(room.room_id, room.name, room.image, []);
  });

  //! for test only
  rooms.push(
    new Room("2", "Livingroom", "https://i.ibb.co/0BRv395/Livingroom.png", [
      new Device("l2", "light", "Light 1", { value: 0 }),
      new Device("d2", "door", "Door 1", { value: 0 }),
      new Device("f2", "fan", "Fan 1", { value: 0 }),
      new Device("temp2", "temp sensor", "sensor 1", {
        value: "32",
        unit: "Celsius",
      }),
      new Device("light2", "light sensor", "sensor 2", {
        value: "500",
        unit: "Lux",
      }),
    ]),
    new Room("3", "Kitchen", "https://i.ibb.co/L51DVkK/Kitchen.png", [
      new Device("l3", "light", "Light 1", { value: 0 }),
      new Device("d3", "door", "Door 1", { value: 0 }),
      new Device("f3", "fan", "Fan 1", { value: 0 }),
      new Device("temp3", "temp sensor", "sensor 1", {
        value: "32",
        unit: "Celsius",
      }),
      new Device("light3", "light sensor", "sensor 2", {
        value: "500",
        unit: "Lux",
      }),
    ]),
    new Room("4", "Bathroom", "https://i.ibb.co/JvgtCsj/Bathroom.png", [
      new Device("l4", "light", "Light 1", { value: 0 }),
      new Device("d4", "door", "Door 1", { value: 0 }),
      new Device("f4", "fan", "Fan 1", { value: 0 }),
      new Device("temp4", "temp sensor", "sensor 1", {
        value: "32",
        unit: "Celsius",
      }),
      new Device("light4", "light sensor", "sensor 2", {
        value: "500",
        unit: "Lux",
      }),
    ]),
    new Room("5", "Garden", "https://i.ibb.co/C65ptPc/Garden.png", [
      new Device("l5", "light", "Light 1", { value: 0 }),
      new Device("d5", "door", "Door 1", { value: 0 }),
      new Device("f5", "fan", "Fan 1", { value: 0 }),
      new Device("temp5", "temp sensor", "sensor 1", {
        value: "32",
        unit: "Celsius",
      }),
      new Device("light5", "light sensor", "sensor 2", {
        value: "500",
        unit: "Lux",
      }),
    ]),
    new Room("6", "Balcony", "https://i.ibb.co/W058FMm/Balcony.png", [
      new Device("l6", "light", "Light 1", { value: 0 }),
      new Device("d6", "door", "Door 1", { value: 0 }),
      new Device("f6", "fan", "Fan 1", { value: 0 }),
      new Device("temp6", "temp sensor", "sensor 1", {
        value: "32",
        unit: "Celsius",
      }),
      new Device("light6", "light sensor", "sensor 2", {
        value: "500",
        unit: "Lux",
      }),
    ])
  );

  dispatch(fetchData(rooms));
};

export default getAllRooms;
