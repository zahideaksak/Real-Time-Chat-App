import "./App.css";
import Container from "./components/Container";
import { ChatProvider } from "./context/ChatContext";

const App: React.FC = () => {
  return (
    <ChatProvider>
      <Container />
    </ChatProvider>
  );
};

export default App;
