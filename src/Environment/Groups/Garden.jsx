import React from "react";
import CouchesWithTable from "./CouchesWithTable";
import PathStraight from "../Models/Environment/PathStraight";
import PathWithBushes from "./PathWithBushes";

const Garden = (props) => {
    return (
        <group {...props}>
            <group position-z={-25}>
                <CouchesWithTable
                    position={[20, 0, 0]}
                    rotation-y={Math.PI / 2}
                />
                <CouchesWithTable
                    position={[-20, 0, 0]}
                    rotation-y={Math.PI / 2}
                />
                <group position-z={-6}>
                    <PathWithBushes />
                    <PathWithBushes position-z={7.85} />
                    <PathWithBushes position-z={15.7} />
                </group>
            </group>
        </group>
    );
};

export default Garden;
