import React, { FC, useState } from 'react';
import SidePanel from './SidePanel/SidePanel';
import ChatPanel from './ChatPanel/ChatPanel';
import './ChatApp.css';
import { User, Room } from '../types';
import { CurrentRoomContext, UserContext } from '../context';

interface IAppProps {
  [key: string]: any;
}

const defaultUser: User = {
  uid: 'id nathan',
  displayName: 'Nathan',
  photoURL: '',
};

const defaultCurrentRoom: Room = {
  id: 'id1',
  name: 'room1',
  description: 'room1 description',
};

const ChatApp: FC<IAppProps> = () => {
  const [user, setUser] = useState(defaultUser);
  const [currentRoom, setCurrentRoom] = useState(defaultCurrentRoom);

  return (
    <div className="ChatApp">
      <UserContext.Provider value={{ user, setUser }}>
        <CurrentRoomContext.Provider value={{ currentRoom, setCurrentRoom }}>
          <SidePanel />
          <ChatPanel />
        </CurrentRoomContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default ChatApp;
