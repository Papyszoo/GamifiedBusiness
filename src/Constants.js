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
    cheese: { name: "cheese", cost: 4 },
    mushrooms: { name: "mushrooms", cost: 4 },
    pepperoni: { name: "pepperoni", cost: 8 },
    bacon: { name: "bacon", cost: 8 },
    ham: { name: "ham", cost: 7 },
    spinach: { name: "spinach", cost: 5 },
    chicken: { name: "chicken", cost: 7 },
    onion: { name: "onion", cost: 4 },
    tomatoes: { name: "tomatoes", cost: 4 },
    salmon: { name: "salmon", cost: 10 },
    olives: { name: "olives", cost: 6 },
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
