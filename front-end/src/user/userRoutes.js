import React from 'react';

import Home from './home/Home';
import Wishlist from './Wishlist/Wishlist';
import NotFound from '../common/NotFound'
import SearchingList from './SearchingList/SearchingList'
const userRoutes = [
    {
        path: "", exact: true, main: () => <Home />,
    },
    {
        path: "wishlist", exact: false, main: () => <Wishlist />,
    },
    {
        path: "searchinglist", exact: false, main: () => <SearchingList />,
    },
    {
        path: "", exact: false, main: () => <NotFound />,
    },
]

export default userRoutes;