import { makeStyles } from '@material-ui/core/styles'
import { purple } from '@material-ui/core/colors'

export const useStylesCategory = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paperModal: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}))

export const useStylesCategories = makeStyles(theme => ({
  typografy: {
    color: '#000000',
    marginBottom: '20px',
    marginTop: '20px'
  },
  button: {
    color: '#FFFFFF',
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700]
    }
  },
  grid: {
    marginTop: '20px',
    marginBottom: '20px'
  }
}))
