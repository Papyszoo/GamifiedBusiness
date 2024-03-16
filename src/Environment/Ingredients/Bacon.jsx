import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

const Bacon = forwardRef((props, ref) => {
    const { nodes, materials } = useGLTF("/bacon.glb");
    return (
        <instancedMesh
            args={[null, null, 16]}
            ref={ref}
            name="Bacon"
            geometry={nodes.Bacon.geometry}
            material={materials.Bacon}
        />
    );
});

useGLTF.preload("/bacon.glb");

export default Bacon;
