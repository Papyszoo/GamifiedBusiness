import React from "react";
import { a } from "@react-spring/three";
import { Route, Switch } from "wouter";
import FloorPreview from "./FloorPreview";
import FloorCustomize from "./FloorCustomize";

const Floors = ({ transition }) => {
    return transition(({ opacity, ...props }, location) => (
        <a.group {...props}>
            <Switch location={location}>
                <Route path="/preview">
                    <FloorPreview transition={transition} />
                </Route>

                <Route path="/customize">
                    <FloorCustomize transition={transition} />
                </Route>
            </Switch>
        </a.group>
    ));
};

export default Floors;
