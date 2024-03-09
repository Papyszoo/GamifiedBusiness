import { Perf } from "r3f-perf";
import React, { useEffect } from "react";
import PizzaPlace from "./PizzaPlace/PizzaPlace";
import { useFrame, useThree } from "@react-three/fiber";
import useLocationSettingsStore from "../useLocationSettingsStore";
import { useShallow } from "zustand/react/shallow";
import useCameraStore from "./useCameraStore";

const Environment = () => {
    const three = useThree();

    const { targetCameraPosition, targetLookAtPosition } = useCameraStore(
        useShallow((state) => ({
            targetCameraPosition: state.targetCameraPosition,
            targetLookAtPosition: state.targetLookAtPosition,
        }))
    );

    useFrame((state, delta) => {
        state.camera.position.lerp(targetCameraPosition, 2 * delta);
        state.camera.lookAt(targetLookAtPosition);
    });

    console.log(three);
    return (
        <>
            <Perf position="bottom-left" />
            <PizzaPlace />
        </>
    );
};

export default Environment;
