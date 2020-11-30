import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Header from 'components/main/header/Header'
import { useStyles } from 'utils/style'
import { Box } from '@material-ui/core'
import {
  Home,
  Events,
} from 'components/main/pages'

const pageNames = {
  HOME: 'Home',
  MENU: 'Menu',
  EVENTS: 'Events',
}

const CurrentPage = ({ page }) => {
  switch(page) {
  case pageNames.HOME:
    return <Home/>
  case pageNames.EVENTS:
    return <Events/>
  default:
    return <div>{page} page is still in development</div>
  }
}

CurrentPage.propTypes = {
  page: PropTypes.string.isRequired, 
}

const Main = () => {
  const classes = useStyles()
  const [page, setPage] = useState(pageNames.HOME)

  return <Box
    className={classes.main}>
    <Header {...{
      page,
      setPage,
      pageNames: Object.values(pageNames),
    }}/>
    <CurrentPage {...{page}}/>
  </Box>
}

export default Main