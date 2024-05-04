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
    cheese: "cheese",
    mushrooms: "mushrooms",
    pepperoni: "pepperoni",
    bacon: "bacon",
    ham: "ham",
    spinach: "spinach",
    chicken: "chicken",
    onion: "onion",
    tomatoes: "tomatoes",
    salmon: "salmon",
    olives: "olives",
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

export const IngredientsCost = {
    [Ingredients.cheese]: 4,
    [Ingredients.mushrooms]: 4,
    [Ingredients.pepperoni]: 8,
    [Ingredients.bacon]: 8,
    [Ingredients.ham]: 7,
    [Ingredients.spinach]: 5,
    [Ingredients.chicken]: 7,
    [Ingredients.onion]: 4,
    [Ingredients.tomatoes]: 4,
    [Ingredients.salmon]: 10,
    [Ingredients.olives]: 6,
};
