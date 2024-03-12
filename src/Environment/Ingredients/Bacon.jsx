import React from "react";
import { useGLTF } from "@react-three/drei";

export const Bacon = (props) => {
    const { nodes, materials } = useGLTF("/bacon.glb");
    return (
        <group {...props} dispose={null}>
            <mesh
                name="Bacon"
                geometry={nodes.Bacon.geometry}
                material={materials.Bacon}
            />
        </group>
    );
};

useGLTF.preload("/bacon.glb");
