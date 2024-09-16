import React from 'react'

export default function ChatHeader({profile_img,userName}) {
  return (
    <div 
    style={styles.header}
    >
    <div
    style={{
    width: '4%',
    height: '4%',
    marginLeft: '10px',
    borderRadius: '50%',
    }}
    >
        <img style={{
            width: '100%',
    height: '100%',
    borderRadius: '50%',
        }} src={profile_img} alt="" />
    </div>
    <div
    style={{
        flex: '10',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '6px',
    alignItems: 'flex-start',
    }}
    >
    <b>{userName}</b>
    </div>
    <div>

    </div>
    </div>
  )
}

const styles= {
    header:{
        display: 'flex',
        paddingTop: '10px',
        paddingBottom: '10px',
        backgroundColor: '#f0f0f0',
    }
}
