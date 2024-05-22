import React from "react";
import { useGLTF } from "@react-three/drei";

const TableWithTablecloth = (props) => {
    const { nodes } = useGLTF("/objects/environment/TableWithTablecloth.glb");
    return (
        <group {...props} dispose={null}>
            <group scale={0.2}>
                <mesh geometry={nodes.Table.geometry}>
                    <meshStandardMaterial color="#57371b" />
                </mesh>
                <mesh geometry={nodes.Plane.geometry}>
                    <meshStandardMaterial color="#cccccc" />
                </mesh>
                <mesh geometry={nodes.Table001.geometry}>
                    <meshStandardMaterial color="#845931" />
                </mesh>
            </group>
        </group>
    );
};

export default TableWithTablecloth;
useGLTF.preload("/objects/environment/TableWithTablecloth.glb");
