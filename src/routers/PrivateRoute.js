import React from 'react';
import { Route } from 'react-router-dom';

export const PrivateRoute = ({
  component: Component,
  ...rest                                                 // ...rest allows us to send the rest of the props through to the components 
}) => {
  return (
    <div className="page">
      <Route {...rest} children={(props) => (<Component {...props} />)}/>
    </div>
  )};

export default PrivateRoute;
