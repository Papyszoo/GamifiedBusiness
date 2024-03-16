import React, { useRef, useEffect } from "react";
import { Sampler, useGLTF, useSurfaceSampler } from "@react-three/drei";
import { Ingredients } from "../../Constants";
import Bacon from "../Ingredients/Bacon";
import Ham from "../Ingredients/Ham";

const Pizza = ({ position, rotation, ingredients }) => {
    const { nodes, materials } = useGLTF("/pizza.glb");
    const cheeseRef = useRef();
    const hamRef = useRef();

    return (
        <group position={position} rotation={rotation} dispose={null}>
            <mesh
                name="Dough"
                geometry={nodes.Dough.geometry}
                material={materials.Dough}
            />
            <mesh
                name="Cheese"
                ref={cheeseRef}
                geometry={nodes.Cheese.geometry}
                material={materials.Cheese}
            />
            <Ham ref={hamRef} position-y={0.15} />
            <Sampler
                count={16}
                transform={transformInstances}
                mesh={cheeseRef}
                instances={hamRef}
            />
        </group>
    );
};

const transformInstances = ({ dummy, position }) => {
    dummy.position.copy(position);
    dummy.scale.setScalar(Math.random() * 0.75);
};

useGLTF.preload("/pizza.glb");

export default Pizza;
