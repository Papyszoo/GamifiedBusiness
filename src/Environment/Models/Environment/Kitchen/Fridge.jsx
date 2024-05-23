import React from "react";
import { useGLTF } from "@react-three/drei";

const Fridge = (props) => {
    const { nodes, materials } = useGLTF(
        "/objects/environment/Kitchen/Fridge.glb"
    );
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={200}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Kitchen_Fridge_1.geometry}
                    material={materials.White}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Kitchen_Fridge_2.geometry}
                    material={materials.Black}
                />
            </group>
        </group>
    );
};

useGLTF.preload("/objects/environment/Kitchen/Fridge.glb");
export default Fridge;
