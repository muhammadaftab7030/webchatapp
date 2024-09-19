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
        style={styles.chatBody}
        >
          <div
          style={styles.messageContainer}
          >
            {selectedChat.messages.map((msgGroup, index) => (
          <div key={index} style={styles.messageGroup}>
            {msgGroup.msg.map((msg, idx) => (
              <div key={idx} style={styles.messageWrapper}>
                <span>{msg}</span>
                <div style={styles.time}>
                  <span>{msgGroup.createdAt[idx]}</span>
                </div>
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
  height: '100vh',
  backgroundColor: '#EFEAE2',
  flexDirection: 'column',
  flex: '3',
  }, 
  chatBody: {
    flex: '1', 
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    padding: '10px',
  },
  messageContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
  },
  messageGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end', 
    marginBottom: '15px',
    paddingBottom: '10px',
  },
  messageWrapper: {
    padding: '10px',
    marginBottom: '5px',
    borderRadius: '10px',
    width: 'auto', 
    backgroundColor: 'white',
    display: 'block', 
    maxWidth: '70%', 
    wordWrap: 'break-word',
  },
  time: {
    fontSize: '0.8rem',
    color: '#888',
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '5px',
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
