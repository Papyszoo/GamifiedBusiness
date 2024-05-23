import React from "react";
import { useGLTF } from "@react-three/drei";

const KitchenCabinetDrawer = (props) => {
    const { nodes, materials } = useGLTF(
        "/objects/environment/Kitchen/Kitchen Cabinet Drawer.glb"
    );
    return (
        <group {...props} dispose={null}>
            <group scale={7}>
                <mesh
                    geometry={nodes.kitchenCabinetDrawer_2.geometry}
                    material={materials.metal}
                />
                <mesh
                    geometry={nodes.kitchenCabinetDrawer_2_1.geometry}
                    material={materials.wood}
                />
                <mesh
                    geometry={nodes.kitchenCabinetDrawer_3.geometry}
                    material={materials.wood}
                />
                <mesh
                    geometry={nodes.kitchenCabinetDrawer_3_1.geometry}
                    material={materials.metal}
                />
                <mesh
                    geometry={nodes.door_1.geometry}
                    material={materials.wood}
                />
                <mesh
                    geometry={nodes.door_1_1.geometry}
                    material={materials.woodDark}
                />
                <mesh
                    geometry={nodes.door_1_2.geometry}
                    material={materials.metal}
                />
                <mesh
                    geometry={nodes.drawer_1.geometry}
                    material={materials.metal}
                />
                <mesh
                    geometry={nodes.drawer_1_1.geometry}
                    material={materials.woodDark}
                />
                <mesh
                    geometry={nodes.drawer_1_2.geometry}
                    material={materials.wood}
                />
            </group>
        </group>
    );
};

useGLTF.preload("/objects/environment/Kitchen/Kitchen Cabinet Drawer.glb");
export default KitchenCabinetDrawer;
