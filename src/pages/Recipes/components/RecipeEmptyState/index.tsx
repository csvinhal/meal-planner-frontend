import recipeNotFound from "@assets/images/recipe-not-found.svg";
import EmptyState from "@components/EmptyState";
import React from "react";

interface Props {
  handlerAdd: (...args: any[]) => any;
}

const RecipeEmptyState = ({ handlerAdd }: Props) => {
  return (
    <EmptyState
      title="Ops!"
      image={recipeNotFound}
      text="Parece que você não tem nenhuma receita cadastrada."
      primaryActionLabel="Adicionar"
      handlePrimaryAction={handlerAdd}
    />
  );
};

export default RecipeEmptyState;
