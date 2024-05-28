import React from "react";
import { useGLTF } from "@react-three/drei";

const CouchSmall = (props) => {
    const { nodes, materials } = useGLTF(
        "/objects/environment/garden/CouchSmall.glb"
    );
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={80}>
                <mesh
                    geometry={nodes.Couch_Small1_1.geometry}
                    material={materials.Couch_Blue}
                />
                <mesh
                    geometry={nodes.Couch_Small1_2.geometry}
                    material={materials.Black}
                />
            </group>
        </group>
    );
};

export default CouchSmall;
useGLTF.preload("/objects/environment/garden/CouchSmall.glb");
