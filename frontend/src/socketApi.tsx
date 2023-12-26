import io, { Socket } from "socket.io-client";
import { MessageData } from "./context/ChatContext";

let socket: Socket;

export const init = () => {
  console.log("Connectingg..");

  socket = io("http://localhost:3000", {
    transports: ["websocket"],
  });
  socket.on("connect", () => console.log("Connected!"));
};

export const sendMessage = (message: string) => {
  if (socket) socket.emit("new-message", message);
};

export const subscribeChat = (cb: (message: string) => void): void => {
  if (!socket) return;
  socket.on("receive-message", (message: string) => {
    console.log("Yeni mesaj var", message);
    cb(message);
  });
};

export const subscribeInitialMessages = (
  cb: (messages: MessageData[]) => void
) => {
  if (!socket) return;
  socket.on("message-list", (messages: MessageData[]) => {
    console.log("Initial", messages);
    cb(messages);
  });
};
