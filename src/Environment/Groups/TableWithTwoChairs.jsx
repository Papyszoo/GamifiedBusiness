import React from "react";
import Table from "../Models/Environment/Table";
import { Chair } from "../Models/Environment/Chair";
import CeilingLight from "../Models/Environment/CeilingLight";

const TableWithTwoChairs = (props) => {
    return (
        <group {...props}>
            <group scale={2.5} position-y={-4}>
                <Table scale={0.9} />
                <Chair position={[0, 0, -0.85]} />
                <Chair position={[0, 0, 0.85]} rotation-y={Math.PI} />
            </group>
            <CeilingLight position-y={2} />
        </group>
    );
};

export default TableWithTwoChairs;
