import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { ChatsContent } from "../App";

interface Props {
  chat: ChatsContent;
}

const Chat: React.FC<Props> = ({ chat }) => {
  const isQuestion: boolean = chat.type === "question";
  const classes = isQuestion ? "p-chat__row" : "p-chat__reverse";

  return (
    <ListItem className={classes}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="Q" src="/static/images/avatar/1.jpg" />
        ) : (
          <Avatar alt="A" src="/static/images/avatar/2.jpg" />
        )}
      </ListItemAvatar>
      {isQuestion ? (
        <div className="p-chat__bubble_q">{chat.text}</div>
      ) : (
        <div className="p-chat__bubble_a">{chat.text}</div>
      )}
    </ListItem>
  );
};

export default Chat;
