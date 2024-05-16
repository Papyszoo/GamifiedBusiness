import React from "react";
import CeilingLight from "../Models/Environment/CeilingLight";

const Lights = () => {
    return (
        <group position={[0, 2.5, 2]}>
            <CeilingLight position-x={-6} />;
            <CeilingLight position-x={-3} />;
            <CeilingLight />;
            <CeilingLight position-x={3} />;
            <CeilingLight position-x={6} />;
        </group>
    );
};

export default Lights;
