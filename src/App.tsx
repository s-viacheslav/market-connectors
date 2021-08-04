/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import store from './store';

const square = styled.div`
  height: 200px;
  width: 200px;
`;

const StyledFirst = styled(square)`
  background: #d6ffe1;
`;

const StyledSecond = styled(square)`
  background: #ffefd6;
`;

const StyledLinks = styled.div`
  height: 30px;
  width: 200px;
  display: flex;
  justify-content: space-around;
`;

const First = () => <StyledFirst>First page</StyledFirst>;
const Second = () => <StyledSecond>Second page</StyledSecond>;
const Links = () => (
  <StyledLinks>
    <Link to="/">First</Link>
    <Link to="/second">Second</Link>
  </StyledLinks>
);
const Routes = () => (
  <Switch>
    <Route exact path="/" component={First} />
    <Route path="/second" component={Second} />
  </Switch>
);

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <Router>
        <Links />
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
