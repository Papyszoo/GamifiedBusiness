import React from "react";
import { useGLTF } from "@react-three/drei";

export function Chair(props) {
    const { nodes, materials } = useGLTF("/objects/environment/chair.glb");

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Chair.geometry}
                material={materials.Material}
            ></mesh>
        </group>
    );
}

useGLTF.preload("/objects/environment/chair.glb");
