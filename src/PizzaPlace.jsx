import { Environment, Float } from "@react-three/drei";
import { useThree, extend, useLoader } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as THREE from "three";

extend({ OrbitControls });

export default function PizzaPlace() {
    const { camera, gl } = useThree();
    const colorMap = useLoader(
        THREE.TextureLoader,
        "https://cdn.polyhaven.com/asset_img/primary/aerial_beach_02.png?height=4096"
    );

    return (
        <>
            <orbitControls args={[camera, gl.domElement]} />
            <Environment
                background
                near={1}
                far={1000}
                resolution={256}
                frames={Infinity}
            >
                <Float>
                    <mesh scale={100}>
                        <sphereGeometry args={[1, 64, 64]} />
                        <meshBasicMaterial
                            map={colorMap}
                            side={THREE.BackSide}
                        />
                    </mesh>
                </Float>
            </Environment>

            <directionalLight position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />
        </>
    );
}
