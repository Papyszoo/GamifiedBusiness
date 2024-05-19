import React from "react";
import { useGLTF } from "@react-three/drei";
import { useShallow } from "zustand/react/shallow";
import useOptionsStore from "../../../stores/useOptionsStore";

const LampSquareTable = () => {
    const { nodes, materials } = useGLTF(
        "/objects/environment/LampSquareTable.glb"
    );
    const { shadowsHidden, lightsHidden } = useOptionsStore(
        useShallow((state) => ({
            shadowsHidden: state.shadowsHidden,
            lightsHidden: state.lightsHidden,
        }))
    );
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow={!shadowsHidden}
                geometry={nodes.lampSquareTable_2.geometry}
                material={materials.lamp}
            />
            <mesh
                castShadow={!shadowsHidden}
                geometry={nodes.lampSquareTable_2_1.geometry}
                material={materials.metal}
            />
            <mesh
                castShadow={!shadowsHidden}
                geometry={nodes.lampSquareTable_3.geometry}
                material={materials.metal}
            />
            <mesh
                castShadow={!shadowsHidden}
                geometry={nodes.lampSquareTable_3_1.geometry}
                material={materials.lamp}
            />
        </group>
    );
};

export default LampSquareTable;

useGLTF.preload("/objects/environment/LampSquareTable.glb");
