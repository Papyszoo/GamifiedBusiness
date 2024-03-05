import React from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

export function PizzaSun(props) {
    const { nodes, materials } = useGLTF("/pizzaSun.glb");
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
    return (
        <group
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
