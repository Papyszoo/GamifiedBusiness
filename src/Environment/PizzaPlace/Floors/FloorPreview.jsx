import React from "react";
import Pizza from "../Pizza";
import { a } from "@react-spring/three";
import { Ingredients } from "../../../Constants";
import { useChain, useSpring, useSpringRef } from "@react-spring/core";

const FloorPreview = ({ transRef }) => {
    const springRef = useSpringRef();
    const animationProps = useSpring({
        ref: springRef,
        from: {
            position: [0, 100, 0],
            rotation: [0, Math.PI, 0],
            opacity: 0,
        },
        to: {
            position: [0, 0, 0],
            rotation: [0, 0, 0],
            opacity: 1,
        },
    });

    useChain([springRef, transRef], [0, 1], 1000);
    return (
        <a.group {...animationProps} dispose={true}>
            <Pizza position={[0, -1, 0]} ingredients={[Ingredients.bacon]} />
            <Pizza position={[-3, -3, -3]} />
        </a.group>
    );
};

export default FloorPreview;
