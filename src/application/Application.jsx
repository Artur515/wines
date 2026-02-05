import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Wrapper from '../components/wrapper/Wrapper';
import MainNavigation from '../pages/MainNavigation';
import RedWines from '../pages/redWines';
import WhiteWines from '../pages/whiteWines';
import SparklingWines from '../pages/sparklingWines';
import RoseWines from '../pages/roseWines';

function Application({ location }) {
  return (
    <Wrapper>
      <TransitionGroup className="transition-group">
        <CSSTransition key={location.key} timeout={{ enter: 500, exit: 500 }} classNames="fade">
          <Switch>
            <Route exact path="/" component={MainNavigation} />
            <Route path="/reds" component={RedWines} />
            <Route path="/whites" component={WhiteWines} />
            <Route path="/sparkling" component={SparklingWines} />
            <Route path="/rose" component={RoseWines} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}

export default withRouter(Application);
