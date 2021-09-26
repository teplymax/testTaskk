//-----------------Basic imports------------------------
import React from "react";

//-----------------Routes------------------------
import ROUTES from "./routes";

//-----------------Libraries------------------------
import { Route, Switch } from "react-router";

//-----------------Pages------------------------
import { ProductList, ProductDetails } from "../pages";

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.home} component={ProductList} />
      <Route
        exact
        path={`${ROUTES.productDetail}:id`}
        component={ProductDetails}
      />
    </Switch>
  );
};

export default MainRoutes;
