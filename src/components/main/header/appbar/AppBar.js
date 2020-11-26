import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { useStyles } from 'utils/style'

const Header = ({ toggleMenu }) => {
  const classes = useStyles()
  
  return <AppBar
    position='static'>
    <Toolbar
      className={classes.header}>
      <Box className={classes.title}>
        <Typography>
          Old School Smokers
        </Typography>
        <Typography>
          of Texas
        </Typography>
      </Box>
      <IconButton
        edge='start'
        className={classes.menuButton}
        color='inherit'
        aria-label='menu'
        onClick={toggleMenu}>
        <Menu/>
      </IconButton>
    </Toolbar>
  </AppBar>
}

Header.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
}

export default Header