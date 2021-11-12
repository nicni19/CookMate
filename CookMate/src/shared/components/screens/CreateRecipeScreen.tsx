import React from "react";
import CreateRecipeForm from "../../../modules/create-recipe/CreateRecipeForm";
import { CreateRecipeNavProps } from "../navigation/param-lists/CreateRecipeParamList";

type CreateRecipeScreenProps = {} & CreateRecipeNavProps<"CreateRecipeScreen">;

export const CreateRecipeScreen: React.FC<CreateRecipeScreenProps> = (
    props
) => {
    return <CreateRecipeForm createRecipeNavProps={props} />;
};
