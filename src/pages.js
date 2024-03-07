export const Tabs = {
    0: "/",
    1: "/menu",
    2: "/cart",
    3: "/customize",
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
    default: {
        selectedTab: 0,
        cameraPosition: [0, 0, 13],
        overlayVisible: true,
    },
};
