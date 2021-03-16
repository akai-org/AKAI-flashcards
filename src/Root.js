import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from 'components/organisms/Navbar/Navbar';
import { Provider } from 'react-redux';
import store from 'store';
import LandingPage from 'views/LandingPage/LandingPage';
import Register from 'views/Register/Register';
import PageTemplate from 'templates/PageTemplate/PageTemplate';
import MainTemplate from './templates/MainTemplate/MainTemplate';

const Root = () => (
  <Provider store={store}>
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
  </Provider>
);

export default Root;
