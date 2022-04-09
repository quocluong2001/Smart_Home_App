import React from 'react';
import io from 'socket.io-client';

export const socket = io.connect(`http://192.168.1.100:5000/api/socket`);
export const SocketContext = React.createContext();