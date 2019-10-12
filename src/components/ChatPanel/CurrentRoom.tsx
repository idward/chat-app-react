import React, { FC } from 'react';
import { Room } from 'src/types';

interface ICurrentRoomProps {
  currentRoom: Room;
}

const CurrentRoom: FC<ICurrentRoomProps> = ({ currentRoom }) => {
  return <div>{currentRoom.name}</div>;
};

export default CurrentRoom;
