import { create } from "zustand";

export default create((set, get) => ({
    cart: [],
    addToCart: (pizzaName) => {
        const isPizzaInCart =
            get().cart.some((cartPizza) => cartPizza.name === pizzaName) &&
            pizzaName !== "Custom";
        if (isPizzaInCart) {
            set((state) => ({
                cart: state.cart.map((cartPizza) =>
                    cartPizza.name === pizzaName
                        ? { ...cartPizza, quantity: cartPizza.quantity + 1 }
                        : cartPizza
                ),
            }));
        } else {
            set((state) => ({
                cart: [...state.cart, { name: pizzaName, quantity: 1 }],
            }));
        }
    },
    decrementQuantityInCart: (pizzaName) => {
        const currentCart = get().cart;
        const pizzaToModify = currentCart.find((p) => p.name === pizzaName);
        if (pizzaToModify.quantity === 1) {
            set({
                cart: currentCart.filter((p) => p.name != pizzaName),
            });
        } else {
            pizzaToModify.quantity -= 1;
            set({
                cart: [
                    ...currentCart.filter((p) => p.name != pizzaName),
                    pizzaToModify,
                ],
            });
        }
    },
    removePizzaFromCart: (pizzaName) => {
        set((state) => ({
            cart: state.cart.filter((p) => p.name !== pizzaName),
        }));
    },
}));
