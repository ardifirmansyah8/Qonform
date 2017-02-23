import delay from './delay';

const rooms = [
  {
    id: 'mj',
    photo: 'mj.jpg',
    roomName: 'MJ Room'
  },
  {
    id: 'cynapse',
    photo: 'cynapse.jpg',
    roomName: 'Cynapse Room'
  },
  {
    id: 'praxis',
    photo: 'praxis.jpg',
    roomName: 'Praxis Room'
  },
  {
    id: 'servo',
    photo: 'servo.jpg',
    roomName: 'Servo Room'
  },
  {
    id: 'stylo',
    photo: 'stylo.jpg',
    roomName: 'Stylo Room'
  },
  {
    id: 'traversa',
    photo: 'traversa.jpg',
    roomName: 'Traversa Room'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
// const generateId = (room) => {
//   return room.roomName.toLowerCase();
// };

class RoomApi {
  static getAllRooms() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], rooms));
      }, delay);
    });
  }
}

export default RoomApi;
