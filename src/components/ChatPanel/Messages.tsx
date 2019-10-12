import React, { FC } from 'react';
import { Message } from '../../types';
import './Messages.css';

interface IMessagesProps {
  messages: Message[];
}

const Messages: FC<IMessagesProps> = ({ messages }) => {
  return (
    <div className="Messages">
      <ul>
        {messages.map((message: Message, idx: number) => {
          return <li key={`message-${idx}`}>{message.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default Messages;
