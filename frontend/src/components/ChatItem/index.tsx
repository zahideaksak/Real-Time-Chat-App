import React from "react";
import styles from "../styles.module.css";
import { MessageData } from "../../context/ChatContext";

type IProps = {
  item: MessageData;
};

const ChatItem: React.FC<IProps> = ({ item }) => {
  return (
    <div className={`${styles.chatItem} ${item.fromMe ? styles.right : ""}`}>
      {item.message}
    </div>
  );
};

export default ChatItem;
