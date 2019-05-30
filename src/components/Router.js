import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import App from "../App";
import Recipe from "./Recipe";

const Router = () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
        <Route path="/" component={App} exact />
        <Route path="/recipe/:id" component={Recipe} />
    </HashRouter>
);

    
export default Router;