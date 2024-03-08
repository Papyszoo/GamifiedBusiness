import "./style.css";
import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useLocation } from "wouter";
import { Routes } from "./Constants";
import useLocationSettingsStore from "./useLocationSettingsStore";
import { useShallow } from "zustand/react/shallow";
import Overlay from "./Overlay/Overlay";
import Environment from "./Environment/Environment";
import { Leva } from "leva";

const App = () => {
    const [location, setLocation] = useLocation();

    const { locationChanged } = useLocationSettingsStore(
        useShallow((state) => ({
            locationChanged: state.locationChanged,
        }))
    );

    useEffect(() => {
        const newLocationSettings = Routes[location] ?? Routes.default;
        locationChanged(newLocationSettings);
    }, [location]);

    return (
        <>
            <Leva />
            <Canvas camera={{ position: [0, 0, 10] }}>
                <Environment />
            </Canvas>
            <Overlay />
        </>
    );
};

export default App;
