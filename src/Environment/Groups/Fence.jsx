import React from "react";
import FenceCenter from "../Models/Environment/Fence/FenceCenter";
import FenceCorner from "../Models/Environment/Fence/FenceCorner";
import FenceEnd from "../Models/Environment/Fence/FenceEnd";

const Fence = () => {
    <group>
        <FenceCenter />
        <FenceCorner position-x={5} />
        <FenceEnd />
    </group>;
};

export default Fence;
