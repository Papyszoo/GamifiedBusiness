import React from "react";
import TableWithTablecloth from "../Models/Environment/Interior/TableWithTablecloth";
import { Chair } from "../Models/Environment/Interior/Chair";
import CeilingLight from "../Models/Environment/Lights/CeilingLight";

const TableWithFourChairs = (props) => {
    return (
        <group {...props}>
            <group scale={2.5}>
                <TableWithTablecloth scale={0.9} />
                <Chair position={[0, 0, -0.85]} />
                <Chair position={[0, 0, 0.85]} rotation-y={Math.PI} />
                <Chair position={[-0.85, 0, 0]} rotation-y={Math.PI / 2} />
                <Chair position={[0.85, 0, 0]} rotation-y={-Math.PI / 2} />
            </group>
            <CeilingLight position-y={7} />
        </group>
    );
};

export default TableWithFourChairs;
