import React from "react";
import { useGLTF } from "@react-three/drei";

export const Ham = (props) => {
    const { nodes, materials } = useGLTF("/ham.glb");
    return (
        <group {...props} dispose={null}>
            <mesh
                name="Ham"
                geometry={nodes.Ham.geometry}
                material={materials.Ham}
            />
        </group>
    );
};

useGLTF.preload("/ham.glb");
