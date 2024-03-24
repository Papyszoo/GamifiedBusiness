import React from "react";
import { MeshReflectorMaterial, useGLTF } from "@react-three/drei";
import floorVertexShader from "./shaders/floorVertex.glsl";
import floorFragmentShader from "./shaders/floorFragment.glsl";
import islandVertexShader from "./shaders/islandVertex.glsl";
import islandFragmentShader from "./shaders/islandFragment.glsl";
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
                <shaderMaterial
                    vertexShader={islandVertexShader}
                    fragmentShader={islandFragmentShader}
                />
                {/* <meshBasicMaterial color="grey" /> */}
            </mesh>
            <mesh
                name="Floor"
                castShadow
                receiveShadow
                geometry={nodes.Floor.geometry}
            >
                <shaderMaterial
                    vertexShader={floorVertexShader}
                    fragmentShader={floorFragmentShader}
                />
            </mesh>

            <mesh castShadow receiveShadow geometry={nodes.Roof.geometry}>
                <meshBasicMaterial color="#990000" side={THREE.DoubleSide} />
            </mesh>
        </group>
    );
}

useGLTF.preload("/floatingIsland.glb");
