import { Effects, Stars } from "@react-three/drei";
import { useThree, extend } from "@react-three/fiber";
import { useControls, folder } from "leva";
import Sun from "./Sun";
import { PizzaSun } from "./PizzaSun";
import { UnrealBloomPass, OrbitControls } from "three-stdlib";

extend({ UnrealBloomPass });
extend({ OrbitControls });

export default function PizzaPlace() {
    const { camera, gl } = useThree();
    const parameters = useControls("PizzaPlace", {
        bloomPass: folder({
            threshold: 1,
            strength: 0.3,
            radius: 0.3,
        }),
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
            <orbitControls
                args={[camera, gl.domElement]}
                enableZoom={false}
                enablePan={false}
            />
            <Stars count={400} />
            <color attach="background" args={["black"]} />

            <Sun />
            <PizzaSun />
            <ambientLight intensity={1.5} />
        </>
    );
}
