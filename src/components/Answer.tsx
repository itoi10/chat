import React from 'react'
import Button from '@material-ui/core/Button'
import { AnswersContent } from '../App'

interface Props {
  answer: AnswersContent
  select: (answer: AnswersContent) => void
}

const Answer:React.FC<Props> = ({answer, select}) => {

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => select(answer)}>
        {answer.content}
      </Button>
    </>
  )
}

export default Answer