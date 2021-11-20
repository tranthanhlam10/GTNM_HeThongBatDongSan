import React, { Component } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "./UserScreen.css";
import { BrowserRouter as Switch, Route } from "react-router-dom";

const Home = React.lazy(() => import("./home/Home.js"));

const Wishlist = React.lazy(() => import("./Wishlist/Wishlist.js"));
const NotFound = React.lazy(() => import("../common/NotFound.js"));
const SearchingList = React.lazy(() =>
  import("./SearchingList/SearchingList.js")
);
const RealEstateDetail = React.lazy(() =>
  import("./RealEstateDetail/RealEstateDetail.js")
);
class User extends React.Component {
  render() {
    return (
      <div className="home-admin">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/notfound" component={NotFound} />
          <Route exact path="/wishlist" component={Wishlist} />
          <Route exact path="/searchinglist" component={SearchingList} />
          <Route exact path="/realestate" component={RealEstateDetail} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default User;
