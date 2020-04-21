import registerRecipe from "./recipe";

export default function* watchAuth() {
  yield registerRecipe();
}
