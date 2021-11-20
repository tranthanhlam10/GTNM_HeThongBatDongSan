import React, { Component } from "react";
import "./AdminScreen.css";

import AdminLeftbar from "../common/AdminLeftBar";
import { BrowserRouter as Switch, Route } from "react-router-dom";

const ManagerStatistic = React.lazy(() =>
  import("./ManagerStatistic/ManagerStatistic.js")
);

const ProjectDetail = React.lazy(() =>
  import("./ProjectDetail/ProjectDetail.js")
);

const ProjectManagement = React.lazy(() =>
  import("./ProjectManagement/ProjectManagement.js")
);

const RealEstateManagement = React.lazy(() =>
  import("./RealEstateManagement/RealEstateManagement.js")
);
const RealEstateDetail = React.lazy(() =>
  import("./RealEstateDetail/RealEstateDetail.js")
);
const UserManagement = React.lazy(() =>
  import("./UserManagement/UserManagement.js")
);

const UserDetail = React.lazy(() => import("./UserDetail/UserDetail.js"));

class Admin extends React.Component {
  render() {
    return (
      <div className="home-admin">
        <AdminLeftbar />
        <Switch>
          <Route
            exact
            path="/admin/projectmanage"
            component={ProjectManagement}
          />
          <Route exact path="/admin/projectdetail" component={ProjectDetail} />
          <Route
            exact
            path="/admin/realestatemanagement"
            component={RealEstateManagement}
          />
          <Route
            exact
            path="/admin/realestatedetail"
            component={RealEstateDetail}
          />
          <Route
            exact
            path="/admin/usermanagement"
            component={UserManagement}
          />
          <Route exact path="/admin/userdetail" component={UserDetail} />
          <Route exact path="/admin/statistic" component={ManagerStatistic} />
        </Switch>
      </div>
    );
  }
}
export default Admin;
