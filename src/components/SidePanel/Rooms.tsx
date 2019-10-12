import React, { FC } from 'react';

interface IRoomsProps {
  [key: string]: any;
}

const Rooms: FC<IRoomsProps> = () => {
  return (
    <div>
      <ul>
        <li>room1</li>
        <li>room2</li>
      </ul>
    </div>
  );
};

export default Rooms;
