import React from 'react';
import Login from './sign/Login'
import Register from './sign/Register'
import UserScreen from './user/index'
const routes = [
    {
        path: "/login",
        exact: false,
        main: () => <Login />,
    },
    {
        path: "/register",
        exact: false,
        main: () => <Register />,
    },
    {
        path: "",
        exact: true,
        main: () => <UserScreen />,
    },
]

export default routes;