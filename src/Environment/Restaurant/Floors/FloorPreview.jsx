import React from "react";
import Pizza from "../../Pizza/Pizza";
import { Ingredients } from "../../../Constants";
import { Belt } from "../../Models/Belt";
import { Chair } from "../../Models/Environment/Chair";

const FloorPreview = () => {
    return (
        <>
            <Belt position={[0, 4, 1]} />
            <Pizza
                position={[0, -1, 0]}
                ingredients={[
                    Ingredients.bacon.name,
                    Ingredients.mushrooms.name,
                ]}
            />
            <Chair position={[1, 1, 1]} />
            <Pizza position={[-3, -3, -3]} />
        </>
    );
};

export default FloorPreview;
