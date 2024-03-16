import { Effects, MeshReflectorMaterial, Sky, Stars } from "@react-three/drei";
import { useThree, extend } from "@react-three/fiber";
import { useControls, folder } from "leva";
import Sun from "./Sun";
import { PizzaSun } from "./PizzaSun";
import { UnrealBloomPass } from "three-stdlib";
import * as THREE from "three";
import useOptionsStore from "../../useOptionsStore";
import { useShallow } from "zustand/react/shallow";
import Pizza from "./Pizza";
import { Ingredients } from "../../Constants";

extend({ UnrealBloomPass });

export default function PizzaPlace() {
    const { camera, gl } = useThree();
    const parameters = useControls("PizzaPlace", {
        bloomPass: folder({
            threshold: 1,
            strength: 0.3,
            radius: 0.3,
        }),
        pizza1Position: {
            x: 0,
            y: -1,
            z: 0,
        },
        pizza2Position: {
            x: -3,
            y: -3,
            z: -3,
        },
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
                </>
            ) : (
                <Sky
                    distance={450000}
                    sunPosition={[0, 1, 0]}
                    inclination={0}
                    azimuth={0.25}
                />
            )}

            <Pizza
                position={[...Object.values(parameters.pizza1Position)]}
                ingredients={[Ingredients.bacon, Ingredients.ham]}
            />
            <Pizza position={[...Object.values(parameters.pizza2Position)]} />

            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
                <planeGeometry args={[250, 250]} />
                <MeshReflectorMaterial
                    color="#ffffff"
                    metalness={0.8}
                    side={THREE.DoubleSide}
                />
            </mesh>

            <Sun />
            <PizzaSun />
            <ambientLight intensity={1.5} />
        </>
    );
}
