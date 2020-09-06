import React from 'react'
import { Route, Redirect } from 'react-router-dom'
//Redux
import { useSelector } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector(state => state.auth.auth)
  return (
    // props means components passed down to this private route component
    <Route
      {...rest}
      render={props =>
        auth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
