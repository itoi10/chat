import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AnswersContent } from "../App";

interface Props {
  answer: AnswersContent;
  disabled: boolean;
  select: (answer: AnswersContent) => void;
}

// Material-UIデザインのカスタマイズ
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      backgroundColor: "#464646",
      color: "#fff",
      fontWeight: 600,
      margin: "0 .5em 8px .5em",
      "&:hover": {
        backgroundColor: "#464646",
        color: "#FFF",
      },
      height: "20%",
      fontSize: "0.95em",
    },
  })
);

const Answer: React.FC<Props> = ({ answer, disabled, select }) => {
  const classes = useStyles();

  return (
    <Button className={classes.button} variant="outlined" disabled={disabled} onClick={() => select(answer)}>
      {answer.content}
    </Button>
  );
};

export default Answer;
