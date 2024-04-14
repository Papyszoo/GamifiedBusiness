import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Bacon = ({ count, setMatrices }) => {
    const { nodes, materials } = useGLTF("/bacon.glb");
    const ref1 = useRef();
    const ref2 = useRef();

    useEffect(() => {
        ref1.current.material.side = THREE.DoubleSide;
        ref2.current.material.side = THREE.DoubleSide;

        setMatrices([ref1.current, ref2.current]);
    }, []);

    return (
        <>
            <instancedMesh
                args={[null, null, count]}
                geometry={nodes.Mesh_bacon.geometry}
                ref={ref1}
            >
                <meshBasicMaterial color="#f6caa5" />
            </instancedMesh>
            <instancedMesh
                args={[null, null, count]}
                geometry={nodes.Mesh_bacon_1.geometry}
                material={materials.brownDark}
                ref={ref2}
            >
                <meshBasicMaterial color="#de9571" />
            </instancedMesh>
        </>
    );
};

useGLTF.preload("/bacon.gltf");

export default Bacon;
