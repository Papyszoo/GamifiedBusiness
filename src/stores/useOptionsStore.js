import { create } from "zustand";

export default create((set, get) => ({
    darkMode: true,
    toggleDarkMode: () => {
        set((state) => ({
            darkMode: !get().darkMode,
        }));
    },
}));
