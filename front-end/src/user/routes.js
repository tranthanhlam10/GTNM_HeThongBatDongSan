import React from 'react';

import NotFound from '../common/NotFound';
import Home from './home';
const routes = [
    { path: "", exact: true, main: () => <Home />, },
    { path: "", exact: false, main: () => <NotFound />, },
];

export default routes;