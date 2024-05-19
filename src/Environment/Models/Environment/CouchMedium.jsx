import React from "react";
import { useGLTF } from "@react-three/drei";
import useOptionsStore from "../../../stores/useOptionsStore";
import { useShallow } from "zustand/react/shallow";

const CouchMedium = (props) => {
    const { nodes, materials } = useGLTF(
        "/objects/environment/CouchMedium.glb"
    );
    const { shadowsHidden } = useOptionsStore(
        useShallow((state) => ({
            shadowsHidden: state.shadowsHidden,
        }))
    );
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                    castShadow={!shadowsHidden}
                    geometry={nodes.Couch_Medium1_1.geometry}
                    material={materials.Couch_Blue}
                />
                <mesh
                    castShadow={!shadowsHidden}
                    geometry={nodes.Couch_Medium1_2.geometry}
                    material={materials.Black}
                />
            </group>
        </group>
    );
};

export default CouchMedium;
useGLTF.preload("/objects/environment/CouchMedium.glb");
