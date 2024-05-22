import { useGLTF } from "@react-three/drei";
import React from "react";

const Gazebo = (props) => {
    const { nodes, materials } = useGLTF("/objects/environment/Gazebo.glb");
    return (
        <group {...props} dispose={null}>
            <group rotation-y={Math.PI / 2}>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={1000}>
                    <mesh
                        geometry={nodes.Gazebo_1.geometry}
                        material={materials.RoofTiles_Red}
                    />
                    <mesh
                        geometry={nodes.Gazebo_2.geometry}
                        material={materials.Wood}
                    />
                </group>
                <mesh material={materials.Wood} position-y={5.74}>
                    <boxGeometry args={[0.38, 0.38, 10.5]} />
                </mesh>
            </group>
        </group>
    );
};

export default Gazebo;

useGLTF.preload("/objects/environment/Gazebo.glb");
