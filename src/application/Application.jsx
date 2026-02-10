import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Wrapper from '../components/wrapper/Wrapper';
import MainNavigation from '../pages/MainNavigation';
import WineList from '../pages/wineList/WineList';

const WINE_ROUTES = [
  { path: '/reds', type: 'reds' },
  { path: '/whites', type: 'whites' },
  { path: '/sparkling', type: 'sparkling' },
  { path: '/rose', type: 'rose' },
];

const Application = ({ location }) => (
  <Wrapper>
    <TransitionGroup className="transition-group">
      <CSSTransition key={location.key} timeout={{ enter: 500, exit: 500 }} classNames="fade">
        <Switch location={location}>
          <Route exact path="/" component={MainNavigation} />
          {WINE_ROUTES.map(({ path, type }) => (
            <Route
              key={path}
              path={path}
              render={() => <WineList wineType={type} />}
            />
          ))}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </Wrapper>
);

export default withRouter(Application);
