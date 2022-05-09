import { FETCH_DATA } from "./actionType";

export const fetchData = (roomsData) => {
  return {
    type: FETCH_DATA,
    payload: roomsData,
  };
};
