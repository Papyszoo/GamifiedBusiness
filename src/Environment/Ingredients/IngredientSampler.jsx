import React, { useRef, createElement } from "react";
import { Ingredients } from "../../Constants";
import Ham from "./Ham";
import Bacon from "./Bacon";
import { Sampler } from "@react-three/drei";

const IngredientsObjects = {
    [Ingredients.ham]: Ham,
    [Ingredients.bacon]: Bacon,
};

const IngredientSampler = ({ ingredient, cheeseRef }) => {
    var ingredientRef = useRef();
    var props = {
        ref: ingredientRef,
    };
    var element = createElement(IngredientsObjects[ingredient], props);

    return (
        <>
            {element}
            <Sampler
                count={16}
                transform={transformInstances}
                mesh={cheeseRef}
                instances={ingredientRef}
            />
        </>
    );
};

const transformInstances = ({ dummy, position }) => {
    dummy.position.copy(position);
    dummy.scale.setScalar(0.8 - Math.random() * 0.5);
    dummy.rotation.y = (Math.random() * Math.PI) / 2;
};

export default IngredientSampler;
