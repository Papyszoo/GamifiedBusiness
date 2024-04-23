import "./style.css";
import React, { useEffect } from "react";
import { useLocation } from "wouter";
import { Routes } from "./Constants";
import useLocationSettingsStore from "./useLocationSettingsStore";
import { useShallow } from "zustand/react/shallow";
import Overlay from "./Overlay/Overlay";
import { Leva } from "leva";
import { lazy } from "react";
import { Canvas } from "@react-three/offscreen";

const App = () => {
    const worker = new Worker(new URL("./worker.jsx", import.meta.url), {
        type: "module",
    });
    const Scene = lazy(() => import("./Environment/Environment"));
    const [location] = useLocation();

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
            <Canvas
                worker={worker}
                fallback={<Scene />}
                shadows
                camera={{ position: [0, 5, 10], fov: 25 }}
            />
            <Overlay />
        </>
    );
};

export default App;
