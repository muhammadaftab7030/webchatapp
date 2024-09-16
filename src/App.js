import './App.css';
import SafeAreaWrapper from './Plugins/SafeAreaWrapper';
import SideBar from './components/SideBar';
import ChatDisplay from './components/ChatDisplay';
import { ChatProvider } from './contextApi/chatContext';

function App() {
  return (
    <SafeAreaWrapper>
    <ChatProvider>
        <SideBar />
        <ChatDisplay />
      </ChatProvider>
    </SafeAreaWrapper>
  );
}

export default App;
