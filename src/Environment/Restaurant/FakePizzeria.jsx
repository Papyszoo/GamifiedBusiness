import { Stars } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { useControls, folder } from "leva";
import { UnrealBloomPass } from "three-stdlib";
import useOptionsStore from "../../stores/useOptionsStore";
import { useShallow } from "zustand/react/shallow";
import Floors from "./Floors/Floors";
import { Suspense, useRef } from "react";
import SkyContainer from "./SkyContainer";
import { CounterCorner } from "../Models/Environment/CounterCorner";

extend({ UnrealBloomPass });

export default function FakePizzeria() {
    const skyRef = useRef();
    const parameters = useControls("FakePizzeria", {
        bloomPass: folder({
            threshold: 1,
            strength: 0.3,
            radius: 0.3,
        }),
    });

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

            <CounterCorner />

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
