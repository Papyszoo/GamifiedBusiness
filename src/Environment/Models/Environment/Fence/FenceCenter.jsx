import React from "react";
import { useGLTF } from "@react-three/drei";

const FenceCenter = (props) => {
    const { nodes, materials } = useGLTF(
        "/objects/environment/fence/FenceCenter.glb"
    );
    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.Fence_Center.geometry}
                material={materials.Atlas}
                scale={100}
            />
        </group>
    );
};

useGLTF.preload("/objects/environment/fence/FenceCenter.glb");
export default FenceCenter;
