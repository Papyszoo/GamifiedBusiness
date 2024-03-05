import { folder, useControls } from "leva";
import React from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from "@react-three/fiber";

const Sun = () => {
    const sunParameters = useControls("Sun", {
        position: {
            x: 70,
            y: 30,
            z: -100,
        },
        color: {
            a: 9.0,
            b: 5.0,
            c: 0.3,
        },
        sphereGeometry: folder({
            radius: 15,
            widthSegments: 32,
            heightSegments: 16,
        }),
    });
    const obj = useLoader(OBJLoader, "/pizzaSun.obj");

    return (
        // <mesh position={[...Object.values(sunParameters.position)]}>
        //     <sphereGeometry
        //         args={[
        //             sunParameters.radius,
        //             sunParameters.widthSegments,
        //             sunParameters.heightSegments,
        //         ]}
        //     />
        //     <meshBasicMaterial
        //         color={[...Object.values(sunParameters.color)]}
        //         toneMapped={false}
        //     />
        // </mesh>

        <primitive
            object={obj}
            position={[...Object.values(sunParameters.position)]}
            rotation-y={Math.PI / 1.2}
            rotation-x={Math.PI / 4}
        />
    );
};

export default Sun;
