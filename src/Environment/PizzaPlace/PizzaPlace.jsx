import { Effects, Sky, Stars } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { useControls, folder } from "leva";
import { PizzaSun } from "./PizzaSun";
import { UnrealBloomPass } from "three-stdlib";
import useOptionsStore from "../../useOptionsStore";
import { useShallow } from "zustand/react/shallow";
import { FloatingIsland } from "./FloatingIsland";
import Floors from "./Floors/Floors";
import { Suspense } from "react";

extend({ UnrealBloomPass });

export default function PizzaPlace() {
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
                <Floors />
            </Suspense>

            <ambientLight intensity={1.5} />
        </>
    );
}
