import React from "react";
import PizzaParticles from "../PizzaParticles";
import { a } from "@react-spring/three";
import { useChain, useSpring, useSpringRef } from "@react-spring/core";

const FloorCustomize = ({ transRef }) => {
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
            <PizzaParticles />
        </a.group>
    );
};

export default FloorCustomize;
