import React from "react";
import LampSquareFloor from "../Models/Environment/LampSquareFloor";
import SmallBush from "../Models/Environment/SmallBush";
import PathStraight from "../Models/Environment/PathStraight";

const PathWithBushes = () => {
    return (
        <group position-z={-6}>
            <group position-z={0}>
                <LampSquareFloor position-x={-3} />
                <LampSquareFloor position-x={3} />
            </group>
            <group position-z={-3.92}>
                <SmallBush position-x={-3} />
                <SmallBush position-x={3} />
            </group>
            <group>
                <PathStraight />
            </group>
            <group position-z={7.85}>
                <group position-z={0}>
                    <LampSquareFloor position-x={-3} />
                    <LampSquareFloor position-x={3} />
                </group>
                <group position-z={-3.92}>
                    <SmallBush position-x={-3} />
                    <SmallBush position-x={3} />
                </group>
                <PathStraight />
            </group>
            <group position-z={15.7}>
                <group position-z={3.92}>
                    <SmallBush position-x={-3} />
                    <SmallBush position-x={3} />
                </group>
                <group position-z={0}>
                    <LampSquareFloor position-x={-3} />
                    <LampSquareFloor position-x={3} />
                </group>
                <group position-z={-3.92}>
                    <SmallBush position-x={-3} />
                    <SmallBush position-x={3} />
                </group>
                <PathStraight />
            </group>
        </group>
    );
};

export default PathWithBushes;
