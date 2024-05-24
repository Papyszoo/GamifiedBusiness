import React, { forwardRef, useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Egg = forwardRef((props, ref) => {
    const group = useRef();
    const { nodes, materials } = useGLTF("/objects/ingredients/egg.glb");
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                geometry={nodes.Mesh_eggCooked.geometry}
                material={materials._defaultMat}
            />
            <mesh
                geometry={nodes.Mesh_eggCooked_1.geometry}
                material={materials.yellow}
            />
        </group>
    );
});

useGLTF.preload("/objects/ingredients/egg.glb");

export default Bacon;
