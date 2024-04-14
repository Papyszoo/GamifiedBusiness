import React, { useEffect, useRef, useState, createElement } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { MeshSurfaceSampler } from "three-stdlib";
import { Ingredients } from "../../Constants";
import Ham from "./Ingredients/Ham";
import Bacon from "./Ingredients/Bacon";

const IngredientsObjects = {
    [Ingredients.ham]: Ham,
    [Ingredients.bacon]: Bacon,
};

const count = 5;

const Pizza = ({ position, rotation, ingredients }) => {
    const _position = new THREE.Vector3();
    const _normal = new THREE.Vector3();
    const dummy = new THREE.Object3D();
    const [sampler, setSampler] = useState(null);
    const [elements, setElements] = useState([]);
    const { nodes, materials } = useGLTF("/pizza.glb");
    const cheeseRef = useRef();

    useEffect(() => {
        setSampler(new MeshSurfaceSampler(cheeseRef.current).build());
    }, []);

    useEffect(() => {
        if (sampler) {
            placeIngredients();
        }
    }, [sampler]);

    const setMatrices = (meshes) => {
        for (let i = 0; i < count; i++) {
            sampler.sample(_position, _normal);
            _normal.add(_position);

            dummy.position.copy(_position);
            dummy.lookAt(_normal);
            dummy.rotation.x = dummy.rotation.z = Math.PI;
            dummy.scale.setScalar(1.5 - Math.random() * 0.5);
            dummy.rotation.y = (Math.random() * Math.PI) / 2;
            dummy.updateMatrix();
            meshes.forEach((mesh) => {
                mesh.setMatrixAt(i, dummy.matrix);
            });
        }
    };

    const placeIngredients = () => {
        var props = {
            count,
            setMatrices,
        };

        ingredients?.forEach((ingredient) => {
            setElements((prev) => [
                ...prev,
                createElement(IngredientsObjects[ingredient], props),
            ]);
        });
    };

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
            {elements.map((e) => e)}
        </group>
    );
};

useGLTF.preload("/pizza.glb");

export default Pizza;
