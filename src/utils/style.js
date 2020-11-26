import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    height: '100vh',
    flexShrink: 0,
  },
  main: {
    flexGrow: 1,
    overflowY: 'auto',
    flexShrink: 0,
  },
  header: {
    backgroundColor: theme.palette.grey[800],
  },
  footer: {
    backgroundColor: theme.palette.grey[800],
    flexShrink: 0,
  },
  mainMenu: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))
