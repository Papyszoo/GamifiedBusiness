import { create } from "zustand";

export default create((set, get) => ({
    cart: [],
    addToCart: (pizza) => {
        const isPizzaInCart =
            cart.some((cartPizza) => cartPizza.name === pizza.name) &&
            pizza.name !== "Custom";
        if (isPizzaInCart) {
            set({
                cart: cart.map((cartPizza) =>
                    cartPizza.name === pizza.name
                        ? { ...cartPizza, quantity: cartPizza.quantity + 1 }
                        : cartPizza
                ),
            });
        } else {
            set((state) => ({
                cart: [...cart, { ...pizza, quantity: 1 }],
            }));
        }
    },
    incrementInCart: (pizzaType) => {
        set((state) => ({
            cart: cart.map((cartPizza) =>
                cartPizza.name === pizza.name
                    ? { ...cartPizza, quantity: cartPizza.quantity + 1 }
                    : cartPizza
            ),
        }));
    },
}));
