import { InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        loader: {
          read() {
            return loaderVar();
          },
        },
        toast: {
          read() {
            return toastVar();
          },
        },
      },
    },
  },
});

const loaderInitialValue = {
  open: false,
  _typename: "loader",
};

export const loaderVar = cache.makeVar(loaderInitialValue);

const toastInitialValue = {
  message: "",
  severity: "",
  open: false,
  _typename: "toast",
};

export const toastVar = cache.makeVar(toastInitialValue);
