import React, { useMemo } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GuardedRoute, GuardProvider } from "react-router-guards";
import { requireLogin } from "./guards";
import getRoutes from "./routes";

const GLOBAL_GUARDS = [requireLogin];

const Router = () => {
  const routes = useMemo(() => getRoutes(), []);
  return (
    <BrowserRouter>
      <GuardProvider guards={GLOBAL_GUARDS} loading="Loading...">
        <Route
          render={() =>
              <Switch>
                {routes.map(
                  (
                    {
                      component,
                      exact,
                      // ignoreGlobal,
                      meta,
                      path,
                    },
                    i
                  ) => (
                    <GuardedRoute
                      key={i}
                      component={component}
                      exact={exact}
                      // error={error}
                      // ignoreGlobal={ignoreGlobal}
                      // loading={loading}
                      meta={meta}
                      path={path}
                    />
                  )
                )}
              </Switch>
          }
        />
      </GuardProvider>
    </BrowserRouter>
  );
};

export default Router;
