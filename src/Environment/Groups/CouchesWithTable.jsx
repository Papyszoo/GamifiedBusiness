import React from "react";
import CouchSmall from "../Models/Environment/Garden/CouchSmall";
import CouchMedium from "../Models/Environment/Garden/CouchMedium";
import LampSquareFloor from "../Models/Environment/Lights/LampSquareFloor";
import GardenTable from "../Models/Environment/Garden/GardenTable";
import Gazebo from "../Models/Environment/Garden/Gazebo";

const CouchesWithTable = (props) => {
    return (
        <group {...props}>
            <CouchSmall position-x={-4} rotation-y={Math.PI / 2} />
            <CouchSmall position-x={4} rotation-y={-Math.PI / 2} />
            <CouchMedium position-z={-3} />
            <CouchMedium position-z={3} rotation-y={Math.PI} />
            <LampSquareFloor position={[-3.5, 0, 3]} />
            <LampSquareFloor position={[3.5, 0, 3]} />
            <LampSquareFloor position={[-3.5, 0, -3.3]} />
            <LampSquareFloor position={[3.5, 0, -3.3]} />
            <GardenTable />
            <Gazebo />
        </group>
    );
};

export default CouchesWithTable;
