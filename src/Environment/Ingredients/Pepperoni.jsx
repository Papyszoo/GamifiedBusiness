import React from "react";
import { useGLTF } from "@react-three/drei";

const Pepperoni = (props) => {
    const { nodes, materials } = useGLTF("/pepperoni.glb");
    return (
        <group {...props} dispose={null}>
            <mesh
                name="Pepperoni_1"
                geometry={nodes.Pepperoni_1.geometry}
                material={materials.Outside}
            />
            <mesh
                name="Pepperoni_2"
                geometry={nodes.Pepperoni_2.geometry}
                material={materials.Inside}
            />
        </group>
    );
};

useGLTF.preload("/pepperoni.glb");

export default Pepperoni;
