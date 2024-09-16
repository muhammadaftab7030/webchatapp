import React from 'react';
import { useChatContext } from '../contextApi/chatContext';
import ChatHeader from './ChatHeader';


function ChatDisplay() {
  const { state } = useChatContext(); // Access context state
  const selectedChat = state.selectedChat;

  return (
    <div style={styles.Container}>
      {selectedChat ? (
        <div>
        <ChatHeader userName = {selectedChat.user_name} profile_img = {selectedChat.profile_image} />
          <div>
            {selectedChat.messages.map((msgGroup, index) => (
              <div key={index}>
                {msgGroup.msg.map((msg, idx) => (
                  <div key={idx}>
                    <span>{msg}</span>
                  </div>
                ))}
                {msgGroup.createdAt.map((time, idx) => (
                  <div key={idx}>
                    <span>{time}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div
        style={{
          display: 'flex',
          height: '100vh',
          flex: '1',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        >
          <h1>Select a chat to view messages</h1>
        </div>
        
      )}
    </div>
  );
}

// Styles
const styles = {
  Container:{
  display: 'flex',
  backgroundColor: '#EFEAE2',
  flexDirection: 'column',
  flex: '3',
  }
}

export default ChatDisplay;
