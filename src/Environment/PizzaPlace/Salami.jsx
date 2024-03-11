import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default Salami = (props) => {
    const { nodes, materials } = useGLTF("/salami.glb");
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder_1.geometry}
                material={materials.Material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder_2.geometry}
                material={materials["Material.001"]}
            />
        </group>
    );
};

useGLTF.preload("/salami.glb");
