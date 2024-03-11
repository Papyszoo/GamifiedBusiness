import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default Pizza = (props) => {
    const { nodes, materials } = useGLTF("/pizza.glb");
    return (
        <Sampler count={500} weight="upness" transform={transformInstances}>
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder.geometry}
                material={materials.Material}
                scale={[1, 0.045, 1]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder001.geometry}
                material={materials["Material.001"]}
                scale={[1, 0.045, 1]}
            />
        </group>
        <instancedMesh args={[null!, null!, 1_000]}>
                <sphereGeometry args={[0.1, 32, 32, Math.PI / 2]} />
                <meshNormalMaterial />
              </instancedMesh>
            </Sampler>
    );
};

useGLTF.preload("/pizza.glb");

<Sampler count={500} weight="upness" transform={transformInstances}>
              <mesh>
                <torusKnotGeometry>
                  <ComputedAttribute name="upness" compute={computeUpness} />
                </torusKnotGeometry>
                <meshNormalMaterial />
              </mesh>
      
              <instancedMesh args={[null!, null!, 1_000]}>
                <sphereGeometry args={[0.1, 32, 32, Math.PI / 2]} />
                <meshNormalMaterial />
              </instancedMesh>
            </Sampler>