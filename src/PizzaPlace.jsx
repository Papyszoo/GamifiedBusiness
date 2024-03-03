import { Environment, Float, useEnvironment } from "@react-three/drei";
import { useThree, extend, useLoader } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as THREE from "three";

extend({ OrbitControls });

export default function PizzaPlace() {
    const { camera, gl } = useThree();

    const envMap = useEnvironment({
        files: "/envmap/stars.hdr",
    });

    return (
        <>
            <orbitControls args={[camera, gl.domElement]} />
            <Environment
                map={envMap}
                background
                near={1}
                far={1000}
                frames={Infinity}
            ></Environment>

            <directionalLight position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />
        </>
    );
}
