import React from 'react';

export default function ChatHeader({ profile_img, userName }) {
  return (
    <div style={styles.header}>
      <div style={styles.profile_img_container}>
        <img style={styles.profile_img} src={profile_img} alt="" />
      </div>
      <div style={styles.userName}>
        <b>{userName}</b>
      </div>
    </div>
  );
}

const styles = {
  header: {
    display: 'flex',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    height: '60px', // Fixed height for the header
    alignItems: 'center', // Vertically align content
    borderBottom: '1px solid #ccc', // Optional: add a border
  },
  profile_img_container: {
    marginLeft: '10px',
    flex: '0.6',
    borderRadius: '50%',
  },
  profile_img: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
  },
  userName: {
    flex: '12',
    paddingLeft: '6px',
    alignItems: 'flex-start',
  }
};
