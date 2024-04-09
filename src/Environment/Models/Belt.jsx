import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Belt(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/conveyorBelt.glb");
    const { actions } = useAnimations(animations, group);
    console.log(actions);
    useEffect(() => {
        actions["Action.001"].play();
    }, []);
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <mesh
                    name="Belt"
                    castShadow
                    receiveShadow
                    geometry={nodes.Belt.geometry}
                    material={nodes.Belt.material}
                    position={[-0.086, 0, 0]}
                />
                <mesh
                    name="BeltInside"
                    castShadow
                    receiveShadow
                    geometry={nodes.BeltInside.geometry}
                    material={nodes.BeltInside.material}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/conveyorBelt.glb");
