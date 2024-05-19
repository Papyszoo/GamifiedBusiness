import React from "react";
import { useGLTF } from "@react-three/drei";
import useOptionsStore from "../../../stores/useOptionsStore";
import { useShallow } from "zustand/react/shallow";

export function Chair(props) {
    const { nodes, materials } = useGLTF("/objects/environment/Chair.glb");
    const { shadowsHidden } = useOptionsStore(
        useShallow((state) => ({
            shadowsHidden: state.shadowsHidden,
        }))
    );

    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                    geometry={nodes.Chair_1.geometry}
                    material={materials.Wood}
                    castShadow
                />
                <mesh
                    castShadow
                    geometry={nodes.Chair_2.geometry}
                    material={materials.Cushing}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/objects/environment/Chair.glb");
