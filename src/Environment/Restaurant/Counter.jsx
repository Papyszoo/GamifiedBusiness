import React from "react";
import { CounterCorner } from "../Models/Environment/CounterCorner";
import { CounterStraight } from "../Models/Environment/CounterStraight";

const Counter = (props) => {
    return (
        <group {...props}>
            <CounterCorner rotation-y={-Math.PI / 2} position-x={12} />
            <CounterStraight position-x={4} />
            <CounterStraight position-x={8} />
            <CounterStraight position-z={2} rotation-y={-Math.PI / 2} />
            <CounterStraight position={[12, 0, 2]} rotation-y={-Math.PI / 2} />
            <CounterCorner />
        </group>
    );
};

export default Counter;
