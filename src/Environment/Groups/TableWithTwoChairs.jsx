import React from "react";
import TableWithTablecloth from "../Models/Environment/Interior/TableWithTablecloth";
import { Chair } from "../Models/Environment/Interior/Chair";
import CeilingLight from "../Models/Environment/Lights/CeilingLight";

const TableWithTwoChairs = (props) => {
    return (
        <group {...props}>
            <group scale={2.5}>
                <TableWithTablecloth scale={0.9} />
                <Chair position={[0, 0, -0.85]} />
                <Chair position={[0, 0, 0.85]} rotation-y={Math.PI} />
            </group>
            <CeilingLight position-y={7} />
        </group>
    );
};

export default TableWithTwoChairs;
