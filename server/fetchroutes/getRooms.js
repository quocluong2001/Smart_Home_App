const axios = require('axios');
const Room = require('../models/Room');

const getRooms = async () => {
  try {
    const response = await axios.get(
      'https://io.adafruit.com/api/v2/hohoanghuy2001/groups'
    );

    const responseRooms = response.data;

    if (responseRooms.length !== 0) {
      responseRooms.map(async (eachRoom) => {
        // console.log(eachRoom);
        const { key, id, name, description } = eachRoom;
        const rooms = await Room.find({ key: key });
        if (rooms.length === 0) {
          const newRoom = new Room({
            key: key,
            room_id: id,
            name: 'Bedroom',
            image: name === 'Balcony'
              ? 'https://i.ibb.co/W058FMm/Balcony.png'
              : name === 'Livingroom'
                ? 'https://i.ibb.co/0BRv395/Livingroom.png'
                : name === 'Kitchen'
                  ? 'https://i.ibb.co/L51DVkK/Kitchen.png'
                  : name === 'Bathroom'
                    ? 'https://i.ibb.co/JvgtCsj/Bathroom.png'
                    : name === 'Garden'
                      ? 'https://i.ibb.co/C65ptPc/Garden.png'
                      : 'https://i.ibb.co/BKtKqst/Bedroom.png',
            description: description == null ? '' : description,
          });
          await newRoom.save();
        }
      });
      return Promise.resolve(true);
    }
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = getRooms;
