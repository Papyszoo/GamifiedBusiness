import React from "react";
import CouchesWithTable from "./CouchesWithTable";
import PathWithBushes from "./PathWithBushes";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const Garden = (props) => {
    const grassColorTexture = useTexture(
        "/textures/GroundGrassGreen002_COL_1K.jpg",
        (t) => {
            t.repeat.set(100, 100);
            t.wrapS = THREE.RepeatWrapping;
            t.wrapT = THREE.RepeatWrapping;
        }
    );
    return (
        <group {...props}>
            <mesh rotation-x={-Math.PI / 2} scale={1500}>
                <planeGeometry />
                <meshStandardMaterial map={grassColorTexture} />
            </mesh>
            <group position-z={-25}>
                <CouchesWithTable
                    position={[20, 0, 0]}
                    rotation-y={Math.PI / 2}
                />
                <CouchesWithTable
                    position={[-20, 0, 0]}
                    rotation-y={Math.PI / 2}
                />
                <PathWithBushes />
            </group>
        </group>
    );
};

export default Garden;
