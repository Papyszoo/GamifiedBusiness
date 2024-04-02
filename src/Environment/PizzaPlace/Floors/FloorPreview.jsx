import React from "react";
import Pizza from "../Pizza";
import { Ingredients } from "../../../Constants";

const FloorPreview = () => {
    return (
        <>
            <Pizza
                position={[-3, -3, -3]}
                ingredients={[Ingredients.bacon, Ingredients.ham]}
            />
            <Pizza position={[0, -1, 0]} />
        </>
    );
};

export default FloorPreview;
