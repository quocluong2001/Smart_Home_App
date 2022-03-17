import Room from '../models/room'
import Device from '../models/device'

export const ROOMS = [
    new Room('1', 'Bedroom', require('../assets/images/Bedroom.png')),
    new Room('2', 'Livingroom', require('../assets/images/Livingroom.png')),
    new Room('3', 'Kitchen', require('../assets/images/Kitchen.png')),
    new Room('4', 'Bathroom', require('../assets/images/Bathroom.png')),
    new Room('5', 'Garden', require('../assets/images/Garden.png')),
    new Room('6', 'Balcony', require('../assets/images/Balcony.png'))
]

export const DEVICES = [
    new Device('1', 'light', 'Light 1'),
    new Device('1', 'door', 'Door 1'),
    new Device('1', 'fan', 'Fan 1'),
    new Device('2', 'light', 'Light 1'),
    new Device('2', 'door', 'Door 1'),
    new Device('2', 'fan', 'Fan 1'),
    new Device('3', 'light', 'Light 1'),
    new Device('3', 'door', 'Door 1'),
    new Device('3', 'fan', 'Fan 1'),
    new Device('4', 'light', 'Light 1'),
    new Device('4', 'door', 'Door 1'),
    new Device('4', 'fan', 'Fan 1'),
    new Device('5', 'light', 'Light 1'),
    new Device('5', 'door', 'Door 1'),
    new Device('5', 'fan', 'Fan 1'),
    new Device('6', 'light', 'Light 1'),
    new Device('6', 'door', 'Door 1'),
    new Device('6', 'fan', 'Fan 1'),
]