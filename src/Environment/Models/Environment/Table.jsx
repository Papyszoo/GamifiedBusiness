import React from "react";
import { useGLTF } from "@react-three/drei";

const Table = (props) => {
    const { nodes } = useGLTF("/objects/environment/table.glb");
    return (
        <group {...props} dispose={null}>
            <group scale={0.2}>
                <mesh castShadow receiveShadow geometry={nodes.Table.geometry}>
                    <meshStandardMaterial color="#57371b" />
                </mesh>
                <mesh castShadow receiveShadow geometry={nodes.Plane.geometry}>
                    <meshStandardMaterial color="#cccccc" />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Table001.geometry}
                >
                    <meshStandardMaterial color="#845931" />
                </mesh>
            </group>
        </group>
    );
};

export default Table;
useGLTF.preload("/objects/environment/table.glb");
