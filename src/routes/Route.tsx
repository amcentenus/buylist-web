import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { getSigned } from '../services/localStorage';

export default function RouteWrapper({
  component: Component,
  path,
  isPrivate,
  exact,
  ...rest
}: {
  component: React.FC<RouteProps>,
  isPrivate?: boolean,
  exact?: boolean,
  path: string
}) {
  const signed = getSigned();

  if (!signed && isPrivate) {
    return <Redirect to='/' />
  }

  if (signed && !isPrivate) {
    return <Redirect to='/home' />
  }

  return (
    <Route
      {...rest} render={(props) => (
        <Component {...props} />
      )}
    />
  )
}

