import React from 'react';

import Home from './home/Home';
import Wishlist from './Wishlist/Wishlist';
import NotFound from '../common/NotFound'
import SearchingList from './SearchingList/SearchingList'
import RealEstateDetail from './RealEstateDetail/RealEstateDetail';
import Post from './Post/Post';
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
        path: 'realestate', exact: false, main: () => <RealEstateDetail />
    },
    {
        path: 'post', exact: false, main: () => <Post />
    },
    {
        path: "", exact: false, main: () => <NotFound />,
    },
]

export default userRoutes;