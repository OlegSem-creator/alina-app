import React, { FC } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import PublicRoutes from 'routes/PublicRoutes';
import PrivateRoutes from 'routes/PrivateRoutes';

const App: FC = () => {
  const isUserLogGetIn = false;
  return (
    <Router>
      <Switch>{isUserLogGetIn ? <PrivateRoutes /> : <PublicRoutes />}</Switch>
    </Router>
  );
};

export default App;
