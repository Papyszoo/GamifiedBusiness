import React, { forwardRef, useEffect, useRef } from "react";
import { Instance, Instances, Merged, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Bacon = ({ count, setMatrices }) => {
    const { nodes, materials } = useGLTF("/bacon.glb");
    const ref1 = useRef();
    const ref2 = useRef();

    useEffect(() => {
        ref1.current.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        ref2.current.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

        setMatrices([ref1.current, ref2.current]);
    }, []);

    return (
        <>
            <instancedMesh
                scale={20}
                geometry={nodes.Mesh_bacon.geometry}
                material={materials.brown}
                ref={ref1}
                count={count}
            />
            <instancedMesh
                scale={20}
                geometry={nodes.Mesh_bacon_1.geometry}
                material={materials.brownDark}
                ref={ref2}
                count={count}
            />
            {/* <instancedMesh
                args={[null, null, 16]}
                ref={ref}
                geometry={mergedRef.current.geometry}
            /> */}

            {/* <Merged meshes={nodes} limit={16} ref={ref}>
                {({ Mesh_bacon, Mesh_bacon_1 }) => (
                    <>
                        <mesh
                            geometry={Mesh_bacon.geometry}
                            material={materials.brown}
                        />
                        <mesh
                            geometry={Mesh_bacon_1.geometry}
                            material={materials.brownDark}
                        />
                    </>
                )}
            </Merged> */}
        </>
    );
};

useGLTF.preload("/bacon.gltf");

export default Bacon;
