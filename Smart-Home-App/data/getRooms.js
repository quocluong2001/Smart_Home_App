import axios from 'axios'

const getRooms = async () => {
    const rooms = await axios.get('http://192.168.1.100:5000/api/rooms')
    console.log(rooms.data)
    return rooms.data
}

export default getRooms