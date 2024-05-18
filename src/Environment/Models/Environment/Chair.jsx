import React from "react";
import { useGLTF } from "@react-three/drei";

export function Chair(props) {
    const { nodes, materials } = useGLTF("/objects/environment/Chair.glb");

    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Chair_1.geometry}
                    material={materials.Wood}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Chair_2.geometry}
                    material={materials.Cushing}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/objects/environment/Chair.glb");
