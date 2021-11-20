import React from "react";
import { Answer } from "./index";
import { AnswersContent } from "../App";

interface Props {
  answers: AnswersContent[];
  select: (answer: AnswersContent) => void;
}

const AnswersList: React.FC<Props> = ({ answers, select }) => {
  return (
    <div className="c-grid__answer">
      {answers.map((answer, index) => (
        <Answer answer={answer} key={index} select={select} />
      ))}
    </div>
  );
};

export default AnswersList;
