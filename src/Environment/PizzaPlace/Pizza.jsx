import React from "react";
import { Sampler, useGLTF } from "@react-three/drei";

const Pizza = (props) => {
    const { nodes, materials } = useGLTF("/pizza.glb");
    return (
        <Sampler count={500} transform={transformInstances}>
            <group {...props} dispose={null}>
                <mesh
                    name="Dough"
                    geometry={nodes.Dough.geometry}
                    material={materials.Dough}
                />
                <mesh
                    name="Cheese"
                    geometry={nodes.Cheese.geometry}
                    material={materials.Cheese}
                />
            </group>
            <instancedMesh args={[null, null, 1_000]}>
                <sphereGeometry args={[0.1, 32, 32, Math.PI / 2]} />
                <meshNormalMaterial />
            </instancedMesh>
        </Sampler>
    );
};

const transformInstances = ({ dummy, position }) => {
    dummy.position.copy(position);
    dummy.scale.setScalar(Math.random() * 0.75);
};

useGLTF.preload("/pizza.glb");

export default Pizza;
