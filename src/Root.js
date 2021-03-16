import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from 'components/organisms/Navbar/Navbar';
import LandingPage from 'views/LandingPage/LandingPage';
import Register from 'views/Register/Register';
import PageTemplate from 'templates/PageTemplate/PageTemplate';
import MainTemplate from './templates/MainTemplate/MainTemplate';

const Root = () => (
  <MainTemplate>
    <Router>
      <Navbar />
      <PageTemplate>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/register" component={Register} />
        </Switch>
      </PageTemplate>
    </Router>
  </MainTemplate>
);

export default Root;
