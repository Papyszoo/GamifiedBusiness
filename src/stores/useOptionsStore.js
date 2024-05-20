import { create } from "zustand";

export default create((set, get) => ({
    darkMode: true,
    overlayVisible: false,
    settingsVisible: false,
    environmentHidden: false,
    lightsHidden: false,
    toggleDarkMode: () => {
        set(() => ({
            darkMode: !get().darkMode,
        }));
    },
    toggleOverlayVisible: () => {
        set(() => ({
            overlayVisible: !get().overlayVisible,
        }));
    },
    toggleSettingsVisible: () => {
        set(() => ({
            settingsVisible: !get().settingsVisible,
        }));
    },
    toggleEnvironmentVisible: () => {
        set(() => ({
            environmentHidden: !get().environmentHidden,
        }));
    },
    toggleLightsHidden: () => {
        set(() => ({
            lightsHidden: !get().lightsHidden,
        }));
    },
}));
