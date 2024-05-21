import React from "react";
import PathStraight from "../Models/Environment/PathStraight";
import SmallBush from "../Models/Environment/SmallBush";
import LampSquareFloor from "../Models/Environment/LampSquareFloor";

const PathWithBushes = (props) => {
    return (
        <group {...props}>
            <PathStraight />
            <group position-z={0}>
                <LampSquareFloor position={[-3, -5, 0]} />
                <LampSquareFloor position={[3, -5, 0]} />
            </group>
            {/* <group position-z={-1}>
                <SmallBush position-x={-3} />
                <SmallBush position-x={3} />
            </group> */}
            <group position-z={-3.92}>
                <SmallBush position-x={-3} />
                <SmallBush position-x={3} />
            </group>
        </group>
    );
};

export default PathWithBushes;
