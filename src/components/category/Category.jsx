import React, { useState } from 'react'
import {
  makeStyles,
  Container,
  CssBaseline,
  Avatar,
  Typography,
  TextField,
  Button
} from '@material-ui/core'
import CategoryIcon from '@material-ui/icons/Category'
// material ui lab
import { Alert, AlertTitle } from '@material-ui/lab'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { createCategoryAction } from '../../actions/createCategoryAction'

const useStyles = makeStyles(theme => ({
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
  }
}))
const categoryForm = (classes, name, saveName, clickSubmit) => (
  <Container component='main' maxWidth='xs'>
    <CssBaseline></CssBaseline>
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <CategoryIcon></CategoryIcon>
      </Avatar>
      <Typography component='h1' variant='h5'>
        Create Category
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='name'
          label='Name'
          name='name'
          value={name}
          onChange={e => saveName(e.target.value)}
          autoComplete='name'
          autoFocus
        />
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
          onClick={clickSubmit}
        >
          Save Category
        </Button>
      </form>
    </div>
  </Container>
)

const Category = () => {
  const [name, saveName] = useState('')

  const dispatch = useDispatch()
  const createCategory = (category, token) =>
    dispatch(createCategoryAction(category, token))
  const token = useSelector(state => state.auth.auth.token)
  const error = useSelector(state => state.categories.error)
  const message = useSelector(state => state.categories.message)

  const clickSubmit = e => {
    e.preventDefault()
    let category = {}
    if (name.trim() !== '') {
      category = {
        name
      }
    }

    createCategory(category, token)
    if (!error) {
      saveName('')
    }
  }

  // material ui
  const classes = useStyles()
  return (
    <>
      {message ? (
        <Alert variant='filled' severity={error ? 'error' : 'info'}>
          <AlertTitle>{error ? 'Error' : 'Info'}</AlertTitle>
          {message}
        </Alert>
      ) : null}
      {categoryForm(classes, name, saveName, clickSubmit)}
    </>
  )
}

export default Category
