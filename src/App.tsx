import React from "react";
import "./App.css";

import { routesHome } from "./routes/index";
import { HomeTemplate } from "./templates/HomeTemplate";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          {showHomeLayout(routesHome)}

          {/* <Route path="/admin" component={Admin} exact={false} /> */}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
