import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import AppBar from 'components/main/header/appbar/AppBar'
import Navigation from 'components/main/header/navigation/Navigation'

const Header = ({page, setPage, pageNames}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen((curMenuOpen) => !curMenuOpen)
  useEffect(() => setMenuOpen(false), [page])
  
  return <Fragment>
    <AppBar {...{
      toggleMenu,
    }}/>
    <Navigation {...{
      page,
      setPage,
      pageNames,
      menuOpen,
      toggleMenu,
    }}/>
  </Fragment>
}

Header.propTypes = {
  page: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired,
  pageNames: PropTypes.array.isRequired,
}

export default Header