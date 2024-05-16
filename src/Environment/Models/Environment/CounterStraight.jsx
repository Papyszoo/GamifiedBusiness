import React from "react";
import { useGLTF } from "@react-three/drei";
import { useShallow } from "zustand/react/shallow";
import useOptionsStore from "../../../stores/useOptionsStore";

export function CounterStraight(props) {
    const { nodes, materials } = useGLTF(
        "/objects/environment/CounterStraight.glb"
    );
    const { shadowsHidden } = useOptionsStore(
        useShallow((state) => ({
            shadowsHidden: state.shadowsHidden,
        }))
    );
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow={!shadowsHidden}
                receiveShadow={!shadowsHidden}
                geometry={nodes.Environment_Counter_Straight.geometry}
                material={materials.Atlas}
                scale={100}
            />
        </group>
    );
}

useGLTF.preload("/objects/environment/CounterStraight.glb");
