import { create } from "zustand";
import { Sauces } from "../Constants";

export default create((set, get) => ({
    sauce: Sauces.tomato,
    ingredients: [],
    setSauce: (newSauce) => {
        if (Object.keys(Sauces).some((s) => s === newSauce)) {
            set({ sauce: newSauce });
        }
    },
    incrementIngredientQuantity: (ingredient) => {
        const isIngredientAlreadyAdded = get().ingredient.some(
            (existingIngredient) => existingIngredient.name === ingredient
        );
        if (isIngredientAlreadyAdded) {
            set((state) => ({
                ingredients: state.ingredients.map((existingIngredient) =>
                    existingIngredient.name === ingredient
                        ? {
                              ...existingIngredient,
                              quantity: existingIngredient.quantity + 1,
                          }
                        : existingIngredient
                ),
            }));
        } else {
            set((state) => ({
                ingredients: [
                    ...state.ingredients,
                    { name: ingredient, quantity: 1 },
                ],
            }));
        }
    },
    decrementIngredientQuantity: (ingredient) => {
        const ingredientsCopy = get().ingredients;
        const ingredientToModify = ingredientsCopy.find(
            (i) => i.name === ingredient
        );
        if (ingredientToModify.quantity === 1) {
            set({
                ingredients: ingredientsCopy.filter(
                    (i) => i.name !== ingredient
                ),
            });
        } else {
            ingredientToModify.quantity -= 1;
            set({
                ingredients: [
                    ...ingredientsCopy.filter((i) => i.name !== ingredient),
                    ingredientToModify,
                ],
            });
        }
    },
    addPizzaToCart: () => {},
}));
