import React from 'react'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core'
import titleImg from 'assets/images/title.png'
import { Menu } from '@material-ui/icons'
import { useStyles } from 'utils/style'

const Header = () => {
  const classes = useStyles()
  
  return <AppBar
    position='static'>
    <Toolbar
      style={{
        backgroundColor: 'rgb(130, 130, 130)',
      }}>
      <IconButton
        edge='start'
        className={classes.menuButton}
        color='inherit'
        aria-label='menu'>
        <Menu />
      </IconButton>
      <Typography
        variant='h6'
        className={classes.title}>
        Old School Smokers of Texas
      </Typography>
      <Button
        color='inherit'>
        Login
      </Button>
    </Toolbar>
  </AppBar>
}

export default Header