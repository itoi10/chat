import React from 'react'
import List from '@mui/material/List';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Chat } from './index'
import { ChatsContent } from '../App'

interface Props {
  chats: ChatsContent[]
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    "chats": {
      height: 384,
      padding: "0",
      // 高さを超えた時
      overflow: "auto"
    }
  })
);

const Chats:React.FC<Props> = ({chats}) => {
  const classes = useStyles()

  return(
    <List className={classes.chats}>
      {chats.map((chat, index) => (
        <Chat chat={chat} key={index.toString()} />
      ))}
    </List>
  )
}

export default Chats
