import React from "react";
import { MeshReflectorMaterial, useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function FloatingIsland(props) {
    const { nodes } = useGLTF("/floatingIsland.glb");
    return (
        <group {...props} dispose={null}>
            <mesh
                name="Island"
                castShadow
                receiveShadow
                geometry={nodes.Island.geometry}
            >
                <meshBasicMaterial color="grey" />
            </mesh>
            <mesh
                name="Floor"
                castShadow
                receiveShadow
                geometry={nodes.Floor.geometry}
            >
                <MeshReflectorMaterial
                    color="#ffffff"
                    metalness={0.9}
                    side={THREE.DoubleSide}
                />
            </mesh>
        </group>
    );
}

useGLTF.preload("/floatingIsland.glb");
