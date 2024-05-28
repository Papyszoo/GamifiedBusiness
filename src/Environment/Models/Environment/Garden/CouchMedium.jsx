import React from "react";
import { useGLTF } from "@react-three/drei";

const CouchMedium = (props) => {
    const { nodes, materials } = useGLTF(
        "/objects/environment/garden/CouchMedium.glb"
    );
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                    geometry={nodes.Couch_Medium1_1.geometry}
                    material={materials.Couch_Blue}
                />
                <mesh
                    geometry={nodes.Couch_Medium1_2.geometry}
                    material={materials.Black}
                />
            </group>
        </group>
    );
};

export default CouchMedium;
useGLTF.preload("/objects/environment/garden/CouchMedium.glb");
