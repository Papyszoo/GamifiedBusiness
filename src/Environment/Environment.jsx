import { Perf } from "r3f-perf";
import React, { useEffect } from "react";
import PizzaPlace from "./PizzaPlace/PizzaPlace";
import { useThree } from "@react-three/fiber";
import useLocationSettingsStore from "../useLocationSettingsStore";
import { useShallow } from "zustand/react/shallow";

const Environment = () => {
    const three = useThree();
    const { cameraPosition, setEnvironmentLoaded } = useLocationSettingsStore(
        useShallow((state) => ({
            cameraPosition: state.cameraPosition,
            setEnvironmentLoaded: state.setEnvironmentLoaded,
        }))
    );

    useEffect(() => {
        // three.camera.
    }, [cameraPosition]);

    console.log(three);
    return (
        <>
            <Perf position="bottom-left" />
            <PizzaPlace />
        </>
    );
};

export default Environment;
