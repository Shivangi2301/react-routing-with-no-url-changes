import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import ContactContainer from '../Contact/ContactContainer';
import YourPayContainer from '../YourPay/YourPayContainer';
import OrganizationContainer from '../Organization/OrganizationContainer';
import BenefitsContainer from '../Benefits/BenefitsContainer';

class Routes extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/contact" component={ContactContainer} />
          <Route path="/your-pay" component={YourPayContainer} />
          <Route path="/organization" component={OrganizationContainer} />
          <Route path="/benefits" component={BenefitsContainer} />
        </Switch>
      </Fragment>
    )
  }
}
export default Routes;