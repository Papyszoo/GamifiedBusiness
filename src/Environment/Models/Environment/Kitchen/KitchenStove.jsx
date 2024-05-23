import React from "react";
import { useGLTF } from "@react-three/drei";

const KitchenStove = (props) => {
    const { nodes, materials } = useGLTF(
        "/objects/environment/Kitchen/Kitchen Stove.glb"
    );
    return (
        <group {...props} dispose={null}>
            <group scale={7}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.kitchenStove_2.geometry}
                    material={materials.metal}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.kitchenStove_2_1.geometry}
                    material={materials.wood}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.kitchenStove_2_2.geometry}
                    material={materials.metalDark}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.kitchenStove_2_3.geometry}
                    material={materials.carpetWhite}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.kitchenStove_3.geometry}
                    material={materials.carpetWhite}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.kitchenStove_3_1.geometry}
                    material={materials.metal}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.kitchenStove_3_2.geometry}
                    material={materials.wood}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.kitchenStove_3_3.geometry}
                    material={materials.metalDark}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.door_1.geometry}
                    material={materials.metal}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.door_1_1.geometry}
                    material={materials.glass}
                />
            </group>
        </group>
    );
};

useGLTF.preload("/objects/environment/Kitchen/Kitchen Stove.glb");
export default KitchenStove;
