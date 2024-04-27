import { Sky } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const SkyContainer = () => {
    const skyRef = useRef();
    const three = useThree();
    useEffect(() => {
        if (skyRef.current) {
            skyRef.current.material.uniforms["turbidity"].value = 11;
            skyRef.current.material.uniforms["rayleigh"].value = 0.83;
            skyRef.current.material.uniforms["mieCoefficient"].value = 0.01;
            skyRef.current.material.uniforms["mieDirectionalG"].value = 0.97;
            const sun = new THREE.Vector3();
            const phi = THREE.MathUtils.degToRad(40);
            const theta = THREE.MathUtils.degToRad(-100);

            sun.setFromSphericalCoords(1, phi, theta);

            skyRef.current.material.uniforms["sunPosition"].value.copy(sun);
            three.gl.toneMappingExposure = 0.5;
        }
    }, []);
    return <Sky ref={skyRef} />;
};

export default SkyContainer;
