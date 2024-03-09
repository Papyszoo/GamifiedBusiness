import { Perf } from "r3f-perf";
import React, { useRef, useEffect } from "react";
import PizzaPlace from "./PizzaPlace/PizzaPlace";
import { useFrame, useThree, extend } from "@react-three/fiber";
import { useShallow } from "zustand/react/shallow";
import useCameraStore from "./useCameraStore";
import { OrbitControls } from "three-stdlib";
import { easing } from "maath";
import { Bvh } from "@react-three/drei";

extend({ OrbitControls });

const Environment = () => {
    const three = useThree();
    const controls = useRef();

    const {
        targetCameraPosition,
        targetLookAt,
        setTargetCameraPosition,
        setTargetLookAt,
    } = useCameraStore(
        useShallow((state) => ({
            targetCameraPosition: state.targetCameraPosition,
            targetLookAtPosition: state.targetLookAtPosition,
            setTargetCameraPosition: state.setTargetCameraPosition,
            setTargetLookAtPosition: state.setTargetLookAtPosition,
        }))
    );

    console.log(three.raycaster);

    useFrame((state, dt) => {
        if (targetCameraPosition) {
            easing.damp3(state.camera.position, targetCameraPosition, 0.5, dt);
        }
        if (targetLookAtPosition) {
            easing.dampQ(
                state.camera.quaternion,
                targetLookAtPosition,
                0.5,
                dt
            );
        }
        controls.current.update();
    });

    useEffect(() => {
        if (targetCameraPosition || targetLookAtPosition) {
            controls.current.enabled = false;
        } else {
            controls.current.enabled = true;
        }
    }, [targetCameraPosition, targetLookAtPosition]);

    return (
        <Bvh>
            <Perf position="bottom-left" />
            <PizzaPlace />
            <orbitControls
                ref={controls}
                args={[three.camera, three.gl.domElement]}
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI / 2}
            />
        </Bvh>
    );
};

export default Environment;
