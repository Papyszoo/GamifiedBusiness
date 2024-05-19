import React from "react";
import { useGLTF } from "@react-three/drei";
import useOptionsStore from "../../../stores/useOptionsStore";
import { useShallow } from "zustand/react/shallow";

const CouchSmall = (props) => {
    const { nodes, materials } = useGLTF("/objects/environment/CouchSmall.glb");
    const { shadowsHidden } = useOptionsStore(
        useShallow((state) => ({
            shadowsHidden: state.shadowsHidden,
        }))
    );
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={80}>
                <mesh
                    castShadow
                    geometry={nodes.Couch_Small1_1.geometry}
                    material={materials.Couch_Blue}
                />
                <mesh
                    castShadow
                    geometry={nodes.Couch_Small1_2.geometry}
                    material={materials.Black}
                />
            </group>
        </group>
    );
};

export default CouchSmall;
useGLTF.preload("/objects/environment/CouchSmall.glb");
