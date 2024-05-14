import React from "react";
import useOptionsStore from "../stores/useOptionsStore";
import { Dialog } from "primereact/dialog";
import { useShallow } from "zustand/react/shallow";

const SettingsModal = () => {
    const { settingsVisible, toggleSettingsVisible } = useOptionsStore(
        useShallow((state) => ({
            settingsVisible: state.settingsVisible,
            toggleSettingsVisible: state.toggleSettingsVisible,
        }))
    );
    return (
        <Dialog
            header="Settings"
            visible={settingsVisible}
            style={{ width: "60vw" }}
            onHide={() => toggleSettingsVisible()}
        ></Dialog>
    );
};

export default SettingsModal;
