import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Mushroom = ({ count, setMatrices }) => {
    const { nodes, materials } = useGLTF("/mushroom.glb");
    const ref = useRef();
    useEffect(() => {
        setMatrices([ref.current]);
    }, []);
    return (
        <group dispose={null}>
            <instancedMesh
                args={[null, null, count]}
                geometry={nodes.Cube.geometry}
                material={materials.Material}
                ref={ref}
            />
        </group>
    );
};

useGLTF.preload("/mushroom.glb");

export default Mushroom;
