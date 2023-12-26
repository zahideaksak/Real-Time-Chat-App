import { createContext, useState, ReactNode, useContext } from "react";

interface ChatProviderProps {
  children: ReactNode;
}

export interface MessageData {
  message: string;
  fromMe?: boolean;
}

interface ChatContextData {
  messages: MessageData[];
  setMessages: React.Dispatch<React.SetStateAction<MessageData[]>>;
}

const initialValues: ChatContextData = {
  messages: [],
  setMessages: (): void => {},
};

const ChatContext: React.Context<ChatContextData> =
  createContext<ChatContextData>(initialValues);

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<MessageData[]>([]);
  const values = {
    messages,
    setMessages,
  };
  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export const useChat = () => useContext(ChatContext);
