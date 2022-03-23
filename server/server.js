const { createServer } = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');

const express = require('./config/express.js');
const fetchInterval = require('./fetchroutes/fetch');
const connectDB = require('./config/db');

// Setting path
const PORT = process.env.PORT || 5000;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.of('/api/socket').on('connection', (socket) => {
  console.log('socket.io: User connected: ', socket.id);

  socket.on('disconnect', () => {
    console.log('socket.io: User disconnected: ', socket.id);
  });
});

httpServer.listen(PORT, () =>
  console.log(`Server now running on port ${PORT}!`)
);

connectDB();

const connection = mongoose.connection;

connection.once('open', () => {
  // Fetch api from Adafruit at Interval of 5 seconds
  fetchInterval;

  console.log('MongoDB database connected');

  console.log('Setting change streams');

  const DeviceChangeStream = connection.collection('devices').watch();

  DeviceChangeStream.on('change', (change) => {
    switch (change.operationType) {
      case 'insert':
        const device = {
          _id: change.fullDocument._id,
          key: change.fullDocument.key,
          name: change.fullDocument.name,
          description: change.fullDocument.description,
          data: change.fullDocument.data,
        };
        io.of('/api/socket').emit('newTest', device);
        break;

      case 'update':
        const updateFields = change.updateDescription.updatedFields;
        const updateData = updateFields.data;
        io.of('/api/socket').emit('updateTest', updateData);
        break;
      // case 'delete':
      //   io.of('/api/socket').emit('deletedTest', change.documentKey._id);
      //   break;
    }
  });
});

connection.on('error', (error) => console.log('Error: ' + error));

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }
