import { create } from "zustand";

export default create((set, get) => ({
    darkMode: true,
    overlayVisible: true,
    settingsVisible: false,
    environmentHidden: false,
    shadowsHidden: false,
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
    toggleShadowsHidden: () => {
        set(() => ({
            shadowsHidden: !get().shadowsHidden,
        }));
    },
    toggleLightsHidden: () => {
        set(() => ({
            lightsHidden: !get().lightsHidden,
        }));
    },
}));
