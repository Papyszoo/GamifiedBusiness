import React from "react";
import { useGLTF } from "@react-three/drei";

const Wall = (props) => {
    const { nodes, materials } = useGLTF("objects/environment/Wall.glb");
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Wall_1.geometry}
                    material={materials.Highlights}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Wall_2.geometry}
                    material={materials.Main}
                />
            </group>
        </group>
    );
};

export default Wall;
useGLTF.preload("objects/environment/Wall.glb");
