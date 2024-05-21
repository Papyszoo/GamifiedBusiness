import React from "react";
import { useGLTF } from "@react-three/drei";

const PathStraight = (props) => {
    const { nodes, materials } = useGLTF(
        "/objects/environment/PathStraight.glb"
    );
    return (
        <group {...props} dispose={null}>
            <group
                rotation={[-Math.PI / 2, 0, 0]}
                scale={800}
                position-y={-5.3}
            >
                <mesh
                    geometry={nodes.Path_Straight_1.geometry}
                    material={materials.Stone_Light}
                />
                <mesh
                    geometry={nodes.Path_Straight_2.geometry}
                    material={materials.Stone_Dark}
                />
            </group>
        </group>
    );
};

useGLTF.preload("/objects/environment/PathStraight.glb");
export default PathStraight;
