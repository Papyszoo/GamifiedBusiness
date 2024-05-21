import React from "react";
import { CounterCorner } from "../Models/Environment/CounterCorner";
import { CounterStraight } from "../Models/Environment/CounterStraight";
import CeilingLight from "../Models/Environment/CeilingLight";

const Counter = (props) => {
    return (
        <group {...props}>
            <CounterCorner rotation-y={-Math.PI / 2} position-x={12} />
            <CounterStraight position-x={4} />
            <CounterStraight position-x={8} />
            <CounterStraight position-z={4} rotation-y={-Math.PI / 2} />
            <CounterStraight position={[12, 0, 4]} rotation-y={-Math.PI / 2} />
            <CounterCorner />
            <group position={[6, 7, 0]}>
                <CeilingLight position-x={-6} />;
                <CeilingLight position-x={-2} />
                <CeilingLight position-x={2} />
                <CeilingLight position-x={6} />;
            </group>
        </group>
    );
};

export default Counter;
