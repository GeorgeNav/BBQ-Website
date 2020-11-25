import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  main: {
    flexGrow: 10,
    overflowY: 'auto',
  },
  footer: {
    flexShrink: 1,
    backgroundColor: theme.palette.type === 'light'
      ? theme.palette.grey[200]
      : theme.palette.grey[800],
  },
}))
