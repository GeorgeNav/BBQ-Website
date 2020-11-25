import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { theme } from 'utils/theme'
import { ThemeProvider } from '@material-ui/core'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root'),
)
