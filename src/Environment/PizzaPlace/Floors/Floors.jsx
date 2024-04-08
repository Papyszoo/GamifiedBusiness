import React from "react";
import { a } from "@react-spring/three";
import { Route, Switch } from "wouter";
import FloorPreview from "./FloorPreview";
import FloorCustomize from "./FloorCustomize";
import {
    useChain,
    useSpring,
    useTransition,
    useSpringRef,
} from "@react-spring/core";
import { config } from "@react-spring/three";
import { useLocation } from "wouter";

const Floors = () => {
    const [location] = useLocation();
    const transRef = useSpringRef();
    const transition = useTransition(location, {
        ref: transRef,
        from: {
            position: [0, 25, 0],
        },

        enter: {
            position: [0, 0, 0],
        },
        leave: {
            position: [0, -50, 0],
        },
        config: config.gentle,
    });

    const springRef = useSpringRef();
    const { scale } = useSpring({
        ref: springRef,
        from: {
            scale: [0.2, 0.2, 0.2],
        },
        to: {
            scale: [1, 1, 1],
        },
        config: config.gentle,
    });

    useChain([transRef, springRef], [0, 1]);

    return transition((props, location) => (
        <a.group>
            <Switch location={location}>
                <Route path="/preview">
                    <a.group {...props} scale={scale}>
                        <FloorPreview />
                    </a.group>
                </Route>
                <Route path="/customize">
                    <a.group {...props} scale={scale}>
                        <FloorCustomize />
                    </a.group>
                </Route>
            </Switch>
        </a.group>
    ));
};

export default Floors;
