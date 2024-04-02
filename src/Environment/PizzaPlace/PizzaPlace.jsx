import { Effects, Sky, Stars } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { useControls, folder } from "leva";
import { PizzaSun } from "./PizzaSun";
import { UnrealBloomPass } from "three-stdlib";
import useOptionsStore from "../../useOptionsStore";
import { useShallow } from "zustand/react/shallow";
import { FloatingIsland } from "./FloatingIsland";
import { useLocation } from "wouter";
import { useTransition } from "@react-spring/core";
import Floors from "./Floors/Floors";
import { Suspense } from "react";

extend({ UnrealBloomPass });

export default function PizzaPlace() {
    const [location] = useLocation();
    const parameters = useControls("PizzaPlace", {
        bloomPass: folder({
            threshold: 1,
            strength: 0.3,
            radius: 0.3,
        }),
        sky: folder({
            distance: 450000,
            sunPosition: {
                x: 20000,
                y: 20000,
                z: 20000,
            },
            inclination: 0.3,
            azimuth: 5.25,
        }),
    });

    const { darkMode } = useOptionsStore(
        useShallow((state) => ({
            darkMode: state.darkMode,
        }))
    );

    const transition = useTransition(location, {
        from: {
            position: [0, 100, 0],
            rotation: [0, Math.PI, 0],
            scale: [0, 0, 0],
            opacity: 0,
        },
        enter: {
            position: [0, 0, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
            opacity: 1,
        },
        leave: {
            position: [0, -50, 0],
            rotation: [0, -Math.PI, 0],
            scale: [0, 0, 0],
            opacity: 0,
        },
        config: () => (n) => n === "opacity" && { friction: 60 },
    });

    return (
        <>
            <Effects disableGamma>
                <unrealBloomPass
                    threshold={parameters.threshold}
                    strength={parameters.strength}
                    radius={parameters.radius}
                />
            </Effects>
            {darkMode ? (
                <>
                    <Stars count={400} />

                    <color attach="background" args={["black"]} />
                    <PizzaSun />
                </>
            ) : (
                <Sky
                    distance={450000}
                    sunPosition={[
                        parameters.sunPosition.x,
                        parameters.sunPosition.y,
                        parameters.sunPosition.z,
                    ]}
                    inclination={parameters.inclination}
                    azimuth={5.25}
                />
            )}

            <FloatingIsland position={[0, -5, 0]} />

            <Suspense fallback={null}>
                <Floors transition={transition} />
            </Suspense>

            <ambientLight intensity={1.5} />
        </>
    );
}
