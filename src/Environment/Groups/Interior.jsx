import React from "react";
import Counter from "./Counter";
import TableWithTwoChairs from "./TableWithTwoChairs";
import TableWithFourChairs from "./TableWithFourChairs";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import Wall from "../Models/Environment/Interior/Wall";

const Interior = (props) => {
    const tilesColorTexture = useTexture(
        "/textures/tiles/patio_tiles_diff_1k.jpg",
        (t) => {
            t.repeat.set(10, 10);
            t.wrapS = THREE.RepeatWrapping;
            t.wrapT = THREE.RepeatWrapping;
        }
    );
    return (
        <group {...props}>
            <mesh position={[0, 0.075, 4]} rotation-x={-Math.PI / 2}>
                <meshStandardMaterial map={tilesColorTexture} />
                <planeGeometry args={[50, 30]} />
            </mesh>
            <group position-y={0.3}>
                <Counter position={[-6, 0, 8]} />
                <TableWithTwoChairs position={[-11, 0, 8]} />
                <TableWithTwoChairs position={[11, 0, 8]} />
                <TableWithFourChairs position={[5, 0, 1]} />
                <TableWithFourChairs position={[-8, 0, -1]} />
            </group>
            <group position-z={19.5} scale={2}>
                <group position-x={-12}>
                    <Wall />
                    <Wall position-y={2} />
                </group>
                <group position-x={-10}>
                    <Wall />
                    <Wall position-y={2} />
                </group>
                <group position-x={-8}>
                    <Wall />
                    <Wall position-y={2} />
                </group>
                <group position-x={-6}>
                    <Wall />
                    <Wall position-y={2} />
                </group>
                <group position-x={-4}>
                    <Wall />
                    <Wall position-y={2} />
                </group>
                <group position-x={-2}>
                    <Wall />
                    <Wall position-y={2} />
                </group>
                <group>
                    <Wall />
                    <Wall position-y={2} />
                </group>
                <group position-x={2}>
                    <Wall />
                    <Wall position-y={2} />
                </group>
                <group position-x={4}>
                    <Wall />
                    <Wall position-y={2} />
                </group>
                <group position-x={6}>
                    <Wall />
                    <Wall position-y={2} />
                </group>
                <group position-x={8}>
                    <Wall />
                    <Wall position-y={2} />
                </group>
                <group position-x={10}>
                    <Wall />
                    <Wall position-y={2} />
                </group>
                <group position-x={12}>
                    <Wall />
                    <Wall position-y={2} />
                </group>
            </group>
        </group>
    );
};

export default Interior;
