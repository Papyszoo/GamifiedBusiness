import { folder, useControls } from "leva";
import React from "react";

const Sun = () => {
    const config = useControls("Sun", {
        position: {
            x: 70,
            y: 30,
            z: -100,
        },
        sphereGeometry: folder({
            radius: 15,
            widthSegments: 32,
            heightSegments: 16,
        }),
    });
    console.log(config);
    return (
        <mesh position={[...Object.values(config.position)]}>
            <sphereGeometry
                args={[
                    config.radius,
                    config.widthSegments,
                    config.heightSegments,
                ]}
            />
            <meshBasicMaterial color={[15, 0.3, 0]} toneMapped={false} />
        </mesh>
    );
};

export default Sun;
