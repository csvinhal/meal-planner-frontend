import { Query } from "@apollo/react-components";
import PropTypes from "prop-types";
import React from "react";
import { loaderMutations } from "../apollo/operations/mutations/loader";
import { toastMutations } from "../apollo/operations/mutations/toast";

const QueryContainer = ({ children, ...props }) => {
  const { openLoader, closeLoader } = loaderMutations;
  const {openToast} = toastMutations;
  return (
    <Query {...props}>
      {({ loading, error, data }) => {
        if (loading) {
          openLoader();
          return <div></div>;
        } else if (error) {
          openToast(error.message, "error");
          closeLoader();
          return <div></div>;
        } else {
          closeLoader();
          console.log(data);
          return children(data);
        }
      }}
    </Query>
  );
};
QueryContainer.propTypes = {
  children: PropTypes.any,
};

export default QueryContainer;
