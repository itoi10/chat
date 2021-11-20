import React from "react";
import { Answer } from "./index";
import { AnswersContent } from "../App";

interface Props {
  answers: AnswersContent[];
  disabled: boolean;
  select: (answer: AnswersContent) => void;
}

const AnswersList: React.FC<Props> = ({ answers, disabled, select }) => {
  return (
    <div className="c-grid__answer">
      {answers.map((answer, index) => (
        <Answer key={index} answer={answer} disabled={disabled} select={select} />
      ))}
    </div>
  );
};

export default AnswersList;
