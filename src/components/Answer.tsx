import React from 'react'
import Button from '@material-ui/core/Button'
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'


interface Props {
  content: string
}


// Material-UIデザインのカスタマイズ
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {

//     },
//   })
// );


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