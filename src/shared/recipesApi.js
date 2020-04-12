import Axios from "./requestsConfig";

export const fetchAllRecipes = (limit = 10, offset = 0) => {
  return Axios.get(`recipe`);
};

export const getRecipe = (id) => {
  return Axios.get(`recipe/${id}`);
};

export const createRecipe = (recipe) => {
  return Axios.post(`recipes`, recipe);
};

export const updateRecipe = (id, recipe) => {
  return Axios.patch(`recipe/${id}`, recipe);
};
