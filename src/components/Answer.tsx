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
      borderColor: "#FFB549",
      color: "#FFB549",
      fontWeight: 600,
      marginBottom: "8px",
      "&:hover": {
        backgroundColor: "#FFB549",
        color: "#FFF",
      },
      height: "30%",
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
