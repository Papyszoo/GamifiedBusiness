export const Tabs = {
    0: "/",
    1: "/menu",
    2: "/cart",
    3: "/customize",
};

export const Routes = {
    ["/menu"]: {
        selectedTab: 1,
    },
    ["/cart"]: {
        selectedTab: 2,
    },
    ["/customize"]: {
        selectedTab: 3,
    },
    default: {
        selectedTab: 0,
    },
};
