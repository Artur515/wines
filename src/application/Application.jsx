import React from 'react';
import {Switch, Route, withRouter} from "react-router-dom";
import RedWines from "../pages/redWines/RedWines";
import WhiteWines from "../pages/whiteWines/WhiteWines";
import SparklingWines from "../pages/sparklingWines/SparklingWines";
import RoseWines from "../pages/roseWines/RoseWines";
import Header from "../components/header/Header";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {Wrapper} from "../components/wrapper/Wrapper";

const Application = ({location}) => {


    return (
        <Wrapper>
            <TransitionGroup className="transition-group">
                <CSSTransition key={location.key} timeout={{enter: 500, exit: 500}} classNames="fade">
                    <Switch>
                        <Route exact path='/' component={Header}/>
                        <Route path='/reds' component={RedWines}/>
                        <Route path='/whites' component={WhiteWines}/>
                        <Route path='/sparkling' component={SparklingWines}/>
                        <Route path='/rose' component={RoseWines}/>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </Wrapper>
    );
};

export default withRouter(Application);