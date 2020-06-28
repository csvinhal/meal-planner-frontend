import { toastVar } from "../../../config/cache/cache";
import close from "./close";
import open from "./open";

export const toastMutations = {
  openToast: open(toastVar),
  closeToast: close(toastVar),
};
