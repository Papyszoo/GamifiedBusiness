import React from "react";
import useOptionsStore from "../stores/useOptionsStore";
import { Dialog } from "primereact/dialog";
import { useShallow } from "zustand/react/shallow";
import { Checkbox } from "primereact/checkbox";

const SettingsModal = () => {
    const {
        settingsVisible,
        environmentHidden,
        shadowsHidden,
        lightsHidden,
        toggleSettingsVisible,
        toggleEnvironmentVisible,
        toggleShadowsHidden,
        toggleLightsHidden,
    } = useOptionsStore(
        useShallow((state) => ({
            settingsVisible: state.settingsVisible,
            environmentHidden: state.environmentHidden,
            shadowsHidden: state.shadowsHidden,
            lightsHidden: state.lightsHidden,
            toggleSettingsVisible: state.toggleSettingsVisible,
            toggleEnvironmentVisible: state.toggleEnvironmentVisible,
            toggleShadowsHidden: state.toggleShadowsHidden,
            toggleLightsHidden: state.toggleLightsHidden,
        }))
    );
    return (
        <Dialog
            header="Settings"
            visible={settingsVisible}
            style={{ width: "30vw" }}
            onHide={() => toggleSettingsVisible()}
        >
            <div className="flex flex-column gap-3">
                <div className="flex flex-wrap gap-3">
                    <Checkbox
                        inputId="hideEnvironmentCheckbox"
                        name="hideEnvironmentCheckbox"
                        onChange={toggleEnvironmentVisible}
                        checked={environmentHidden}
                    />
                    <label htmlFor="hideEnvironmentCheckbox" className="ml-2">
                        Hide 3D Environment
                    </label>
                </div>
                <div className="flex flex-wrap gap-3">
                    <Checkbox
                        inputId="hideShadowsCheckbox"
                        name="pizza"
                        value="Mushroom"
                        disabled={environmentHidden}
                        onChange={toggleShadowsHidden}
                        checked={shadowsHidden}
                    />
                    <label htmlFor="hideShadowsCheckbox" className="ml-2">
                        Hide Shadows
                    </label>
                </div>
                <div className="flex flex-wrap gap-3">
                    <Checkbox
                        inputId="hideLightsCheckbox"
                        name="pizza"
                        value="Mushroom"
                        disabled={environmentHidden}
                        onChange={toggleLightsHidden}
                        checked={lightsHidden}
                    />
                    <label htmlFor="hideLightsCheckbox" className="ml-2">
                        Hide Lights
                    </label>
                </div>
            </div>
        </Dialog>
    );
};

export default SettingsModal;
