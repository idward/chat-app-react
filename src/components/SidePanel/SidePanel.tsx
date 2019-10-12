import React, { FC } from 'react';
import './SidePanel.css';
import Rooms from './Rooms';
import User from './User';

interface ISidePanelProps {
  [key: string]: any;
}

const SidePanel: FC<ISidePanelProps> = () => {
  return (
    <div className="SidePanel">
      <div>ChatApp header</div>
      <User />
      <Rooms />
    </div>
  );
};

export default SidePanel;
