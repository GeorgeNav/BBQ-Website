import React from 'react'
import PropTypes from 'prop-types'
import { SwipeableDrawer } from '@material-ui/core'
import PagesList from 'components/main/header/navigation/PagesList'

const Navigation = ({
  page,
  setPage,
  pageNames,
  menuOpen,
  toggleMenu,
}) =>
  <SwipeableDrawer
    anchor='right'
    open={menuOpen}
    onClose={toggleMenu}
    onOpen={toggleMenu}>
    <PagesList {...{page, setPage, pageNames}}/>
  </SwipeableDrawer>

Navigation.propTypes = {
  page: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired,
  pageNames: PropTypes.array.isRequired,
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
}

export default Navigation