import React from "react";
import { useGLTF } from "@react-three/drei";

export function CounterCorner(props) {
    const { nodes, materials } = useGLTF(
        "/objects/environment/CounterCorner.glb"
    );
    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.Environment_Counter_Corner.geometry}
                material={materials.Atlas}
                scale={100}
            />
        </group>
    );
}

useGLTF.preload("/objects/environment/CounterCorner.glb");
