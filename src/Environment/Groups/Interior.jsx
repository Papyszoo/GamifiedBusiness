import React from "react";
import Counter from "./Counter";
import TableWithTwoChairs from "./TableWithTwoChairs";
import TableWithFourChairs from "./TableWithFourChairs";

const Interior = (props) => {
    return (
        <group {...props}>
            <Counter position={[-6, 0, 8]} />
            <TableWithTwoChairs position={[-11, 0, 8]} />
            <TableWithTwoChairs position={[11, 0, 8]} />
            <TableWithFourChairs position={[5, 0, 1]} />
            <TableWithFourChairs position={[-8, 0, -1]} />
        </group>
    );
};

export default Interior;
