import React, { forwardRef, useEffect, useRef } from "react";
import { Instance, Instances, Merged, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Bacon = forwardRef((props, ref) => {
    const { nodes, materials } = useGLTF("/bacon.glb");
    console.log(ref);

    return (
        <>
            {/* <mesh
                    geometry={nodes.Mesh_bacon.geometry}
                    material={materials.brown}
                />
                <mesh
                    geometry={nodes.Mesh_bacon_1.geometry}
                    material={materials.brownDark}
                /> */}
            {/* <instancedMesh
                args={[null, null, 16]}
                ref={ref}
                geometry={mergedRef.current.geometry}
            /> */}

            <Merged meshes={nodes} limit={16} ref={ref}>
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
            </Merged>
        </>
    );
});

useGLTF.preload("/bacon.gltf");

export default Bacon;
