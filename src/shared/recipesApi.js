import Axios from "./requestsConfig";

export const fetchAllRecipes = () => {
  return Axios.get(`recipe`);
};

export const getRecipe = (id) => {
  return Axios.get(`recipe/${id}`);
};

export const createRecipe = (recipe) => {
  return Axios.post(`recipe`, recipe);
};

export const updateRecipe = (id, recipe) => {
  return Axios.put(`recipe/${id}`, recipe);
};

export const deleteRecipe = (id) => {
  return Axios.delete(`recipe/${id}`);
};
