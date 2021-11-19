import React from 'react'
import { Answer } from './index'
import { Answers } from '../App'

interface Props {

}

const AnswersList:React.FC<Props> = () => {

  return (
    <div className='c-grid__answer'>
      <Answer content={'富士山'} />
      <Answer content={'北岳'}/>
      <Answer content={'日和山'}/>
      <Answer content={'天保山'}/>
    </div>
  )
}

export default AnswersList