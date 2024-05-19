import { useGLTF } from "@react-three/drei";
import React, { useState } from "react";
import useOptionsStore from "../../../stores/useOptionsStore";
import { useShallow } from "zustand/react/shallow";

const Gazebo = (props) => {
    const { nodes, materials } = useGLTF("/objects/environment/Gazebo.glb");
    const { shadowsHidden } = useOptionsStore(
        useShallow((state) => ({
            shadowsHidden: state.shadowsHidden,
        }))
    );
    return (
        <group {...props} dispose={null}>
            <group rotation-y={Math.PI / 2}>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={1000}>
                    <mesh
                        castShadow={!shadowsHidden}
                        geometry={nodes.Gazebo_1.geometry}
                        material={materials.RoofTiles_Red}
                    />
                    <mesh
                        castShadow
                        geometry={nodes.Gazebo_2.geometry}
                        material={materials.Wood}
                    />
                </group>
                <mesh castShadow material={materials.Wood} position-y={5.74}>
                    <boxGeometry args={[0.38, 0.38, 10.5]} />
                </mesh>
            </group>
        </group>
    );
};

export default Gazebo;

useGLTF.preload("/objects/environment/Gazebo.glb");
