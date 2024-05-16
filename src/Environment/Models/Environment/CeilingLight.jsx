import React, { useRef } from "react";
import { useGLTF, useHelper } from "@react-three/drei";
import { useShallow } from "zustand/react/shallow";
import useOptionsStore from "../../../stores/useOptionsStore";
import * as THREE from "three";

const CeilingLight = (props) => {
    const lightRef = useRef();
    const { nodes, materials } = useGLTF(
        "/objects/environment/CeilingLight.glb"
    );
    const { shadowsHidden } = useOptionsStore(
        useShallow((state) => ({
            shadowsHidden: state.shadowsHidden,
        }))
    );
    // useHelper(lightRef, THREE.PointLightHelper, 0.1, "red");
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
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
                        emissive="yellow"
                        emissiveIntensity={1}
                    />
                </mesh>
            </group>
            <pointLight position={[0, -1, 0]} ref={lightRef} intensity={10} />
        </group>
    );
};

export default CeilingLight;

useGLTF.preload("/objects/environment/CeilingLight.glb");
