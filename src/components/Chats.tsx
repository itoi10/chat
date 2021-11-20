import React from 'react'
import List from '@mui/material/List';
import { Chat } from './index'
import { ChatsContent } from '../App'


interface Props {
  chats: ChatsContent[]
}

const Chats:React.FC<Props> = ({chats}) => {

  return(
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {chats.map((chat, index) => (
        <Chat chat={chat} key={index.toString()} />
      ))}
    </List>
  )
}

export default Chats
