import React from 'react'
import { Box } from '@material-ui/core'
import titleImg from 'assets/images/title.png'

const Header = () => {
  return <Box
    style={{
      backgroundColor: 'rgb(130, 130, 130)',
    }}>
    <img src={titleImg} style={{
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '25%',
    }}/>
  </Box>
}

export default Header