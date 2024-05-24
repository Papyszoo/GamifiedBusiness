import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

const Ham = forwardRef((props, ref) => {
    const { nodes, materials } = useGLTF("/objects/ingredients/ham.glb");
    return (
        <instancedMesh
            args={[null, null, 16]}
            ref={ref}
            name="Ham"
            geometry={nodes.Ham.geometry}
            material={materials.Ham}
        />
    );
});

useGLTF.preload("/objects/ingredients/ham.glb");

export default Ham;
