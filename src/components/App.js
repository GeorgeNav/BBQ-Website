import React from 'react'
import Main from 'components/main/Main'
import Footer from 'components/footer/Footer'
import { useStyles } from 'utils/style'
import {
  CssBaseline,
} from '@material-ui/core'

const App = () => {
  const classes = useStyles()

  return <div className={classes.root}>
    <CssBaseline/>
    <Main/>
    <Footer/>
  </div>
}

export default App
