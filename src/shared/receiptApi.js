import Axios from "./requestsConfig";

export const fetchAllReceipts = (limit = 10, offset = 0) => {
  return Axios.get(`receipts`);
};

export const getReceipt = (id) => {
  return Axios.get(`receipts/${id}`);
};

export const createReceipt = (receipt) => {
  return Axios.post(`receipts`, receipt);
};

export const updateReceipt = (id, receipt) => {
  return Axios.patch(`receipts/${id}`, receipt);
};
