import React, { useEffect } from "react";
import ChatForm from "../ChatForm";
import ChatList from "../ChatList";
import { init, subscribeChat, subscribeInitialMessages } from "../../socketApi";
import { MessageData, useChat } from "../../context/ChatContext";

const Container: React.FC = () => {
  const { setMessages } = useChat();

  useEffect(() => {
    init();
    subscribeInitialMessages((messages: MessageData[]) =>
      setMessages(messages)
    );
    subscribeChat((message: string) => {
      setMessages((prevState: MessageData[]) => [...prevState, { message }]);
    });
  }, [setMessages]);
  return (
    <div className="App">
      <ChatList />
      <ChatForm />
    </div>
  );
};

export default Container;
