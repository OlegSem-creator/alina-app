import React, { FC } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Login from 'pages/auth/Login';
import Registration from 'pages/auth/Registration';
import ResetPassword from 'pages/auth/ResetPassword';
import routes from 'constants/routes';

const PublicRoutes: FC = () => {
  return (
    <Switch>
      <Route path={routes.REGISTRATION} component={Registration} exact />
      <Route path={routes.LOGIN} component={Login} exact />
      <Route path={routes.RESET} component={ResetPassword} exact />
      <Redirect to={routes.LOGIN} />
    </Switch>
  );
};

export default PublicRoutes;
