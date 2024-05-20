import { useGLTF } from "@react-three/drei";
import React, { useState } from "react";
import useOptionsStore from "../../../stores/useOptionsStore";
import { useShallow } from "zustand/react/shallow";

const LampSquareFloor = (props) => {
    const [lightsOn, setLightsOn] = useState(true);
    const { nodes, materials } = useGLTF(
        "/objects/environment/LampSquareFloor.glb"
    );
    const { lightsHidden } = useOptionsStore(
        useShallow((state) => ({
            lightsHidden: state.lightsHidden,
        }))
    );
    const areLightsOn = () => !lightsHidden && lightsOn;
    return (
        <group {...props} dispose={null}>
            <group>
                <group
                    scale={4}
                    onClick={(e) => {
                        setLightsOn((prev) => !prev);
                        e.stopPropagation();
                    }}
                    onPointerEnter={() => {
                        document.body.style.cursor = "pointer";
                    }}
                    onPointerLeave={() => {
                        document.body.style.cursor = "default";
                    }}
                >
                    <mesh
                        geometry={nodes.lampSquareFloor_2.geometry}
                        material={materials.lamp}
                    >
                        <meshStandardMaterial
                            emissive={areLightsOn() ? "yellow" : ""}
                            emissiveIntensity={areLightsOn() ? 1 : 0}
                        />
                    </mesh>
                    <mesh
                        geometry={nodes.lampSquareFloor_2_1.geometry}
                        material={materials.metal}
                    />
                    <mesh
                        geometry={nodes.lampSquareFloor_3.geometry}
                        material={materials.metal}
                    />
                </group>
                <pointLight
                    position={[-0.24, 3.2, 0.24]}
                    intensity={areLightsOn() ? 25 : 0}
                />
                <pointLight
                    position={[-0.24, 1, 0.24]}
                    intensity={areLightsOn() ? 25 : 0}
                />
            </group>
        </group>
    );
};

export default LampSquareFloor;
useGLTF.preload("/objects/environment/LampSquareFloor.glb");
