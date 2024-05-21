import React from "react";
import { useGLTF } from "@react-three/drei";

const SmallBush = (props) => {
    const { nodes, materials } = useGLTF("/objects/environment/SmallBush.glb");
    return (
        <group {...props} dispose={null} position-y={-5}>
            <mesh
                geometry={nodes.Bush.geometry}
                material={materials.Bush_Leaves}
            />
        </group>
    );
};

useGLTF.preload("/objects/environment/SmallBush.glb");
export default SmallBush;
