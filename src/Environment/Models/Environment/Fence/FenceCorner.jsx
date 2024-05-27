import React from "react";
import { useGLTF } from "@react-three/drei";

const FenceCorner = () => {
    const { nodes, materials } = useGLTF(
        "/objects/environment/fence/FenceCorner.glb"
    );
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence_Corner.geometry}
                material={materials.Atlas}
                scale={100}
            />
        </group>
    );
};

useGLTF.preload("/objects/environment/fence/FenceCorner.glb");
export default FenceCorner;
