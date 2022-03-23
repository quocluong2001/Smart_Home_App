const axios = require('axios');
const Room = require('../models/Room');

const getRooms = async () => {
  try {
    const response = await axios.get(
      'https://io.adafruit.com/api/v2/andrewquang/groups'
    );

    const responseRooms = response.data;

    responseRooms.map(async (eachRoom) => {
      if (!eachRoom.name.includes('Default')) {
        // console.log(eachRoom);
        const { key, id, name, description } = eachRoom;
        const rooms = await Room.find({ key: key });
        if (rooms.length === 0) {
          const newRoom = new Room({
            key: key,
            room_id: id,
            name: name,
            image:
              name == 'Livingroom'
                ? 'https://i.ibb.co/YZ0pKzj/livingroom.jpg'
                : name == 'Kitchen'
                ? 'https://i.ibb.co/hfKKFqZ/kitchen.jpg'
                : name == 'Bedroom'
                ? 'https://i.ibb.co/wrHDt4W/bedroom.jpg'
                : 'https://i.ibb.co/Df9cpLf/bathroom.jpg',
            description: description == null ? '' : description,
          });
          await newRoom.save();
        }
      }
    });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = getRooms;
