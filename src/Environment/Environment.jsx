import { Perf } from "r3f-perf";
import React, { useRef, useEffect } from "react";
import FakePizzeria from "./Restaurant/FakePizzeria";
import { useFrame, useThree, extend } from "@react-three/fiber";
import { useShallow } from "zustand/react/shallow";
import useCameraStore from "./useCameraStore";
import { OrbitControls } from "three-stdlib";
import { easing } from "maath";
import { Bvh } from "@react-three/drei";
import useOptionsStore from "../stores/useOptionsStore";

extend({ OrbitControls });

const Environment = () => {
    const three = useThree();
    const controls = useRef();

    const { environmentHidden } = useOptionsStore(
        useShallow((state) => ({
            environmentHidden: state.environmentHidden,
        }))
    );

    const {
        targetCameraPosition,
        targetLookAt,
        setTargetCameraPosition,
        setTargetLookAt,
    } = useCameraStore(
        useShallow((state) => ({
            targetCameraPosition: state.targetCameraPosition,
            targetLookAt: state.targetLookAt,
            setTargetCameraPosition: state.setTargetCameraPosition,
            setTargetLookAt: state.setTargetLookAt,
        }))
    );

    useFrame((state, dt) => {
        if (targetCameraPosition) {
            easing.damp3(state.camera.position, targetCameraPosition, 0.5, dt);
            if (targetCameraPosition.distanceTo(state.camera.position) < 5) {
                setTargetCameraPosition(null);
            }
        }
        if (targetLookAt) {
            easing.dampQ(
                state.camera.quaternion,
                targetLookAt.quaternion,
                0.5,
                dt
            );
        }
        controls.current.update();
    });

    useEffect(() => {
        if (targetCameraPosition) {
            controls.current.enabled = false;
        } else {
            controls.current.enabled = true;
        }
    }, [targetCameraPosition, targetLookAt]);

    return (
        <Bvh>
            <Perf position="bottom-left" />
            {environmentHidden ? <></> : <FakePizzeria />}
            <orbitControls
                ref={controls}
                args={[three.camera, three.gl.domElement]}
                // enableZoom={false}
                // enablePan={false}
                maxPolarAngle={Math.PI / 2}
            />
        </Bvh>
    );
};

export default Environment;
