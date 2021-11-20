import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { ChatsContent } from '../App'


interface Props {
  chat: ChatsContent
}

const Chat:React.FC<Props> = ({chat}) => {

  return(
    <ListItem>
      <ListItemAvatar>
        <Avatar alt="icon" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <div className="p-chat__bubble">
        {chat.text}
      </div>
    </ListItem>
  )
}

export default Chat