import React from "react";
import { useGLTF } from "@react-three/drei";
import { useShallow } from "zustand/react/shallow";
import useOptionsStore from "../../../stores/useOptionsStore";

const LampSquareTable = () => {
    const { nodes, materials } = useGLTF(
        "/objects/environment/LampSquareTable.glb"
    );
    const { lightsHidden } = useOptionsStore(
        useShallow((state) => ({
            lightsHidden: state.lightsHidden,
        }))
    );
    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.lampSquareTable_2.geometry}
                material={materials.lamp}
            />
            <mesh
                geometry={nodes.lampSquareTable_2_1.geometry}
                material={materials.metal}
            />
            <mesh
                geometry={nodes.lampSquareTable_3.geometry}
                material={materials.metal}
            />
            <mesh
                geometry={nodes.lampSquareTable_3_1.geometry}
                material={materials.lamp}
            />
        </group>
    );
};

export default LampSquareTable;

useGLTF.preload("/objects/environment/LampSquareTable.glb");
