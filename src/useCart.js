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
    incrementQuantityInCart: (pizzaName) => {
        set((state) => ({
            cart: state.cart.map((cartPizza) =>
                cartPizza.name === pizzaName
                    ? { ...cartPizza, quantity: cartPizza.quantity + 1 }
                    : cartPizza
            ),
        }));
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
                    currentCart.filter((p) => p.name != pizzaName),
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
