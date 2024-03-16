import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import IngredientSampler from "../Ingredients/IngredientSampler";

const Pizza = ({ position, rotation, ingredients }) => {
    const { nodes, materials } = useGLTF("/pizza.glb");
    const cheeseRef = useRef();

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
            {ingredients?.map((i) => (
                <IngredientSampler cheeseRef={cheeseRef} ingredient={i} />
            ))}
        </group>
    );
};

useGLTF.preload("/pizza.glb");

export default Pizza;
