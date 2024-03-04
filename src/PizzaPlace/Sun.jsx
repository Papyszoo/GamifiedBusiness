import { folder, useControls } from "leva";
import React from "react";

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

    return (
        <mesh position={[...Object.values(sunParameters.position)]}>
            <sphereGeometry
                args={[
                    sunParameters.radius,
                    sunParameters.widthSegments,
                    sunParameters.heightSegments,
                ]}
            />
            <meshBasicMaterial
                color={[...Object.values(sunParameters.color)]}
                toneMapped={false}
            />
        </mesh>
    );
};

export default Sun;
