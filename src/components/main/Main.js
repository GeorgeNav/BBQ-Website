import React from 'react'
import Header from 'components/main/header/Header'
import { useStyles } from 'utils/style'
import { Box } from '@material-ui/core'
import pitImg from 'assets/images/pit.jfif'

const Main = () => {
  const classes = useStyles

  return <Box className={classes.main}>
    <Header/>
    <img
      src={pitImg}
      style={{
        width: '100%',
      }}/>
  </Box>
}

export default Main