import { create } from "zustand";

export default create((set) => ({
    selectedTab: 0,
    cameraPosition: [0, 0, 10],
    environmentLoaded: false,
    locationChanged: (settings) => {
        set(settings);
    },
    setEnvironmentLoaded: (environmentLoaded) => {
        set({ environmentLoaded: environmentLoaded });
    },
}));
