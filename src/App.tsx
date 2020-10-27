import React, { Suspense, lazy } from 'react';
import "./App.css";
import {routesAdmin} from "./routes/admin"
import { routesHome } from "./routes/index";
import { HomeTemplate } from "./templates/HomeTemplate";
import {AdminTemplate} from "./templates/AdminTemplate"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loading from "./components/loading/loading";
import Auth from "./page/admin/auth/auth";
function App() {
  const showHomeLayout = (routesHome: any) => {
    if (routesHome && routesHome.length > 0) {
      return routesHome.map((item: any, index: any) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };
  const showAdminLayout = (routesAdmin: any) => {
    if (routesAdmin && routesAdmin.length > 0) {
      return routesAdmin.map((item: any, index: any) => {
        return (
          <AdminTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };
  return (
    <BrowserRouter>
      <Switch>
        <Route>

        <Suspense fallback={<Loading />}>
        {showHomeLayout(routesHome)}
        </Suspense>
          {showAdminLayout(routesAdmin)}
          <Route path="/admin" component={Auth} exact={true} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
