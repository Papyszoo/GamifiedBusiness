import React, { useRef, useState } from "react";
import { useGLTF, useHelper, meshBounds } from "@react-three/drei";
import { useShallow } from "zustand/react/shallow";
import useOptionsStore from "../../../stores/useOptionsStore";
import * as THREE from "three";

const CeilingLight = (props) => {
    const [lightsOn, setLightsOn] = useState(true);
    const lightRef = useRef();
    const { nodes, materials } = useGLTF(
        "/objects/environment/CeilingLight.glb"
    );
    const { shadowsHidden, lightsHidden } = useOptionsStore(
        useShallow((state) => ({
            shadowsHidden: state.shadowsHidden,
            lightsHidden: state.lightsHidden,
        }))
    );

    const areLightsOn = () => !lightsHidden && lightsOn;
    // useHelper(lightRef, THREE.PointLightHelper, 0.1, "red");
    return (
        <group
            {...props}
            dispose={null}
            onClick={() => setLightsOn((prev) => !prev)}
            raycast={meshBounds}
            onPointerEnter={() => {
                document.body.style.cursor = "pointer";
            }}
            onPointerLeave={() => {
                document.body.style.cursor = "default";
            }}
        >
            <group rotation={[-Math.PI / 2, 0, 0]} scale={120}>
                <mesh
                    castShadow={!shadowsHidden}
                    receiveShadow={!shadowsHidden}
                    geometry={nodes.Light_Ceiling2_1.geometry}
                    material={materials.Grey}
                />
                <mesh
                    castShadow={!shadowsHidden}
                    receiveShadow={!shadowsHidden}
                    geometry={nodes.Light_Ceiling2_2.geometry}
                    material={materials.LightMetal}
                />
                <mesh
                    castShadow={!shadowsHidden}
                    receiveShadow={!shadowsHidden}
                    geometry={nodes.Light_Ceiling2_3.geometry}
                >
                    <meshStandardMaterial
                        emissive={areLightsOn() ? "yellow" : ""}
                        emissiveIntensity={areLightsOn() ? 1 : 0}
                    />
                </mesh>
            </group>
            <pointLight
                position={[0, -1, 0]}
                ref={lightRef}
                intensity={areLightsOn() ? 25 : 0}
            />
        </group>
    );
};

export default CeilingLight;

useGLTF.preload("/objects/environment/CeilingLight.glb");