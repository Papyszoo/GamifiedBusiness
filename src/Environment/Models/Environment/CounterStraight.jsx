import React from "react";
import { useGLTF } from "@react-three/drei";

export function CounterStraight(props) {
    const { nodes, materials } = useGLTF(
        "/objects/environment/CounterStraight.glb"
    );
    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.Environment_Counter_Straight.geometry}
                material={materials.Atlas}
                scale={100}
            />
        </group>
    );
}

useGLTF.preload("/objects/environment/CounterStraight.glb");
