import React, { createContext, useReducer, useContext } from 'react';

// Initial State
const initialState = {
  selectedChat: null,
};

// Action Types
const SET_SELECTED_CHAT = 'SET_SELECTED_CHAT';

// Reducer
const chatReducer = (state, action) => {
  switch (action.type) {
    case SET_SELECTED_CHAT:
      return { ...state, selectedChat: action.payload };
    default:
      return state;
  }
};

// Context
const ChatContext = createContext();

// Provider Component
export const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

// Custom Hook to use context
export const useChatContext = () => useContext(ChatContext);

// Action Creators
export const setSelectedChat = (chat) => ({
  type: SET_SELECTED_CHAT,
  payload: chat,
});
