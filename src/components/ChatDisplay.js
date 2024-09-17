import React from 'react';
import { useChatContext } from '../contextApi/chatContext';
import ChatHeader from './ChatHeader';


function ChatDisplay() {
  const { state } = useChatContext(); // Access context state
  const selectedChat = state.selectedChat;

  return (
    <div style={styles.Container}>
      {selectedChat ? (
        <>
        <ChatHeader userName = {selectedChat.user_name} profile_img = {selectedChat.profile_image} />
        <div
        >
          <div
          >
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
        </>
        
      ) : (
        <div
        style={styles.defaultMessage}
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
    position: 'relative',
  display: 'flex',
  maxHeight: '100vh',
  backgroundColor: '#EFEAE2',
  flexDirection: 'column',
  flex: '3',
  }, 
  defaultMessage: {
    display: 'flex',
    height: '100vh',
    flex: '1',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default ChatDisplay;
