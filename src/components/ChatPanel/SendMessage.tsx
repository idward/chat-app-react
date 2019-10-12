import React, { FC, RefObject } from 'react';
import './SendMessage.css'

interface ISendMessageProps {
  inputMessageRef: RefObject<HTMLInputElement>;
  sendMessage(): void;
}

const SendMessage: FC<ISendMessageProps> = ({ inputMessageRef, sendMessage }) => {
  return (
    <div className="SendMessage">
      <input
        type="text"
        placeholder="insert message"
        ref={inputMessageRef}
      />
      <button onClick={sendMessage}>Send message</button>
    </div>
  );
};

export default SendMessage;
