import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useShallow } from "zustand/react/shallow";
import useCameraStore from "../useCameraStore";

export function PizzaSun(props) {
    const { nodes, materials } = useGLTF("/pizzaSun.glb");
    const pizzaSunRef = useRef();
    const pizzaSunParameters = useControls("Pizza Sun", {
        position: {
            x: -80,
            y: 22,
            z: -144,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
    });
    const { setTargetLookAt } = useCameraStore(
        useShallow((state) => ({
            setTargetLookAt: state.setTargetLookAt,
        }))
    );

    useEffect(() => {
        if (pizzaSunRef.current) {
            setTargetLookAt(pizzaSunRef.current);
        }
    }, []);
    return (
        <group
            ref={pizzaSunRef}
            {...props}
            dispose={null}
            position={[...Object.values(pizzaSunParameters.position)]}
            rotation={[...Object.values(pizzaSunParameters.rotation)]}
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["pizza-sun"].geometry}
                material={materials.Material}
                rotation={[Math.PI / 2, 0, 0]}
            />
        </group>
    );
}

useGLTF.preload("/pizzaSun.glb");
