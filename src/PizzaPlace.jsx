import { Environment, Float, useEnvironment, Stars } from "@react-three/drei";
import { useThree, extend, useLoader } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useControls } from "leva";
import * as THREE from "three";

extend({ OrbitControls });

export default function PizzaPlace() {
    const { camera, gl } = useThree();

    return (
        <>
            <orbitControls
                args={[camera, gl.domElement]}
                enableZoom={false}
                enablePan={false}
            />
            <Stars saturation={1} count={400} speed={0.5} />
            <color attach="background" args={["black"]} />

            <mesh position={[70, 30, -100]}>
                <sphereGeometry args={[15, 32, 16]} />
                <meshBasicMaterial color={[15, 0.3, 0]} toneMapped={false} />
            </mesh>

            <ambientLight intensity={1.5} />
        </>
    );
}
