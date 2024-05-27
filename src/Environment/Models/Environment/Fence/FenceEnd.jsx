import React from "react";
import { useGLTF } from "@react-three/drei";

const FenceEnd = () => {
    const { nodes, materials } = useGLTF(
        "/objects/environment/fence/FenceEnd.glb"
    );
    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.Fence_End.geometry}
                material={materials.Atlas}
                scale={100}
            />
        </group>
    );
};

useGLTF.preload("/objects/environment/fence/FenceEnd.glb");
export default FenceEnd;
