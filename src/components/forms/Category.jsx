import React from 'react'
import {
  Container,
  CssBaseline,
  Avatar,
  Typography,
  TextField,
  Button
} from '@material-ui/core'
import CategoryIcon from '@material-ui/icons/Category'

export const categoryForm = (
  classes,
  name,
  saveName,
  clickSubmit,
  error,
  messageError
) => (
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
          error={error}
          required
          fullWidth
          id='name'
          label='Name'
          name='name'
          value={name || ''}
          helperText={error ? messageError : null}
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
