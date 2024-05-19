import { useGLTF } from "@react-three/drei";
import React, { useState } from "react";
import useOptionsStore from "../../../stores/useOptionsStore";
import { useShallow } from "zustand/react/shallow";

const LampSquareFloor = (props) => {
    const [lightsOn, setLightsOn] = useState(true);
    const { nodes, materials } = useGLTF(
        "/objects/environment/LampSquareFloor.glb"
    );
    const { shadowsHidden, lightsHidden } = useOptionsStore(
        useShallow((state) => ({
            shadowsHidden: state.shadowsHidden,
            lightsHidden: state.lightsHidden,
        }))
    );
    const areLightsOn = () => !lightsHidden && lightsOn;
    return (
        <group {...props} dispose={null}>
            <group>
                <group
                    scale={4}
                    onClick={() => setLightsOn((prev) => !prev)}
                    onPointerEnter={() => {
                        document.body.style.cursor = "pointer";
                    }}
                    onPointerLeave={() => {
                        document.body.style.cursor = "default";
                    }}
                >
                    <mesh
                        castShadow
                        geometry={nodes.lampSquareFloor_2.geometry}
                        material={materials.lamp}
                    >
                        <meshStandardMaterial
                            emissive={areLightsOn() ? "yellow" : ""}
                            emissiveIntensity={areLightsOn() ? 1 : 0}
                        />
                    </mesh>
                    <mesh
                        castShadow
                        geometry={nodes.lampSquareFloor_2_1.geometry}
                        material={materials.metal}
                    />
                    <mesh
                        castShadow
                        geometry={nodes.lampSquareFloor_3.geometry}
                        material={materials.metal}
                    />
                </group>
                <pointLight
                    position={[-0.24, 3.2, 0.24]}
                    intensity={areLightsOn() ? 25 : 0}
                    castShadow
                />
                <pointLight
                    position={[-0.24, 1, 0.24]}
                    intensity={areLightsOn() ? 25 : 0}
                    castShadow
                />
            </group>
        </group>
    );
};

export default LampSquareFloor;
useGLTF.preload("/objects/environment/LampSquareFloor.glb");
