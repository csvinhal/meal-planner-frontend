import React from "react";
import { Switch, useRouteMatch } from "react-router-dom";
import Layout from "../../hoc/Layout";
import PrivateRoute from "../../hoc/PrivateRoute";
import ReceiptsForm from "./ReceiptsForm/ReceiptsForm";
import ReceiptsList from "./ReceiptsList/ReceiptsList";

const Receipts = ({ match, location, history }) => {
  const { path } = useRouteMatch();
  console.log(match, location, history);
  return (
    <Layout>
      <Switch>
        <PrivateRoute path={`${path}/add`} component={ReceiptsForm} exact />
        <PrivateRoute path={`${path}/:id`} component={ReceiptsForm} exact />
        <PrivateRoute path={`${path}`} component={ReceiptsList} exact />
      </Switch>
    </Layout>
  );
};

export default Receipts;
