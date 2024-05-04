import { create } from "zustand";

export default create((set, get) => ({
    darkMode: true,
    overlayVisible: true,
    toggleDarkMode: () => {
        set((state) => ({
            darkMode: !get().darkMode,
        }));
    },
    toggleOverlayVisible: () => {
        set((state) => ({
            overlayVisible: !get().overlayVisible,
        }));
    },
}));
