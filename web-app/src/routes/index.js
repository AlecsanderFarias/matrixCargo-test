import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import DefaultRoute from './Default';

//Default Routes
import JobView from '../pages/default/Job/View';
import JobCreateEdit from '../pages/default/Job/CreateEdit';
import JobList from '../pages/default/Job/List';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <LoginRoute path="/forgot" component={ForgotPassword} exact /> */}
        <DefaultRoute path="/" component={JobList} exact />
        <DefaultRoute path="/create" component={JobCreateEdit} exact />
        <DefaultRoute path="/edit/:id" component={JobCreateEdit} exact />
        <DefaultRoute path="/:id" component={JobView} exact />

        <DefaultRoute path="*" isPrivate component={JobList} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
