import React, { FC } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from 'pages/home';
import routes from 'constants/routes';

const PrivateRoutes: FC = () => {
  return (
    <Switch>
      <Route path={routes.HOME} component={Home} exact />
      <Redirect to={routes.HOME} />
    </Switch>
  );
};

export default PrivateRoutes;
