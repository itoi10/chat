import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

interface Props {
  content: string
}


// Material-UIデザインのカスタマイズ
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {

    },
  })
);


const Answer:React.FC<Props> = ({content}) => {
  // const classes = useStyles()

  return (
    <>
      <Button variant="contained" color="primary">
        {content}
      </Button>
    </>
  )
}

export default Answer