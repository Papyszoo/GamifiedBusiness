import React, { useRef, createElement, useState } from "react";
import { Ingredients } from "../../../Constants";
import Ham from "./Ham";
import Bacon from "./Bacon";
import { useSurfaceSampler } from "@react-three/drei";
import Mushroom from "./Mushroom";

const IngredientsObjects = {
    [Ingredients.ham]: Ham,
    [Ingredients.bacon]: Bacon,
    [Ingredients.mushrooms]: Mushroom,
};

const IngredientSampler = ({ ingredient, cheeseRef }) => {
    var ingredientRef = useRef();
    const [mergedElement, setmergedElement] = useState(null);
    var props = {
        ref: ingredientRef,
        setmergedElement: setmergedElement,
    };
    var element = createElement(IngredientsObjects[ingredient], props);

    console.log(ingredientRef);
    const buffer = useSurfaceSampler(
        cheeseRef,
        16,
        transformInstances,
        undefined,
        ingredientRef
    );

    return { element };
};

const transformInstances = ({ dummy, position }) => {
    dummy.position.copy(position);
    dummy.scale.setScalar(0.8 - Math.random() * 0.5);
    dummy.rotation.y = (Math.random() * Math.PI) / 2;
};

export default IngredientSampler;
