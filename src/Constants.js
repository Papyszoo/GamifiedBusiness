export const Tabs = {
    0: "/",
    1: "/menu",
    2: "/cart",
    3: "/customize",
    4: "/preview",
};

export const Routes = {
    ["/menu"]: {
        selectedTab: 1,
        cameraPosition: [0, 0, 10],
    },
    ["/cart"]: {
        selectedTab: 2,
        cameraPosition: [0, 0, 11],
    },
    ["/customize"]: {
        selectedTab: 3,
        cameraPosition: [0, 0, 12],
    },
    ["/preview"]: {
        selectedTab: 4,
        cameraPosition: [0, 0, 12],
    },
    default: {
        selectedTab: 0,
        cameraPosition: [0, 0, 13],
    },
};

export const Sauces = {
    tomato: "tomato",
    cream: "cream",
};

export const Ingredients = {
    cheese: { name: "cheese", price: 4 },
    mushrooms: { name: "mushrooms", price: 4 },
    pepperoni: { name: "pepperoni", price: 8 },
    bacon: { name: "bacon", price: 8 },
    ham: { name: "ham", price: 7 },
    spinach: { name: "spinach", price: 5 },
    chicken: { name: "chicken", price: 7 },
    onion: { name: "onion", price: 4 },
    tomatoes: { name: "tomatoes", price: 4 },
    salmon: { name: "salmon", price: 10 },
    olives: { name: "olives", price: 6 },
};

export const Menu = [
    {
        name: "Margherita",
        sauce: Sauces.tomato,
        ingredients: [Ingredients.cheese],
        price: 15,
    },
    {
        name: "Capricciosa",
        sauce: Sauces.tomato,
        ingredients: [
            Ingredients.cheese,
            Ingredients.ham,
            Ingredients.mushrooms,
        ],
        price: 25,
    },
    {
        name: "Carbonara",
        sauce: Sauces.cream,
        ingredients: [Ingredients.cheese, Ingredients.bacon],
        price: 25,
    },
    {
        name: "Custom",
        basePrice: 15,
    },
];
