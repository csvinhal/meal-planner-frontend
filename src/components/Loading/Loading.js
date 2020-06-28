import { Query } from "@apollo/react-components";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { Fragment } from "react";
import { GET_LOADER } from "../../apollo/operations/queries";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <Query query={GET_LOADER}>
      {({ data }) => (
        <Fragment>
          <Backdrop className={classes.backdrop} open={data.loader.open}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </Fragment>
      )}
    </Query>
  );
};

Loading.propTypes = {};

export default Loading;
