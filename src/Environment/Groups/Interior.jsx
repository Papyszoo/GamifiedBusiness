import React, { useEffect } from "react";
import Counter from "./Counter";
import TableWithTwoChairs from "./TableWithTwoChairs";
import TableWithFourChairs from "./TableWithFourChairs";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const Interior = (props) => {
    const [tilesColorTexture, wallColorTexture, roofColorTexture] = useTexture(
        [
            "/textures/tiles/patio_tiles_diff_1k.jpg",
            "/textures/tiles/dark_brick_wall_diff_1k.jpg",
            "/textures/tiles/roof_tiles_14_diff_1k.jpg",
        ],
        (tex) => {
            tex.forEach((t) => {
                t.repeat.set(10, 10);
                t.wrapS = THREE.RepeatWrapping;
                t.wrapT = THREE.RepeatWrapping;
            });
        }
    );

    useEffect(() => {
        roofColorTexture.repeat.set(5, 5);
    }, []);
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
            <mesh rotation-y={Math.PI} position-z={19}>
                <meshStandardMaterial
                    side={THREE.DoubleSide}
                    map={wallColorTexture}
                />
                <planeGeometry args={[50, 30]} />
            </mesh>
            <mesh rotation-y={Math.PI / 2} position={[-25, 0, 11.5]}>
                <meshStandardMaterial
                    side={THREE.DoubleSide}
                    map={wallColorTexture}
                />
                <planeGeometry args={[15, 30]} />
            </mesh>
            <mesh rotation-y={Math.PI / 2} position={[25, 0, 11.5]}>
                <meshStandardMaterial
                    side={THREE.DoubleSide}
                    map={wallColorTexture}
                />
                <planeGeometry args={[15, 30]} />
            </mesh>
            <group rotation-z={Math.PI / 3}>
                <mesh rotation-y={Math.PI / 2} position={[26, -3, 12]}>
                    <meshStandardMaterial
                        side={THREE.DoubleSide}
                        map={roofColorTexture}
                    />
                    <planeGeometry args={[16, 36]} />
                </mesh>
            </group>
            <group rotation-z={-Math.PI / 3}>
                <mesh rotation-y={-Math.PI / 2} position={[-26, -3, 12]}>
                    <meshStandardMaterial
                        side={THREE.DoubleSide}
                        map={roofColorTexture}
                    />
                    <planeGeometry args={[16, 36]} />
                </mesh>
            </group>
        </group>
    );
};

export default Interior;
