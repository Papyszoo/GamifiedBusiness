import React from "react";
import Pizza from "../Pizza";
import { Ingredients } from "../../../Constants";

const FloorPreview = () => {
    return (
        <>
            <Pizza position={[0, -1, 0]} ingredients={[Ingredients.bacon]} />
            <Pizza position={[-3, -3, -3]} />
        </>
    );
};

export default FloorPreview;
