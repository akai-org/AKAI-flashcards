import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from 'components/organisms/Navbar/Navbar';
import Register from 'views/Register/Register';
import PageTemplate from 'templates/PageTemplate/PageTemplate';
import MainTemplate from './templates/MainTemplate/MainTemplate';

const Root = () => (
  <MainTemplate>
    <Router>
      <Navbar />
      <PageTemplate>
        <Switch>
          <Route path="/" exact component={() => <div>asd</div>} />
          <Route path="/register" component={Register} />
        </Switch>
      </PageTemplate>
    </Router>
  </MainTemplate>
);

export default Root;
