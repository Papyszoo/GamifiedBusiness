import React from "react";
import Counter from "./Counter";
import TableWithTwoChairs from "./TableWithTwoChairs";
import TableWithFourChairs from "./TableWithFourChairs";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

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
            {/* <mesh position={[0, 0.075, 4]} rotation-x={-Math.PI / 2}>
                <meshStandardMaterial map={tilesColorTexture} />
                <planeGeometry args={[50, 30]} />
            </mesh> */}
            <group position-y={0.3}>
                <Counter position={[-6, 0, 8]} />
                <TableWithTwoChairs position={[-11, 0, 8]} />
                <TableWithTwoChairs position={[11, 0, 8]} />
                <TableWithFourChairs position={[5, 0, 1]} />
                <TableWithFourChairs position={[-8, 0, -1]} />
            </group>
        </group>
    );
};

export default Interior;
