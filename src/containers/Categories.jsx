import React, { useState } from 'react'
import { Typography, Button, Grid } from '@material-ui/core'
import Categories from '../components/category/Categories'
import { useStylesCategories } from '../components/styles/category/useStyles'
import Category from '../components/category/Category'
//Redux
import { useSelector } from 'react-redux'
// material ui lab
import { Alert, AlertTitle } from '@material-ui/lab'

function CategoryContainer () {
  const classes = useStylesCategories()
  const [open, setOpen] = useState(false)
  const [category, setCategory] = useState(undefined)
  const messageSuccess = useSelector(state => state.categories.messageSuccess)
  console.log(messageSuccess)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setCategory(undefined)
  }

  const handleSelectionCategory = item => {
    setCategory(item)
  }

  return (
    <>
      {messageSuccess && (
        <Alert variant='filled' severity='info'>
          <AlertTitle>Info</AlertTitle>
          {messageSuccess}
        </Alert>
      )}
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        className={classes.grid}
      >
        <Grid item xs={8}>
          <Typography align='center' variant='h5' className={classes.typografy}>
            Categories
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Button type='button' onClick={handleOpen} className={classes.button}>
            Create
          </Button>
        </Grid>
      </Grid>
      <Category
        open={open}
        handleClose={handleClose}
        categorySelected={category}
      ></Category>
      <Categories
        handleOpen={handleOpen}
        onSelectedCategory={handleSelectionCategory}
      />
    </>
  )
}

export default CategoryContainer
