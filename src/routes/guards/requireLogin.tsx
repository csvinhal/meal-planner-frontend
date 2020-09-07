import { Auth } from "aws-amplify";
import Axios from "../../shared/requestsConfig";
import { AUTH_ONLY } from "../types";

const requireLogin = async (to: any, from: any, next: any) => {
  try {
    const session = await Auth.currentSession();
    if (to.meta[AUTH_ONLY] && !session.isValid()) {
      next.redirect("/login");
    } else {
      Axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${session.getIdToken().getJwtToken()}`;
    }
  } catch (err) {
    next.redirect("/login");
  }
  next();
};

export default requireLogin;