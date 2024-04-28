import React, { useContext, useEffect } from "react";
import { PrimeReactContext } from "primereact/api";
import useOptionsStore from "../useOptionsStore";
import { useShallow } from "zustand/react/shallow";

const ThemeSwitcher = () => {
    const { changeTheme } = useContext(PrimeReactContext);

    const { darkMode } = useOptionsStore(
        useShallow((state) => ({
            darkMode: state.darkMode,
        }))
    );

    useEffect(() => {
        if (darkMode) {
            changeTheme("lara-light-teal", "lara-dark-teal", "theme-dark");
        } else {
            changeTheme("lara-dark-teal", "lara-light-teal", "theme-light");
        }
    }, [darkMode]);
    return <></>;
};

export default ThemeSwitcher;
