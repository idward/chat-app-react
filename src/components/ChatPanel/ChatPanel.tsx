import React, { FC, useState, useEffect, useRef, useContext } from 'react';
import firebase from '../../firebase';
import { Message } from '../../types';
import { CurrentRoomContext, UserContext } from '../../context';
import './ChatPanel.css';
// component
import CurrentRoom from './CurrentRoom';
import Messages from './Messages';
import SendMessage from './SendMessage';

interface IChatPanelProps {
  [key: string]: any;
}

const ChatPanel: FC<IChatPanelProps> = () => {
  const { currentRoom } = useContext<any>(CurrentRoomContext);
  const { user } = useContext<any>(UserContext);
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesRefFirbase = firebase.database().ref('messages');
  const inputMessageRef = useRef<any>();

  /**
   * 发送消息
   */
  const sendMessage = () => {
    const messageText = inputMessageRef.current.value;
    const messageId = messagesRefFirbase.push().key;
    const newMessage: Message = {
      id: messageId,
      text: messageText,
      roomId: currentRoom.id,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      user,
    };
    messagesRefFirbase.push(newMessage);
    inputMessageRef.current.value = '';
  };

  useEffect(() => {
    console.log('useEffect');
    // 加载数据
    messagesRefFirbase.on('value', data => {
      console.log(data.val());
      const datas: Message[] = Object.values(data.val() || []);
      const sortedDatas = datas.sort((a: Message, b: Message) => {
        return Number(a.timestamp) - Number(b.timestamp);
      });
      console.log(sortedDatas);
      setMessages(sortedDatas);
    });
    // // 监听添加事件
    // messagesRefFirbase.on('child_added', snap => {
    //   console.log(snap.val());
    //   const newMessages = [...messages, snap.val()];
    //   debugger;
    //   setMessages(newMessages);
    // });

    return () => {
      messagesRefFirbase.off();
    };
    /* eslint-disable-next-line */
  }, []);

  return (
    <div className="ChatPanel">
      <CurrentRoom currentRoom={currentRoom} />
      <Messages messages={messages} />
      <SendMessage inputMessageRef={inputMessageRef} sendMessage={sendMessage} />
    </div>
  );
};

export default ChatPanel;
