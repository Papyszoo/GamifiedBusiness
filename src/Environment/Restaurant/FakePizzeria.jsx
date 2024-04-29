import { Stars } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { useControls, folder } from "leva";
import { PizzaSun } from "../Models/PizzaSun";
import { UnrealBloomPass } from "three-stdlib";
import useOptionsStore from "../../stores/useOptionsStore";
import { useShallow } from "zustand/react/shallow";
import { FloatingIsland } from "./FloatingIsland";
import Floors from "./Floors/Floors";
import { Suspense, useRef } from "react";
import SkyContainer from "./SkyContainer";

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
                    <PizzaSun />
                </>
            ) : (
                <SkyContainer />
            )}

            <FloatingIsland position={[0, -5, 0]} />

            <Suspense fallback={null}>
                <Floors />
            </Suspense>

            <ambientLight intensity={1.5} />
        </>
    );
}
