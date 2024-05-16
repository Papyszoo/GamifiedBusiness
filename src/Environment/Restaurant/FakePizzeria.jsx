import { Stars } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { useControls } from "leva";
import { UnrealBloomPass } from "three-stdlib";
import useOptionsStore from "../../stores/useOptionsStore";
import { useShallow } from "zustand/react/shallow";
import Floors from "./Floors/Floors";
import { Suspense } from "react";
import SkyContainer from "./SkyContainer";
import Counter from "./Counter";
import CeilingLight from "../Models/Environment/CeilingLight";
import Lights from "./Lights";

extend({ UnrealBloomPass });

export default function FakePizzeria() {
    const elementPosition = useControls("Position", {
        position: {
            x: 0,
            y: 0,
            z: 0,
        },
    });
    console.log(elementPosition);

    const { darkMode, shadowsHidden } = useOptionsStore(
        useShallow((state) => ({
            darkMode: state.darkMode,
            shadowsHidden: state.shadowsHidden,
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

            <Counter position={[-6, -2, 2]} />
            <Lights />

            {/* position={[
                    elementPosition.position.x,
                    elementPosition.position.y,
                    elementPosition.position.z,
                ]} */}

            <mesh
                rotation-x={-Math.PI / 2}
                scale={600}
                position-y={-5}
                castShadow={!shadowsHidden}
                receiveShadow={!shadowsHidden}
            >
                <planeGeometry />
                <meshStandardMaterial color="green" />
            </mesh>

            <Suspense fallback={null}>
                <Floors />
            </Suspense>

            <ambientLight intensity={1.5} />
        </>
    );
}
