import { useUser } from "./contexts/UserContext";
import { ChatPage } from "./pages/ChatPage";
import { JoinPage } from "./pages/JoinPage/JoinPage.component";

function App() {
  const { joined } = useUser();

  return joined ? <ChatPage /> : <JoinPage />;
}

export default App;
