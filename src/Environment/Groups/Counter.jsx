import React from "react";
import { CounterCorner } from "../Models/Environment/CounterCorner";
import { CounterStraight } from "../Models/Environment/CounterStraight";
import CeilingLight from "../Models/Environment/CeilingLight";

const Counter = (props) => {
    return (
        <group {...props}>
            <group position-y={-4}>
                <CounterCorner rotation-y={-Math.PI / 2} position-x={12} />
                <CounterStraight position-x={4} />
                <CounterStraight position-x={8} />
                <CounterStraight position-z={2} rotation-y={-Math.PI / 2} />
                <CounterStraight
                    position={[12, 0, 2]}
                    rotation-y={-Math.PI / 2}
                />
                <CounterCorner />
            </group>
            <group position={[6, 2, 0]}>
                <CeilingLight position-x={-6} />;
                <CeilingLight position-x={-2} />
                <CeilingLight position-x={2} />
                <CeilingLight position-x={6} />;
            </group>
        </group>
    );
};

export default Counter;
