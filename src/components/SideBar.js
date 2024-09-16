import React, { useState } from 'react'
import users from '../MockApiData';
import { setSelectedChat, useChatContext } from '../contextApi/chatContext';

function SideBar() {
  const [search, setSearch] = useState('');
  const [showClearIcon, setShowClearIcon] = useState(false)
  const [selectedChatId, setSelectedChatId] = useState(null);
  const { dispatch } = useChatContext(); // Access dispatch function
  const handleSearch = (e)=>{
      setSearch(e.target.value)
      e.target.value !== '' ? setShowClearIcon(true) : setShowClearIcon(false) 
  }
  const handleClearSearch = ()=>{
    setSearch('')
    setShowClearIcon(false)
  }
  const handleChatSelected = (id) => {
    setSelectedChatId(id);
    const selectedChat = users.find(user => user.id === id); // Find selected chat data
    dispatch(setSelectedChat(selectedChat)); // Dispatch selected chat data
  };
  // Filter the users based on the search query in the user_name field
  const filteredUsers = users.filter((user) => {
    return user.user_name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div style={styles.Container}>
    <h3>Chats</h3>
    {/*------------- Search --------- */}
    <div style={styles.searchWrapper}>
    <img
          src={require('../assets/images/icons8-magnifying-glass-24.png')}
          alt="search-icon"
          width={17}
          height={17}
          style={styles.searchIcon}
        />
        <input
          style={styles.searchInput}
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search"
        />
        {
          showClearIcon ? 
          <button 
        style={styles.crossBtn}
        onClick={handleClearSearch}
        >
        <img
          src={require('../assets/images/icons8-cross-24.png')}
          alt="search-icon"
          width={20}
          height={20}
        />
        </button> : 
        null
        }        
      </div>
      {/*------------- Chat List --------- */}
      <div
      style={styles.chatListContainer}
      >
      {
        filteredUsers.map((elem, key)=>{
          return (
            <button
            key={key}
            style={{ 
            ...styles.chatViewBtn, 
            backgroundColor: selectedChatId === elem.id ? '#f0f0f0' : '#ffff', 
          }}
            onClick={() => handleChatSelected(elem.id)}
            >
            <div
            style={styles.chatsList}
            >
            <div style={styles.profile_img_container}>
            <img style={styles.profile_img} src={elem.profile_image} />
            </div>
              <div
              style={styles.chatContentContainer}
              ><b>{elem.user_name}</b>
              {elem.messages.map((msgs,index)=>{
                return(
                  <div
                  key={index}
                  >
                  <span style={styles.contentFontSize}>{msgs.msg[msgs.msg.length - 1]}</span>
                  </div>
                )
              })}
              </div>
              <div
              style={styles.chatTimeContainer}
              >
              {elem.messages.map((msgs,index)=>{
                return(
                  <div
                  key={index}
                  >
                  <span style={styles.contentFontSize}>{msgs.createdAt[msgs.createdAt.length - 1]}</span>
                  </div>
                )
              })}
              </div>
            </div>
            <hr />
            </button>
          )
        })
      }
      </div>
    </div>
  )
}

// Styles
const styles = {
  Container:{
  backgroundColor: '#ffff', /* lightGray equivalent */
  display: 'flex',
  paddingTop: '10px',
  paddingLeft: '5px',
  paddingRight: '5px',
  flexDirection: 'column',
  maxHeight: '100vh',  
  flex: '1',
  },
  searchWrapper:{
    height: '6%',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '6px',
    backgroundColor: '#f0f0f0',
    marginBottom: '20px',
  },
  searchInput:{
    borderWidth: 0,
    width: '100%',
    outline: 'none',
    backgroundColor: '#f0f0f0',
  },
  searchIcon:{
    marginRight: '7px',
    marginLeft: '7px',
  },
  crossBtn:{
    border: 'none',
    paddingTop: 0,
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 0,
  },
  profile_img_container:{
    flex: '1',
    width: '20%',
    height: '20%',
    borderRadius: '50%',
  },
  profile_img:{
    width: '100%',
    height: '100%',
    borderRadius: '50%',
  },
  chatListContainer:{
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    overflowY: 'auto',
    scrollbarWidth: 'thin', 
    scrollbarColor: ' #f0f0f0',
  },
  chatViewBtn:{
    border: 'none',
  },
  chatsList: {
    display: 'flex',
    flexDirection: 'row',
  }, 
  chatContentContainer: {
    flex: '4',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '6px',
    alignItems: 'flex-start',
  },
  chatTimeContainer:{
    flex: '1',
  },
  contentFontSize:{
    fontSize: '0.8rem',
  }
}

export default SideBar