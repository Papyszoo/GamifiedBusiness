import React from "react";
import { useGLTF } from "@react-three/drei";

const SmallBush = (props) => {
    const { nodes, materials } = useGLTF(
        "/objects/environment/garden/SmallBush.glb"
    );
    return (
        <group
            {...props}
            dispose={null}
            scale={2}
            rotation-y={(Math.random() - 0.5) * 3}
        >
            <mesh
                geometry={nodes.Bush.geometry}
                material={materials.Bush_Leaves}
            />
        </group>
    );
};

useGLTF.preload("/objects/environment/garden/SmallBush.glb");
export default SmallBush;
