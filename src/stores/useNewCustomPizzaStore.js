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
    addIngredient: (ingredient) => {},
    removeIngredient: (ingredient) => {},
    addPizzaToCart: () => {},
}));
