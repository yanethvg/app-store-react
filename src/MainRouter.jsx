import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/basic/Home'
import Menu from './components/basic/Menu'
import { Box } from '@material-ui/core'
import PrivateRoute from './components/auth/PrivateRoute'
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
import Footer from './components/basic/Footer'
import Category from './components/category/Category'

function MainRouter () {
  return (
    <div>
      <Switch>
        <>
          <Box>
            <Menu></Menu>
            <Box m={4}>
              <Route path='/' exact component={Home}></Route>
              <Route path='/signin' exact component={Signin}></Route>
              <Route path='/signup' exact component={Signup}></Route>
              <PrivateRoute
                path='/create/categories'
                exact
                component={Category}
              ></PrivateRoute>
            </Box>
            <Footer></Footer>
          </Box>
        </>
      </Switch>
    </div>
  )
}

export default MainRouter
