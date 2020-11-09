import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {withRouter} from "react-router";




import App from './App';

const WithRouterApp = withRouter(App);

ReactDOM.render((
    <BrowserRouter>
        <WithRouterApp />
    </BrowserRouter>
), document.getElementById('root'));

