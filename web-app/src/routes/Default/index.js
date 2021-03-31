import React from 'react';

import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import DefaultLayout from '../../pages/_layouts/Default';

const Default = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      )}
    />
  );
};

Default.propTypes = {
  component: PropTypes.func.isRequired,
};

export default Default;
