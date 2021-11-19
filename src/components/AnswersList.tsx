import React from 'react'
import { Answer } from './index'
import { Answers } from '../App'

interface Props {
  answers: Answers[]
}

const AnswersList:React.FC<Props> = ({answers}) => {

  return (
    <div className='c-grid__answer'>
      {answers.map((value, index) => (
        <Answer content={value.content} key={index}/>
      ))}
    </div>
  )
}

export default AnswersList