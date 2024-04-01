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
        overlayVisible: true,
    },
    ["/cart"]: {
        selectedTab: 2,
        cameraPosition: [0, 0, 11],
        overlayVisible: true,
    },
    ["/customize"]: {
        selectedTab: 3,
        cameraPosition: [0, 0, 12],
        overlayVisible: false,
    },
    ["/preview"]: {
        selectedTab: 4,
        cameraPosition: [0, 0, 12],
        overlayVisible: false,
    },
    default: {
        selectedTab: 0,
        cameraPosition: [0, 0, 13],
        overlayVisible: true,
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

export const Menu = {
    margherita: {
        name: "Margherita",
        sauce: Sauces.tomato,
        ingredients: [Ingredients.cheese],
    },
    capricciosa: {
        name: "Capricciosa",
        sauce: Sauces.tomato,
        ingredients: [
            Ingredients.cheese,
            Ingredients.ham,
            Ingredients.mushrooms,
        ],
    },
    carbonara: {
        name: "Carbonara",
        sauce: Sauces.cream,
        ingredients: [Ingredients.cheese, Ingredients.bacon],
    },
};
