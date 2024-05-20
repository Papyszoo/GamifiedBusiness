import { useGLTF } from "@react-three/drei";
import React from "react";

const GardenTable = (props) => {
    const { nodes, materials } = useGLTF(
        "/objects/environment/GardenTable.glb"
    );
    return (
        <group {...props} dispose={null}>
            <group rotation-y={-Math.PI / 2}>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={170}>
                    <mesh
                        geometry={nodes.Table2_1.geometry}
                        material={materials.DarkWood}
                    />
                    <mesh
                        geometry={nodes.Table2_2.geometry}
                        material={materials.Wood}
                    />
                </group>
            </group>
        </group>
    );
};

export default GardenTable;
useGLTF.preload("/objects/environment/GardenTable.glb");
