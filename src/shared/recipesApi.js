import Axios from "./requestsConfig";

export const getRecipes = () => {
  return Axios.get(`recipes`);
};

export const getRecipe = (id) => {
  return Axios.get(`recipes/${id}`);
};

export const createRecipe = (recipe) => {
  return Axios.post(`recipes`, recipe);
};

export const updateRecipe = (id, recipe) => {
  return Axios.put(`recipes/${id}`, recipe);
};

export const deleteRecipe = (id) => {
  return Axios.delete(`recipes/${id}`);
};
