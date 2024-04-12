import React from "react";
import { Route, Switch } from "wouter";
import FloorPreview from "./FloorPreview";
import FloorCustomize from "./FloorCustomize";
import { useTransition } from "@react-spring/core";
import { config, a } from "@react-spring/three";
import { useLocation } from "wouter";
import AnimatedExpand from "./AnimatedExpand";

const Floors = () => {
    const [location] = useLocation();
    const transition = useTransition(location, {
        from: {
            position: [0, 25, 0],
        },
        enter: {
            position: [0, 0, 0],
        },
        leave: {
            position: [0, -15, 0],
        },
        config: config.gentle,
    });

    return transition((props, location) => (
        <a.group>
            <Switch location={location}>
                <Route path="/preview">
                    <a.group {...props}>
                        <AnimatedExpand>
                            <FloorPreview />
                        </AnimatedExpand>
                    </a.group>
                </Route>
                <Route path="/customize">
                    <a.group {...props}>
                        <AnimatedExpand>
                            <FloorCustomize />
                        </AnimatedExpand>
                    </a.group>
                </Route>
            </Switch>
        </a.group>
    ));
};

export default Floors;
