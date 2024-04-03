import React from "react";
import { a } from "@react-spring/three";
import { Route, Switch } from "wouter";
import FloorPreview from "./FloorPreview";
import FloorCustomize from "./FloorCustomize";

const Floors = ({ transition, transRef }) => {
    return transition(({ opacity, ...props }, location) => (
        <a.group {...props}>
            <Switch location={location}>
                <Route path="/preview">
                    <FloorPreview transRef={transRef} />
                </Route>

                <Route path="/customize">
                    <FloorCustomize transRef={transRef} />
                </Route>
            </Switch>
        </a.group>
    ));
};

export default Floors;
