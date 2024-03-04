import { Stars } from "@react-three/drei";
import { useThree, extend } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useControls } from "leva";
import * as THREE from "three";
import Sun from "./Sun";

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

            <Sun />

            <ambientLight intensity={1.5} />
        </>
    );
}
