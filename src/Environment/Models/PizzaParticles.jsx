import { useTexture } from "@react-three/drei";
import React, { useMemo } from "react";

const PizzaParticles = () => {
    const pizzaTexture = useTexture("/svg/pizza.svg");
    const pizzaParticlesCount = 500;
    let particlesPositions = useMemo(() => {
        let positions = [];
        for (let i = 0; i < pizzaParticlesCount; i++) {
            let x = (Math.random() - 0.5) * 10;
            let y = (Math.random() - 0.5) * 10;
            let z = (Math.random() - 0.5) * 10;
            positions.push(x, y, z);
        }
        return new Float32Array(positions);
    }, [pizzaParticlesCount]);
    return (
        <points>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={particlesPositions}
                    count={particlesPositions.length / 3}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                alphaTest={0.1}
                map={pizzaTexture}
                transparent={true}
                size={0.5}
                sizeAttenuation={true}
            />
        </points>
    );
};

export default PizzaParticles;
