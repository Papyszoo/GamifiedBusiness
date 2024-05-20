import { Stars, useTexture } from "@react-three/drei";
import { extend, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { UnrealBloomPass } from "three-stdlib";
import useOptionsStore from "../../stores/useOptionsStore";
import { useShallow } from "zustand/react/shallow";
import Floors from "./Floors/Floors";
import { Suspense } from "react";
import SkyContainer from "./SkyContainer";
import Interior from "../Groups/Interior";
import Garden from "../Groups/Garden";
import * as THREE from "three";

extend({ UnrealBloomPass });

export default function FakePizzeria() {
    const three = useThree();
    const grassColorTexture = useTexture(
        "/textures/GroundGrassGreen002_COL_1K.jpg",
        (t) => {
            t.repeat.set(100, 100);
            t.wrapS = THREE.RepeatWrapping;
            t.wrapT = THREE.RepeatWrapping;
        }
    );
    const elementPosition = useControls("Position", {
        position: {
            x: 0,
            y: 0,
            z: 0,
        },
    });

    const { darkMode } = useOptionsStore(
        useShallow((state) => ({
            darkMode: state.darkMode,
        }))
    );
    return (
        <>
            {darkMode ? (
                <>
                    <Stars count={400} />

                    <color attach="background" args={["black"]} />
                </>
            ) : (
                <SkyContainer />
            )}
            <axesHelper args={[25]} />

            <Interior />
            <Garden />

            {/* position={[
                    elementPosition.position.x,
                    elementPosition.position.y,
                    elementPosition.position.z,
                ]} */}

            <mesh rotation-x={-Math.PI / 2} scale={1500} position-y={-5}>
                <planeGeometry />
                <meshStandardMaterial map={grassColorTexture} />
            </mesh>

            <Suspense fallback={null}>
                <Floors />
            </Suspense>

            <ambientLight intensity={0.5} />
        </>
    );
}
