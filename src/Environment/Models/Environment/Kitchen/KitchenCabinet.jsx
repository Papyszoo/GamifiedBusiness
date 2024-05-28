import React from "react";
import { useGLTF } from "@react-three/drei";

const KitchenCabinet = (props) => {
    const { nodes, materials } = useGLTF(
        "/objects/environment/kitchen/Kitchen Cabinet.glb"
    );
    return (
        <group {...props} dispose={null}>
            <group scale={7}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.kitchenCabinet_2.geometry}
                    material={materials.metal}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.kitchenCabinet_2_1.geometry}
                    material={materials.wood}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.kitchenCabinet_3.geometry}
                    material={materials.wood}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.kitchenCabinet_3_1.geometry}
                    material={materials.metal}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.door_1.geometry}
                    material={materials.wood}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.door_1_1.geometry}
                    material={materials.woodDark}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.door_1_2.geometry}
                    material={materials.metal}
                />
            </group>
        </group>
    );
};

useGLTF.preload("/objects/environment/kitchen/Kitchen Cabinet.glb");
export default KitchenCabinet;
