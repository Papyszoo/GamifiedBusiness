import React from "react";
import { useSpring } from "@react-spring/core";
import { config, a } from "@react-spring/three";

const FloorContainer = ({ children }) => {
    const { scale } = useSpring({
        from: {
            scale: [0.2, 0.2, 0.2],
        },
        to: {
            scale: [1, 1, 1],
        },
        delay: 1000,
        config: config.gentle,
    });

    return <a.group scale={scale}>{children}</a.group>;
};

export default FloorContainer;
