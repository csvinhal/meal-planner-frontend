import { loaderVar } from "../../../config/cache/cache";
import close from "./close";
import open from "./open";

export const loaderMutations = {
  openLoader: open(loaderVar),
  closeLoader: close(loaderVar),
};
